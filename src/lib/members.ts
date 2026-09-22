export type Member = {
  name: string;
  initials: string;
  location: string;
  bio: string;
  interests: string[];
  trips: number;
  rating: number;
  reviews: number;
};

export const members: Member[] = [
  {
    name: "Sarah Aymard",
    initials: "SA",
    location: "Lyon, France",
    bio: "Toujours partante pour un vol de dernière minute. Food, culture, marche.",
    interests: ["Culture", "Gastronomie", "Rando"],
    trips: 14,
    rating: 4.9,
    reviews: 11,
  },
  {
    name: "Amine Meziane",
    initials: "AM",
    location: "Marseille, France",
    bio: "Organisateur né : itinéraires détaillés, budget millimétré, ambiance garantie.",
    interests: ["Roadtrip", "Nightlife", "Photo"],
    trips: 21,
    rating: 5.0,
    reviews: 18,
  },
  {
    name: "Clara Lefebvre",
    initials: "CL",
    location: "Bordeaux, France",
    bio: "Plutôt rythme tranquille, cafés et musées. Toujours partante pour découvrir un nouveau quartier.",
    interests: ["Culture", "Détente", "Nature"],
    trips: 8,
    rating: 4.8,
    reviews: 7,
  },
  {
    name: "Lina Kader",
    initials: "LK",
    location: "Paris, France",
    bio: "Nouvelle sur Mondo mais déjà accro. Cherche un groupe pour le Japon en octobre.",
    interests: ["Culture", "Food", "Budget"],
    trips: 2,
    rating: 4.7,
    reviews: 2,
  },
];

export function memberColor(i: number) {
  const palette = ["#6e72d9", "#df9b47", "#4ba36d", "#b168a7", "#5a9db7"];
  return palette[i % palette.length];
}
