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
  {
    city: "Tokyo",
    title: "Manger après 22 h",
    slug: slugify("Manger après 22 h"),
    dek: "Le dernier métro ne veut pas dire la fin du dîner : où et comment manger tard à Tokyo.",
    body: [
      {
        text: "À Tokyo, la vraie vie nocturne culinaire commence souvent après 22h, une fois les bureaux vidés. Ce n'est pas un problème de trouver à manger tard — c'est plutôt de savoir où aller pour ne pas se retrouver devant un restaurant fermé à 21h30 pile.",
      },
      {
        heading: "Les izakayas, jusqu'à l'aube",
        text: "Un izakaya (居酒屋) est une taverne japonaise où on grignote en buvant : yakitori, edamame, sashimi en petites portions. Beaucoup restent ouverts jusqu'à 2-3h du matin. Omoide Yokocho à Shinjuku (surnommée « Piss Alley ») et Golden Gai juste à côté regroupent des dizaines de minuscules bars-izakayas, certains avec seulement 6 tabourets.",
      },
      {
        heading: "Le ramen ne ferme jamais vraiment",
        text: "Les chaînes de ramen comme Ichiran fonctionnent 24h/24 dans plusieurs quartiers, avec des distributeurs à billets et des box individuels — pratique si vous mangez seul tard le soir. À Shibuya et Shinjuku, il y a toujours un comptoir de ramen ouvert, même à 1h du matin.",
      },
      {
        heading: "Sous les voies ferrées",
        text: "À Yurakucho et Shimbashi, des dizaines de petits comptoirs à yakitori s'alignent littéralement sous les rails du train, fréquentés par les salarymen après le travail. C'est bruyant, enfumé, pas cher, et c'est l'une des expériences les plus authentiques de Tokyo la nuit.",
      },
      {
        heading: "Le konbini, filet de sécurité",
        text: "Si vraiment tout est fermé, un konbini (7-Eleven, Lawson, FamilyMart) dépanne mieux qu'ailleurs dans le monde : onigiri frais, bento, fried chicken chaud au comptoir. Ouvert 24h/24, littéralement à chaque coin de rue.",
      },
      {
        heading: "Attention au dernier métro",
        text: "Le métro s'arrête vers minuit-minuit trente selon les lignes. Si votre soirée s'annonce longue, repérez l'heure du dernier train pour votre hôtel avant de commencer — sinon, un taxi ou une nuit dans un izakaya jusqu'à la réouverture du métro vers 5h sont les seules options.",
      },
    ],
  },
  {
    city: "Tokyo",
    title: "Quel quartier choisir pour un premier voyage ?",
    slug: slugify("Quel quartier choisir pour un premier voyage ?"),
    dek: "Shinjuku, Shibuya, Asakusa, Ginza : lequel correspond à votre rythme de voyage ?",
    body: [
      {
        text: "Tokyo est immense et polycentrique — contrairement à Paris ou Londres, il n'y a pas un seul « centre ». Le quartier de votre hôtel définit vraiment l'ambiance de votre séjour.",
      },
      {
        heading: "Shinjuku : le plus pratique, le plus intense",
        text: "La gare de Shinjuku est la plus fréquentée au monde et dessert presque toutes les lignes utiles. Autour, un mélange de gratte-ciels, néons de Kabukicho et minuscules bars de Golden Gai. Idéal si vous voulez tout avoir à portée de métro, moins si vous cherchez le calme le soir.",
      },
      {
        heading: "Shibuya : jeune, dense, photogénique",
        text: "Le scramble crossing (le plus grand carrefour piéton du monde) est ici. Shopping, mode de rue, une vie nocturne dense. Très bien connecté, mais bruyant et cher les soirs de week-end.",
      },
      {
        heading: "Asakusa : le Tokyo traditionnel",
        text: "Autour du temple Senso-ji, Asakusa garde une ambiance de vieux Tokyo — ruelles, izakayas anciens, artisanat. Plus abordable et plus calme le soir, mais un peu excentré : comptez 20-30 minutes de métro vers Shibuya ou Shinjuku.",
      },
      {
        heading: "Ginza : calme et haut de gamme",
        text: "Boutiques de luxe, galeries d'art, restaurants étoilés — et une proximité immédiate avec la gare de Tokyo, pratique pour les excursions en Shinkansen. Ambiance posée, prix en conséquence.",
      },
      {
        heading: "La règle simple",
        text: "Premier séjour et envie de tout voir sans trop réfléchir : Shinjuku. Envie d'ambiance jeune et de photos : Shibuya. Envie de calme et de tradition : Asakusa. Budget confortable et sorties raffinées : Ginza.",
      },
    ],
  },
  {
    city: "Rome",
    title: "Où manger sans tomber dans les pièges",
    slug: slugify("Où manger sans tomber dans les pièges"),
    dek: "Repérer un piège à touristes à Rome en trois secondes, et où manger vraiment bien à la place.",
    body: [
      {
        text: "Rome regorge de restaurants médiocres à deux pas des grands monuments, et de très bonnes adresses à peine plus loin. La différence se repère facilement une fois qu'on sait quoi chercher.",
      },
      {
        heading: "Les signaux qui doivent alerter",
        text: "Un menu avec des photos plastifiées, un rabatteur qui vous aborde dans la rue, un « menu turistico » à prix fixe, ou une carte traduite en six langues juste en face d'un monument majeur : ce sont les indices classiques d'un restaurant qui vise le passage, pas la qualité.",
      },
      {
        heading: "Où mangent les Romains",
        text: "Testaccio, ancien quartier des abattoirs, reste le meilleur endroit pour la cuisine romaine authentique (abats, quinto quarto) — le Mercato Testaccio est idéal pour un déjeuner sur le pouce. À Prati, près du Vatican mais hors des axes touristiques, les trattorias servent une clientèle locale. Trastevere reste vivant, mais mieux vaut s'éloigner de la Piazza Santa Maria pour éviter les adresses trop touristiques.",
      },
      {
        heading: "Les plats à connaître (et leurs contrefaçons)",
        text: "Cacio e pepe, carbonara, amatriciana, gricia : les quatre pâtes romaines classiques. Une vraie carbonara ne contient jamais de crème — si elle en a, fuyez. Ce détail à lui seul trie une bonne partie des pièges à touristes.",
      },
      {
        heading: "L'aperitivo, une habitude à adopter",
        text: "Entre 18h et 20h, beaucoup de bars proposent un verre accompagné d'un buffet léger inclus — une façon économique et locale de goûter à plusieurs choses avant le dîner, souvent tardif (21h passé) à la romaine.",
      },
    ],
  },
  {
    city: "Rome",
    title: "Centro Storico ou Trastevere ?",
    slug: slugify("Centro Storico ou Trastevere ?"),
    dek: "Le cœur historique pour ne rien manquer à pied, ou la rive vivante du Tibre pour les soirées.",
    body: [
      {
        text: "Les deux quartiers se répondent de part et d'autre du Tibre, à 10-15 minutes de marche l'un de l'autre — le choix dépend surtout de ce que vous voulez avoir sous la main le soir.",
      },
      {
        heading: "Centro Storico : tout à pied",
        text: "Panthéon, Piazza Navona, Campo de' Fiori, Fontaine de Trevi : la quasi-totalité des grands sites est accessible à pied depuis ce quartier. C'est aussi le plus cher et le plus fréquenté par les touristes, avec des restaurants à surveiller (voir notre guide sur les pièges à touristes).",
      },
      {
        heading: "Trastevere : l'ambiance locale, ou presque",
        text: "Ruelles pavées, façades ocre, une vraie densité de bars et petits restaurants — Trastevere a gardé un charme de quartier populaire tout en devenant l'un des endroits les plus courus pour sortir le soir. Légèrement excentré, mais jamais à plus de 20 minutes à pied du centre historique.",
      },
      {
        heading: "La règle simple",
        text: "Séjour court et volonté de tout voir sans calculer les trajets : Centro Storico. Séjour de 4 jours ou plus, avec envie de soirées animées et un peu plus de calme la nuit pour dormir : Trastevere.",
      },
    ],
  },
  {
    city: "London",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Du full English classique au flat white de quartier : comment bien commencer la journée à Londres.",
    body: [
      {
        text: "Le petit-déjeuner londonien a deux visages bien distincts : le classique « greasy spoon » et la scène café de troisième vague, très sérieuse sur le café. Les deux valent le détour, pour des raisons différentes.",
      },
      {
        heading: "Le vrai Full English",
        text: "Œufs, bacon, saucisses, haricots, toast, parfois black pudding — le petit-déjeuner anglais complet se mange idéalement dans un « greasy spoon », un café traditionnel sans prétention plutôt que dans une chaîne. E Pellicci à Bethnal Green, ouvert depuis 1900, en est l'exemple classique : petit, familial, généreux.",
      },
      {
        heading: "Borough Market, tôt le matin",
        text: "Le marché ouvre dès 8h et permet de picorer : viennoiseries, café de spécialité, œufs Benedict dans un des stands. Moins bondé qu'en milieu de journée, c'est le meilleur moment pour en profiter sans la foule.",
      },
      {
        heading: "La scène café de Shoreditch et Hackney",
        text: "Ces quartiers concentrent une grande partie des cafés de spécialité de Londres — flat white, avoine maison, pâtisseries travaillées. L'ambiance est plus « brunch design » que petit-déjeuner rapide.",
      },
      {
        heading: "Le brunch du week-end",
        text: "Le samedi et le dimanche, les bonnes adresses affichent complet dès 10h. Si vous avez un endroit précis en tête, réservez la veille — une habitude bien ancrée à Londres, contrairement à Paris ou Rome.",
      },
    ],
  },
  {
    city: "London",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Shoreditch, Soho, Camden : chaque quartier a sa propre soirée.",
    body: [
      {
        text: "Londres n'a pas un « quartier de la fête » unique — chaque zone a son ambiance, et se tromper de quartier signifie souvent se tromper de soirée.",
      },
      {
        heading: "Shoreditch : street art et clubs",
        text: "L'ancien quartier industriel de l'East End est devenu le cœur de la nuit alternative londonienne : bars à cocktails dans d'anciens entrepôts, clubs électro, art de rue à chaque coin. Ambiance jeune, souvent bruyante jusqu'à 3h.",
      },
      {
        heading: "Soho : théâtre et bars tardifs",
        text: "Au centre du West End, Soho mélange théâtres, bars gay-friendly historiques (Old Compton Street) et pubs qui ferment tard. C'est le quartier le plus central pour enchaîner spectacle et soirée sans transport.",
      },
      {
        heading: "Camden : rock, marché, alternatif",
        text: "Connu pour son marché et son passé musical (Amy Winehouse y vivait), Camden garde une scène live music et rock très active, avec des salles historiques comme le Camden Roundhouse à proximité.",
      },
      {
        heading: "South Bank : la soirée tranquille",
        text: "Pour une soirée plus posée, la promenade le long de la Tamise entre London Eye et Tower Bridge, ponctuée de bars avec vue, change du rythme plus électrique des autres quartiers.",
      },
    ],
  },
  {
    city: "New York",
    title: "Que faire le soir",
    slug: slugify("Que faire le soir"),
    dek: "Broadway, jazz, rooftop bars : New York ne dort jamais vraiment.",
    body: [
      {
        text: "La réputation de ville qui ne dort jamais n'est pas usurpée — la difficulté à New York n'est pas de trouver quoi faire le soir, c'est de choisir.",
      },
      {
        heading: "Un spectacle à Broadway",
        text: "Le kiosque TKTS à Times Square vend des billets à prix réduit (souvent -25 à -50%) pour les représentations du soir même — la file d'attente en vaut la peine pour voir un vrai spectacle sans payer le plein tarif.",
      },
      {
        heading: "Le jazz, dans son vrai décor",
        text: "Le Village Vanguard, ouvert depuis 1935 dans le West Village, et le Blue Note à quelques rues de là, restent des clubs de jazz historiques où se sont produites la plupart des légendes du genre. Réservez à l'avance, les places sont limitées.",
      },
      {
        heading: "Un rooftop avec vue sur la skyline",
        text: "De nombreux hôtels et bars de Manhattan et Brooklyn ouvrent leur toit en soirée avec vue sur l'Empire State Building ou le pont de Brooklyn. Certains sans réservation, d'autres avec liste d'attente — mieux vaut vérifier en fin d'après-midi.",
      },
      {
        heading: "Manger tard, façon new-yorkaise",
        text: "Une part de pizza à emporter après minuit ou un diner ouvert 24h/24 (souvent avec des milkshakes et des burgers) font partie du rituel de fin de soirée new-yorkais, quel que soit le quartier.",
      },
    ],
  },
  {
    city: "New York",
    title: "Quel quartier pour une première fois ?",
    slug: slugify("Quel quartier pour une première fois ?"),
    dek: "Manhattan reste le choix le plus simple pour un premier séjour — mais lequel exactement ?",
    body: [
      {
        text: "Pour un premier voyage, rester sur Manhattan simplifie beaucoup les déplacements. Reste à choisir la bonne partie de l'île selon votre rythme.",
      },
      {
        heading: "Midtown : central mais dense",
        text: "Times Square, Empire State Building, gares principales : tout est proche, mais c'est aussi la zone la plus touristique et la plus chère au mètre carré. Pratique pour un court séjour très orienté « monuments ».",
      },
      {
        heading: "West Village / Chelsea : le plus agréable à vivre",
        text: "Rues arborées, façades en briques, la High Line à proximité — ce sont les quartiers les plus souvent recommandés pour « vivre » New York plutôt que juste la visiter, tout en restant à distance de marche raisonnable de Midtown.",
      },
      {
        heading: "Brooklyn (Williamsburg) : moins cher, plus loin",
        text: "Une vraie scène locale, des prix plus doux qu'à Manhattan, mais 20-30 minutes de métro pour rejoindre les grands sites — à réserver pour un séjour de 5 jours ou plus, pas pour un week-end serré.",
      },
      {
        heading: "La règle simple",
        text: "Moins de 4 jours et priorité aux monuments : Midtown. Séjour équilibré entre visites et ambiance de quartier : West Village. Plus de 5 jours et envie de sortir des sentiers battus : Brooklyn.",
      },
    ],
  },
  {
    city: "Barcelona",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Pa amb tomàquet, xurros, café : les bonnes adresses pour démarrer la journée à la catalane.",
    body: [
      {
        text: "Le petit-déjeuner catalan est simple et se prend souvent debout au comptoir d'un bar de quartier plutôt qu'à une table de café touristique.",
      },
      {
        heading: "Le classique : pa amb tomàquet",
        text: "Du pain grillé frotté à la tomate et à l'ail, arrosé d'huile d'olive, souvent accompagné de jambon ou de fromage. C'est la base du petit-déjeuner catalan, servie dans n'importe quel bar de quartier pour quelques euros.",
      },
      {
        heading: "Xurros con chocolate",
        text: "Une institution plus festive que quotidienne : des xurros trempés dans un chocolat chaud épais. La Granja Viader et Dulcinea, toutes deux près des Ramblas, sont des adresses historiques pour cette tradition.",
      },
      {
        heading: "La Boqueria, tôt le matin",
        text: "Le marché derrière les Ramblas ouvre dès 8h et permet de goûter jus de fruits frais, fruits de mer et pâtisseries avant l'arrivée de la foule touristique en milieu de journée.",
      },
      {
        heading: "Éviter le piège du Barri Gòtic",
        text: "Les terrasses directement sur les places touristiques du Quartier Gothique pratiquent souvent des prix doublés pour un café médiocre — un bar à deux rues de là, fréquenté par des habitants, coûte généralement moitié moins cher.",
      },
    ],
  },
  {
    city: "Barcelona",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "El Born, Gràcia, la plage : trois ambiances de soirée très différentes.",
    body: [
      {
        text: "Barcelone a plusieurs vies nocturnes bien distinctes selon le quartier — utile de savoir laquelle vous cherchez avant de réserver un hôtel.",
      },
      {
        heading: "El Born : bars à tapas et ruelles médiévales",
        text: "Juste à côté du Gothique mais plus détendu, El Born concentre des bars à vins et tapas dans un cadre de ruelles étroites, avec une clientèle mélangeant locaux et voyageurs.",
      },
      {
        heading: "Gràcia : l'ambiance de village",
        text: "Ancien village annexé par la ville, Gràcia a gardé ses petites places où les habitants s'installent en terrasse jusque tard. Nettement moins touristique que le centre, très prisé des locaux.",
      },
      {
        heading: "Barceloneta et le front de mer : clubs et vue sur l'eau",
        text: "Pour une soirée plus électro et festive, les clubs en bord de plage de Barceloneta et du Port Olímpic proposent une ambiance différente, très orientée club et cocktails avec vue sur la Méditerranée.",
      },
      {
        heading: "La règle simple",
        text: "Envie d'authenticité et de calme relatif : Gràcia. Envie de bars à tapas animés à distance de marche du centre : El Born. Envie de club et de mer : Barceloneta.",
      },
    ],
  },
  {
    city: "Istanbul",
    title: "Où manger à Kadıköy",
    slug: slugify("Où manger à Kadıköy"),
    dek: "Sur la rive asiatique, Kadıköy est devenu le meilleur quartier pour manger à Istanbul — sans les prix touristiques du centre.",
    body: [
      {
        text: "Kadıköy, sur la rive asiatique, à 20 minutes de ferry de Sultanahmet ou Karaköy, est le quartier où mangent les Stambouliotes eux-mêmes — et où les prix restent nettement plus raisonnables que côté européen.",
      },
      {
        heading: "Le marché du mardi",
        text: "Le Salı Pazarı (marché du mardi) transforme les rues autour de Kadıköy en un immense marché alimentaire — fromages, olives, épices, produits frais. Une immersion directe dans les produits que vous retrouverez ensuite dans les restaurants du quartier.",
      },
      {
        heading: "Les meyhane, tavernes turques",
        text: "Kadıköy concentre une forte densité de meyhane, ces tavernes où l'on partage des meze (petits plats froids et chauds) accompagnés de rakı. C'est l'équivalent turc des bars à tapas — convivial et fait pour durer toute la soirée.",
      },
      {
        heading: "Çiya Sofrası, une référence",
        text: "Ce restaurant est réputé dans toute la Turquie pour ses plats régionaux d'Anatolie, souvent introuvables ailleurs à Istanbul — une façon de découvrir une cuisine turque bien plus large que le kebab et les mezze standards.",
      },
      {
        heading: "Street food près du ferry",
        text: "Près de l'embarcadère, les stands de balık ekmek (sandwich au poisson grillé) et de kokoreç (abats grillés en sandwich) offrent un repas rapide et bon marché, typique de la culture de rue stambouliote.",
      },
    ],
  },
  {
    city: "Istanbul",
    title: "Europe ou Asie : où dormir ?",
    slug: slugify("Europe ou Asie : où dormir ?"),
    dek: "Istanbul est la seule ville au monde à cheval sur deux continents — voici ce que ça change concrètement pour votre séjour.",
    body: [
      {
        text: "Le détroit du Bosphore sépare littéralement Istanbul en deux continents. Cette division n'est pas qu'une curiosité géographique : elle structure vraiment l'ambiance et le rythme de votre séjour selon où vous dormez.",
      },
      {
        heading: "Un peu d'histoire",
        text: "Fondée sous le nom de Byzance puis Constantinople, capitale de l'Empire byzantin puis ottoman, la ville a toujours vécu à cheval sur les deux rives — le Bosphore reliant la mer Noire à la mer de Marmara a fait sa richesse comme carrefour commercial entre Europe et Asie pendant des siècles.",
      },
      {
        heading: "Rive européenne : les monuments, la foule",
        text: "Sainte-Sophie, la Mosquée bleue, le Grand Bazar et le Palais de Topkapi se trouvent tous à Sultanahmet, côté européen — c'est là que se concentre l'essentiel du tourisme, avec les prix et l'affluence qui vont avec. Beyoğlu, plus au nord, ajoute une vie nocturne dense autour d'Istiklal Caddesi.",
      },
      {
        heading: "Rive asiatique : la ville qui vit sans les touristes",
        text: "Kadıköy et Üsküdar, côté asiatique, restent largement épargnés par le tourisme de masse. Les prix y sont plus bas, la nourriture souvent meilleure (voir notre guide sur Kadıköy), et l'ambiance plus proche du quotidien stambouliote.",
      },
      {
        heading: "La règle simple",
        text: "Séjour court et priorité aux grands monuments historiques : dormez côté européen, à Sultanahmet ou Beyoğlu. Séjour plus long ou envie de vivre la ville comme un local : Kadıköy, avec une traversée en ferry de 20 minutes chaque fois que vous voulez voir les monuments — la traversée elle-même, au coucher du soleil, est l'une des plus belles choses à faire à Istanbul.",
      },
    ],
  },
  {
    city: "Bangkok",
    title: "Street food sans perdre une journée",
    slug: slugify("Street food sans perdre une journée"),
    dek: "Bangkok a la street food la plus dense du monde. Voici comment en profiter sans y passer votre séjour entier.",
    body: [
      {
        text: "Impossible de tout goûter à Bangkok — la ville compte des dizaines de milliers de stands de rue. Mieux vaut cibler quelques zones et quelques plats plutôt que d'errer sans plan.",
      },
      {
        heading: "Yaowarat, le Chinatown la nuit",
        text: "À la tombée de la nuit, l'avenue Yaowarat s'illumine de néons et de fumées de wok. C'est la meilleure concentration de street food de la ville après le coucher du soleil — fruits de mer grillés, nouilles sautées, soupes.",
      },
      {
        heading: "Les marchés du matin",
        text: "Or Tor Kor Market, en face de Chatuchak, est moins connu des touristes mais réputé pour la qualité de ses produits frais et ses stands de petit-déjeuner — fruits tropicaux coupés minute, khao niao mamuang (riz gluant à la mangue).",
      },
      {
        heading: "Les plats à connaître",
        text: "Pad thai, som tam (salade de papaye verte, à demander « pas trop épicé » si besoin), moo ping (brochettes de porc grillé), et khao soi si vous croisez un stand du Nord de la Thaïlande — une soupe de nouilles au curry moins connue mais excellente.",
      },
      {
        heading: "Repérer un bon stand",
        text: "La règle la plus fiable : une file de locaux qui attendent. Un stand vide en plein rush du déjeuner est un signal à ne pas ignorer, quelle que soit la qualité apparente de l'étal.",
      },
    ],
  },
  {
    city: "Bangkok",
    title: "Sukhumvit ou Silom ?",
    slug: slugify("Sukhumvit ou Silom ?"),
    dek: "Les deux quartiers d'affaires et de sorties de Bangkok, reliés par le BTS — mais avec des ambiances très différentes.",
    body: [
      {
        text: "Sukhumvit et Silom sont les deux grands pôles modernes de Bangkok, tous deux bien desservis par le BTS (métro aérien), mais leur ambiance diffère nettement une fois la nuit tombée.",
      },
      {
        heading: "Sukhumvit : la longue avenue tentaculaire",
        text: "Sukhumvit s'étend sur des kilomètres, avec des sous-quartiers très distincts : Thonglor et Ekkamai concentrent une scène de bars et restaurants branchés très prisée des expatriés, tandis que Nana et Asok sont plus centraux et animés jour et nuit.",
      },
      {
        heading: "Silom : business le jour, Patpong la nuit",
        text: "Quartier d'affaires historique de Bangkok, Silom se transforme le soir avec le marché de nuit de Patpong. Plus proche du fleuve Chao Phraya et de Chinatown, c'est un bon point de chute pour combiner sorties et visites du vieux Bangkok.",
      },
      {
        heading: "La règle simple",
        text: "Envie d'une scène de bars modernes et d'une bonne desserte BTS : Sukhumvit (Thonglor pour le haut de gamme). Envie d'être plus proche du fleuve et du vieux Bangkok : Silom.",
      },
    ],
  },
  {
    city: "Berlin",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Le brunch berlinois est presque un sport national — voici où le pratiquer.",
    body: [
      {
        text: "À Berlin, le brunch du week-end est une institution qui peut durer des heures — les cafés sont pensés pour qu'on s'y installe, pas pour un passage rapide.",
      },
      {
        heading: "Prenzlauer Berg, le quartier du brunch",
        text: "Ce quartier résidentiel et familial concentre la plus forte densité de cafés à brunch de la ville, avec de longues cartes proposant œufs, pain complet, fromages et confitures artisanales.",
      },
      {
        heading: "Markthalle Neun",
        text: "Ce marché couvert de Kreuzberg propose des stands variés dès le matin — pas seulement pendant le fameux Street Food Thursday du jeudi soir. Bon compromis entre marché local et offre variée.",
      },
      {
        heading: "La currywurst, pour changer",
        text: "Moins « petit-déjeuner » que les options ci-dessus, la currywurst (saucisse grillée nappée de sauce tomate épicée au curry) reste une institution berlinoise à goûter au moins une fois, dans un stand comme Curry 36.",
      },
    ],
  },
  {
    city: "Berlin",
    title: "Quel quartier choisir à Berlin ?",
    slug: slugify("Quel quartier choisir à Berlin ?"),
    dek: "Mitte, Kreuzberg, Prenzlauer Berg : Berlin est une mosaïque de quartiers très différents les uns des autres.",
    body: [
      {
        text: "Berlin n'a pas vraiment de centre unique au sens où on l'entend à Paris ou Rome — la ville s'est reconstruite en plusieurs pôles distincts après la guerre et la réunification.",
      },
      {
        heading: "Mitte : central et historique",
        text: "Porte de Brandebourg, Museum Island, la plupart des grands sites — Mitte est le choix le plus pratique pour un premier séjour, au prix d'une ambiance plus touristique que les quartiers voisins.",
      },
      {
        heading: "Kreuzberg : alternatif et multiculturel",
        text: "Forte communauté turque historique, street art, bars alternatifs et une des vies nocturnes les plus denses de la ville — Kreuzberg reste le quartier le plus associé à l'image « underground » de Berlin.",
      },
      {
        heading: "Prenzlauer Berg : posé et familial",
        text: "Façades rénovées, cafés à brunch, familles avec poussettes — ce quartier de l'ex-Berlin-Est s'est nettement embourgeoisé, avec une ambiance plus calme que Kreuzberg.",
      },
      {
        heading: "Friedrichshain : la nuit électro",
        text: "Voisin de Kreuzberg, c'est le quartier des clubs (dont le célèbre Berghain) — à considérer si les sorties nocturnes sont la priorité du séjour, moins si vous cherchez du calme.",
      },
    ],
  },
  {
    city: "Amsterdam",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Entre stroopwafel frais et brunch au bord d'un canal, comment bien démarrer la journée à Amsterdam.",
    body: [
      {
        text: "Le petit-déjeuner néerlandais est simple, mais Amsterdam regorge d'options pour le prolonger en vrai moment de découverte culinaire.",
      },
      {
        heading: "Le stroopwafel, fraîchement pressé",
        text: "Bien différent de la version emballée vendue en supermarché, le stroopwafel préparé sur place et encore tiède — notamment sur les stands de l'Albert Cuyp Market — n'a rien à voir en texture et en goût.",
      },
      {
        heading: "Foodhallen",
        text: "Ce marché couvert dans le quartier Oud-West rassemble une vingtaine de stands, pratique pour un petit-déjeuner varié sans avoir à choisir un seul type de cuisine.",
      },
      {
        heading: "Un café au bord du canal",
        text: "Les « bruin cafés » (cafés bruns, du nom de leurs murs patinés) du Jordaan offrent un cadre calme pour un café et une tranche d'appeltaart (tarte aux pommes néerlandaise), loin de l'agitation du centre.",
      },
    ],
  },
  {
    city: "Amsterdam",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "De Pijp, Jordaan, ou le centre : trois ambiances de soirée très différentes à Amsterdam.",
    body: [
      {
        text: "Amsterdam concentre plusieurs ambiances de soirée sur une surface réduite, facilement accessibles à vélo ou à pied.",
      },
      {
        heading: "De Pijp : jeune et animé",
        text: "Autour du marché Albert Cuyp, ce quartier concentre bars et petits restaurants prisés d'un public plutôt jeune et local, à distance de marche du centre.",
      },
      {
        heading: "Jordaan : charme et calme",
        text: "Ruelles étroites, canaux, bruin cafés historiques — Jordaan offre une soirée plus posée, typique de l'image romantique d'Amsterdam.",
      },
      {
        heading: "Le centre : à parcourir avec discernement",
        text: "Le Red Light District attire par curiosité, mais reste la zone la plus touristique et la plus surveillée pour les arnaques classiques. Les quartiers voisins comme Nieuwmarkt offrent une ambiance plus authentique à quelques minutes à pied.",
      },
    ],
  },
  {
    city: "Vienna",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Vienne a inventé la culture du café de salon — voici comment la vivre comme il se doit.",
    body: [
      {
        text: "Le Kaffeehaus viennois est inscrit au patrimoine culturel immatériel de l'UNESCO — ce n'est pas un simple café, c'est une institution avec ses propres codes.",
      },
      {
        heading: "S'installer, pas juste commander",
        text: "Dans un vrai Kaffeehaus, on peut légitimement rester des heures avec un seul café et un journal — Café Central et Café Sperl, tous deux ouverts depuis le 19e siècle, incarnent parfaitement cette tradition.",
      },
      {
        heading: "Le petit-déjeuner viennois classique",
        text: "Kaisersemmel (petit pain rond) beurré et confituré, accompagné d'un Melange (l'équivalent viennois du cappuccino) — simple, mais fait dans les règles.",
      },
      {
        heading: "Le Naschmarkt en option",
        text: "Pour une alternative plus animée que le Kaffeehaus, le grand marché Naschmarkt propose des stands de petit-déjeuner variés, entre produits autrichiens et cuisines internationales.",
      },
    ],
  },
  {
    city: "Vienna",
    title: "Quel quartier choisir à Vienna ?",
    slug: slugify("Quel quartier choisir à Vienna ?"),
    dek: "Innere Stadt pour l'histoire, Neubau pour l'ambiance : où poser ses valises à Vienne.",
    body: [
      {
        text: "Vienne se découpe en districts numérotés autour du centre historique — les trois premiers couvrent l'essentiel des besoins d'un séjour classique.",
      },
      {
        heading: "Innere Stadt (1er district) : le cœur historique",
        text: "Cathédrale Saint-Étienne, Opéra, Hofburg — tout est accessible à pied. C'est le choix le plus pratique pour un premier séjour, avec des prix en conséquence.",
      },
      {
        heading: "Neubau (7e district) : créatif et branché",
        text: "Boutiques indépendantes, galeries, proximité du Museumsquartier — Neubau attire une clientèle plus jeune et créative, à 15-20 minutes à pied du centre historique.",
      },
      {
        heading: "Leopoldstadt (2e district) : en plein essor",
        text: "Ancien quartier juif de Vienne, aujourd'hui en pleine transformation, avec le grand parc du Prater à proximité — une option plus abordable et de plus en plus prisée.",
      },
    ],
  },
  {
    city: "Singapore",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Kaya toast et kopi : le petit-déjeuner singapourien ne ressemble à aucun autre.",
    body: [
      {
        text: "Le petit-déjeuner traditionnel de Singapour reste étonnamment simple et bon marché, malgré la réputation de ville chère.",
      },
      {
        heading: "Kaya toast, l'incontournable",
        text: "Des tranches de pain grillé tartinées de confiture kaya (noix de coco et pandan) et de beurre, accompagnées d'œufs mollets qu'on assaisonne de sauce soja et de poivre — Ya Kun Kaya Toast, chaîne locale historique, en est la référence.",
      },
      {
        heading: "Le kopi, un café à part",
        text: "Le café local se commande selon un code bien précis (kopi-o, kopi-c, kopi-siu dai...) qui définit le type de lait et le niveau de sucre — demander « kopi » tout court revient à accepter du lait concentré sucré par défaut.",
      },
      {
        heading: "Dans un hawker center",
        text: "Tiong Bahru Market et Maxwell Food Centre ouvrent dès le matin et proposent, en plus du kaya toast, des options comme le congee ou le dim sum — une façon de petit-déjeuner à la fois locale et bon marché.",
      },
    ],
  },
  {
    city: "Singapore",
    title: "Quel quartier choisir à Singapore ?",
    slug: slugify("Quel quartier choisir à Singapore ?"),
    dek: "Marina Bay, Chinatown, Tiong Bahru : Singapour concentre plusieurs ambiances sur une petite surface.",
    body: [
      {
        text: "Singapour est compacte et très bien connectée en métro (MRT), ce qui rend le choix de quartier moins critique qu'ailleurs — mais chacun a une identité marquée.",
      },
      {
        heading: "Marina Bay / CBD : le Singapour spectaculaire",
        text: "Skyline iconique, hôtels de luxe, Gardens by the Bay à proximité — pratique et impressionnant, mais aussi la zone la plus chère de la ville.",
      },
      {
        heading: "Chinatown : patrimoine et street food",
        text: "Shophouses colorées, temples, et une immense offre de hawker food à prix doux — un bon compromis entre charme, budget et proximité du centre.",
      },
      {
        heading: "Tiong Bahru : le quartier « hipster »",
        text: "Architecture art déco des années 1930, cafés de spécialité, ambiance de quartier plus locale et moins touristique — à privilégier pour un séjour qui dépasse 4-5 jours.",
      },
    ],
  },
  {
    city: "Hong Kong",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Le petit-déjeuner cha chaan teng, institution locale à ne pas manquer à Hong Kong.",
    body: [
      {
        text: "Le cha chaan teng (« salon de thé-restaurant ») est l'institution du petit-déjeuner hongkongais — un mélange unique de cuisine cantonaise et d'influences occidentales héritées de la période coloniale.",
      },
      {
        heading: "Le combo classique",
        text: "Thé au lait à la hongkongaise (très corsé, filtré dans une chaussette en tissu), toast beurré de lait concentré, et œufs — souvent accompagnés de nouilles instantanées, un mélange qui surprend mais fonctionne.",
      },
      {
        heading: "Mido Cafe, une institution",
        text: "Ouvert depuis 1950 à Yau Ma Tei, ce cha chaan teng au décor d'origine (carrelage, box en bois) est l'un des plus photographiés de la ville — et sert toujours une clientèle locale, pas seulement des touristes.",
      },
      {
        heading: "Le dim sum matinal",
        text: "Lin Heung Tea House, vieille institution de Central, sert un dim sum traditionnel dès le matin, chariots compris — une expérience plus animée et plus longue que le cha chaan teng classique.",
      },
    ],
  },
  {
    city: "Hong Kong",
    title: "Quel quartier choisir à Hong Kong ?",
    slug: slugify("Quel quartier choisir à Hong Kong ?"),
    dek: "Central, Mong Kok, ou Sheung Wan : Hong Kong offre des rythmes très différents selon la zone.",
    body: [
      {
        text: "Hong Kong Island et Kowloon, séparés par le port, offrent des ambiances nettement différentes — reliés en quelques minutes par le Star Ferry ou le métro.",
      },
      {
        heading: "Central : affaires et skyline",
        text: "Gratte-ciels, restaurants haut de gamme, la vie nocturne de Soho — Central est central au sens propre, mais aussi la zone la plus chère de la ville.",
      },
      {
        heading: "Mong Kok : dense et populaire",
        text: "Marchés nocturnes, néons, l'une des densités de population les plus élevées au monde — Mong Kok, côté Kowloon, offre une immersion plus brute et des prix nettement plus doux.",
      },
      {
        heading: "Sheung Wan : patrimoine et galeries",
        text: "Voisin de Central mais plus tranquille, ce quartier mêle rues de fruits de mer séchés traditionnelles et galeries d'art contemporain — un bon compromis entre charme local et proximité du centre d'affaires.",
      },
    ],
  },
  {
    city: "Seoul",
    title: "Food guide",
    slug: slugify("Food guide"),
    dek: "Du barbecue coréen au marché de nuit, un panorama de ce qu'il faut goûter à Séoul.",
    body: [
      {
        text: "La cuisine de rue et le barbecue coréen sont les deux piliers d'un séjour culinaire à Séoul — chacun avec ses propres codes à connaître avant d'y aller.",
      },
      {
        heading: "Le barbecue coréen, un rituel",
        text: "Le galbi (côtes de bœuf marinées) et le samgyeopsal (poitrine de porc) se grillent à table et s'enroulent dans une feuille de salade avec ail et pâte de piment (ssamjang) — un repas social, pensé pour durer et se partager.",
      },
      {
        heading: "Gwangjang Market",
        text: "L'un des plus anciens marchés couverts de Séoul, réputé pour son bindaetteok (galette de haricots mungo) et son mayak gimbap (« gimbap qui rend accro », en portions miniatures) — une immersion directe dans la street food locale.",
      },
      {
        heading: "Chimaek, l'institution du soir",
        text: "Contraction de « chicken » et « maekju » (bière), le chimaek — poulet frit coréen accompagné de bière — est l'un des rituels de fin de soirée les plus populaires, particulièrement le week-end.",
      },
    ],
  },
  {
    city: "Seoul",
    title: "Hongdae ou Myeongdong ?",
    slug: slugify("Hongdae ou Myeongdong ?"),
    dek: "Deux quartiers commerçants de Séoul, deux publics très différents.",
    body: [
      {
        text: "Ces deux quartiers concentrent une grande partie de la vie de rue de Séoul, mais s'adressent à des publics assez différents.",
      },
      {
        heading: "Hongdae : jeune, indé, nocturne",
        text: "Autour de l'université Hongik, ce quartier vit au rythme de la scène musicale indépendante, des performances de rue le week-end et des clubs qui ferment tard — l'un des quartiers les plus jeunes de la ville.",
      },
      {
        heading: "Myeongdong : shopping et street food mainstream",
        text: "Cosmétiques coréens, enseignes internationales, et une rue entière dédiée à la street food — plus touristique que Hongdae, mais très pratique pour un premier aperçu de la culture de rue coréenne.",
      },
      {
        heading: "La règle simple",
        text: "Envie de vie nocturne et d'ambiance jeune : Hongdae. Envie de shopping et de street food accessible en une soirée : Myeongdong.",
      },
    ],
  },
  {
    city: "Lisbon",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Pastel de nata et bica : comment bien commencer la journée à la lisboète.",
    body: [
      {
        text: "Le petit-déjeuner lisboète est rapide et se prend souvent debout au comptoir d'une pastelaria de quartier.",
      },
      {
        heading: "Le vrai pastel de nata",
        text: "Pastéis de Belém, qui détient la recette originale depuis 1837, reste la référence historique — mais Manteigaria, plus central, propose une version tout aussi réputée sans le détour jusqu'à Belém ni la file d'attente.",
      },
      {
        heading: "La bica, l'expresso local",
        text: "À Lisbonne, on ne commande pas un « café » mais une « bica » — un expresso court et serré, à prendre debout au comptoir comme le font la plupart des habitants, pour une fraction du prix d'une terrasse touristique.",
      },
      {
        heading: "Time Out Market",
        text: "L'ancien Mercado da Ribeira, transformé en food court géant par le magazine Time Out, réunit des stands tenus par des chefs locaux reconnus — une option plus animée pour un brunch complet.",
      },
    ],
  },
  {
    city: "Lisbon",
    title: "Quel quartier choisir à Lisbon ?",
    slug: slugify("Quel quartier choisir à Lisbon ?"),
    dek: "Alfama, Bairro Alto, Príncipe Real : chaque colline de Lisbonne a sa propre ambiance.",
    body: [
      {
        text: "Bâtie sur sept collines, Lisbonne change d'ambiance à chaque quartier — et le dénivelé fait partie intégrante de l'expérience, pour le meilleur et pour les mollets.",
      },
      {
        heading: "Alfama : le plus ancien",
        text: "Ruelles étroites et pentues, maisons de fado, vue sur le Tage depuis les miradouros (belvédères) — Alfama a gardé son caractère de village malgré une fréquentation touristique croissante.",
      },
      {
        heading: "Bairro Alto : calme le jour, animé la nuit",
        text: "Discret en journée, ce quartier se transforme en l'une des zones de sortie les plus denses de la ville dès la tombée de la nuit, avec des dizaines de petits bars qui débordent sur la rue.",
      },
      {
        heading: "Príncipe Real : posé et élégant",
        text: "Boutiques indépendantes, jardins, restaurants plus calmes — une alternative plus tranquille à Bairro Alto, à quelques minutes à pied.",
      },
    ],
  },
  {
    city: "Lima",
    title: "Miraflores ou Barranco ?",
    slug: slugify("Miraflores ou Barranco ?"),
    dek: "Les deux quartiers se touchent presque, mais l’ambiance change du tout au tout.",
    body: [
      {
        text: "Miraflores et Barranco sont séparés d’à peine 15 minutes à pied le long du malecón, mais ils ne s’adressent pas au même voyageur. Le choix se fait moins sur la distance que sur ce que vous voulez faire le soir.",
      },
      {
        heading: "Miraflores : la base pratique",
        text: "Falaises aménagées, parcs, centres commerciaux, sécurité maximale et la plus forte concentration de bons restaurants de la ville (Central et Maido y sont tous les deux). C’est le choix le plus simple pour un premier séjour, surtout si vous voyagez en famille ou que c’est votre premier passage en Amérique du Sud.",
      },
      {
        heading: "Barranco : l’ambiance",
        text: "Ruelles colorées, galeries d’art, bars à pisco sour et la meilleure vie nocturne de Lima. Plus petit et moins « lisse » que Miraflores, avec un vrai caractère bohème hérité de son passé de quartier de villégiature du XIXe siècle.",
      },
      {
        heading: "La solution la plus courante",
        text: "Beaucoup de voyageurs dorment à Miraflores et viennent à Barranco en soirée — un trajet de 10-15 minutes en taxi ou à pied par le malecón. Si la vie nocturne est votre priorité numéro un, dormir directement à Barranco évite l’aller-retour.",
      },
    ],
  },
  {
    city: "Lima",
    title: "Depuis l’aéroport Jorge Chávez",
    slug: slugify("Depuis l’aéroport Jorge Chávez"),
    dek: "L’aéroport est loin du centre touristique — mieux vaut anticiper le trajet.",
    body: [
      {
        text: "L’aéroport international Jorge Chávez (LIM) se trouve dans le Callao, à l’opposé de Miraflores et Barranco par rapport au centre-ville. Comptez 45 à 60 minutes de trajet selon l’heure — et beaucoup plus en heure de pointe.",
      },
      {
        heading: "Taxi ou VTC",
        text: "L’option la plus simple reste le taxi ou Uber réservé depuis l’application, à prendre au comptoir officiel dans le hall des arrivées plutôt qu’avec les rabatteurs à la sortie. Comptez environ 25-35 USD vers Miraflores.",
      },
      {
        heading: "Airport Express Lima",
        text: "Un bus direct dessert Miraflores, San Isidro et Barranco depuis l’aéroport, à un tarif fixe nettement inférieur au taxi. Moins flexible avec des bagages volumineux, mais fiable et sans négociation.",
      },
      {
        heading: "Le point d’attention",
        text: "Le Callao a une réputation sécuritaire plus difficile que le reste de Lima : ne vous attardez pas aux abords de l’aéroport et réservez votre transfert plutôt que d’en chercher un sur place.",
      },
    ],
  },
  {
    city: "Cusco",
    title: "San Blas ou Plaza de Armas ?",
    slug: slugify("San Blas ou Plaza de Armas ?"),
    dek: "À quelques rues d’écart, deux façons très différentes de vivre le centre historique.",
    body: [
      {
        text: "San Blas et la Plaza de Armas sont contigus — la question n’est pas la distance mais la pente et le bruit. Cusco est une ville qui se vit essentiellement à pied, autant choisir le bon point de départ.",
      },
      {
        heading: "Plaza de Armas : tout à portée de main",
        text: "Restaurants, agences de voyage, cathédrale, animation permanente. Pratique pour une arrivée avec beaucoup de bagages, mais bruyant tard le soir et l’un des secteurs les plus chers de la ville.",
      },
      {
        heading: "San Blas : le charme, au prix de la pente",
        text: "Ruelles pavées en forte montée, ateliers d’artisans, vue sur les toits de tuiles. Le quartier le plus photogénique de Cusco, mais les rues pentues sont éprouvantes les deux ou trois premiers jours, le temps de s’acclimater à l’altitude.",
      },
      {
        heading: "Notre recommandation",
        text: "Si c’est votre première nuit à 3 400 m, privilégiez un hébergement proche de la Plaza de Armas où la marche est plus plate. San Blas devient plus agréable une fois acclimaté, à partir du 2e ou 3e jour.",
      },
    ],
  },
  {
    city: "Cusco",
    title: "Gérer l’altitude à Cusco",
    slug: slugify("Gérer l’altitude à Cusco"),
    dek: "3 400 mètres, ce n’est pas anodin — quelques précautions évitent un mal des montagnes qui gâche les deux premiers jours.",
    body: [
      {
        text: "Cusco est plus haute que la plupart des grands sommets alpins accessibles en randonnée. Le soroche (mal des montagnes) touche une large majorité de voyageurs à des degrés divers, quel que soit leur niveau physique.",
      },
      {
        heading: "Les 24 premières heures",
        text: "Évitez tout effort physique important le jour d’arrivée. Pas d’alcool le premier soir — il aggrave nettement les symptômes. Buvez plus d’eau que d’habitude et mangez léger.",
      },
      {
        heading: "Le mate de coca",
        text: "Servi partout dans les hôtels dès l’arrivée, l’infusion de feuilles de coca est l’remède traditionnel le plus répandu contre les maux de tête liés à l’altitude. Légal et efficace en usage local.",
      },
      {
        heading: "Si ça ne passe pas",
        text: "Maux de tête, essoufflement et fatigue disparaissent généralement en 2-3 jours. Des symptômes plus sévères (vertiges importants, difficulté à respirer au repos) justifient une consultation — les pharmacies du centre vendent de l’acétazolamide sans ordonnance stricte, mais l’avis d’un médecin reste préférable avant le départ si vous avez des antécédents cardiaques ou respiratoires.",
      },
    ],
  },
  {
    city: "Bogotá",
    title: "Chapinero ou Zona Rosa ?",
    slug: slugify("Chapinero ou Zona Rosa ?"),
    dek: "Deux quartiers du nord de Bogotá, deux ambiances et deux budgets différents.",
    body: [
      {
        text: "Chapinero et la Zona Rosa/Chicó sont voisins mais se sont développés autour de logiques différentes : l’un autour d’une scène culturelle et nocturne, l’autre autour du shopping et des affaires.",
      },
      {
        heading: "Chapinero : la vie nocturne et le mélange",
        text: "Le quartier le plus vivant de Bogotá le soir, avec la plus forte concentration de bars, restaurants et la scène LGBTQ+ la plus visible de la ville (Chapinero Alto). Ambiance jeune, prix plus raisonnables que la Zona Rosa.",
      },
      {
        heading: "Zona Rosa / Chicó : le confort premium",
        text: "Hôtels internationaux, centres commerciaux haut de gamme, rues larges et sécurisées. Moins de caractère local, mais le choix le plus rassurant pour un premier séjour en Colombie.",
      },
      {
        heading: "Le vrai critère",
        text: "Si vous cherchez une immersion et une vie de quartier, Chapinero l’emporte largement. Si la priorité absolue est la tranquillité et la proximité des grandes enseignes, la Zona Rosa reste la valeur sûre.",
      },
    ],
  },
  {
    city: "Bogotá",
    title: "Bogotá est-elle sûre ?",
    slug: slugify("Bogotá est-elle sûre ?"),
    dek: "La réputation de la ville a beaucoup évolué — voici ce qui reste vrai et ce qui ne l’est plus.",
    body: [
      {
        text: "Bogotá a une réputation sécuritaire datée qui ne reflète plus la réalité des quartiers touristiques et d’affaires du nord de la ville. Le bon sens habituel s’applique, avec quelques particularités locales à connaître.",
      },
      {
        heading: "Ce qui est globalement sûr",
        text: "La Candelaria de jour, Chapinero, Zona Rosa, Usaquén et Chicó ne posent pas de problème particulier pour un voyageur attentif. La délinquance visée touche surtout le vol à l’arraché opportuniste, pas la violence gratuite envers les touristes.",
      },
      {
        heading: "Les précautions qui font la différence",
        text: "Éviter d’exhiber un téléphone ou un appareil photo coûteux en pleine rue, préférer Uber ou Cabify à un taxi hélé dans la rue le soir, et éviter La Candelaria après la tombée de la nuit sauf pour rejoindre directement un lieu connu.",
      },
      {
        heading: "Ce qu’il faut éviter",
        text: "Certains quartiers du sud de la ville n’ont aucun intérêt touristique et sont à éviter sans raison précise. Ce n’est pas une contrainte réelle : aucun itinéraire de voyage classique ne vous y amène.",
      },
    ],
  },
  {
    city: "Zanzibar",
    title: "Stone Town ou plage directement ?",
    slug: slugify("Stone Town ou plage directement ?"),
    dek: "Passer par la ville historique ou filer droit vers le sable — la question se pose dès la réservation.",
    body: [
      {
        text: "Zanzibar concentre deux expériences très différentes sur une même île : la densité culturelle de Stone Town et la décompression pure des plages du nord et de l’est. La plupart des voyages réussis combinent les deux, dans le bon ordre.",
      },
      {
        heading: "Le bon enchaînement",
        text: "Arriver à Stone Town, y passer une à deux nuits pour visiter les marchés aux épices, le fort et les ruelles classées UNESCO, puis rejoindre la plage pour le reste du séjour. Faire l’inverse est possible mais moins confortable : Stone Town se visite mieux frais et reposé qu’en fin de séjour, fatigué de la plage.",
      },
      {
        heading: "Si le temps manque",
        text: "Avec moins de 5 jours sur place, il est raisonnable de sauter Stone Town au profit de la plage — l’aéroport ZNZ dessert directement les transferts vers le nord (Nungwi) sans passer par la ville.",
      },
    ],
  },
  {
    city: "Zanzibar",
    title: "Nungwi ou Paje ?",
    slug: slugify("Nungwi ou Paje ?"),
    dek: "Les deux meilleures plages de l’île, pour deux profils de voyageurs différents.",
    body: [
      {
        text: "Nungwi, à la pointe nord, et Paje, sur la côte est, sont les deux zones balnéaires les plus populaires de Zanzibar — mais elles ne se ressemblent pas du tout.",
      },
      {
        heading: "Nungwi : la plage « classique »",
        text: "Sable blanc, mer calme et baignable à toute heure (contrairement à l’est, où la marée découvre parfois de larges bancs de corail), nombreux resorts et une vraie vie nocturne. Le choix le plus simple pour une première visite.",
      },
      {
        heading: "Paje : le spot de kitesurf",
        text: "Vent constant, écoles de kite réputées mondialement, ambiance plus jeune et décontractée. La marée y est plus marquée : la baignade dépend fortement de l’horaire, à vérifier avant de choisir son hôtel.",
      },
      {
        heading: "Le départage",
        text: "Pour nager toute la journée sans contrainte de marée, Nungwi l’emporte. Pour le sport nautique et une ambiance backpacker, Paje est la meilleure base — Jambiani, juste à côté, offre une version plus calme du même littoral.",
      },
    ],
  },
  {
    city: "Hanoi",
    title: "Vieux Quartier ou Tay Ho ?",
    slug: slugify("Vieux Quartier ou Tay Ho ?"),
    dek: "Le chaos historique ou le calme du lac — deux Hanoï qui coexistent à quelques kilomètres l’une de l’autre.",
    body: [
      {
        text: "Le Vieux Quartier et Tay Ho (le lac de l’Ouest) représentent les deux pôles de l’expérience à Hanoï, et le choix dépend surtout de votre tolérance au bruit et à la densité.",
      },
      {
        heading: "Vieux Quartier : l’immersion totale",
        text: "36 rues, chacune historiquement spécialisée dans un artisanat, marchés de rue, scooters en continu et une vie qui déborde sur le trottoir à toute heure. Le meilleur choix pour un séjour court et une immersion maximale, au prix d’un sommeil parfois agité par le bruit.",
      },
      {
        heading: "Tay Ho : la pause",
        text: "Cafés en bord de lac, communauté expatriée importante, restaurants internationaux et un rythme nettement plus calme. Idéal pour un séjour plus long ou pour décompresser après quelques jours dans le Vieux Quartier.",
      },
      {
        heading: "La combinaison qui fonctionne",
        text: "Beaucoup de voyageurs commencent par 2-3 nuits dans le Vieux Quartier pour l’immersion, puis rejoignent Tay Ho pour la fin du séjour — les deux quartiers sont à 20-25 minutes en taxi ou Grab l’un de l’autre.",
      },
    ],
  },
  {
    city: "Hanoi",
    title: "Traverser la rue à Hanoï",
    slug: slugify("Traverser la rue à Hanoï"),
    dek: "La circulation impressionne tous les nouveaux arrivants — la méthode qui marche vraiment.",
    body: [
      {
        text: "Avec des centaines de scooters par minute à certains carrefours et peu de feux respectés à la lettre, traverser une rue à Hanoï déstabilise presque tous les voyageurs les premières heures. Il existe pourtant une méthode simple et fiable.",
      },
      {
        heading: "Le principe : avancer, ne jamais s’arrêter",
        text: "Les scooters anticipent votre trajectoire et l’ajustent en continu. S’arrêter brusquement au milieu de la rue casse cette anticipation et augmente le risque, contrairement à l’intuition. Avancez à vitesse lente et constante, sans hésitation.",
      },
      {
        heading: "Ce qu’il faut éviter",
        text: "Courir : cela rend votre trajectoire imprévisible pour les deux-roues qui vous contournent. Regarder son téléphone en marchant. S’arrêter net au milieu si un scooter approche — il vous a déjà anticipé.",
      },
      {
        heading: "Le bon réflexe",
        text: "Choisissez un moment où le flux n’est pas à son maximum, avancez d’un pas régulier en diagonale plutôt que perpendiculairement, et laissez les scooters s’adapter autour de vous. Après quelques traversées, le réflexe devient naturel.",
      },
    ],
  },
  {
    city: "Safaris",
    title: "Kenya, Tanzanie, Afrique du Sud ou Botswana ?",
    slug: slugify("Kenya, Tanzanie, Afrique du Sud ou Botswana ?"),
    dek: "Quatre pays, quatre types de safari — le bon choix dépend plus de votre budget et de votre patience que de la destination elle-même.",
    body: [
      {
        text: "« Faire un safari » recouvre des expériences très différentes selon le pays. Avant de comparer les prix, comparez ce que chaque destination fait réellement le mieux.",
      },
      {
        heading: "Kenya : l’accessibilité",
        text: "Vols directs depuis l’Europe, infrastructure touristique rodée, et le Maasai Mara à 45 minutes de vol de Nairobi. Le meilleur choix pour un premier safari ou un séjour court — mais aussi le plus fréquenté pendant la migration.",
      },
      {
        heading: "Tanzanie : l’espace",
        text: "Le Serengeti est bien plus vaste que le Mara, avec une densité touristique nettement plus faible. Comptez un budget plus élevé et davantage de temps de trajet entre les zones.",
      },
      {
        heading: "Afrique du Sud : le budget maîtrisé",
        text: "Le Kruger permet l’autotour, ce qui change radicalement l’équation budgétaire — pas de guide obligatoire, hébergements publics abordables. Le meilleur rapport qualité-prix pour découvrir un safari sans se ruiner.",
      },
      {
        heading: "Botswana : l’exclusivité",
        text: "Politique de « faible volume, prix élevé » : nombre de lits volontairement limité dans le delta de l’Okavango pour préserver l’expérience. Le choix le plus cher, mais celui où l’on croise le moins d’autres véhicules.",
      },
      {
        heading: "Si vous hésitez",
        text: "Premier safari et budget serré : Afrique du Sud. Envie de la migration : Kenya (court séjour) ou Tanzanie (plus de temps et de budget). Lune de miel ou occasion spéciale : Botswana.",
      },
    ],
  },
  {
    city: "Safaris",
    title: "Combien coûte vraiment un safari ?",
    slug: slugify("Combien coûte vraiment un safari ?"),
    dek: "Le prix affiché n’inclut presque jamais tout — voici ce qui s’ajoute une fois sur place.",
    body: [
      {
        text: "Un safari se vend rarement au prix affiché seul : vols intérieurs, permis de parc, pourboires et boissons s’additionnent souvent à 20-30 % du forfait de base.",
      },
      {
        heading: "Ce qui est presque toujours inclus",
        text: "Hébergement, pension complète, sorties en véhicule avec guide, et les droits de parc dans la plupart des forfaits lodge ou mobile.",
      },
      {
        heading: "Ce qui s’ajoute souvent",
        text: "Les vols intérieurs entre parcs (obligatoires en Tanzanie et au Botswana, en petit porteur), les permis spécifiques (gorilles en Ouganda : environ 700 USD par personne et par trek), les boissons hors eau/thé, et les pourboires pour le guide (10-15 USD/jour est la norme informelle).",
      },
      {
        heading: "Le vrai écart de prix",
        text: "Un safari mobile/camping en Afrique du Sud peut démarrer autour de 150 €/jour tout compris. Un camp exclusif dans le delta de l’Okavango dépasse facilement 1000 €/jour par personne, vols inclus. L’écart tient moins au confort qu’à la rareté : moins de lits, moins de véhicules, prix plus élevé.",
      },
      {
        heading: "Le poste qu’on oublie",
        text: "L’assurance rapatriement/évacuation médicale est quasi indispensable dans les zones reculées, où l’hôpital le plus proche peut être à plusieurs heures de vol.",
      },
    ],
  },
  {
    city: "Croisières",
    title: "Petit navire ou paquebot géant ?",
    slug: slugify("Petit navire ou paquebot géant ?"),
    dek: "De 100 à plus de 6000 passagers : la taille du navire change presque tout, sauf le prix au premier regard.",
    body: [
      {
        text: "Deux croisières sur un même itinéraire peuvent proposer une expérience radicalement différente selon qu’elles embarquent 150 ou 5000 passagers. La taille du navire est souvent le critère le plus sous-estimé au moment de réserver.",
      },
      {
        heading: "Le paquebot géant",
        text: "Piscines, spectacles, dizaines de restaurants, animation permanente — pensé pour ne jamais s’ennuyer à bord. En contrepartie, les escales se font souvent en même temps que 3-4 autres navires, avec des files d’attente à terre.",
      },
      {
        heading: "Le navire moyen (fjords, Alaska)",
        text: "Quelques centaines de passagers, moins d’animation à bord mais un accès à des zones que les géants ne peuvent pas naviguer — fjords étroits, ports plus petits, meilleure vue depuis le pont.",
      },
      {
        heading: "Le navire d’expédition",
        text: "100 à 200 passagers, souvent renforcé pour la glace (Antarctique, Arctique), avec une équipe de naturalistes à bord et des débarquements en zodiac. L’expérience la plus immersive, au prix le plus élevé au jour.",
      },
      {
        heading: "Le vrai critère de choix",
        text: "Si l’animation à bord et le prix par jour priment, le grand paquebot l’emporte largement. Si le paysage et la faune sont la priorité, chaque mètre de moins sur la longueur du navire se traduit en accès à des endroits plus reculés.",
      },
    ],
  },
  {
    city: "Croisières",
    title: "Combien coûte vraiment une croisière ?",
    slug: slugify("Combien coûte vraiment une croisière ?"),
    dek: "Le prix d’appel cache presque toujours des extras qui peuvent représenter la moitié du budget final.",
    body: [
      {
        text: "Le tarif affiché d’une croisière correspond à la cabine et à la pension de base — une part significative du budget se joue une fois à bord ou au moment des excursions.",
      },
      {
        heading: "Ce qui est inclus dans le prix de base",
        text: "La cabine, la pension complète aux restaurants principaux, l’accès aux piscines et à une partie des animations, et le transport entre les escales.",
      },
      {
        heading: "Ce qui s’ajoute presque toujours",
        text: "Les excursions à terre (souvent 60-150 € par escale et par personne si réservées auprès de la compagnie), le forfait boissons, le wifi à bord, et les pourboires d’équipage — généralement prélevés automatiquement, de l’ordre de 12-16 €/jour/personne.",
      },
      {
        heading: "L’écart selon le type de cabine",
        text: "Sur un même navire, une cabine intérieure peut coûter deux fois moins cher qu’une suite avec balcon. Pour les fjords ou l’Alaska où le paysage compte davantage, un balcon change réellement l’expérience ; pour les Caraïbes où l’on passe peu de temps en cabine, l’intérieure reste un choix rationnel.",
      },
      {
        heading: "Le réflexe qui fait économiser",
        text: "Réserver les excursions en indépendant à quai (quand l’escale le permet) coûte souvent 30-50 % de moins que la même excursion vendue par la compagnie — au prix d’un peu plus d’organisation et du risque, réel, de rater le départ du navire.",
      },
    ],
  },
  {
    city: "Osaka",
    title: "Dotonbori ou Namba ?",
    slug: slugify("Dotonbori ou Namba ?"),
    dek: "Deux noms pour un même quartier au fond, mais une nuance qui change l’ambiance de vos soirées.",
    body: [
      {
        text: "Dotonbori et Namba sont en réalité contigus — la frontière entre les deux est plus administrative que ressentie en marchant. La vraie question est de savoir combien de bruit et de néons vous voulez sous votre fenêtre.",
      },
      {
        heading: "Dotonbori : au cœur du spectacle",
        text: "Le canal, les enseignes géantes (le crabe de Kani Doraku, le coureur Glico), et la plus forte densité de restaurants au mètre carré d’Osaka. Génial pour l’ambiance, mais les hôtels donnant sur le canal sont bruyants jusque tard.",
      },
      {
        heading: "Namba : la même énergie, un peu plus loin",
        text: "À 5-10 minutes à pied de Dotonbori, Namba concentre les grands magasins et la gare, avec des rues résidentielles adjacentes nettement plus calmes pour dormir.",
      },
      {
        heading: "Le bon choix",
        text: "Pour un séjour court et une immersion totale, Dotonbori. Pour un bon compromis entre accès à pied et sommeil correct, une rue légèrement en retrait de Namba fait aussi bien à prix inférieur.",
      },
    ],
  },
  {
    city: "Busan",
    title: "Haeundae ou Gamcheon ?",
    slug: slugify("Haeundae ou Gamcheon ?"),
    dek: "La grande plage hôtelière ou le village de collines colorées — deux visages très différents de Busan.",
    body: [
      {
        text: "Haeundae et Gamcheon ne se comparent pas vraiment : l’un est une base pour dormir et se baigner, l’autre une visite d’une demi-journée. La question est plutôt où poser sa valise.",
      },
      {
        heading: "Haeundae : la base pratique",
        text: "Plage principale de Busan, bordée de tours hôtelières et de restaurants, à 25-30 minutes en métro du reste de la ville. Le choix le plus confortable pour un premier séjour.",
      },
      {
        heading: "Gamcheon : une visite, pas un hébergement",
        text: "Le village aux maisons pastel se visite en 2-3 heures de marche dans les escaliers — peu d’hébergements sur place et un quartier qui se vide en fin d’après-midi. À prévoir en excursion depuis Nampo-dong ou Haeundae.",
      },
      {
        heading: "Le bon choix",
        text: "Dormir à Haeundae (ou Nampo-dong si vous préférez le centre historique) et consacrer une demi-journée à Gamcheon, idéalement en fin de matinée pour éviter la chaleur et la foule de l’après-midi.",
      },
    ],
  },
  {
    city: "Xi'an",
    title: "Voir l’armée de terre cuite sans galère",
    slug: slugify("Voir l’armée de terre cuite sans galère"),
    dek: "Le site le plus visité de Xi’an est aussi celui où la foule et la chaleur peuvent gâcher la visite si l’on s’y prend mal.",
    body: [
      {
        text: "L’armée de terre cuite se trouve à environ 1h de route du centre de Xi’an, sur le site funéraire de l’empereur Qin Shi Huang. Trois fosses se visitent, mais une seule concentre l’essentiel de l’intérêt.",
      },
      {
        heading: "Quelle fosse prioriser",
        text: "La fosse 1 est la plus impressionnante : des centaines de soldats alignés dans un immense hangar. Les fosses 2 et 3, plus petites et partiellement fouillées, intéressent surtout si le temps ne manque pas.",
      },
      {
        heading: "Éviter la foule",
        text: "Arriver à l’ouverture (souvent 8h30) ou en fin d’après-midi réduit nettement l’affluence — le site est pris d’assaut par les groupes entre 10h et 14h.",
      },
      {
        heading: "Comment s’y rendre",
        text: "Le bus 306 depuis la gare de Xi’an est l’option la plus économique. Un chauffeur privé ou un tour organisé coûte plus cher mais évite la correspondance et inclut souvent un arrêt au mausolée voisin.",
      },
    ],
  },
  {
    city: "Siem Reap",
    title: "Combien de jours pour Angkor ?",
    slug: slugify("Combien de jours pour Angkor ?"),
    dek: "Un pass d’un jour suffit à voir l’essentiel — mais Angkor mérite souvent plus que ça.",
    body: [
      {
        text: "Le site d’Angkor s’étend sur plus de 400 km², avec des dizaines de temples de qualité très inégale. Le nombre de jours dépend moins de l’envie de « tout voir » que du rythme que vous voulez tenir sous la chaleur.",
      },
      {
        heading: "1 jour : l’essentiel",
        text: "Angkor Wat, Bayon (les visages géants) et Ta Prohm (les racines d’arbres sur les ruines) couvrent les trois monuments les plus emblématiques en une journée bien remplie.",
      },
      {
        heading: "3 jours : le format recommandé",
        text: "Ajoute le petit circuit et le grand circuit, avec des temples moins fréquentés comme Banteay Srei ou Preah Khan, et surtout le temps de repartir se reposer à l’hôtel entre 11h et 15h, quand la chaleur est la plus forte.",
      },
      {
        heading: "Le levé de soleil sur Angkor Wat",
        text: "Rituel très populaire, donc très fréquenté — des centaines de visiteurs partagent le même point de vue avant l’aube. Une visite en fin d’après-midi, moins courue, offre souvent une meilleure expérience pour le même monument.",
      },
    ],
  },
  {
    city: "Luang Prabang",
    title: "Voir la cérémonie de l’aumône aux moines",
    slug: slugify("Voir la cérémonie de l’aumône aux moines"),
    dek: "Un rituel bouddhiste quotidien devenu attraction touristique — la manière de l’observer change tout.",
    body: [
      {
        text: "Chaque matin avant l’aube, des centaines de moines défilent en silence dans les rues de Luang Prabang pour recevoir l’aumône alimentaire des habitants. C’est un moment religieux authentique, pas un spectacle organisé pour les touristes.",
      },
      {
        heading: "Comment bien y assister",
        text: "Se tenir en retrait sur le trottoir, en silence, sans flash ni contact visuel appuyé avec les moines. Éviter absolument de s’asseoir sur des tabourets vendus par des rabatteurs pour « participer » à l’aumône — cette pratique commerciale dénature le rituel et est critiquée par les autorités religieuses locales.",
      },
      {
        heading: "L’horaire",
        text: "La procession commence généralement entre 5h30 et 6h, selon la saison. Se positionner sur la rue principale (Sisavangvong) ou dans une ruelle plus calme pour une expérience moins photographiée.",
      },
      {
        heading: "Après la cérémonie",
        text: "Le marché du matin qui se tient juste après vaut le détour : fruits, légumes et produits locaux, avant que la ville ne se réveille vraiment.",
      },
    ],
  },
  {
    city: "Chiang Mai",
    title: "La vieille ville ou Nimman ?",
    slug: slugify("La vieille ville ou Nimman ?"),
    dek: "Le carré fortifié historique ou le quartier café-coworking — deux Chiang Mai qui se répondent.",
    body: [
      {
        text: "La vieille ville et Nimmanhaemin sont à 15-20 minutes à pied l’un de l’autre, mais représentent deux rythmes de voyage très différents.",
      },
      {
        heading: "La vieille ville : les temples au réveil",
        text: "Carré fortifié avec plus de 30 temples, dont le Wat Phra Singh et le Wat Chedi Luang. Ambiance plus touristique mais on peut visiter la majorité des sites à pied, sans transport.",
      },
      {
        heading: "Nimman : la vie de quartier",
        text: "Cafés de spécialité, boutiques design et digital nomads — un Chiang Mai plus contemporain, avec une meilleure offre de restaurants végétariens et internationaux.",
      },
      {
        heading: "Le bon choix",
        text: "Séjour court centré sur les temples : la vieille ville. Séjour plus long avec du travail à distance ou une envie de rythme plus urbain : Nimman, à une courte course de songthaew des principaux sites.",
      },
    ],
  },
  {
    city: "Yogyakarta",
    title: "Borobudur au lever du soleil, ça vaut le coup ?",
    slug: slugify("Borobudur au lever du soleil, ça vaut le coup ?"),
    dek: "Une option premium à prix élevé, à comparer honnêtement à la visite classique.",
    body: [
      {
        text: "Borobudur, le plus grand temple bouddhiste du monde, propose une entrée « sunrise » séparée et nettement plus chère que le billet standard. La question mérite d’être posée avant de réserver.",
      },
      {
        heading: "Ce que l’option sunrise inclut",
        text: "Un accès avant l’ouverture générale, depuis un hôtel voisin (Manohara) ou via un tour organisé, avec la possibilité de voir le soleil se lever sur les volcans environnants depuis le sommet du temple.",
      },
      {
        heading: "Le vrai compromis",
        text: "Le ciel est souvent brumeux ou nuageux, ce qui rend le lever de soleil imprévisible malgré le prix élevé (le billet sunrise coûte plusieurs fois le tarif standard). Une visite en milieu de matinée, en entrée classique, offre une lumière tout aussi belle avec beaucoup moins de dépense.",
      },
      {
        heading: "Notre recommandation",
        text: "Réservez le sunrise uniquement si le lever de soleil en lui-même est votre priorité absolue et que le budget le permet. Pour photographier le temple dans de bonnes conditions à moindre coût, une arrivée à l’ouverture standard (souvent 6h) fonctionne presque aussi bien.",
      },
    ],
  },
  {
    city: "Ho Chi Minh City",
    title: "District 1 ou Thao Dien ?",
    slug: slugify("District 1 ou Thao Dien ?"),
    dek: "Le centre touristique dense ou le quartier expat calme de l’autre côté de la rivière.",
    body: [
      {
        text: "District 1 et Thao Dien sont séparés par la rivière Saïgon — environ 20 minutes de trajet, mais une ambiance radicalement différente.",
      },
      {
        heading: "District 1 : tout à portée de main",
        text: "Marché Ben Thanh, rue Bui Vien, la majorité des sites historiques et une offre d’hébergement immense à tous les prix. Le choix le plus pratique pour un premier séjour ou un court passage.",
      },
      {
        heading: "Thao Dien : la pause",
        text: "Cafés design, restaurants internationaux et rues plus calmes et verdoyantes. Beaucoup d’expatriés y vivent, ce qui se traduit par une offre culinaire variée mais des prix plus élevés qu’ailleurs en ville.",
      },
      {
        heading: "Le bon choix",
        text: "Pour un séjour de 2-3 jours centré sur les visites, District 1 reste imbattable en logistique. Pour un séjour plus long ou pour souffler après plusieurs villes vietnamiennes denses, Thao Dien change vraiment le rythme.",
      },
    ],
  },
  {
    city: "Tunis",
    title: "Médina ou Sidi Bou Saïd ?",
    slug: slugify("Médina ou Sidi Bou Saïd ?"),
    dek: "Le labyrinthe historique du centre ou le village-carte postale en bord de mer.",
    body: [
      {
        text: "La médina de Tunis et Sidi Bou Saïd n’offrent pas la même expérience — l’une est une immersion urbaine dense, l’autre une pause visuelle en hauteur face à la Méditerranée.",
      },
      {
        heading: "La médina : l’immersion",
        text: "Souks labyrinthiques classés UNESCO, artisanat et palais historiques. Se visite idéalement le matin, avant que la chaleur et l’affluence ne montent.",
      },
      {
        heading: "Sidi Bou Saïd : la carte postale",
        text: "Ruelles pavées, façades blanches aux volets bleus et vue sur le golfe de Tunis. Accessible en 20-25 minutes de train (le TGM) depuis le centre, idéal en fin d’après-midi pour le coucher de soleil.",
      },
      {
        heading: "Le bon choix",
        text: "Les deux se complètent plutôt qu’ils ne s’opposent : médina le matin pour l’immersion, Sidi Bou Saïd en fin de journée pour la lumière et le calme. Difficile de choisir l’un sans l’autre sur un séjour de plus de 2 jours.",
      },
    ],
  },
  {
    city: "Algiers",
    title: "Visiter la Casbah, mode d’emploi",
    slug: slugify("Visiter la Casbah, mode d’emploi"),
    dek: "La citadelle ottomane d’Alger se mérite : dénivelé, dédale de ruelles et quelques précautions simples.",
    body: [
      {
        text: "Classée à l’UNESCO, la Casbah d’Alger est un entrelacs de ruelles en escalier qui dévale la colline vers la baie. Sa visite demande un peu plus de préparation qu’une simple balade.",
      },
      {
        heading: "Le bon moment",
        text: "Le matin, en semaine, offre la lumière la plus agréable et l’affluence la plus faible. Certaines parties du quartier restent peu entretenues : de bonnes chaussures sont indispensables.",
      },
      {
        heading: "Avec ou sans guide",
        text: "La Casbah se prête particulièrement bien à une visite guidée locale : le dédale de ruelles n’est pas signalisé, et un guide donne accès à des points de vue et des récits qu’on ne trouve pas seul.",
      },
      {
        heading: "Ce qu’il ne faut pas manquer",
        text: "Le palais du Dey, la Grande Mosquée et surtout les points de vue sur la baie d’Alger depuis les hauteurs du quartier, particulièrement spectaculaires en fin de journée.",
      },
    ],
  },
  {
    city: "Amman",
    title: "Petra en 1 jour depuis Amman",
    slug: slugify("Petra en 1 jour depuis Amman"),
    dek: "Faisable, mais avec un vrai compromis sur le temps passé sur place.",
    body: [
      {
        text: "Petra se trouve à environ 3h de route au sud d’Amman. Une excursion en une journée est possible mais laisse peu de marge — mieux vaut savoir à quoi s’attendre avant de réserver.",
      },
      {
        heading: "Le format journée",
        text: "Départ très tôt (5h-6h) pour arriver à l’ouverture du site vers 8h-9h, avec environ 4-5h sur place avant de reprendre la route en fin d’après-midi. Suffisant pour voir le Trésor, le théâtre et le monastère si le rythme est soutenu.",
      },
      {
        heading: "Ce qu’on rate en une journée",
        text: "Petra by Night (la marche aux bougies jusqu’au Trésor, certains soirs seulement) et l’exploration des sentiers annexes moins fréquentés, qui demandent une deuxième journée.",
      },
      {
        heading: "L’alternative recommandée",
        text: "Si le programme le permet, une nuit à Wadi Musa (le village au pied de Petra) change complètement l’expérience : arrivée au site dès l’ouverture, sans les heures de route qui fatiguent avant même la visite.",
      },
    ],
  },
  {
    city: "Abu Dhabi",
    title: "La Grande Mosquée Cheikh Zayed, mode d’emploi",
    slug: slugify("La Grande Mosquée Cheikh Zayed, mode d’emploi"),
    dek: "Le monument le plus visité d’Abu Dhabi a un dress code strict et des horaires à connaître avant de s’y rendre.",
    body: [
      {
        text: "Avec ses 82 dômes et le plus grand tapis tissé à la main du monde, la Grande Mosquée Cheikh Zayed est gratuite et ouverte à tous les visiteurs, quelle que soit leur religion — à condition de respecter certaines règles.",
      },
      {
        heading: "Le dress code",
        text: "Épaules et jambes couvertes pour tous, et cheveux couverts par un foulard pour les femmes (des abayas sont prêtées gratuitement à l’entrée si besoin). Prévoir des chaussures faciles à retirer.",
      },
      {
        heading: "Le bon moment",
        text: "Tôt le matin ou en fin d’après-midi pour éviter la chaleur et la foule. La mosquée ferme aux visiteurs non-musulmans pendant les heures de prière.",
      },
      {
        heading: "Pratique",
        text: "L’entrée est gratuite mais une réservation en ligne est recommandée les jours de forte affluence (vendredi et week-ends). Comptez 1h30 à 2h sur place, visites guidées gratuites disponibles à heures fixes.",
      },
    ],
  },
  {
    city: "Jeddah",
    title: "Visiter Al-Balad, le vieux Jeddah",
    slug: slugify("Visiter Al-Balad, le vieux Jeddah"),
    dek: "Le quartier historique classé UNESCO se découvre différemment selon l’heure de la journée.",
    body: [
      {
        text: "Al-Balad concentre l’histoire marchande de Jeddah, avec ses maisons de corail aux balcons de bois sculptés (rawasheen), certaines vieilles de plusieurs siècles. Le quartier vit à deux vitesses très différentes.",
      },
      {
        heading: "Le jour : l’architecture",
        text: "La lumière du matin met en valeur les façades et les détails sculptés des balcons. Beaucoup de bâtiments sont en cours de restauration depuis le classement UNESCO en 2014.",
      },
      {
        heading: "Le soir : la vie de quartier",
        text: "Al-Balad s’anime réellement après le coucher du soleil, avec échoppes, cafés et une ambiance nettement plus vivante que dans la chaleur de la journée.",
      },
      {
        heading: "Pratique",
        text: "Des visites guidées à pied, souvent gratuites ou à prix libre, sont organisées par des associations locales de préservation du patrimoine — la meilleure façon de comprendre l’histoire du quartier au-delà de l’architecture.",
      },
    ],
  },
  {
    city: "Muscat",
    title: "Le souk de Mutrah, mode d’emploi",
    slug: slugify("Le souk de Mutrah, mode d’emploi"),
    dek: "L’un des plus anciens marchés couverts du Golfe, à l’abri du soleil et de la modernisation.",
    body: [
      {
        text: "Contrairement à de nombreux souks du Golfe rénovés à neuf, celui de Mutrah a conservé son architecture et son atmosphère d’origine — ruelles couvertes, encens et échoppes tenues par les mêmes familles depuis des générations.",
      },
      {
        heading: "Ce qu’on y trouve",
        text: "Encens et myrrhe (Oman est l’un des grands producteurs mondiaux), argenterie, textiles et épices. Le marchandage est attendu et fait partie de l’expérience.",
      },
      {
        heading: "Le bon moment",
        text: "Fin d’après-midi et début de soirée, quand la chaleur retombe et que le souk est le plus animé. Fermé pendant la pause de la prière du vendredi midi.",
      },
      {
        heading: "Autour du souk",
        text: "La corniche de Mutrah, juste devant, offre une vue sur les boutres traditionnels amarrés et les collines fortifiées qui encadrent le port — une promenade qui se prête bien à un coucher de soleil.",
      },
    ],
  },
  {
    city: "Manama",
    title: "Manama en une escale de 24h",
    slug: slugify("Manama en une escale de 24h"),
    dek: "La plus petite capitale du Golfe se prête particulièrement bien à une escale courte entre deux vols.",
    body: [
      {
        text: "Bahreïn étant une escale fréquente sur les routes du Golfe, beaucoup de voyageurs n’y passent qu’une journée. C’est suffisant pour saisir l’essentiel de Manama.",
      },
      {
        heading: "Le matin : le souk et le vieux Manama",
        text: "Le souk de Manama, plus authentique et moins touristique que ceux de Dubaï, se visite idéalement tôt pour éviter la chaleur. À proximité, le fort de Bahreïn (Qal’at al-Bahrain), site UNESCO, mérite le détour en taxi.",
      },
      {
        heading: "L’après-midi : Bahrain Bay",
        text: "Le front de mer moderne autour du World Trade Center, avec ses tours à éoliennes intégrées — l’un des symboles architecturaux les plus photographiés du Golfe.",
      },
      {
        heading: "Le soir : Adliya",
        text: "Le quartier le plus animé pour dîner, avec une scène restaurant et café plus internationale que le reste de la ville.",
      },
    ],
  },
  {
    city: "Kigali",
    title: "Réserver un permis gorilles au parc des volcans",
    slug: slugify("Réserver un permis gorilles au parc des volcans"),
    dek: "L’activité phare depuis Kigali se réserve des mois à l’avance et coûte cher — voici comment s’y prendre.",
    body: [
      {
        text: "Le parc national des volcans, à environ 2-3h de route au nord de Kigali, abrite une partie des derniers gorilles de montagne au monde. Le trekking se fait uniquement sur permis, en nombre très limité chaque jour.",
      },
      {
        heading: "Le prix et la réservation",
        text: "Le permis coûte 1500 USD par personne (tarif Rwanda Development Board), à réserver plusieurs mois à l’avance en haute saison — le nombre de permis quotidiens est volontairement restreint pour protéger les groupes de gorilles.",
      },
      {
        heading: "Le déroulement",
        text: "Départ tôt le matin depuis le siège du parc, avec une marche dont la durée est imprévisible (30 minutes à plusieurs heures selon la position du groupe de gorilles ce jour-là) et une heure exactement auprès des gorilles une fois trouvés.",
      },
      {
        heading: "La condition physique",
        text: "Le terrain est volcanique, humide et parfois pentu — une forme physique correcte est nécessaire, mais aucun niveau sportif particulier n’est exigé. Des porteurs locaux peuvent être engagés sur place pour le sac ou en soutien.",
      },
    ],
  },
  {
    city: "Victoria Falls",
    title: "Côté zimbabwéen ou zambien ?",
    slug: slugify("Côté zimbabwéen ou zambien ?"),
    dek: "Les chutes se voient des deux côtés de la frontière, avec un compromis différent selon celui qu’on choisit.",
    body: [
      {
        text: "Victoria Falls se trouve exactement sur la frontière entre le Zimbabwe et la Zambie. Les deux rives donnent accès aux chutes, mais avec des points de vue et des ambiances différentes.",
      },
      {
        heading: "Côté zimbabwéen : la vue d’ensemble",
        text: "Offre environ 75 % du front des chutes visible, avec des sentiers longeant la quasi-totalité de la cascade — la meilleure option pour une vue panoramique complète.",
      },
      {
        heading: "Côté zambien : les activités et un accès différent",
        text: "Vue plus rapprochée et intime sur certaines sections, avec l’accès à Devil’s Pool (baignade au bord du précipice, en saison sèche) et davantage d’activités d’aventure organisées depuis Livingstone.",
      },
      {
        heading: "Voir les deux côtés",
        text: "Un visa journalier permet de traverser la frontière (pont piéton) pour visiter les deux rives dans la même journée — une option courante et recommandée si le temps le permet, pour ne pas avoir à choisir.",
      },
    ],
  },
  {
    city: "Addis Ababa",
    title: "Merkato, le plus grand marché d’Afrique",
    slug: slugify("Merkato, le plus grand marché d’Afrique"),
    dek: "Une expérience sensorielle intense — et quelques précautions simples pour en profiter sereinement.",
    body: [
      {
        text: "Merkato est considéré comme le plus grand marché à ciel ouvert d’Afrique, avec des dizaines de milliers de commerçants répartis par spécialité (épices, textiles, artisanat, pièces automobiles) sur plusieurs kilomètres carrés.",
      },
      {
        heading: "Ce qu’on y trouve",
        text: "Le berbere (mélange d’épices éthiopien), le café éthiopien à la source, et des paniers tissés traditionnels (mesob) parmi les meilleurs prix du pays.",
      },
      {
        heading: "Les précautions",
        text: "La densité et le dédale de ruelles rendent le pickpocketing possible — objets de valeur discrets, sac fermé devant soi, et idéalement une première visite accompagnée d’un guide local ou d’un habitant.",
      },
      {
        heading: "Le bon moment",
        text: "Le matin, avant que la chaleur et la densité de la foule n’atteignent leur maximum. Éviter de s’y aventurer seul après la tombée de la nuit.",
      },
    ],
  },
  {
    city: "Dakar",
    title: "Visiter l’île de Gorée",
    slug: slugify("Visiter l’île de Gorée"),
    dek: "20 minutes de bateau depuis Dakar pour l’un des lieux de mémoire les plus importants d’Afrique de l’Ouest.",
    body: [
      {
        text: "Classée à l’UNESCO, l’île de Gorée fut un point majeur de la traite négrière transatlantique. Sa Maison des Esclaves, avec sa « porte du voyage sans retour », en est le symbole le plus connu.",
      },
      {
        heading: "Comment s’y rendre",
        text: "Ferry depuis l’embarcadère du port de Dakar, environ 20-30 minutes de traversée. Plusieurs départs quotidiens, réservation recommandée le week-end quand l’affluence locale est plus forte.",
      },
      {
        heading: "Ce qu’il faut voir",
        text: "La Maison des Esclaves, le musée historique du Sénégal installé dans l’ancien fort, et simplement flâner dans les ruelles sans voitures de l’île, bordées de maisons coloniales colorées.",
      },
      {
        heading: "Combien de temps prévoir",
        text: "Une demi-journée suffit pour l’essentiel, mais l’île se prête bien à un déjeuner sur place avant de reprendre le ferry en fin d’après-midi, une fois les groupes du matin repartis.",
      },
    ],
  },
  {
    city: "Mauritius",
    title: "Quelle côte choisir à Maurice ?",
    slug: slugify("Quelle côte choisir à Maurice ?"),
    dek: "L’île se pense en côtes, pas en villes — chacune avec son propre climat et son ambiance.",
    body: [
      {
        text: "Maurice a un microclimat différent selon la côte : le nord et l’ouest sont plus secs et ensoleillés, le sud et l’est plus arrosés et venteux. Le choix de la côte pèse autant que celui de l’hôtel.",
      },
      {
        heading: "Nord (Grand Baie) : l’animation",
        text: "La zone la plus touristique et festive, restaurants, sorties en mer et vie nocturne. Le choix le plus pratique pour un premier séjour ou un voyage entre amis.",
      },
      {
        heading: "Ouest (Flic en Flac) : le compromis",
        text: "Plages larges, mer calme et les plus beaux couchers de soleil de l’île, avec un bon équilibre entre animation et tranquillité.",
      },
      {
        heading: "Sud-ouest (Le Morne) : le luxe isolé",
        text: "Péninsule classée UNESCO, spot de kitesurf mondial et grands hôtels 5 étoiles à l’écart de tout — le choix pour une lune de miel ou une déconnexion complète.",
      },
      {
        heading: "Le réflexe utile",
        text: "Louer une voiture au moins une journée permet de faire le tour des côtes sans être limité à son hôtel — les distances sur l’île restent courtes (2h max d’un bout à l’autre).",
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
