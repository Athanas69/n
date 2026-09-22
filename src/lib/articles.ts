export type Article = {
  city: string;
  title: string;
  slug: string;
  dek: string;
  body: { heading?: string; text: string }[];
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const articles: Article[] = [
  {
    city: "Paris",
    title: "Quel arrondissement choisir ?",
    slug: slugify("Quel arrondissement choisir ?"),
    dek: "20 arrondissements, une seule question : qu’est-ce qui compte le plus pour votre séjour ?",
    body: [
      {
        text: "Paris n’a pas de « meilleur » arrondissement — seulement des arrondissements adaptés à des priorités différentes. Avant de regarder les prix, posez-vous une question simple : qu’est-ce qui doit être à moins de 10 minutes à pied de votre hôtel ?",
      },
      {
        heading: "Pour un premier séjour, sans hésitation",
        text: "Le 4e (Marais / Notre-Dame) ou le 6e (Saint-Germain) mettent la majorité des grands monuments à distance de marche, avec un métro dense pour le reste. C’est plus cher, mais vous perdrez moins de temps en transport — ce qui compte quand on n’a que 3 à 5 jours.",
      },
      {
        heading: "Pour sortir le soir",
        text: "Le 11e (Bastille / Oberkampf) et le 10e (Canal Saint-Martin) concentrent bars, restaurants et une ambiance jeune, à des prix plus raisonnables que le centre historique. Le 9e, autour de Pigalle, ajoute les salles de concert.",
      },
      {
        heading: "Pour un budget serré",
        text: "Le 15e, le 19e et le 20e restent bien connectés en métro tout en étant nettement plus abordables. Le 15e est le choix le plus « sûr » : résidentiel, calme, familial, à 15-20 minutes du centre.",
      },
      {
        heading: "Pour une vue et une ambiance unique",
        text: "Le 18e (Montmartre) offre le cadre le plus photogénique de Paris, au prix de rues pentues et d’une affluence touristique élevée autour du Sacré-Cœur. Le 16e (Trocadéro) donne la meilleure vue sur la Tour Eiffel, dans un cadre plus huppé et plus calme le soir.",
      },
      {
        heading: "La règle simple",
        text: "Listez vos 3 priorités du séjour (monuments, vie nocturne, budget, calme, vue). L’arrondissement qui coche le plus de cases est le bon — pas celui qui a « le plus beau nom ».",
      },
    ],
  },
  {
    city: "Paris",
    title: "Paris en 3 jours",
    slug: slugify("Paris en 3 jours"),
    dek: "Un itinéraire réaliste, pensé pour marcher moins et voir plus.",
    body: [
      {
        text: "Trois jours à Paris ne suffisent pas à tout voir — et essayer de tout caser est la meilleure façon d’être épuisé dès le deuxième jour. Voici un itinéraire qui regroupe les quartiers pour limiter les trajets.",
      },
      {
        heading: "Jour 1 — Île de la Cité, Marais, Saint-Germain (rive historique)",
        text: "Matin : Notre-Dame et Île de la Cité. Midi : traversée vers le Marais (4e) pour déjeuner et flâner rue des Rosiers. Après-midi : Saint-Germain-des-Prés (6e) et le Jardin du Luxembourg. Ces trois quartiers sont contigus à pied — pas besoin de métro.",
      },
      {
        heading: "Jour 2 — Louvre, Tuileries, Champs-Élysées",
        text: "Matin : Louvre (réservez un créneau à l’avance, la file sans réservation dépasse souvent 1h). Midi : jardin des Tuileries. Après-midi : remontée des Champs-Élysées jusqu’à l’Arc de Triomphe. Fin de journée : Trocadéro pour voir la Tour Eiffel scintiller à la tombée de la nuit (toutes les heures, pile).",
      },
      {
        heading: "Jour 3 — Montmartre, puis un quartier « vivant »",
        text: "Matin : Montmartre et le Sacré-Cœur, idéalement avant 10h pour éviter la foule. Après-midi, selon votre énergie : Canal Saint-Martin (calme, balade) ou Bastille/Oberkampf (plus animé). Soir : dîner dans le 11e ou le 10e, moins touristique et souvent meilleur rapport qualité-prix que le centre.",
      },
      {
        heading: "Ce qu’on ne recommande pas",
        text: "Versailles en demi-journée épuise plus qu’il n’enchante — comptez-le comme un jour à part entière si vous voulez le faire, pas comme un ajout au programme ci-dessus.",
      },
    ],
  },
];

export function getArticle(city: string, slug: string) {
  return articles.find((a) => a.city === city && a.slug === slug);
}

export function getArticleSlugForTitle(city: string, title: string) {
  const a = articles.find((a) => a.city === city && a.title === title);
  return a?.slug;
}
