import { CITY_NAMES } from "./data";

export type CityResource = { label: string; description: string; url: string };

function wikivoyageUrl(city: string) {
  const page = city.replace(/\s+/g, "_");
  return `https://en.wikivoyage.org/wiki/${encodeURIComponent(page)}`;
}

// Curated, hand-verified links to real, actively-maintained outside sources —
// for food/culture coverage that changes faster than this site can keep up
// with editorially. Wikivoyage covers every city; these add flagship-city
// depth where a genuinely good, currently-live source exists.
const EXTRA: Record<string, CityResource[]> = {
  Paris: [
    {
      label: "Paris by Mouth",
      description: "Guide culinaire indépendant, mis à jour en continu sur les meilleures tables et nouveautés.",
      url: "https://www.parisbymouth.com",
    },
  ],
  "New York": [
    {
      label: "Eater New York",
      description: "Actualité restaurants et ouvertures, tenue à jour en continu.",
      url: "https://ny.eater.com",
    },
  ],
  London: [
    {
      label: "Eater London",
      description: "Actualité restaurants et ouvertures, tenue à jour en continu.",
      url: "https://london.eater.com",
    },
  ],
};

export function getCityResources(city: string): CityResource[] {
  const base: CityResource[] = [
    {
      label: "Wikivoyage",
      description: "Guide collaboratif : quartiers, histoire, gastronomie locale, à jour en continu.",
      url: wikivoyageUrl(city),
    },
  ];
  return [...base, ...(EXTRA[city] ?? [])];
}

export const CITY_RESOURCES: Record<string, CityResource[]> = Object.fromEntries(
  CITY_NAMES.map((name) => [name, getCityResources(name)])
);
