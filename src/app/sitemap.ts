import type { MetadataRoute } from "next";
import { CITY_NAMES, citySlug } from "@/lib/data";
import { articles } from "@/lib/articles";
import { EXPERIENCES } from "@/lib/experiences";
import { demoTrips } from "@/lib/trips";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/atlas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/atlas/destinations`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/atlas/experiences`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/atlas/hotels`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/atlas/flights`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/mondo`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/mondo/community`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/mondo/create`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/mondo/trip-room`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];

  const cityRoutes: MetadataRoute.Sitemap = CITY_NAMES.map((name) => ({
    url: `${SITE_URL}/atlas/${citySlug(name)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const guideRoutes: MetadataRoute.Sitemap = articles
    .filter((a) => CITY_NAMES.includes(a.city))
    .map((a) => ({
      url: `${SITE_URL}/atlas/${citySlug(a.city)}/guides/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

  const experienceRoutes: MetadataRoute.Sitemap = EXPERIENCES.map((e) => ({
    url: `${SITE_URL}/atlas/experiences/${e.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const experienceGuideRoutes: MetadataRoute.Sitemap = articles
    .filter((a) => EXPERIENCES.some((e) => e.name === a.city))
    .map((a) => {
      const exp = EXPERIENCES.find((e) => e.name === a.city)!;
      return {
        url: `${SITE_URL}/atlas/experiences/${exp.slug}/guides/${a.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.4,
      };
    });

  const tripRoutes: MetadataRoute.Sitemap = demoTrips.map((t) => ({
    url: `${SITE_URL}/mondo/trips/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  return [
    ...staticRoutes,
    ...cityRoutes,
    ...guideRoutes,
    ...experienceRoutes,
    ...experienceGuideRoutes,
    ...tripRoutes,
  ];
}
