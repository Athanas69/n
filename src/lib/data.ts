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

export function citySlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
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
