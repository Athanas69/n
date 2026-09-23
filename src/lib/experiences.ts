export type ExperienceRegion = {
  name: string;
  country: string;
  tags: string;
  description: string;
  best: string;
  image: string;
};

export type ExperienceFaq = { q: string; a: string };
export type ExperienceStep = { when: string; label: string };

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
  timeline: ExperienceStep[];
  faq: ExperienceFaq[];
  gateways: string[];
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
        name: "Ngorongoro",
        country: "Tanzanie",
        tags: "Cratère · densité exceptionnelle · compact",
        description:
          "Un cratère volcanique de 20 km de diamètre concentrant l’une des plus fortes densités de faune d’Afrique — un safari complet possible en une seule journée.",
        best: "Toute l’année, accès facile",
        image: img("photo-1745885979468-44a855f8a5fa", 900),
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
        name: "South Luangwa",
        country: "Zambie",
        tags: "Marche safari · brousse authentique · guides experts",
        description:
          "Le berceau du safari à pied : une manière plus lente et plus immersive d’observer la faune, accompagné d’un guide armé à quelques mètres des animaux.",
        best: "Mai–oct., saison sèche",
        image: img("photo-1759143861174-74eb31f4ecab", 900),
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
      ["Niveau physique", "Aucun requis en véhicule — le trekking gorilles demande une forme correcte."],
      ["Connexion sur place", "Limitée en brousse, généralement bonne dans les lodges et camps permanents."],
    ],
    tiers: [
      { tier: "Mobile / camping", price: "≈ 150–300 €/jour", desc: "Tentes équipées, guide partagé, le meilleur rapport immersion-prix." },
      { tier: "Lodge", price: "≈ 350–700 €/jour", desc: "Camps permanents avec confort hôtelier, pension complète et activités incluses." },
      { tier: "Luxe / delta", price: "≈ 800–1500 €/jour", desc: "Camps exclusifs à capacité réduite, souvent tout compris vols inclus." },
    ],
    timeline: [
      { when: "J-180", label: "Réserver permis gorilles et camps exclusifs (places très limitées)" },
      { when: "J-90", label: "Réserver vols intérieurs et lodges restants" },
      { when: "J-30", label: "Vaccins, antipaludéens, assurance évacuation médicale" },
      { when: "J-7", label: "Bagage souple, jumelles, vêtements de couleurs neutres" },
    ],
    faq: [
      {
        q: "Faut-il être en forme physiquement ?",
        a: "Non pour un safari classique en véhicule — s’asseoir plusieurs heures suffit. Le trekking gorilles demande une forme correcte : marche en terrain irrégulier, parfois plusieurs heures.",
      },
      {
        q: "Un safari est-il adapté aux enfants ?",
        a: "La plupart des camps acceptent les enfants à partir de 6-8 ans ; certains lodges exclusifs imposent un âge minimum plus élevé (souvent 12 ans) pour les sorties à pied ou en canoë.",
      },
      {
        q: "Est-ce dangereux ?",
        a: "Les sorties se font toujours accompagnées d’un guide formé, depuis un véhicule ou à distance de sécurité. Le risque principal reste sanitaire (paludisme) plus qu’animalier.",
      },
      {
        q: "Peut-on voir le Big Five à coup sûr ?",
        a: "Non — ce sont des animaux sauvages en liberté, aucune garantie n’existe. Les parcs à forte densité (Kruger, Mara, Ngorongoro) maximisent les chances sur 3-4 jours.",
      },
    ],
    gateways: ["Nairobi", "Cape Town", "Kigali"],
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
      {
        name: "Rhin / Danube",
        country: "Europe fluviale",
        tags: "Villes européennes · petits bateaux · vignobles",
        description:
          "Remonter le Rhin ou le Danube en admirant villages et vignobles depuis un bateau de moins de 200 passagers, sans jamais quitter le confort d’un même hôtel flottant.",
        best: "Avr.–oct. · marchés de Noël en décembre",
        image: img("photo-1755104981390-792e58049496", 900),
      },
      {
        name: "Golfe Persique",
        country: "Émirats arabes unis",
        tags: "Escale shopping · luxe moderne · courte durée",
        description:
          "Croisières courtes (3-7 nuits) au départ de Dubaï, entre gratte-ciels et escales à Abu Dhabi ou Mascate — un format compact pour découvrir le Golfe autrement.",
        best: "Nov.–avr., hors forte chaleur",
        image: img("photo-1582120042072-d01e2fc8f3ea", 900),
      },
    ],
    practical: [
      ["Cabine", "Intérieure, hublot, balcon ou suite — l’écart de prix peut doubler pour la même croisière."],
      ["Inclus généralement", "Pension complète, animations, accès piscine/spa de base."],
      ["Souvent en extra", "Excursions à terre, wifi, boissons, pourboires d’équipage."],
      ["Réservation", "Antarctique et fjords se réservent tôt : cabines limitées sur les petits navires."],
      ["Mal de mer", "Rare sur grand navire (stabilisateurs), plus fréquent en petit navire ou mer agitée."],
      ["Connexion à bord", "Wifi satellite, souvent lent et vendu en forfait séparé du prix de base."],
    ],
    tiers: [
      { tier: "Paquebot Caraïbes/Méditerranée", price: "≈ 100–250 €/jour/pers.", desc: "Grand navire, cabine intérieure à balcon, formule tout compris de base." },
      { tier: "Navire moyen (fjords, Alaska)", price: "≈ 300–600 €/jour/pers.", desc: "Capacité réduite, meilleur accès aux paysages, excursions souvent incluses." },
      { tier: "Expédition (Antarctique)", price: "≈ 700–1500 €/jour/pers.", desc: "Moins de 200 passagers, équipe de naturalistes, débarquements en zodiac inclus." },
    ],
    timeline: [
      { when: "J-180", label: "Réserver la cabine (fjords et Antarctique se remplissent vite)" },
      { when: "J-90", label: "Réserver les excursions à terre les plus demandées" },
      { when: "J-30", label: "Vérifier visa et documents requis selon les escales" },
      { when: "J-7", label: "Valises, formulaires d’embarquement en ligne, forfait wifi si besoin" },
    ],
    faq: [
      {
        q: "Le mal de mer est-il fréquent ?",
        a: "Rare sur les grands paquebots modernes équipés de stabilisateurs, plus probable sur un petit navire d’expédition ou en mer agitée (Antarctique, fjords hors saison).",
      },
      {
        q: "Faut-il un passeport pour chaque escale ?",
        a: "Oui dans la plupart des cas, même pour une escale de quelques heures — certains pays exigent en plus un visa spécifique à vérifier avant de réserver.",
      },
      {
        q: "Que se passe-t-il si on rate le départ à une escale ?",
        a: "C’est à la charge du passager de rejoindre le prochain port si l’excursion n’était pas réservée via la compagnie — un argument de poids pour les excursions officielles sur les escales courtes.",
      },
      {
        q: "Le wifi fonctionne-t-il à bord ?",
        a: "Oui, mais via satellite : plus lent et plus cher qu’à terre, presque toujours vendu en forfait séparé du prix de la croisière.",
      },
    ],
    gateways: ["Miami", "Barcelona", "Dubai"],
  },
];

export function getExperience(slug: string) {
  return EXPERIENCES.find((e) => e.slug === slug);
}
