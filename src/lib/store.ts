"use client";

import { useSyncExternalStore, useCallback } from "react";
import { AUDIENCE_OPTIONS, type TripAudience } from "./trips";
import { safeGet, safeSet } from "./safeStorage";

const EVENT = "atlas:store-change";

// Cached so repeated reads return a stable reference (required by
// useSyncExternalStore — a fresh object per call would re-render forever).
const cache = new Map<string, unknown>();

function read<T>(key: string, fallback: T, sanitize?: (raw: unknown) => T | null): T {
  if (cache.has(key)) return cache.get(key) as T;
  if (typeof window === "undefined") return fallback;
  let value = fallback;
  try {
    const raw = safeGet(key);
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      const clean = sanitize ? sanitize(parsed) : (parsed as T);
      if (clean !== null) value = clean;
    }
  } catch {
    // keep fallback
  }
  cache.set(key, value);
  return value;
}

function write<T>(key: string, value: T) {
  cache.set(key, value);
  safeSet(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(EVENT, { detail: key }));
}

export function subscribe(key: string, cb: () => void) {
  function handle(e: Event) {
    const detail = (e as CustomEvent<string>).detail;
    if (detail === key) cb();
  }
  window.addEventListener(EVENT, handle);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, handle);
    window.removeEventListener("storage", cb);
  };
}

// ---- Favorites ----

export type Favorite = {
  id: string;
  type: "city" | "hotel";
  city: string;
  name: string;
  image?: string;
  meta?: string;
  savedAt: number;
};

const FAVORITES_KEY = "atlas:favorites";

export function getFavorites(): Favorite[] {
  return read<Favorite[]>(FAVORITES_KEY, [], sanitizeFavorites);
}

export function isFavorited(id: string): boolean {
  return getFavorites().some((f) => f.id === id);
}

export function toggleFavorite(fav: Omit<Favorite, "savedAt">): boolean {
  const current = getFavorites();
  const exists = current.some((f) => f.id === fav.id);
  const next = exists ? current.filter((f) => f.id !== fav.id) : [...current, { ...fav, savedAt: Date.now() }];
  write(FAVORITES_KEY, next);
  return !exists;
}

// ---- User trips ----

export type ItineraryDay = { title: string; notes: string };
export type PackingItem = { id: string; text: string; done: boolean };

export type UserTrip = {
  id: string;
  title: string;
  city: string;
  startDate: string;
  endDate: string;
  travelers: number;
  budgetPerPerson: number;
  notes: string;
  story: string;
  days: ItineraryDay[];
  packing: PackingItem[];
  createdAt: number;
  // Optional: absent on trips saved before this field existed.
  audience?: TripAudience;
};

const TRIPS_KEY = "atlas:trips";

export function getTrips(): UserTrip[] {
  return read<UserTrip[]>(TRIPS_KEY, [], sanitizeTrips);
}

export function getTripById(id: string): UserTrip | undefined {
  return getTrips().find((t) => t.id === id);
}

export function saveTrip(trip: UserTrip) {
  const current = getTrips();
  const idx = current.findIndex((t) => t.id === trip.id);
  const next = idx >= 0 ? current.map((t, i) => (i === idx ? trip : t)) : [trip, ...current];
  write(TRIPS_KEY, next);
}

export function deleteTrip(id: string) {
  write(
    TRIPS_KEY,
    getTrips().filter((t) => t.id !== id)
  );
}

export function newTripId() {
  return `trip_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function newPackingId() {
  return `pack_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

// ---- Profile ----

export type Profile = {
  name: string;
  bio: string;
  interests: string[];
};

const PROFILE_KEY = "atlas:profile";

export const DEFAULT_PROFILE: Profile = {
  name: "Voyageur Mondo",
  bio: "Ajoutez une bio pour que les autres voyageurs sachent qui vous êtes.",
  interests: [],
};

export function getProfile(): Profile {
  return read<Profile>(PROFILE_KEY, DEFAULT_PROFILE, sanitizeProfile);
}

export function saveProfile(profile: Profile) {
  write(PROFILE_KEY, profile);
}

// ---- React hooks ----

// The server always renders with the empty/default value (localStorage isn't
// available there); getServerSnapshot must return that same static value so
// client hydration matches, rather than eagerly reading real localStorage.
function useWatch<T>(key: string, getter: () => T, serverValue: T): T {
  const subscribeFn = useCallback(
    (cb: () => void) => subscribe(key, cb),
    [key]
  );
  return useSyncExternalStore(subscribeFn, getter, () => serverValue);
}

const EMPTY_FAVORITES: Favorite[] = [];
const EMPTY_TRIPS: UserTrip[] = [];

export function useFavorites(): Favorite[] {
  return useWatch(FAVORITES_KEY, getFavorites, EMPTY_FAVORITES);
}

export function useTrips(): UserTrip[] {
  return useWatch(TRIPS_KEY, getTrips, EMPTY_TRIPS);
}

export function useProfile(): Profile {
  return useWatch(PROFILE_KEY, getProfile, DEFAULT_PROFILE);
}


// ---- Sanitizers ----
// Stored data and imported backups are untrusted: a malformed entry would
// otherwise be persisted and break every page that renders it, with no way
// out short of clearing site data. Unusable entries are dropped, missing
// optional fields get safe defaults.

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);
const str = (v: unknown, d = "") => (typeof v === "string" ? v : d);
const num = (v: unknown, d: number) => (typeof v === "number" && Number.isFinite(v) ? v : d);

export function sanitizeFavorites(raw: unknown): Favorite[] | null {
  if (!Array.isArray(raw)) return null;
  return raw.flatMap((f): Favorite[] => {
    if (!isObj(f) || typeof f.id !== "string" || typeof f.name !== "string" || typeof f.city !== "string") return [];
    if (f.type !== "city" && f.type !== "hotel") return [];
    return [
      {
        id: f.id,
        type: f.type,
        city: f.city,
        name: f.name,
        image: typeof f.image === "string" && f.image ? f.image : undefined,
        meta: typeof f.meta === "string" ? f.meta : undefined,
        savedAt: num(f.savedAt, 0),
      },
    ];
  });
}

export function sanitizeTrips(raw: unknown): UserTrip[] | null {
  if (!Array.isArray(raw)) return null;
  return raw.flatMap((t): UserTrip[] => {
    if (!isObj(t) || typeof t.id !== "string" || typeof t.title !== "string" || typeof t.city !== "string") return [];
    const days = Array.isArray(t.days)
      ? t.days.filter(isObj).map((d) => ({ title: str(d.title), notes: str(d.notes) }))
      : [];
    const packing = Array.isArray(t.packing)
      ? t.packing
          .filter(isObj)
          .filter((p) => typeof p.id === "string")
          .map((p) => ({ id: p.id as string, text: str(p.text), done: p.done === true }))
      : [];
    const audience = AUDIENCE_OPTIONS.find((a) => a === t.audience);
    return [
      {
        id: t.id,
        title: t.title,
        city: t.city,
        startDate: str(t.startDate),
        endDate: str(t.endDate),
        travelers: Math.max(1, num(t.travelers, 1)),
        budgetPerPerson: Math.max(0, num(t.budgetPerPerson, 0)),
        notes: str(t.notes),
        story: str(t.story),
        days,
        packing,
        createdAt: num(t.createdAt, 0),
        audience,
      },
    ];
  });
}

export function sanitizeProfile(raw: unknown): Profile | null {
  if (!isObj(raw)) return null;
  return {
    name: str(raw.name, DEFAULT_PROFILE.name) || DEFAULT_PROFILE.name,
    bio: str(raw.bio),
    interests: Array.isArray(raw.interests) ? raw.interests.filter((i): i is string => typeof i === "string") : [],
  };
}

// ---- Backup (export / import) ----
// Everything lives in this browser's localStorage only — no account, no
// server. Export/import is the honest way to protect against clearing
// site data or switching devices.

export type Backup = {
  version: 1;
  exportedAt: string;
  favorites: Favorite[];
  trips: UserTrip[];
  profile: Profile;
};

export function exportBackup(): Backup {
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    favorites: getFavorites(),
    trips: getTrips(),
    profile: getProfile(),
  };
}

export function importBackup(data: Backup) {
  const favorites = sanitizeFavorites(data.favorites);
  const trips = sanitizeTrips(data.trips);
  const profile = sanitizeProfile(data.profile);
  if (favorites) write(FAVORITES_KEY, favorites);
  if (trips) write(TRIPS_KEY, trips);
  if (profile) write(PROFILE_KEY, profile);
}
