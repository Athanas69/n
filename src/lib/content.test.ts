import { describe, expect, it } from "vitest";
import { CITY_NAMES, CITY_REGIONS, citySlug, cityNameFromSlug, getCity, getHotels } from "./data";
import { CITY_COORDS } from "./coords";
import { articles, getArticleSlugForTitle } from "./articles";
import { EXPERIENCES } from "./experiences";
import { demoTrips } from "./trips";

describe("destinations", () => {
  it("has a unique slug per city that round-trips", () => {
    const slugs = CITY_NAMES.map(citySlug);
    expect(new Set(slugs).size).toBe(CITY_NAMES.length);
    for (const name of CITY_NAMES) expect(cityNameFromSlug(citySlug(name))).toBe(name);
  });

  it.each(CITY_NAMES)("%s has the data every page needs", (name) => {
    const c = getCity(name);
    expect(c.country).toBeTruthy();
    expect(c.intro.length).toBeGreaterThan(20);
    expect(c.hero).toMatch(/^https:\/\/images\.unsplash\.com\//);
    expect(c.currency).toBeTruthy();
    expect(c.neighborhoods.length).toBeGreaterThan(0);
    expect(c.airportRoutes.length, "First 24h needs an airport route").toBeGreaterThan(0);
    expect(c.esim).toBeTruthy();
    expect(CITY_COORDS[name], "missing coordinates").toBeDefined();
    expect(CITY_REGIONS[name], "missing region").toBeDefined();
    const hotels = getHotels(name);
    expect(hotels.length).toBeGreaterThan(0);
    for (const h of hotels) {
      expect(["Budget", "Confort", "Premium"]).toContain(h.tier);
      expect(h.price).toBeGreaterThan(0);
    }
  });
});

describe("guides", () => {
  it("has no duplicate city/slug pair", () => {
    const keys = articles.map((a) => `${a.city}/${a.slug}`);
    expect(keys.filter((k, i) => keys.indexOf(k) !== i)).toEqual([]);
  });

  it("only belongs to known cities or experiences", () => {
    const known = new Set([...CITY_NAMES, ...EXPERIENCES.map((e) => e.name)]);
    expect(articles.filter((a) => !known.has(a.city)).map((a) => a.city)).toEqual([]);
  });

  it("has real, non-empty content", () => {
    for (const a of articles) {
      expect(a.title.length, a.slug).toBeGreaterThan(5);
      expect(a.dek.length, a.slug).toBeGreaterThan(10);
      expect(a.body.length, a.slug).toBeGreaterThan(0);
      for (const b of a.body) expect(b.text.trim().length, a.slug).toBeGreaterThan(40);
    }
  });

  it("gives every city at least one real guide (the city page only shows guides that exist)", () => {
    const empty = CITY_NAMES.filter((name) => !getCity(name).articles.some((title) => getArticleSlugForTitle(name, title)));
    expect(empty).toEqual([]);
  });
});

describe("demo trips", () => {
  it("point to existing cities with unique slugs", () => {
    expect(new Set(demoTrips.map((t) => t.slug)).size).toBe(demoTrips.length);
    for (const t of demoTrips) {
      expect(CITY_NAMES).toContain(t.city);
      expect(["Mixte", "Hommes", "Femmes", "Musulman"]).toContain(t.audience);
    }
  });
});
