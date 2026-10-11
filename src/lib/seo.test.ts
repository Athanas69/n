import { describe, expect, it } from "vitest";
import sitemap from "../app/sitemap";
import { pageOG, SITE_URL } from "./site";
import { CITY_NAMES, citySlug } from "./data";
import { articles } from "./articles";
import { EXPERIENCES } from "./experiences";
import { demoTrips } from "./trips";

describe("sitemap", () => {
  const entries = sitemap();
  const urls = entries.map((e) => e.url);

  it("contains no duplicate URLs", () => {
    expect(urls.filter((u, i) => urls.indexOf(u) !== i)).toEqual([]);
  });

  it("uses absolute URLs on the configured site origin, without query strings or fragments", () => {
    for (const u of urls) {
      expect(u.startsWith(`${SITE_URL}/`), u).toBe(true);
      expect(u, u).not.toMatch(/[?#]/);
    }
  });

  it("lists every city, guide, experience and demo trip", () => {
    for (const name of CITY_NAMES) expect(urls).toContain(`${SITE_URL}/atlas/${citySlug(name)}`);
    for (const e of EXPERIENCES) expect(urls).toContain(`${SITE_URL}/atlas/experiences/${e.slug}`);
    for (const t of demoTrips) expect(urls).toContain(`${SITE_URL}/mondo/trips/${t.slug}`);
    const cityGuides = articles.filter((a) => CITY_NAMES.includes(a.city));
    for (const a of cityGuides) expect(urls).toContain(`${SITE_URL}/atlas/${citySlug(a.city)}/guides/${a.slug}`);
  });

  it("includes the legal pages and keeps private pages out", () => {
    for (const p of ["/mentions-legales", "/confidentialite", "/cgu"]) expect(urls).toContain(`${SITE_URL}${p}`);
    for (const p of ["/profile", "/favorites", "/mondo/trips/mine"]) expect(urls.some((u) => u.includes(p))).toBe(false);
  });
});

describe("pageOG", () => {
  it("mirrors title and description into openGraph and twitter (Next does not do this by itself)", () => {
    const m = pageOG("T", "D");
    expect(m.openGraph).toEqual({ title: "T", description: "D" });
    expect(m.twitter).toEqual({ title: "T", description: "D" });
  });

  it("only sets a canonical when given a path", () => {
    expect("alternates" in pageOG("T", "D")).toBe(false);
    expect(pageOG("T", "D", "/cgu")).toMatchObject({ alternates: { canonical: "/cgu" } });
  });
});
