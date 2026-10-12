import { describe, expect, it } from "vitest";
import { CITY_NAMES, CITY_REGIONS, cityIn, cityLabel, cityMatches, cityOf, citySlug, cityNameFromSlug, getCity, getHotels, normalizeSearch } from "./data";
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
    expect(c.neighborhoods.length).toBeGreaterThanOrEqual(4);
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

  it("has a written guide behind every guide title listed on a city page", () => {
    const missing: string[] = [];
    for (const name of CITY_NAMES) {
      for (const title of getCity(name).articles) {
        if (!getArticleSlugForTitle(name, title)) missing.push(`${name}: ${title}`);
      }
    }
    expect(missing).toEqual([]);
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

describe("French city names", () => {
  it("uses the French name and the right prepositions", () => {
    expect(cityLabel("London")).toBe("Londres");
    expect(cityLabel("Tokyo")).toBe("Tokyo");
    expect(cityIn("London")).toBe("à Londres");
    expect(cityIn("Cape Town")).toBe("au Cap");
    expect(cityIn("Cairo")).toBe("au Caire");
    expect(cityOf("Cape Town")).toBe("du Cap");
    expect(cityOf("Edinburgh")).toBe("d’Édimbourg");
    expect(cityOf("Paris")).toBe("de Paris");
    expect(cityOf("Hong Kong")).toBe("de Hong Kong");
    expect(cityOf("Istanbul")).toBe("d’Istanbul");
  });

  it("finds a city by its French name, English name or country, ignoring accents", () => {
    for (const q of ["londres", "london", "royaume"]) expect(cityMatches("London", "Royaume-Uni", normalizeSearch(q)), q).toBe(true);
    expect(cityMatches("Seoul", "Corée du Sud", normalizeSearch("seoul"))).toBe(true);
    expect(cityMatches("Seoul", "Corée du Sud", normalizeSearch("séoul"))).toBe(true);
    expect(cityMatches("London", "Royaume-Uni", normalizeSearch("paris"))).toBe(false);
  });

  it("never shows an English name inside a guide title once a French one exists", () => {
    const bad: string[] = [];
    for (const name of CITY_NAMES) {
      const label = cityLabel(name);
      if (label === name) continue;
      const re = new RegExp(`(^|[^\\p{L}])${name}([^\\p{L}]|$)`, "u");
      for (const title of getCity(name).articles) if (re.test(title)) bad.push(`${name}: ${title}`);
    }
    expect(bad).toEqual([]);
  });
});
