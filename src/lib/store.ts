"use client";

import { useSyncExternalStore, useCallback } from "react";

const EVENT = "atlas:store-change";

// Cached so repeated reads return a stable reference (required by
// useSyncExternalStore — a fresh object per call would re-render forever).
const cache = new Map<string, unknown>();

function read<T>(key: string, fallback: T): T {
  if (cache.has(key)) return cache.get(key) as T;
  if (typeof window === "undefined") return fallback;
  let value = fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw) value = JSON.parse(raw) as T;
  } catch {
    // keep fallback
  }
  cache.set(key, value);
  return value;
}

function write<T>(key: string, value: T) {
  cache.set(key, value);
  window.localStorage.setItem(key, JSON.stringify(value));
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
  return read<Favorite[]>(FAVORITES_KEY, []);
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
};

const TRIPS_KEY = "atlas:trips";

export function getTrips(): UserTrip[] {
  return read<UserTrip[]>(TRIPS_KEY, []);
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
  return read<Profile>(PROFILE_KEY, DEFAULT_PROFILE);
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
  if (Array.isArray(data.favorites)) write(FAVORITES_KEY, data.favorites);
  if (Array.isArray(data.trips)) write(TRIPS_KEY, data.trips);
  if (data.profile) write(PROFILE_KEY, data.profile);
}
