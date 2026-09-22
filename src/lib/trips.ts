export type RouteStop = { city: string; nights: number; highlight: string };

export type DemoTrip = {
  slug: string;
  title: string;
  route: RouteStop[];
  dates: string;
  duration: string;
  budget: string;
  city: string;
  organizer: string;
  story: string;
  members: string[];
  weather: { temp: string; condition: string };
  currency: { code: string; rate: string };
  visa: string;
};

export const demoTrips: DemoTrip[] = [
  {
    slug: "japon-en-octobre",
    title: "Japon en octobre",
    route: [
      { city: "Tokyo", nights: 5, highlight: "Shibuya, Asakusa et un jour à Nikko" },
      { city: "Kyoto", nights: 4, highlight: "Temples, forêt de bambous, geishas à Gion" },
      { city: "Osaka", nights: 5, highlight: "Street food à Dotonbori, journée à Nara" },
    ],
    dates: "10–24 oct.",
    duration: "14 jours",
    budget: "1 850 €",
    city: "Tokyo",
    organizer: "Amine Meziane",
    story:
      "Deuxième fois que j'organise un Japon, première fois en automne — les érables commencent tout juste à rougir à Kyoto mi-octobre. On garde un rythme raisonnable : 5 nuits à Tokyo pour ne rien louper, 4 à Kyoto pour prendre le temps des temples, 5 à Osaka pour la bouffe et une excursion à Nara. Je m'occupe des réservations JR Pass et des restos, vous gérez vos activités perso en journée. Ouvert à un groupe de 4 à 6, ambiance cool mais organisée — pas du yolo total, pas non plus du planning minute par minute.",
    members: ["Sarah", "Amine", "Clara"],
    weather: { temp: "19°C", condition: "Ensoleillé, quelques averses en fin de mois" },
    currency: { code: "JPY", rate: "1 € ≈ 161 JPY" },
    visa: "Exemption de visa jusqu’à 90 jours pour les citoyens UE / CH / CA.",
  },
  {
    slug: "bali-entre-amis",
    title: "Bali entre amis",
    route: [
      { city: "Ubud", nights: 5, highlight: "Rizières, yoga, sortie volcan Batur au lever du soleil" },
      { city: "Canggu", nights: 6, highlight: "Surf, cafés, coucher de soleil à Tanah Lot" },
      { city: "Lombok", nights: 3, highlight: "Îles Gili, snorkeling, vraie déconnexion" },
    ],
    dates: "3–17 nov.",
    duration: "14 jours",
    budget: "1 420 €",
    city: "Bangkok",
    organizer: "Sarah Aymard",
    story:
      "Après deux voyages ensemble, on retente l'Asie du Sud-Est mais version détente : Ubud pour la culture et le calme, Canggu pour ceux qui veulent surfer un minimum, Lombok pour finir sur les îles Gili sans scooter ni bruit. Niveau surf zéro requis, on prend des cours sur place. Logements en guesthouse ou petite villa partagée selon le budget de chacun. Je cherche encore 2-3 personnes, plutôt calmes le matin, partantes le soir.",
    members: ["Sarah", "Amine", "Clara"],
    weather: { temp: "28°C", condition: "Chaud et humide, saison des pluies" },
    currency: { code: "IDR", rate: "1 € ≈ 17 200 IDR" },
    visa: "Visa à l’arrivée (35 USD) valable 30 jours, prolongeable une fois.",
  },
  {
    slug: "roadtrip-maroc",
    title: "Roadtrip Maroc",
    route: [
      { city: "Marrakech", nights: 2, highlight: "Médina, souks, un riad pour bien commencer" },
      { city: "Atlas", nights: 2, highlight: "Vallée de l'Ourika, nuit chez l'habitant" },
      { city: "Ouarzazate", nights: 3, highlight: "Désert, Aït Benhaddou, ciel étoilé" },
    ],
    dates: "14–21 sept.",
    duration: "7 jours",
    budget: "780 €",
    city: "Marrakech",
    organizer: "Clara Lefebvre",
    story:
      "Un format court et intense : on loue deux 4x4 à Marrakech et on prend la route vers l'Atlas puis le désert, sans itinéraire figé au jour près. Nuit chez l'habitant dans la vallée de l'Ourika, puis bivouac près d'Ouarzazate pour dormir à la belle étoile. Il faut aimer conduire un peu et ne pas être trop à cheval sur le confort deux jours de suite — le reste du temps c'est riads et bonnes tables. Permis obligatoire, 6 personnes max pour tenir dans les deux voitures.",
    members: ["Sarah", "Amine", "Clara"],
    weather: { temp: "26°C", condition: "Sec et ensoleillé, nuits fraîches en montagne" },
    currency: { code: "MAD", rate: "1 € ≈ 10.8 MAD" },
    visa: "Exemption de visa jusqu’à 90 jours pour les citoyens UE / CH / CA.",
  },
];

export function getTripBySlug(slug: string) {
  return demoTrips.find((t) => t.slug === slug);
}
