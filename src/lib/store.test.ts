import { describe, expect, it } from "vitest";
import { DEFAULT_PROFILE, sanitizeFavorites, sanitizeProfile, sanitizeTrips } from "./store";

describe("sanitizeFavorites", () => {
  it("rejects non-arrays", () => {
    expect(sanitizeFavorites(null)).toBeNull();
    expect(sanitizeFavorites({})).toBeNull();
    expect(sanitizeFavorites("x")).toBeNull();
  });

  it("drops junk entries and keeps valid ones", () => {
    const out = sanitizeFavorites([1, "x", null, { id: 1 }, { id: "a", type: "boat", city: "Paris", name: "P" }, { id: "f", type: "city", city: "Paris", name: "Paris", savedAt: 5 }]);
    expect(out).toEqual([{ id: "f", type: "city", city: "Paris", name: "Paris", image: undefined, meta: undefined, savedAt: 5 }]);
  });

  it("never yields an empty-string image (it would crash next/image)", () => {
    const out = sanitizeFavorites([{ id: "f", type: "hotel", city: "Paris", name: "H", image: "" }]);
    expect(out?.[0].image).toBeUndefined();
  });
});

describe("sanitizeTrips", () => {
  it("rejects non-arrays and drops entries without id/title/city", () => {
    expect(sanitizeTrips("nope")).toBeNull();
    expect(sanitizeTrips([null, 3, { id: "a" }, { id: "a", title: "T" }])).toEqual([]);
  });

  it("repairs malformed optional fields instead of persisting them", () => {
    const [t] = sanitizeTrips([
      { id: "a", title: "T", city: "Paris", days: "oops", packing: [{ id: "p", text: "t" }, { text: "no id" }, 5], travelers: "3", budgetPerPerson: -10, audience: "Aliens" },
    ])!;
    expect(t.days).toEqual([]);
    expect(t.packing).toEqual([{ id: "p", text: "t", done: false }]);
    expect(t.travelers).toBe(1);
    expect(t.budgetPerPerson).toBe(0);
    expect(t.audience).toBeUndefined();
  });

  it("preserves a well-formed trip", () => {
    const trip = {
      id: "a", title: "T", city: "Paris", startDate: "2026-11-01", endDate: "2026-11-08", travelers: 2, budgetPerPerson: 900,
      notes: "n", story: "s", days: [{ title: "J1", notes: "x" }], packing: [{ id: "p", text: "t", done: true }], createdAt: 1, audience: "Femmes" as const,
    };
    expect(sanitizeTrips([trip])).toEqual([trip]);
  });
});

describe("sanitizeProfile", () => {
  it("rejects non-objects", () => {
    expect(sanitizeProfile(null)).toBeNull();
    expect(sanitizeProfile([])).toBeNull();
  });

  it("falls back to safe defaults for wrong types", () => {
    expect(sanitizeProfile({ name: 42, interests: "x" })).toEqual({ name: DEFAULT_PROFILE.name, bio: "", interests: [] });
    expect(sanitizeProfile({ name: "Lea", bio: "b", interests: ["a", 1, "b"] })).toEqual({ name: "Lea", bio: "b", interests: ["a", "b"] });
  });
});
