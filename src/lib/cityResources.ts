import { CITY_NAMES } from "./data";

export type CityResource = { label: string; description: string; url: string };

function wikivoyageUrl(city: string) {
  const page = city.replace(/\s+/g, "_");
  return `https://en.wikivoyage.org/wiki/${encodeURIComponent(page)}`;
}

function wikipediaUrl(city: string) {
  const page = city.replace(/\s+/g, "_");
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(page)}`;
}

function googleMapsUrl(city: string, country: string) {
  return `https://www.google.com/maps/place/${encodeURIComponent(`${city}, ${country}`)}`;
}

// Curated, hand-verified links to real, actively-maintained outside sources —
// for food/culture coverage that changes faster than this site can keep up
// with editorially. Every entry below was opened and checked live before
// being added; none are guessed URL patterns.
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
  Tokyo: [
    {
      label: "Tokyo Cheapo",
      description: "Bons plans, food et culture locale, tenu à jour en continu.",
      url: "https://tokyocheapo.com",
    },
  ],
};

export function getCityResources(city: string, country?: string): CityResource[] {
  const base: CityResource[] = [
    {
      label: "Wikivoyage",
      description: "Guide collaboratif : quartiers, histoire, gastronomie locale, à jour en continu.",
      url: wikivoyageUrl(city),
    },
    {
      label: "Wikipedia",
      description: "Histoire, contexte et repères culturels de la ville.",
      url: wikipediaUrl(city),
    },
  ];
  if (country) {
    base.push({
      label: "Google Maps",
      description: "Repérer la ville, les quartiers et les avis sur place.",
      url: googleMapsUrl(city, country),
    });
  }
  return [...base, ...(EXTRA[city] ?? [])];
}

export const CITY_RESOURCES: Record<string, CityResource[]> = Object.fromEntries(
  CITY_NAMES.map((name) => [name, getCityResources(name)])
);
