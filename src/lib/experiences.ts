export type ExperienceRegion = {
  name: string;
  country: string;
  tags: string;
  description: string;
  best: string;
  image: string;
};

export type Experience = {
  slug: string;
  name: string;
  eyebrow: string;
  hero: string;
  intro: string;
  regionsLabel: string;
  regions: ExperienceRegion[];
  practical: Array<[string, string]>;
  tiers: Array<{ tier: string; price: string; desc: string }>;
};

const img = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=88`;

const SAFARI_HERO = "photo-1535940360221-641a69c43bac";
const CRUISE_HERO = "photo-1554254648-2d58a1bc3fd5";

export const EXPERIENCES: Experience[] = [
  {
    slug: "safaris",
    name: "Safaris",
    eyebrow: "Atlas Expériences",
    hero: img(SAFARI_HERO, 1800),
    intro:
      "Un safari n’est pas une destination unique : c’est un choix entre plaines infinies, delta inondé, parc autotour ou forêt à gorilles — chacun avec sa saison, son budget et son rythme.",
    regionsLabel: "Où partir",
    regions: [
      {
        name: "Serengeti",
        country: "Tanzanie",
        tags: "Grande Migration · plaines infinies · gnous",
        description:
          "Le théâtre de la Grande Migration : plus de deux millions de gnous et zèbres parcourent la plaine toute l’année selon un cycle prévisible.",
        best: "Toute l’année · passage de la rivière Mara en juin-juillet",
        image: img(SAFARI_HERO, 900),
      },
      {
        name: "Maasai Mara",
        country: "Kenya",
        tags: "Big Five · accessible · culture Maasaï",
        description: "La réserve la plus accessible depuis Nairobi, avec l’une des plus fortes densités de prédateurs d’Afrique de l’Est.",
        best: "Juil.–oct., pendant la migration",
        image: img("photo-1564101160531-4838e8a5f4e7", 900),
      },
      {
        name: "Kruger",
        country: "Afrique du Sud",
        tags: "Autotour · infrastructure · Big Five",
        description:
          "Le seul grand parc africain où l’on peut conduire soi-même, avec routes goudronnées, camps équipés et budget nettement plus accessible.",
        best: "Mai–sept., saison sèche",
        image: img(SAFARI_HERO, 900),
      },
      {
        name: "Delta de l’Okavango",
        country: "Botswana",
        tags: "Delta · mokoro · exclusif",
        description:
          "Un delta qui inonde le désert du Kalahari : camps flottants et sorties en mokoro traditionnel, loin des foules et à prix élevé.",
        best: "Mai–oct., quand le delta est en crue",
        image: img("photo-1759252973843-957dc1b5e0e5", 900),
      },
      {
        name: "Etosha",
        country: "Namibie",
        tags: "Points d’eau · autotour · désert",
        description:
          "La faune se concentre autour de points d’eau éclairés la nuit : l’un des parcs les plus faciles à observer en autotour, sans guide.",
        best: "Avr.–oct., saison sèche",
        image: img(SAFARI_HERO, 900),
      },
      {
        name: "Bwindi",
        country: "Ouganda",
        tags: "Gorilles de montagne · trekking · rare",
        description:
          "Trekking en forêt tropicale dense à la rencontre des derniers gorilles de montagne au monde, sur permis limité et coûteux.",
        best: "Juin–août · déc.–fév., saisons sèches",
        image: img("photo-1742327520539-564816c2fe6f", 900),
      },
    ],
    practical: [
      ["Vaccins", "Fièvre jaune souvent exigée à l’entrée, antipaludéens recommandés."],
      ["Réservation", "Permis gorilles et camps de delta se réservent 6–12 mois à l’avance."],
      ["Vols intérieurs", "Fréquents entre parcs — prévoir un budget dédié, hors forfait."],
      ["Bagages", "Sac souple obligatoire sur les vols en petit porteur (poids limité)."],
    ],
    tiers: [
      { tier: "Mobile / camping", price: "≈ 150–300 €/jour", desc: "Tentes équipées, guide partagé, le meilleur rapport immersion-prix." },
      { tier: "Lodge", price: "≈ 350–700 €/jour", desc: "Camps permanents avec confort hôtelier, pension complète et activités incluses." },
      { tier: "Luxe / delta", price: "≈ 800–1500 €/jour", desc: "Camps exclusifs à capacité réduite, souvent tout compris vols inclus." },
    ],
  },
  {
    slug: "croisieres",
    name: "Croisières",
    eyebrow: "Atlas Expériences",
    hero: img(CRUISE_HERO, 1800),
    intro:
      "D’un paquebot géant en Méditerranée à un navire d’expédition de 100 passagers en Antarctique, « croisière » recouvre des expériences presque opposées — le choix du navire compte autant que la destination.",
    regionsLabel: "Où naviguer",
    regions: [
      {
        name: "Caraïbes",
        country: "Multi-îles",
        tags: "Îles · plages · familles",
        description: "La croisière la plus accessible : embarquement direct depuis la Floride, escales multiples sur des plages de sable blanc.",
        best: "Toute l’année, hors saison cyclonique (juin–nov.)",
        image: img(CRUISE_HERO, 900),
      },
      {
        name: "Méditerranée",
        country: "Multi-pays",
        tags: "Villes historiques · gastronomie · été",
        description: "Le grand classique européen : Barcelone, Rome, Venise et les Cyclades en une seule croisière, sans défaire sa valise.",
        best: "Mai–oct.",
        image: img(CRUISE_HERO, 900),
      },
      {
        name: "Fjords de Norvège",
        country: "Norvège",
        tags: "Paysages spectaculaires · soleil de minuit · été",
        description: "Falaises verticales et cascades vues depuis le pont : les petits navires accèdent aux fjords les plus étroits.",
        best: "Mai–sept., pour le soleil de minuit",
        image: img("photo-1483192683197-083ca7511846", 900),
      },
      {
        name: "Alaska",
        country: "États-Unis",
        tags: "Glaciers · faune sauvage · nature",
        description: "Baleines, ours et glaciers qui vêlent directement dans l’océan : la croisière la plus orientée nature d’Amérique du Nord.",
        best: "Mai–sept. uniquement, la saison ferme l’hiver",
        image: img("photo-1605978208410-c3deb0fab40d", 900),
      },
      {
        name: "Antarctique",
        country: "Continent blanc",
        tags: "Expédition · manchots · exclusif",
        description: "De petits navires d’expédition, souvent moins de 200 passagers, au départ d’Ushuaïa, pour fouler le dernier continent vierge.",
        best: "Nov.–mars, été austral",
        image: img("photo-1609385510105-81ae06198c53", 900),
      },
      {
        name: "Polynésie française",
        country: "France (Outre-mer)",
        tags: "Lagons · îles · lune de miel",
        description: "Des navires à taille humaine naviguent d’île en île sans jamais quitter le lagon turquoise — la croisière la plus recherchée pour un voyage de noces.",
        best: "Avr.–oct., hors saison des pluies",
        image: img("photo-1738762932370-468a90e0ff68", 900),
      },
    ],
    practical: [
      ["Cabine", "Intérieure, hublot, balcon ou suite — l’écart de prix peut doubler pour la même croisière."],
      ["Inclus généralement", "Pension complète, animations, accès piscine/spa de base."],
      ["Souvent en extra", "Excursions à terre, wifi, boissons, pourboires d’équipage."],
      ["Réservation", "Antarctique et fjords se réservent tôt : cabines limitées sur les petits navires."],
    ],
    tiers: [
      { tier: "Paquebot Caraïbes/Méditerranée", price: "≈ 100–250 €/jour/pers.", desc: "Grand navire, cabine intérieure à balcon, formule tout compris de base." },
      { tier: "Navire moyen (fjords, Alaska)", price: "≈ 300–600 €/jour/pers.", desc: "Capacité réduite, meilleur accès aux paysages, excursions souvent incluses." },
      { tier: "Expédition (Antarctique)", price: "≈ 700–1500 €/jour/pers.", desc: "Moins de 200 passagers, équipe de naturalistes, débarquements en zodiac inclus." },
    ],
  },
];

export function getExperience(slug: string) {
  return EXPERIENCES.find((e) => e.slug === slug);
}
