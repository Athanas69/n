import { CITY_COORDS } from "./coords";
import { CITY_REGIONS } from "./data";

export type FlightOffer = {
  id: string;
  airline: string;
  airlineCode: string;
  stops: number;
  stopCity?: string;
  departTime: string;
  arriveTime: string;
  arriveNextDay: boolean;
  durationLabel: string;
  durationMinutes: number;
  baggageIncluded: boolean;
  pricePerPerson: number;
  totalPrice: number;
};

export type FlightFilters = {
  directOnly: boolean;
  baggageOnly: boolean;
};

export type FlightSort = "price" | "duration";

const ORIGIN_COORDS: Record<string, { lat: number; lon: number }> = {
  Paris: CITY_COORDS.Paris,
  Lyon: CITY_COORDS.Lyon,
  Marseille: CITY_COORDS.Marseille,
  Bruxelles: CITY_COORDS.Brussels,
  Genève: CITY_COORDS.Geneva,
  Montréal: CITY_COORDS.Montreal,
};

const HOME_CARRIER: Record<string, [string, string]> = {
  Paris: ["Air France", "AF"],
  Lyon: ["Air France", "AF"],
  Marseille: ["Air France", "AF"],
  Bruxelles: ["Brussels Airlines", "SN"],
  Genève: ["SWISS", "LX"],
  Montréal: ["Air Canada", "AC"],
};

// [airline, IATA code, isBudget]
const REGION_POOLS: Record<string, Array<[string, string, boolean]>> = {
  Europe: [
    ["easyJet", "U2", true],
    ["Vueling", "VY", true],
    ["Ryanair", "FR", true],
    ["Transavia", "TO", true],
    ["Lufthansa", "LH", false],
    ["KLM", "KL", false],
    ["Iberia", "IB", false],
    ["TAP Portugal", "TP", false],
  ],
  Amériques: [
    ["Delta", "DL", false],
    ["United", "UA", false],
    ["American Airlines", "AA", false],
    ["Air Canada", "AC", false],
    ["Norse Atlantic", "N0", true],
    ["French Bee", "BF", true],
    ["ITA Airways", "AZ", false],
    ["LATAM", "LA", false],
  ],
  Asie: [
    ["Emirates", "EK", false],
    ["Qatar Airways", "QR", false],
    ["Turkish Airlines", "TK", false],
    ["ANA", "NH", false],
    ["Singapore Airlines", "SQ", false],
    ["Cathay Pacific", "CX", false],
    ["Thai Airways", "TG", false],
    ["China Southern", "CZ", false],
  ],
  "Afrique & Moyen-Orient": [
    ["Emirates", "EK", false],
    ["Qatar Airways", "QR", false],
    ["Turkish Airlines", "TK", false],
    ["Royal Air Maroc", "AT", false],
    ["Ethiopian Airlines", "ET", false],
    ["EgyptAir", "MS", false],
    ["Etihad Airways", "EY", false],
    ["Kenya Airways", "KQ", false],
  ],
  Océanie: [
    ["Qantas", "QF", false],
    ["Emirates", "EK", false],
    ["Singapore Airlines", "SQ", false],
    ["Qatar Airways", "QR", false],
    ["Air New Zealand", "NZ", false],
  ],
};

const STOP_CITIES = [
  "Amsterdam", "Francfort", "Istanbul", "Doha", "Dubaï", "Londres",
  "Reykjavik", "Lisbonne", "Madrid", "Addis-Abeba", "Singapour", "Helsinki",
];

function haversineKm(a: { lat: number; lon: number }, b: { lat: number; lon: number }) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLon = ((b.lon - a.lon) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

// Deterministic small PRNG so the same route/date always renders the same
// offers (no layout shift on re-render), seeded from a string key.
function makeRng(seed: string) {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function rng() {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

function formatDuration(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h${m.toString().padStart(2, "0")}`;
}

function formatClock(totalMinutesFromMidnight: number) {
  const m = ((totalMinutesFromMidnight % 1440) + 1440) % 1440;
  const h = Math.floor(m / 60);
  const min = m % 60;
  return `${h.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`;
}

const CABIN_MULT: Record<string, number> = { Économique: 1, "Premium éco": 1.65, Affaires: 2.9 };

export function getOriginNames() {
  return Object.keys(ORIGIN_COORDS);
}

export function generateFlights(params: {
  origin: string;
  destCity: string;
  cabin: string;
  travelers: number;
  tripType: "round" | "oneway";
  depart: string;
}): FlightOffer[] {
  const { origin, destCity, cabin, travelers, tripType, depart } = params;
  const originCoords = ORIGIN_COORDS[origin] ?? ORIGIN_COORDS.Paris;
  const destCoords = CITY_COORDS[destCity];
  if (!destCoords) return [];

  const distanceKm = haversineKm(originCoords, destCoords);
  const region = CITY_REGIONS[destCity] ?? "Europe";
  const pool = REGION_POOLS[region] ?? REGION_POOLS.Europe;
  const home = HOME_CARRIER[origin] ?? HOME_CARRIER.Paris;

  const rng = makeRng(`${origin}|${destCity}|${depart}|${cabin}`);
  const shuffled = [...pool].sort(() => rng() - 0.5);
  const homeEntry: [string, string, boolean] = [home[0], home[1], false];
  const carriers: Array<[string, string, boolean]> = [homeEntry, ...shuffled].filter(
    (c, i, arr) => arr.findIndex((x) => x[0] === c[0]) === i
  );
  const picked = carriers.slice(0, Math.min(8, carriers.length));

  const cabinMult = CABIN_MULT[cabin] ?? 1;
  const tripMult = tripType === "oneway" ? 0.58 : 1;
  const longHaul = distanceKm > 5000;
  const midHaul = distanceKm > 1800 && distanceKm <= 5000;
  const perKm = longHaul ? 0.078 : midHaul ? 0.095 : 0.13;
  const basePrice = Math.max(59, distanceKm * perKm);

  const tzOffsetHours = Math.round((destCoords.lon - originCoords.lon) / 15);

  // Realistic nonstop range for wide-body aircraft (covers e.g. Paris–Tokyo,
  // Paris–Bangkok). Beyond that (Europe–Australia/South Pacific), nonstop
  // commercial routes are rare to nonexistent.
  const withinNonstopRange = distanceKm < 10500;
  let anyDirectSoFar = false;

  const offers: FlightOffer[] = picked.map(([airline, code, isBudget], i) => {
    // Stops: short routes are mostly direct; long-haul mixes direct/1-stop/2-stop.
    let stops: number;
    if (!longHaul && !midHaul) stops = rng() < 0.75 ? 0 : 1;
    else if (midHaul) stops = rng() < 0.45 ? 0 : rng() < 0.85 ? 1 : 2;
    else stops = withinNonstopRange && rng() < 0.4 ? 0 : rng() < 0.75 ? 1 : 2;

    // Guarantee at least one nonstop option on routes where that's realistic —
    // otherwise "direct flights only" can dead-end on a route like Paris–New
    // York, where nonstops are in fact the norm, not the exception.
    const isLast = i === picked.length - 1;
    if (withinNonstopRange && !anyDirectSoFar && isLast) stops = 0;
    if (stops === 0) anyDirectSoFar = true;

    const detourFactor = stops === 0 ? 1 : stops === 1 ? 1.18 : 1.32;
    const flightMinutes = Math.round((distanceKm * detourFactor) / 800 * 60 + 55);
    const layoverMinutes = stops === 0 ? 0 : stops === 1 ? 85 + Math.round(rng() * 120) : 2 * (85 + Math.round(rng() * 110));
    const totalMinutes = flightMinutes + layoverMinutes;

    const departMinutes = 300 + Math.round(rng() * 1080); // 05:00–23:00
    const arriveMinutesRaw = departMinutes + totalMinutes + tzOffsetHours * 60;
    const arriveNextDay = arriveMinutesRaw >= 1440 || arriveMinutesRaw < 0;

    const directPremium = stops === 0 ? 1.28 : stops === 1 ? 1.05 : 0.92;
    const budgetDiscount = isBudget ? 0.72 : 1;
    const jitter = 0.9 + rng() * 0.22;
    const pricePerPerson = Math.round(
      basePrice * directPremium * budgetDiscount * cabinMult * tripMult * jitter
    );

    const baggageIncluded = cabin !== "Économique" ? true : isBudget ? rng() < 0.25 : rng() < 0.85;

    return {
      id: `${code}-${i}`,
      airline,
      airlineCode: code,
      stops,
      stopCity: stops > 0 ? STOP_CITIES[Math.floor(rng() * STOP_CITIES.length)] : undefined,
      departTime: formatClock(departMinutes),
      arriveTime: formatClock(arriveMinutesRaw),
      arriveNextDay,
      durationLabel: formatDuration(totalMinutes),
      durationMinutes: totalMinutes,
      baggageIncluded,
      pricePerPerson,
      totalPrice: pricePerPerson * travelers,
    };
  });

  return offers;
}

export function filterAndSortFlights(offers: FlightOffer[], filters: FlightFilters, sort: FlightSort): FlightOffer[] {
  const filtered = offers.filter((o) => {
    if (filters.directOnly && o.stops > 0) return false;
    if (filters.baggageOnly && !o.baggageIncluded) return false;
    return true;
  });
  return [...filtered].sort((a, b) =>
    sort === "price" ? a.pricePerPerson - b.pricePerPerson : a.durationMinutes - b.durationMinutes
  );
}
