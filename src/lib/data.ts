import raw from "@/data/mondo-atlas.json";

export type Neighborhood = [name: string, tags: string, description: string, image: string];
export type AirportRoute = [airport: string, mode: string, description: string];

export type City = {
  country: string;
  hero: string;
  intro: string;
  currency: string;
  best: string;
  airport: string;
  transport: string;
  transitTicket?: string;
  esim: string;
  neighborhoods: Neighborhood[];
  airportRoutes: AirportRoute[];
  articles: string[];
};

export type Hotel = {
  name: string;
  tier: "Budget" | "Confort" | "Premium";
  desc: string;
  neighborhood: string;
  score: number;
  price: number;
  image?: string;
};

export type Trip = {
  title: string;
  dates: string;
  budget: string;
  members: string[];
  route: string[];
  decisions: { q: string; status: string; result: string }[];
};

type Db = {
  cities: Record<string, City>;
  hotels: Record<string, Hotel[]>;
  trip: Trip;
};

const db = raw as unknown as Db;

export const CITY_NAMES = Object.keys(db.cities);
export const DEFAULT_CITY = "Tokyo";

export const CITY_REGIONS: Record<string, string> = {
  Tokyo: "Asie",
  Bangkok: "Asie",
  Istanbul: "Europe",
  Seoul: "Asie",
  Singapore: "Asie",
  "Hong Kong": "Asie",
  Kyoto: "Asie",
  Shanghai: "Asie",
  Mumbai: "Asie",
  Ubud: "Asie",
  Paris: "Europe",
  Rome: "Europe",
  London: "Europe",
  Barcelona: "Europe",
  Amsterdam: "Europe",
  Berlin: "Europe",
  Lisbon: "Europe",
  Vienna: "Europe",
  Prague: "Europe",
  Athens: "Europe",
  Venice: "Europe",
  "New York": "Amériques",
  "Los Angeles": "Amériques",
  "San Francisco": "Amériques",
  "Mexico City": "Amériques",
  "Rio de Janeiro": "Amériques",
  "Buenos Aires": "Amériques",
  Toronto: "Amériques",
  Marrakech: "Afrique & Moyen-Orient",
  Dubai: "Afrique & Moyen-Orient",
  "Cape Town": "Afrique & Moyen-Orient",
  Cairo: "Afrique & Moyen-Orient",
  Doha: "Afrique & Moyen-Orient",
  Nairobi: "Afrique & Moyen-Orient",
  Sydney: "Océanie",
  Chicago: "Amériques",
  Miami: "Amériques",
  Montreal: "Amériques",
  Vancouver: "Amériques",
  Munich: "Europe",
  Dublin: "Europe",
  Budapest: "Europe",
  Stockholm: "Europe",
  "Kuala Lumpur": "Asie",
  Beijing: "Asie",
  Lima: "Amériques",
  Cusco: "Amériques",
  "Bogotá": "Amériques",
  Zanzibar: "Afrique & Moyen-Orient",
  Hanoi: "Asie",
  Osaka: "Asie",
  Busan: "Asie",
  "Xi'an": "Asie",
  "Siem Reap": "Asie",
  "Luang Prabang": "Asie",
  "Chiang Mai": "Asie",
  Yogyakarta: "Asie",
  "Ho Chi Minh City": "Asie",
  Tunis: "Afrique & Moyen-Orient",
  Algiers: "Afrique & Moyen-Orient",
  Amman: "Afrique & Moyen-Orient",
  "Abu Dhabi": "Afrique & Moyen-Orient",
  Jeddah: "Afrique & Moyen-Orient",
  Muscat: "Afrique & Moyen-Orient",
  Manama: "Afrique & Moyen-Orient",
  Kigali: "Afrique & Moyen-Orient",
  "Victoria Falls": "Afrique & Moyen-Orient",
  "Addis Ababa": "Afrique & Moyen-Orient",
  Dakar: "Afrique & Moyen-Orient",
  Mauritius: "Afrique & Moyen-Orient",
};

export function citiesByRegion(): [string, string[]][] {
  const groups: Record<string, string[]> = {};
  for (const name of CITY_NAMES) {
    const region = CITY_REGIONS[name] ?? "Autres";
    (groups[region] ??= []).push(name);
  }
  const order = ["Europe", "Asie", "Amériques", "Afrique & Moyen-Orient", "Océanie", "Autres"];
  return order.filter((r) => groups[r]?.length).map((r) => [r, groups[r]]);
}

export function citySlug(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-");
}

export function cityNameFromSlug(slug: string): string | undefined {
  return CITY_NAMES.find((n) => citySlug(n) === slug);
}

export function getCities() {
  return db.cities;
}

export function getCity(name: string): City {
  return db.cities[name] ?? db.cities[DEFAULT_CITY];
}

export function getHotels(cityName: string): Hotel[] {
  return db.hotels[cityName] ?? db.hotels[DEFAULT_CITY];
}

export function getTrip(): Trip {
  return db.trip;
}
