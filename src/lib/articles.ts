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
];

export function getArticle(city: string, slug: string) {
  return articles.find((a) => a.city === city && a.slug === slug);
}

export function getArticleSlugForTitle(city: string, title: string) {
  const a = articles.find((a) => a.city === city && a.title === title);
  return a?.slug;
}
