export type DemoTrip = {
  slug: string;
  title: string;
  route: string;
  dates: string;
  duration: string;
  budget: string;
  city: string;
  members: string[];
  weather: { temp: string; condition: string };
  currency: { code: string; rate: string };
  visa: string;
};

export const demoTrips: DemoTrip[] = [
  {
    slug: "japon-en-octobre",
    title: "Japon en octobre",
    route: "Tokyo → Kyoto → Osaka",
    dates: "10–24 oct.",
    duration: "14 jours",
    budget: "1 850 €",
    city: "Tokyo",
    members: ["Sarah", "Amine", "Clara"],
    weather: { temp: "19°C", condition: "Ensoleillé, quelques averses en fin de mois" },
    currency: { code: "JPY", rate: "1 € ≈ 161 JPY" },
    visa: "Exemption de visa jusqu’à 90 jours pour les citoyens UE / CH / CA.",
  },
  {
    slug: "bali-entre-amis",
    title: "Bali entre amis",
    route: "Ubud → Canggu → Lombok",
    dates: "3–17 nov.",
    duration: "14 jours",
    budget: "1 420 €",
    city: "Bangkok",
    members: ["Sarah", "Amine", "Clara"],
    weather: { temp: "28°C", condition: "Chaud et humide, saison des pluies" },
    currency: { code: "IDR", rate: "1 € ≈ 17 200 IDR" },
    visa: "Visa à l’arrivée (35 USD) valable 30 jours, prolongeable une fois.",
  },
  {
    slug: "roadtrip-maroc",
    title: "Roadtrip Maroc",
    route: "Marrakech → Atlas → Ouarzazate",
    dates: "14–21 sept.",
    duration: "7 jours",
    budget: "780 €",
    city: "Marrakech",
    members: ["Sarah", "Amine", "Clara"],
    weather: { temp: "26°C", condition: "Sec et ensoleillé, nuits fraîches en montagne" },
    currency: { code: "MAD", rate: "1 € ≈ 10.8 MAD" },
    visa: "Exemption de visa jusqu’à 90 jours pour les citoyens UE / CH / CA.",
  },
];

export function getTripBySlug(slug: string) {
  return demoTrips.find((t) => t.slug === slug);
}
