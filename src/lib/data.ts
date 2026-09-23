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
  Madrid: "Europe",
  Milan: "Europe",
  Florence: "Europe",
  Naples: "Europe",
  Seville: "Europe",
  Porto: "Europe",
  Copenhagen: "Europe",
  Helsinki: "Europe",
  Oslo: "Europe",
  Warsaw: "Europe",
  Krakow: "Europe",
  Zurich: "Europe",
  Geneva: "Europe",
  Brussels: "Europe",
  Edinburgh: "Europe",
  Reykjavik: "Europe",
  Santorini: "Europe",
  Dubrovnik: "Europe",
  Ljubljana: "Europe",
  Nice: "Europe",
  Lyon: "Europe",
  Marseille: "Europe",
  Hamburg: "Europe",
  Valencia: "Europe",
  "Washington DC": "Amériques",
  Boston: "Amériques",
  "Las Vegas": "Amériques",
  Seattle: "Amériques",
  "New Orleans": "Amériques",
  Honolulu: "Amériques",
  "Cancún": "Amériques",
  Tulum: "Amériques",
  Oaxaca: "Amériques",
  Havana: "Amériques",
  "Punta Cana": "Amériques",
  "San Juan": "Amériques",
  Quito: "Amériques",
  "Santiago de Chile": "Amériques",
  Montevideo: "Amériques",
  "São Paulo": "Amériques",
  Cartagena: "Amériques",
  "Quebec City": "Amériques",
  Delhi: "Asie",
  Agra: "Asie",
  Jaipur: "Asie",
  Goa: "Asie",
  Colombo: "Asie",
  Kathmandu: "Asie",
  Male: "Asie",
  Phuket: "Asie",
  "Koh Samui": "Asie",
  "Phnom Penh": "Asie",
  Yangon: "Asie",
  Taipei: "Asie",
  Guilin: "Asie",
  Chengdu: "Asie",
  Sapporo: "Asie",
  Nara: "Asie",
  Hiroshima: "Asie",
  Jeju: "Asie",
  Macau: "Asie",
  "Da Nang": "Asie",
  "Tel Aviv": "Afrique & Moyen-Orient",
  Jerusalem: "Afrique & Moyen-Orient",
  Beirut: "Afrique & Moyen-Orient",
  Riyadh: "Afrique & Moyen-Orient",
  Casablanca: "Afrique & Moyen-Orient",
  Fes: "Afrique & Moyen-Orient",
  Johannesburg: "Afrique & Moyen-Orient",
  Accra: "Afrique & Moyen-Orient",
  Luxor: "Afrique & Moyen-Orient",
  "Sharm El Sheikh": "Afrique & Moyen-Orient",
  Seychelles: "Afrique & Moyen-Orient",
  Windhoek: "Afrique & Moyen-Orient",
  Essaouira: "Afrique & Moyen-Orient",
  "Kuwait City": "Afrique & Moyen-Orient",
  Melbourne: "Océanie",
  Auckland: "Océanie",
  Queenstown: "Océanie",
  Fiji: "Océanie",
  "Bora Bora": "Océanie",
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
