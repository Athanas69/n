import { describe, expect, it } from "vitest";
import { CITY_NAMES } from "./data";
import { CITY_COORDS } from "./coords";
import { filterAndSortFlights, generateFlights, getOriginNames } from "./flights";

const base = { origin: "Paris", cabin: "Économique", travelers: 2, tripType: "round" as const, depart: "2026-11-01" };

describe("generateFlights", () => {
  it("is deterministic: the same search always returns the same offers", () => {
    expect(generateFlights({ ...base, destCity: "New York" })).toEqual(generateFlights({ ...base, destCity: "New York" }));
  });

  it("returns several offers from several different airlines", () => {
    const offers = generateFlights({ ...base, destCity: "New York" });
    expect(offers.length).toBeGreaterThanOrEqual(3);
    expect(new Set(offers.map((o) => o.airline)).size).toBe(offers.length);
  });

  it("returns nothing for a destination without coordinates", () => {
    expect(generateFlights({ ...base, destCity: "Atlantis" })).toEqual([]);
  });

  it("always offers a nonstop flight where nonstops are realistic (regression: 'direct only' dead-ended on Paris–New York)", () => {
    const missing: string[] = [];
    for (const origin of getOriginNames()) {
      for (const dest of CITY_NAMES) {
        const o = CITY_COORDS[origin === "Bruxelles" ? "Brussels" : origin === "Genève" ? "Geneva" : origin === "Montréal" ? "Montreal" : origin];
        const d = CITY_COORDS[dest];
        if (!d || !o) continue;
        const km = haversine(o, d);
        if (km < 300 || km >= 10500) continue;
        const offers = generateFlights({ ...base, origin, destCity: dest });
        if (!offers.some((f) => f.stops === 0)) missing.push(`${origin}→${dest}`);
      }
    }
    expect(missing).toEqual([]);
  });

  it("produces sane values for every destination from Paris", () => {
    for (const dest of CITY_NAMES) {
      if (dest === "Paris" || !CITY_COORDS[dest]) continue;
      for (const f of generateFlights({ ...base, destCity: dest })) {
        expect(f.pricePerPerson, dest).toBeGreaterThan(0);
        expect(f.totalPrice, dest).toBe(f.pricePerPerson * base.travelers);
        expect(f.durationMinutes, dest).toBeGreaterThan(30);
        expect(f.departTime, dest).toMatch(/^\d{2}:\d{2}$/);
        expect(f.arriveTime, dest).toMatch(/^\d{2}:\d{2}$/);
        expect([0, 1, 2]).toContain(f.stops);
        expect(Boolean(f.stopCity), dest).toBe(f.stops > 0);
      }
    }
  });

  it("prices a one-way ticket below the round trip and business above economy", () => {
    const min = (xs: { pricePerPerson: number }[]) => Math.min(...xs.map((x) => x.pricePerPerson));
    const round = min(generateFlights({ ...base, destCity: "Tokyo" }));
    const oneway = min(generateFlights({ ...base, destCity: "Tokyo", tripType: "oneway" }));
    const biz = min(generateFlights({ ...base, destCity: "Tokyo", cabin: "Affaires" }));
    expect(oneway).toBeLessThan(round);
    expect(biz).toBeGreaterThan(round);
  });
});

describe("filterAndSortFlights", () => {
  const offers = generateFlights({ ...base, destCity: "Tokyo" });

  it("keeps only nonstop flights when directOnly is set", () => {
    const out = filterAndSortFlights(offers, { directOnly: true, baggageOnly: false }, "price");
    expect(out.length).toBeGreaterThan(0);
    expect(out.every((o) => o.stops === 0)).toBe(true);
  });

  it("keeps only flights with baggage when baggageOnly is set", () => {
    const out = filterAndSortFlights(offers, { directOnly: false, baggageOnly: true }, "price");
    expect(out.every((o) => o.baggageIncluded)).toBe(true);
  });

  it("sorts by price or duration, ascending, without mutating the input", () => {
    const snapshot = [...offers];
    const byPrice = filterAndSortFlights(offers, { directOnly: false, baggageOnly: false }, "price");
    const byTime = filterAndSortFlights(offers, { directOnly: false, baggageOnly: false }, "duration");
    expect(byPrice.map((o) => o.pricePerPerson)).toEqual([...byPrice.map((o) => o.pricePerPerson)].sort((a, b) => a - b));
    expect(byTime.map((o) => o.durationMinutes)).toEqual([...byTime.map((o) => o.durationMinutes)].sort((a, b) => a - b));
    expect(offers).toEqual(snapshot);
  });
});

function haversine(a: { lat: number; lon: number }, b: { lat: number; lon: number }) {
  const rad = (x: number) => (x * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLon = rad(b.lon - a.lon);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}
