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
  {
    city: "Marrakech",
    title: "Médina ou Guéliz ?",
    slug: slugify("Médina ou Guéliz ?"),
    dek: "La ville rouge a deux visages : le labyrinthe historique et la ville nouvelle plus posée.",
    body: [
      { text: "Marrakech se divise nettement en deux : la médina millénaire et Guéliz, le quartier construit par les Français au XXe siècle. Le choix change complètement le séjour." },
      { heading: "Médina : l’immersion", text: "Souks, riads aux patios cachés, places animées comme Jemaa el-Fna. Magique mais dense et bruyant — un riad bien choisi, avec patio intérieur, fait toute la différence pour dormir au calme." },
      { heading: "Guéliz : le confort", text: "Avenues larges, restaurants modernes, boutiques de créateurs. Moins « carte postale » mais plus simple : taxis faciles, wifi fiable, moins de rabatteurs." },
      { heading: "Le bon choix", text: "Pour un premier séjour, un riad en médina à quelques rues de Jemaa el-Fna reste l’expérience la plus marquante. Pour un séjour plus long ou avec enfants, Guéliz ou Hivernage offrent plus de tranquillité." },
    ],
  },
  {
    city: "Dubai",
    title: "Marina ou Downtown ?",
    slug: slugify("Marina ou Downtown ?"),
    dek: "Les deux quartiers les plus demandés de Dubaï n’offrent pas du tout la même expérience.",
    body: [
      { text: "Downtown et Dubai Marina concentrent la majorité des hôtels de la ville, mais répondent à deux envies différentes." },
      { heading: "Downtown : le Dubaï spectaculaire", text: "Burj Khalifa, Dubai Mall, fontaines chorégraphiées. Le plus central pour le tourisme classique, mais aussi le plus minéral — peu de plage à proximité immédiate." },
      { heading: "Dubai Marina : la vie balnéaire", text: "Gratte-ciels au bord de l’eau, promenade animée, plage de JBR à pied. Ambiance plus détendue, restaurants en terrasse, mais à 25-30 min de Downtown." },
      { heading: "Le bon choix", text: "Downtown pour un court séjour centré sur les incontournables, Marina pour un séjour avec plage et une ambiance plus resort. Le métro relie les deux en moins de 30 minutes." },
    ],
  },
  {
    city: "Cape Town",
    title: "Sea Point ou Camps Bay ?",
    slug: slugify("Sea Point ou Camps Bay ?"),
    dek: "Deux fronts de mer, deux budgets, deux rythmes de vacances.",
    body: [
      { text: "Le choix entre Sea Point et Camps Bay est l’un des plus fréquents pour un premier séjour au Cap — les deux longent l’océan, mais avec un écart de prix et d’ambiance net." },
      { heading: "Sea Point : l’équilibre", text: "Longue promenade côtière, piscines en bord de mer, à pied du City Bowl. Hébergements variés, du budget au haut de gamme, sans la facture de Camps Bay." },
      { heading: "Camps Bay : la carte postale", text: "Plage spectaculaire sous les Douze Apôtres, meilleurs couchers de soleil de la ville. Restaurants et hôtels premium, nettement plus chers et moins pratiques sans voiture." },
      { heading: "Le bon choix", text: "Sea Point comme base principale — marchable, connectée, abordable — avec une soirée ou deux à Camps Bay pour le coucher de soleil, en taxi ou Uber." },
    ],
  },
  {
    city: "Prague",
    title: "Quel quartier choisir à Prague ?",
    slug: slugify("Quel quartier choisir à Prague ?"),
    dek: "Entre le cœur historique animé et les quartiers locaux qui bordent la Vltava.",
    body: [
      { text: "Prague récompense la marche : la plupart des sites majeurs se rejoignent à pied depuis le centre. Le choix du quartier dépend surtout du niveau sonore toléré la nuit." },
      { heading: "Staré Město : tout à portée de main", text: "Horloge astronomique, pont Charles, place de la Vieille Ville. Le plus central et le plus animé — aussi le plus bruyant et le plus cher le soir." },
      { heading: "Malá Strana : le calme sous le château", text: "Ruelles pavées, jardins baroques, vue sur le château. Romantique et photogénique, avec moins d’animation nocturne que Staré Město." },
      { heading: "Žižkov : l’alternative locale", text: "Le quartier avec la plus forte densité de bars de Prague, ambiance étudiante et prix plus doux — à 15-20 minutes à pied du centre." },
    ],
  },
  {
    city: "Athens",
    title: "Quel quartier choisir à Athens ?",
    slug: slugify("Quel quartier choisir à Athens ?"),
    dek: "L’Acropole surplombe deux quartiers aux ambiances très différentes.",
    body: [
      { text: "La plupart des visiteurs se répartissent entre Plaka, le quartier néoclassique sous l’Acropole, et Monastiraki, plus dense et plus local." },
      { heading: "Plaka : le charme touristique", text: "Ruelles piétonnes, tavernes, vue sur l’Acropole depuis les terrasses. Très agréable mais aussi le plus fréquenté et le plus cher au mètre carré." },
      { heading: "Monastiraki : le marché permanent", text: "Marché aux puces, street food, connexion directe en métro vers le reste de la ville. Plus brut, meilleur rapport qualité-prix, à deux pas de Plaka." },
      { heading: "Le bon choix", text: "Les deux quartiers sont contigus : dormir à Monastiraki pour le budget et la praticité, flâner à Plaka le soir pour l’ambiance." },
    ],
  },
  {
    city: "Venice",
    title: "Quel quartier choisir à Venice ?",
    slug: slugify("Quel quartier choisir à Venice ?"),
    dek: "San Marco éblouit, San Polo respire un peu mieux — et Burano se visite, ne se réserve pas.",
    body: [
      { text: "Venise se découpe en sestieri (quartiers) reliés par des ponts et des vaporetti. Le choix du sestiere change surtout le niveau de foule au réveil." },
      { heading: "San Marco : au cœur du spectacle", text: "La Basilique, le Palais des Doges, la place elle-même. Le plus impressionnant, aussi le plus dense — prix et affluence à l’avenant, surtout en journée." },
      { heading: "San Polo / Rialto : un peu de respiration", text: "Le marché du Rialto, des ruelles moins arpentées, encore à 10 minutes à pied de San Marco. Meilleur compromis entre centralité et calme relatif." },
      { heading: "Burano : à visiter, pas à habiter", text: "L’île aux maisons colorées se visite en une demi-journée depuis Venise — très peu d’hébergements et l’essentiel ferme le soir." },
    ],
  },
  {
    city: "Kyoto",
    title: "Quel quartier choisir à Kyoto ?",
    slug: slugify("Quel quartier choisir à Kyoto ?"),
    dek: "Entre le quartier des geishas, les collines de temples et la forêt de bambous.",
    body: [
      { text: "Kyoto s’étend largement, mais trois zones concentrent l’essentiel d’un premier séjour : Gion, Higashiyama et Arashiyama." },
      { heading: "Gion : le Kyoto traditionnel", text: "Maisons de bois machiya, possibilité d’apercevoir une geiko en soirée, central et bien desservi. Base classique pour un premier séjour." },
      { heading: "Higashiyama : les temples à pied", text: "Kiyomizu-dera et ses rues pentues, l’un des parcours piétons les plus complets de la ville — contigu à Gion, à explorer tôt le matin avant les groupes." },
      { heading: "Arashiyama : la pause verte", text: "La forêt de bambous et le pont Togetsukyo, mais plus excentré — à prévoir en excursion d’une demi-journée plutôt qu’en base d’hébergement." },
    ],
  },
  {
    city: "Sydney",
    title: "Quel quartier choisir à Sydney ?",
    slug: slugify("Quel quartier choisir à Sydney ?"),
    dek: "L’Opéra au bord de l’eau ou les vagues de Bondi — Sydney tire dans deux directions.",
    body: [
      { text: "Le compromis à Sydney est classique : rester près du port pour les monuments, ou près de la plage pour le mode de vie — les deux ne sont pas à côté l’un de l’autre." },
      { heading: "The Rocks : le port historique", text: "Opéra, Harbour Bridge, ruelles coloniales. Le plus central pour les incontournables, à distance de marche du CBD." },
      { heading: "Bondi : la vie de plage", text: "La plage la plus célèbre d’Australie, la marche côtière vers Coogee, cafés à toute heure. À 20-30 minutes de bus du centre." },
      { heading: "Le bon choix", text: "Un pied dans chaque camp si le séjour le permet : quelques nuits près du port pour les sites, puis Bondi pour décompresser avant le départ." },
    ],
  },
  {
    city: "Los Angeles",
    title: "Quel quartier choisir à Los Angeles ?",
    slug: slugify("Quel quartier choisir à Los Angeles ?"),
    dek: "LA n’a pas de centre unique : le bon quartier dépend de ce que vous êtes venu faire.",
    body: [
      { text: "Los Angeles s’étend sur une surface immense et se visite presque exclusivement en voiture — le choix du quartier détermine surtout vos trajets quotidiens." },
      { heading: "Santa Monica / Venice Beach : le litoral", text: "Jetée, boardwalk, Muscle Beach côté Venice ; plage plus familiale et propre côté Santa Monica. La meilleure base pour un séjour axé plage et promenades." },
      { heading: "Hollywood : le mythe du cinéma", text: "Walk of Fame, studios, Griffith Observatory à proximité. Central pour certains sites, mais loin de l’océan et assez touristique le soir." },
      { heading: "Le bon choix", text: "Santa Monica reste la base la plus pratique : plage à pied, et 30-40 minutes de route vers Hollywood ou le centre-ville selon le trafic." },
    ],
  },
  {
    city: "Mexico City",
    title: "Quel quartier choisir à Mexico City ?",
    slug: slugify("Quel quartier choisir à Mexico City ?"),
    dek: "Roma Norte fait quasiment l’unanimité, mais Polanco et Coyoacán ont chacun leur public.",
    body: [
      { text: "Mexico City est immense, mais la plupart des visiteurs gravitent autour de trois quartiers aux profils bien distincts." },
      { heading: "Roma Norte / Condesa : le favori", text: "Rues arborées, meilleure scène café et restaurant de la ville, très marchable. Le choix par défaut pour un premier séjour, et le plus demandé donc le plus cher." },
      { heading: "Polanco : le chic", text: "Boutiques de luxe, Museo Soumaya, ambassades. Plus policé et plus sûr, mais moins de caractère que Roma/Condesa." },
      { heading: "Coyoacán : la pause coloniale", text: "Maison-musée de Frida Kahlo, places coloniales, marché couvert. Plus au sud, excellent en excursion d’une journée plutôt qu’en base." },
    ],
  },
  {
    city: "Rio de Janeiro",
    title: "Quel quartier choisir à Rio de Janeiro ?",
    slug: slugify("Quel quartier choisir à Rio de Janeiro ?"),
    dek: "La plage iconique ou les hauteurs bohèmes de Santa Teresa.",
    body: [
      { text: "Rio se choisit largement en fonction du littoral : Copacabana et Ipanema concentrent l’essentiel des hébergements, quand Santa Teresa offre une expérience à part." },
      { heading: "Copacabana : l’icône pratique", text: "Plage immense, infrastructure hôtelière dense, sécurité renforcée ces dernières années sur le front de mer. Le choix le plus simple pour un premier séjour." },
      { heading: "Santa Teresa : le Rio bohème", text: "Maisons coloniales sur les hauteurs, tramway historique, ateliers d’artistes et vue sur la baie. Charmant mais plus isolé le soir — mieux vaut réserver les trajets." },
      { heading: "Le bon choix", text: "Copacabana ou Ipanema comme base, avec une sortie dédiée à Santa Teresa en journée pour son atmosphère unique." },
    ],
  },
  {
    city: "Buenos Aires",
    title: "Quel quartier choisir à Buenos Aires ?",
    slug: slugify("Quel quartier choisir à Buenos Aires ?"),
    dek: "La Boca se visite, Recoleta et Palermo se vivent.",
    body: [
      { text: "Buenos Aires se découvre par quartiers très marqués — le plus connu, La Boca, n’est pourtant pas fait pour y dormir." },
      { heading: "Recoleta : l’élégance sûre", text: "Cimetière monumental où repose Eva Perón, cafés historiques, architecture haussmannienne. Quartier posé et sécurisé, bonne base pour un premier séjour." },
      { heading: "La Boca : à voir, pas à habiter", text: "Le Caminito coloré et le tango de rue valent la visite en journée, mais le quartier au-delà du périmètre touristique demande de rester prudent, surtout après la tombée de la nuit." },
      { heading: "Le bon choix", text: "Recoleta ou Palermo comme base, La Boca en visite guidée de jour — le schéma le plus simple pour profiter de la ville sereinement." },
    ],
  },
  {
    city: "Toronto",
    title: "Quel quartier choisir à Toronto ?",
    slug: slugify("Quel quartier choisir à Toronto ?"),
    dek: "Entre l’élégance industrielle rénovée et le marché le plus bigarré de la ville.",
    body: [
      { text: "Toronto se découvre par quartiers très typés, chacun avec sa propre identité architecturale et culturelle." },
      { heading: "Distillery District : le quartier photogénique", text: "Anciens entrepôts victoriens en briques rouges devenus galeries et cafés, entièrement piéton. Charmant et propre, mais assez touristique." },
      { heading: "Kensington Market : le mélange", text: "Marché multiculturel, friperies, street art, ambiance bohème et dense. Plus brut, meilleur reflet de la diversité torontoise." },
      { heading: "Le bon choix", text: "Distillery District pour une balade photogénique, Kensington Market pour le repas et l’ambiance de quartier — les deux se complètent sur une même journée." },
    ],
  },
  {
    city: "Cairo",
    title: "Quel quartier choisir à Cairo ?",
    slug: slugify("Quel quartier choisir à Cairo ?"),
    dek: "Dormir près des pyramides ou au cœur du Caire islamique : deux expériences très différentes.",
    body: [
      { text: "Le Caire est une mégapole dense où le choix du quartier détermine surtout la distance aux deux sites majeurs : les pyramides de Gizeh et le vieux Caire islamique." },
      { heading: "Gizeh : réveil face aux pyramides", text: "Certains hôtels offrent une vue directe sur le plateau des pyramides — un vrai plus pour une visite à l’ouverture, avant la chaleur et la foule. Le quartier lui-même reste dense et bruyant." },
      { heading: "Khan el-Khalili : l’immersion historique", text: "Le grand bazar médiéval, mosquées et ruelles du Caire islamique. Atmosphère intense, authentique, mais à prévoir en journée plutôt qu’en hébergement prolongé." },
      { heading: "Le bon choix", text: "Une ou deux nuits côté Gizeh pour l’accès matinal aux pyramides, complétées par une journée dédiée à Khan el-Khalili et au vieux Caire." },
    ],
  },
  {
    city: "Doha",
    title: "Quel quartier choisir à Doha ?",
    slug: slugify("Quel quartier choisir à Doha ?"),
    dek: "Le souk historique restauré ou l’île artificielle du luxe moderne.",
    body: [
      { text: "Doha oppose deux visages du Qatar : la tradition restaurée du souk et la démesure contemporaine de ses développements insulaires." },
      { heading: "Souq Waqif : le Doha authentique", text: "Marché traditionnel restauré, restaurants, échoppes de fauconnerie, à deux pas de la Corniche. Le plus central et le plus vivant en soirée." },
      { heading: "The Pearl : le Doha moderne", text: "Île artificielle avec marina, boutiques de luxe et immeubles résidentiels haut de gamme. Ambiance resort, plus excentrée du centre historique." },
      { heading: "Le bon choix", text: "Souq Waqif pour un séjour culturel et marchable, The Pearl pour une parenthèse plus luxueuse en bord de marina." },
    ],
  },
  {
    city: "Nairobi",
    title: "Quel quartier choisir à Nairobi ?",
    slug: slugify("Quel quartier choisir à Nairobi ?"),
    dek: "Nairobi se vit surtout en marge de son parc national, pas dans son centre d’affaires.",
    body: [
      { text: "Contrairement à la plupart des capitales, le centre-ville de Nairobi n’est pas l’endroit où l’on cherche à dormir — les meilleures options se trouvent en périphérie verte." },
      { heading: "Autour du parc national", text: "Les quartiers de Karen et Langata bordent le seul parc national au monde inclus dans une capitale : lions et girafes à quelques kilomètres du centre. Lodges calmes, verdoyants et sécurisés." },
      { heading: "CBD (centre-ville)", text: "Quartier d’affaires dense, utile pour les démarches ou une correspondance, mais peu d’intérêt touristique et à éviter à pied après la tombée de la nuit." },
      { heading: "Le bon choix", text: "Privilégier Karen ou Langata pour dormir, et réserver le CBD aux déplacements de jour strictement nécessaires." },
    ],
  },
  {
    city: "Shanghai",
    title: "Quel quartier choisir à Shanghai ?",
    slug: slugify("Quel quartier choisir à Shanghai ?"),
    dek: "Entre la vieille ville chinoise et les avenues arborées de l’ancienne concession française.",
    body: [
      { text: "Shanghai contraste la Chine impériale et son héritage colonial européen sur quelques kilomètres à peine." },
      { heading: "Concession française : le favori", text: "Rues bordées de platanes, villas Art déco, meilleurs cafés et boutiques de la ville. Le choix le plus agréable pour loger, à proximité du Bund." },
      { heading: "Yuyuan Garden (vieille ville) : l’héritage impérial", text: "Jardin classique et bazar traditionnel au milieu des gratte-ciels. Très animé, à visiter en journée plutôt qu’à habiter." },
      { heading: "Le bon choix", text: "La Concession française comme base, avec le Bund et Yuyuan Garden accessibles à pied ou en quelques stations de métro." },
    ],
  },
  {
    city: "Mumbai",
    title: "Quel quartier choisir à Mumbai ?",
    slug: slugify("Quel quartier choisir à Mumbai ?"),
    dek: "Le Mumbai colonial de la porte de l’Inde ou la banlieue branchée de Bollywood.",
    body: [
      { text: "Colaba et Bandra concentrent l’essentiel des visiteurs, mais représentent deux Mumbai très différents — et le trafic entre les deux peut être long." },
      { heading: "Colaba : le cœur historique", text: "Gateway of India, architecture coloniale, marché de Colaba Causeway. Le plus pratique pour un premier séjour et les grands sites." },
      { heading: "Bandra : la ville branchée", text: "Surnommée la « reine des banlieues », scène café et bars la plus animée, lien fort avec l’industrie de Bollywood. Plus locale, moins touristique." },
      { heading: "Le bon choix", text: "Colaba pour l’accès aux sites emblématiques, Bandra pour un aperçu du Mumbai contemporain — prévoir large sur les trajets, le trafic est dense." },
    ],
  },
  {
    city: "Ubud",
    title: "Quel quartier choisir à Ubud ?",
    slug: slugify("Quel quartier choisir à Ubud ?"),
    dek: "Bali se pense rarement en un seul quartier : l’intérieur culturel ou la côte balnéaire.",
    body: [
      { text: "Un séjour à Bali combine souvent Ubud, à l’intérieur des terres, avec une étape côtière — les deux offrent une expérience presque opposée." },
      { heading: "Ubud : le Bali culturel", text: "Rizières en terrasse, yoga, marché d’art, cœur spirituel de l’île. Air plus frais, rythme plus lent, idéal pour 3-4 nuits." },
      { heading: "Canggu ou Seminyak : le Bali balnéaire", text: "Canggu pour le surf et les cafés digital nomad, Seminyak pour les beach clubs et le coucher de soleil plus chic. Les deux sont à 1h-1h15 de route d’Ubud." },
      { heading: "Le bon choix", text: "Le schéma le plus courant : quelques nuits à Ubud pour la culture, puis Canggu ou Seminyak pour la plage en fin de séjour." },
    ],
  },
  {
    city: "San Francisco",
    title: "Quel quartier choisir à San Francisco ?",
    slug: slugify("Quel quartier choisir à San Francisco ?"),
    dek: "Entre l’héritage flower power et le front de mer le plus photographié de la ville.",
    body: [
      { text: "San Francisco est une ville de quartiers très marqués, où Haight-Ashbury et Fisherman’s Wharf illustrent deux facettes opposées." },
      { heading: "Fisherman’s Wharf : le grand classique", text: "Pier 39, otaries, départ des ferries vers Alcatraz, vue sur le Golden Gate au loin. Très touristique et dense, mais pratique pour les incontournables." },
      { heading: "Haight-Ashbury : l’âme contre-culturelle", text: "Berceau du mouvement hippie des années 1960, maisons victoriennes colorées, disquaires et friperies. Plus authentique, moins central pour les sites classiques." },
      { heading: "Le bon choix", text: "Fisherman’s Wharf pour la logistique touristique (cable cars, ferries), Haight-Ashbury pour une après-midi de caractère et de shopping vintage." },
    ],
  },
  {
    city: "Chicago",
    title: "Quel quartier choisir à Chicago ?",
    slug: slugify("Quel quartier choisir à Chicago ?"),
    dek: "Architecture et musées d’un côté, galeries et nightlife de l’autre — à deux pas l’un de l’autre.",
    body: [
      { text: "Le Loop et River North, séparés par la rivière Chicago, couvrent à eux deux l’essentiel d’un premier séjour." },
      { heading: "Millennium Park (Loop) : les incontournables", text: "Le Cloud Gate (« The Bean »), l’Art Institute, les croisières d’architecture sur la rivière. Le cœur touristique et d’affaires de la ville." },
      { heading: "River North : les sorties", text: "Galeries d’art, restaurants réputés, proximité du Magnificent Mile pour le shopping. Très animé le soir." },
      { heading: "Le bon choix", text: "Les deux quartiers se rejoignent à pied en 15-20 minutes : loger dans l’un ou l’autre change peu, l’essentiel est marchable depuis le centre." },
    ],
  },
  {
    city: "Miami",
    title: "Quel quartier choisir à Miami ?",
    slug: slugify("Quel quartier choisir à Miami ?"),
    dek: "Le Miami Art déco des plages ou le Miami street art de l’intérieur.",
    body: [
      { text: "South Beach et Wynwood illustrent deux Miami : l’un tourné vers l’océan, l’autre vers l’art urbain." },
      { heading: "South Beach : le Miami classique", text: "Façades Art déco d’Ocean Drive, plage, vie nocturne. Le choix évident pour un séjour balnéaire, au prix d’une forte affluence touristique." },
      { heading: "Wynwood : le Miami créatif", text: "Fresques monumentales du Wynwood Walls, brasseries artisanales, galeries. Aucune plage à proximité, mais l’une des scènes street art les plus denses des États-Unis." },
      { heading: "Le bon choix", text: "South Beach pour dormir et profiter de la plage, une demi-journée à Wynwood pour l’art urbain et les brasseries." },
    ],
  },
  {
    city: "Munich",
    title: "Quel quartier choisir à Munich ?",
    slug: slugify("Quel quartier choisir à Munich ?"),
    dek: "La place centrale animée ou les abords verdoyants du plus grand parc urbain d’Europe.",
    body: [
      { text: "Munich combine un centre historique compact et de vastes espaces verts à quelques minutes à pied du cœur de la ville." },
      { heading: "Marienplatz : le centre historique", text: "Hôtel de ville néogothique, carillon (Glockenspiel), brasseries traditionnelles. Le plus central, parfait pour un court séjour ou la période d’Oktoberfest." },
      { heading: "Englischer Garten : la pause verte", text: "Plus grand que Central Park, vague artificielle surfée en plein centre-ville (Eisbach), jardins à bière en extérieur. Quartier de Schwabing attenant, plus résidentiel et posé." },
      { heading: "Le bon choix", text: "Marienplatz pour la centralité et l’ambiance bavaroise, Schwabing pour un séjour plus calme avec le parc à portée de main." },
    ],
  },
  {
    city: "Dublin",
    title: "Quel quartier choisir à Dublin ?",
    slug: slugify("Quel quartier choisir à Dublin ?"),
    dek: "Le quartier des pubs légendaires ou le calme élégant du campus universitaire.",
    body: [
      { text: "Temple Bar concentre la réputation festive de Dublin, mais n’est pas toujours le plus reposant pour y dormir." },
      { heading: "Temple Bar : l’énergie irlandaise", text: "Pubs avec musique live, pavés, ambiance de fête toute la semaine. Génial pour une soirée, plus bruyant et plus cher pour dormir." },
      { heading: "Trinity College : le calme central", text: "Campus historique, Book of Kells, à deux pas de Grafton Street. Plus posé la nuit, tout en restant à distance de marche de Temple Bar." },
      { heading: "Le bon choix", text: "Loger près de Trinity College et rejoindre Temple Bar à pied en soirée — le meilleur des deux mondes sans le bruit nocturne." },
    ],
  },
  {
    city: "Budapest",
    title: "Quel quartier choisir à Budapest ?",
    slug: slugify("Quel quartier choisir à Budapest ?"),
    dek: "Bouda la paisible sur les hauteurs, Pest l’animée en contrebas.",
    body: [
      { text: "Budapest est en réalité deux villes réunies par le Danube : Buda, vallonnée et résidentielle, et Pest, plate et festive." },
      { heading: "Pest, quartier des bars-ruines : l’énergie", text: "District VII (Erzsébetváros), bars aménagés dans des immeubles délabrés, la plus forte concentration de vie nocturne de la ville. Central et très animé le soir." },
      { heading: "Buda, colline du château : le calme", text: "Bastion des Pêcheurs, vue sur le Parlement, ruelles pavées. Plus paisible la nuit, au prix d’un accès moins direct aux bars-ruines." },
      { heading: "Le bon choix", text: "Dormir côté Pest pour la praticité et la vie nocturne, traverser vers Buda en journée pour les vues et le calme historique." },
    ],
  },
  {
    city: "Stockholm",
    title: "Quel quartier choisir à Stockholm ?",
    slug: slugify("Quel quartier choisir à Stockholm ?"),
    dek: "La vieille ville médiévale ou l’île la plus branchée de Scandinavie.",
    body: [
      { text: "Stockholm s’étend sur plusieurs îles — Gamla Stan et Södermalm sont les deux plus demandées pour un premier séjour." },
      { heading: "Gamla Stan : la carte postale", text: "Ruelles médiévales colorées, palais royal, cathédrale. Très photogénique, dense de restaurants pour touristes et souvent bondé en été." },
      { heading: "Södermalm : le Stockholm branché", text: "Meilleurs cafés et friperies de la ville, vues panoramiques depuis Monteliusvägen. Quartier plus local, prisé des jeunes Stockholmois." },
      { heading: "Le bon choix", text: "Gamla Stan pour l’histoire et la centralité, Södermalm pour la vie de quartier et les meilleures tables — les deux se rejoignent en metro en quelques minutes." },
    ],
  },
  {
    city: "Kuala Lumpur",
    title: "Quel quartier choisir à Kuala Lumpur ?",
    slug: slugify("Quel quartier choisir à Kuala Lumpur ?"),
    dek: "Les tours Petronas côté vitrine, Bukit Bintang côté rue.",
    body: [
      { text: "KLCC et Bukit Bintang, reliés par une passerelle couverte, couvrent l’essentiel d’un premier séjour à Kuala Lumpur." },
      { heading: "KLCC : le skyline", text: "Tours Petronas, parc au pied des tours, centres commerciaux haut de gamme. Quartier soigné, un peu plus cher, excellent pour les photos de nuit." },
      { heading: "Bukit Bintang : la rue", text: "Street food dense, marché de nuit, plus grande concentration d’hôtels toutes gammes. Plus animé et plus abordable." },
      { heading: "Le bon choix", text: "Les deux quartiers se valent grâce à la passerelle piétonne qui les relie : Bukit Bintang pour le budget et la street food, KLCC pour le cadre et la vue." },
    ],
  },
  {
    city: "Beijing",
    title: "Quel quartier choisir à Beijing ?",
    slug: slugify("Quel quartier choisir à Beijing ?"),
    dek: "Dormir dans une ruelle traditionnelle plutôt qu’à distance de la Cité interdite.",
    body: [
      { text: "Pékin est immense, mais les hutongs autour du tambour et de la cloche offrent la meilleure base pour explorer le centre historique à pied." },
      { heading: "Autour de la Cité interdite", text: "Le site impérial lui-même ne compte presque aucun hébergement à proximité immédiate — il se visite en journée, pas en base de séjour." },
      { heading: "Hutong (Nanluoguxiang / Gulou)", text: "Ruelles traditionnelles à cour intérieure, aujourd’hui boutique-hôtels et cafés, à 15-20 minutes à pied de la Cité interdite. La meilleure alliance entre authenticité et accès aux sites." },
      { heading: "Le bon choix", text: "Loger dans un hutong près de Gulou ou Nanluoguxiang : ambiance locale la nuit, Cité interdite et lac Houhai à pied ou en quelques stations de métro." },
    ],
  },
  {
    city: "Montreal",
    title: "Quel quartier choisir à Montreal ?",
    slug: slugify("Quel quartier choisir à Montreal ?"),
    dek: "Le pavé du Vieux-Port ou les escaliers colorés du Plateau.",
    body: [
      { text: "Le Vieux-Montréal et le Plateau Mont-Royal représentent les deux ambiances les plus recherchées de la ville." },
      { heading: "Vieux-Montréal : le romantisme historique", text: "Rues pavées, architecture du XVIIe siècle, vieux port sur le fleuve Saint-Laurent. Très photogénique, animé de restaurants pour visiteurs." },
      { heading: "Plateau Mont-Royal : la vie locale", text: "Triplex colorés aux escaliers extérieurs typiques, rue Saint-Denis, meilleure scène bar et café de la ville. Plus authentique et plus abordable." },
      { heading: "Le bon choix", text: "Vieux-Montréal pour un court séjour centré sur l’histoire, le Plateau pour vivre au rythme des Montréalais — à 15-20 minutes l’un de l’autre." },
    ],
  },
  {
    city: "Vancouver",
    title: "Quel quartier choisir à Vancouver ?",
    slug: slugify("Quel quartier choisir à Vancouver ?"),
    dek: "Le parc urbain le plus spectaculaire du Canada ou le quartier historique de l’horloge à vapeur.",
    body: [
      { text: "Vancouver combine nature immédiate et patrimoine victorien — le choix du quartier dépend de l’équilibre recherché entre les deux." },
      { heading: "Stanley Park (West End)", text: "Immense parc urbain, sentier du seawall en bord de mer, plages accessibles à pied. Quartier résidentiel calme, excellent pour la marche et le vélo." },
      { heading: "Gastown : le quartier historique", text: "Horloge à vapeur, pavés, boutiques et restaurants dans des bâtiments du XIXe siècle. Charmant, mais attention à bien rester dans le périmètre touristique en soirée." },
      { heading: "Le bon choix", text: "West End pour un séjour axé nature et tranquillité, Gastown pour le patrimoine et les bonnes tables — les deux sont reliés par le centre-ville en 15-20 minutes de marche." },
    ],
  },
  {
    city: "Madrid",
    title: "Malasaña ou La Latina ?",
    slug: slugify("Malasaña ou La Latina ?"),
    dek: "Deux quartiers pour deux façons de sortir à Madrid.",
    body: [
      { text: "Malasaña et La Latina se trouvent tous deux au sud du centre historique, mais cultivent une ambiance bien différente selon l’heure de la journée." },
      { heading: "Malasaña : l’alternatif", text: "Friperies, bars à cocktails, scène musicale indépendante. Le quartier le plus jeune et le plus animé en semaine." },
      { heading: "La Latina : le tapeo", text: "Meilleur quartier pour enchaîner les bars à tapas, surtout le dimanche après le marché du Rastro. Ambiance plus traditionnelle et conviviale." },
      { heading: "Le bon choix", text: "Malasaña pour les soirées en semaine, La Latina le dimanche pour le rituel du tapeo après le Rastro — les deux se complètent sur un séjour de plusieurs jours." },
    ],
  },
  {
    city: "Milan",
    title: "Brera ou Navigli ?",
    slug: slugify("Brera ou Navigli ?"),
    dek: "L’élégance des galeries d’art contre l’apéritivo au bord des canaux.",
    body: [
      { text: "Brera et Navigli sont les deux quartiers milanais les plus demandés pour sortir le soir, avec des ambiances nettement différentes." },
      { heading: "Brera : le raffinement", text: "Ruelles pavées, galeries d’art, pinacothèque. Quartier élégant et posé, excellent pour un dîner tranquille." },
      { heading: "Navigli : l’apéritivo", text: "Canaux historiques, bars qui débordent sur les quais au coucher du soleil, épicentre de l’apéritivo milanais. Plus animé et plus jeune." },
      { heading: "Le bon choix", text: "Brera pour une soirée posée et culturelle, Navigli pour l’apéritivo et l’ambiance festive en bord de canal." },
    ],
  },
  {
    city: "Florence",
    title: "Réserver les Offices à l’avance",
    slug: slugify("Réserver les Offices à l’avance"),
    dek: "Le musée le plus demandé de Florence se prépare avant le départ, pas sur place.",
    body: [
      { text: "La Galerie des Offices abrite l’une des plus grandes collections d’art de la Renaissance au monde — et l’une des files d’attente les plus longues d’Italie sans réservation." },
      { heading: "Pourquoi réserver en ligne", text: "Sans créneau réservé à l’avance, l’attente dépasse fréquemment 1h à 2h en haute saison. La réservation en ligne donne un horaire d’entrée fixe et un accès quasi immédiat." },
      { heading: "Le bon créneau", text: "Une entrée en fin d’après-midi (après 15h) offre généralement une affluence plus faible que le matin, sans sacrifier la lumière pour profiter des salles." },
      { heading: "À prévoir", text: "Comptez 2 à 3 heures de visite pour les œuvres majeures (Botticelli, Léonard de Vinci, Titien) sans tout vouloir voir en une seule fois — les Offices se prêtent bien à une deuxième visite plus ciblée si le séjour le permet." },
    ],
  },
  {
    city: "Naples",
    title: "Manger la vraie pizza napolitaine",
    slug: slugify("Manger la vraie pizza napolitaine"),
    dek: "La pizza est née à Naples — voici comment reconnaître la vraie version.",
    body: [
      { text: "Naples est le berceau incontesté de la pizza, avec une méthode codifiée (pâte fine, bords gonflés, cuisson au four à bois très chaud) que la ville défend jalousement." },
      { heading: "Margherita et Marinara", text: "Les deux pizzas historiques : la Margherita (tomate, mozzarella, basilic) créée en l’honneur de la reine, et la Marinara, plus simple et plus ancienne (tomate, ail, origan, sans fromage)." },
      { heading: "Où la trouver", text: "Les pizzerias historiques du centre-ville servent encore la recette originale, souvent à emporter ou debout au comptoir — l’expérience la plus authentique, loin des versions touristiques du front de mer." },
      { heading: "Le bon réflexe", text: "Une vraie pizza napolitaine se mange pliée en portefeuille (a portafoglio) quand elle est prise à emporter — la pâte, souple et peu croustillante, est faite pour ça." },
    ],
  },
  {
    city: "Seville",
    title: "Santa Cruz ou Triana ?",
    slug: slugify("Santa Cruz ou Triana ?"),
    dek: "L’ancien quartier juif ou le berceau du flamenco, de part et d’autre du Guadalquivir.",
    body: [
      { text: "Santa Cruz et Triana incarnent deux Séville différentes, séparées par le fleuve Guadalquivir." },
      { heading: "Santa Cruz : le centre historique", text: "Ruelles blanches, patios fleuris, cathédrale à deux pas. Le plus touristique et le plus dense, mais aussi le plus photogénique." },
      { heading: "Triana : le Séville populaire", text: "Berceau du flamenco et de la céramique, marché couvert, ambiance plus locale de l’autre côté du fleuve. Moins cher et tout aussi vivant le soir." },
      { heading: "Le bon choix", text: "Santa Cruz pour la proximité des monuments, Triana pour une ambiance plus authentique et un vrai spectacle de flamenco." },
    ],
  },
  {
    city: "Porto",
    title: "Ribeira ou Vila Nova de Gaia ?",
    slug: slugify("Ribeira ou Vila Nova de Gaia ?"),
    dek: "Les deux rives du Douro, entre maisons colorées et caves à vin de Porto.",
    body: [
      { text: "Le Douro sépare Porto en deux rives complémentaires : Ribeira côté ville, Vila Nova de Gaia côté caves à vin." },
      { heading: "Ribeira : le front de fleuve historique", text: "Maisons colorées classées UNESCO, ponts emblématiques, restaurants avec vue. Le plus central et le plus animé." },
      { heading: "Vila Nova de Gaia : les caves", text: "Toutes les grandes maisons de Porto (Graham’s, Taylor’s, Sandeman) proposent visites et dégustations, avec la meilleure vue sur Ribeira depuis la rive opposée." },
      { heading: "Le bon choix", text: "Dormir côté Ribeira pour la centralité, traverser à pied vers Gaia pour les dégustations et la vue au coucher du soleil." },
    ],
  },
  {
    city: "Copenhagen",
    title: "Vesterbro ou Nørrebro ?",
    slug: slugify("Vesterbro ou Nørrebro ?"),
    dek: "Deux anciens quartiers ouvriers devenus les plus courus de Copenhague.",
    body: [
      { text: "Vesterbro et Nørrebro ont tous deux connu une gentrification rapide ces vingt dernières années, sans perdre leur caractère." },
      { heading: "Vesterbro : le marché et les halles", text: "Ancien quartier rouge devenu le plus tendance, marché couvert de Halles, restaurants créatifs. Central, à deux pas de la gare centrale." },
      { heading: "Nørrebro : le multiculturel", text: "Le quartier le plus diversifié de la ville, scène culinaire internationale, cimetière-parc d’Assistens. Un peu plus excentré, ambiance plus locale." },
      { heading: "Le bon choix", text: "Vesterbro pour la proximité du centre, Nørrebro pour une immersion plus locale et une scène food plus variée." },
    ],
  },
  {
    city: "Helsinki",
    title: "Faire l’expérience d’un sauna public",
    slug: slugify("Faire l’expérience d’un sauna public"),
    dek: "Le sauna n’est pas une option touristique à Helsinki : c’est une institution nationale.",
    body: [
      { text: "La Finlande compte plus de saunas que de voitures, et Helsinki concentre plusieurs saunas publics historiques et contemporains accessibles aux visiteurs." },
      { heading: "Les incontournables", text: "Löyly, sur le front de mer, combine architecture contemporaine et bain glacé dans la Baltique juste à côté. Kotiharjun Sauna, sauna public à bois historique, offre l’expérience la plus traditionnelle." },
      { heading: "Le déroulé", text: "On alterne chaleur sèche (parfois avec löyly, la vapeur générée en jetant de l’eau sur les pierres chaudes) et immersion dans l’eau froide ou la Baltique, plusieurs fois de suite." },
      { heading: "Ce qu’il faut savoir", text: "La nudité est la norme dans les saunas traditionnels finlandais (souvent non mixtes ou avec créneaux séparés), tandis que les saunas plus touristiques comme Löyly acceptent le maillot de bain." },
    ],
  },
  {
    city: "Oslo",
    title: "Voir les fjords depuis Oslo",
    slug: slugify("Voir les fjords depuis Oslo"),
    dek: "Pas besoin de partir loin pour un premier aperçu des fjords norvégiens.",
    body: [
      { text: "Les grands fjords spectaculaires (Geirangerfjord, Nærøyfjord) sont à plusieurs heures d’Oslo, mais le fjord d’Oslo lui-même offre une première approche accessible en une demi-journée." },
      { heading: "Le fjord d’Oslo", text: "Ferries publics réguliers vers les îles de l’archipel (Hovedøya, Gressholmen), plages urbaines et vues sur la ville depuis l’eau — une excursion courte et abordable." },
      { heading: "Pour les vrais fjords", text: "Flåm et le Nærøyfjord se rejoignent en train panoramique puis bateau depuis Oslo, en excursion d’une longue journée ou d’une nuit sur place — le meilleur aperçu des fjords sans quitter un itinéraire centré sur Oslo." },
      { heading: "Le bon choix", text: "Le fjord d’Oslo pour une sortie courte et locale, Flåm pour l’expérience fjord la plus spectaculaire si le temps du séjour le permet." },
    ],
  },
  {
    city: "Warsaw",
    title: "La vieille ville reconstruite, l’histoire méconnue",
    slug: slugify("La vieille ville reconstruite, l’histoire méconnue"),
    dek: "Ce que vous voyez à Varsovie n’a presque rien d’original — et c’est précisément ce qui la rend unique.",
    body: [
      { text: "En 1944, plus de 85% de Varsovie fut délibérément détruite après le soulèvement de la ville. La vieille ville actuelle est une reconstruction minutieuse d’après-guerre." },
      { heading: "Une reconstruction méthodique", text: "Peintures, photographies et même des tableaux du XVIIIe siècle (les vedute de Canaletto) ont servi de référence pour reconstruire les façades à l’identique, brique par brique." },
      { heading: "Pourquoi ça compte", text: "Ce n’est pas un décor factice mais un acte de résilience nationale — la ville a choisi de renaître à l’identique plutôt que de repartir sur un plan neuf. L’UNESCO a classé la vieille ville en reconnaissance de cet exploit, un cas unique." },
      { heading: "À observer", text: "Le musée de l’Insurrection de Varsovie raconte cette histoire en détail et donne une tout autre lecture des façades pastel de la place du Marché." },
    ],
  },
  {
    city: "Krakow",
    title: "Visiter Auschwitz-Birkenau depuis Cracovie",
    slug: slugify("Visiter Auschwitz-Birkenau depuis Cracovie"),
    dek: "Le mémorial se visite en demi-journée depuis Cracovie — quelques repères avant d’y aller.",
    body: [
      { text: "Le camp d’Auschwitz-Birkenau se trouve à environ 1h30 de route de Cracovie, à Oświęcim. C’est l’un des sites de mémoire les plus visités au monde." },
      { heading: "Réserver à l’avance", text: "L’entrée est gratuite mais l’accès aux heures de forte affluence (10h-15h) nécessite une visite guidée réservée en ligne, souvent plusieurs semaines à l’avance en haute saison." },
      { heading: "Le déroulé", text: "La visite guidée (environ 3h30) couvre Auschwitz I (le camp originel, aujourd’hui musée) puis Birkenau (Auschwitz II, le camp d’extermination), reliés par une navette gratuite." },
      { heading: "S’y rendre", text: "Bus directs depuis la gare routière de Cracovie, train jusqu’à Oświęcim suivi d’un court trajet, ou excursion organisée avec transport inclus — cette dernière option reste la plus simple sans voiture." },
    ],
  },
  {
    city: "Zurich",
    title: "Se baigner dans la Limmat, mode d’emploi",
    slug: slugify("Se baigner dans la Limmat, mode d’emploi"),
    dek: "L’été, la moitié de Zurich nage dans sa propre rivière en sortant du bureau.",
    body: [
      { text: "La Limmat qui traverse Zurich est suffisamment propre pour la baignade, une institution locale dès les beaux jours." },
      { heading: "Où entrer dans l’eau", text: "Plusieurs points d’accès aménagés le long des quais, notamment près du Bürkliplatz, avec des échelles pour entrer et sortir facilement du courant." },
      { heading: "Le principe", text: "On se laisse porter par le courant sur quelques centaines de mètres avant de ressortir — beaucoup de Zurichois utilisent un sac étanche (Wickelfisch) en forme de poisson pour garder leurs affaires au sec en flottant à côté d’eux." },
      { heading: "Bon à savoir", text: "La baignade se pratique surtout de juin à septembre ; le courant peut être plus fort qu’il n’y paraît, mieux vaut observer les habitués avant de se lancer si c’est une première fois." },
    ],
  },
  {
    city: "Geneva",
    title: "Le Jet d’Eau et la rade, mode d’emploi",
    slug: slugify("Le Jet d’Eau et la rade, mode d’emploi"),
    dek: "Le symbole de Genève propulse l’eau à 140 mètres de haut, visible depuis presque toute la ville.",
    body: [
      { text: "Le Jet d’Eau, à l’entrée du lac Léman, est devenu malgré lui l’emblème de Genève après avoir été installé à l’origine pour une raison purement technique." },
      { heading: "D’où le voir", text: "Le meilleur point de vue reste le quai du Mont-Blanc ou une balade en bateau sur la rade (le bassin du lac face à la ville) — les compagnies de navigation proposent des tours courts au départ du centre." },
      { heading: "La rade en général", text: "La promenade autour du bassin relie le Jardin Anglais, l’horloge fleurie, et les quais des deux rives — un bon axe de balade pour une première orientation dans la ville." },
      { heading: "Bon à savoir", text: "Le jet est coupé par grand vent pour des raisons de sécurité — il n’est donc pas garanti à 100% du temps, mais reste actif la majorité de l’année." },
    ],
  },
  {
    city: "Brussels",
    title: "La bande dessinée à Bruxelles",
    slug: slugify("La bande dessinée à Bruxelles"),
    dek: "Bruxelles est l’une des capitales mondiales de la bande dessinée — et ça se voit dans la rue.",
    body: [
      { text: "Tintin, les Schtroumpfs, Lucky Luke : plusieurs des séries de BD franco-belges les plus connues au monde sont nées à Bruxelles, et la ville le célèbre ouvertement." },
      { heading: "Le Comic Strip Route", text: "Plus de 60 fresques murales monumentales dédiées à la BD sont disséminées dans le centre-ville, formant un parcours libre et gratuit à travers les quartiers." },
      { heading: "Le Centre Belge de la Bande Dessinée", text: "Installé dans un ancien grand magasin Art nouveau signé Victor Horta, le musée retrace l’histoire du 9e art avec planches originales et expositions temporaires." },
      { heading: "Bon à savoir", text: "Une carte du parcours des fresques est disponible à l’office de tourisme — une bonne façon de découvrir plusieurs quartiers du centre sans itinéraire figé." },
    ],
  },
  {
    city: "Edinburgh",
    title: "Voir le festival d’Édimbourg en août",
    slug: slugify("Voir le festival d’Édimbourg en août"),
    dek: "Chaque mois d’août, Édimbourg devient la plus grande scène de spectacle vivant au monde.",
    body: [
      { text: "Le Festival Fringe d’Édimbourg, né en 1947, réunit aujourd’hui plus de 3 000 spectacles (théâtre, stand-up, danse, cirque) dans toute la ville pendant tout le mois d’août." },
      { heading: "Comment ça marche", text: "Contrairement à un festival classique, le Fringe n’a pas de sélection : n’importe quelle troupe peut y jouer. La qualité varie énormément, ce qui fait aussi tout son charme — les pépites se trouvent autant que les spectacles ratés." },
      { heading: "S’y retrouver", text: "Les flyers distribués dans la rue restent le meilleur moyen de repérer les spectacles qui marchent par le bouche-à-oreille ; les avis affichés devant les salles (étoiles) aident aussi à trier rapidement." },
      { heading: "À anticiper", text: "Hôtels et logements doublent voire triplent de prix en août — réserver plusieurs mois à l’avance est indispensable, bien plus qu’ailleurs en Europe à la même période." },
    ],
  },
  {
    city: "Reykjavik",
    title: "Le Cercle d’Or en 1 jour depuis Reykjavik",
    slug: slugify("Le Cercle d’Or en 1 jour depuis Reykjavik"),
    dek: "Le circuit le plus populaire d’Islande se fait en une journée, sans nuit sur place.",
    body: [
      { text: "Le Cercle d’Or (Golden Circle) regroupe trois sites emblématiques accessibles en boucle depuis Reykjavik, faisable en voiture de location ou en excursion organisée." },
      { heading: "Les trois arrêts", text: "Þingvellir, parc national où se rejoignent les plaques tectoniques américaine et eurasienne ; Geysir, la zone géothermique qui a donné son nom à tous les geysers du monde ; et la cascade de Gullfoss, spectaculaire toute l’année." },
      { heading: "Le timing", text: "Comptez 6 à 8 heures avec les arrêts, en partant tôt pour profiter de la lumière et éviter les cars de groupe sur les trois sites." },
      { heading: "Bon à savoir", text: "La route est goudronnée et accessible toute l’année, mais l’hiver demande plus de prudence (verglas, jours courts) — les excursions organisées incluent alors un chauffeur habitué aux conditions locales." },
    ],
  },
  {
    city: "Santorini",
    title: "Oia ou Fira ?",
    slug: slugify("Oia ou Fira ?"),
    dek: "Les deux villages les plus connus de Santorin n’offrent pas la même expérience.",
    body: [
      { text: "Oia et Fira se disputent la réputation de Santorin, mais répondent à des envies différentes." },
      { heading: "Oia : le coucher de soleil parfait", text: "Dômes bleus et maisons blanches les plus photographiés de Grèce, coucher de soleil réputé le plus beau de l’île — et donc le plus fréquenté en fin de journée." },
      { heading: "Fira : la capitale animée", text: "Vue sur la caldeira tout aussi spectaculaire, plus de restaurants et de vie nocturne, mieux connectée aux bus de l’île." },
      { heading: "Le bon choix", text: "Fira comme base pratique et animée, avec un aller-retour à Oia en fin d’après-midi pour le coucher de soleil — la solution la plus flexible et la moins chère." },
    ],
  },
  {
    city: "Dubrovnik",
    title: "Marcher sur les remparts, mode d’emploi",
    slug: slugify("Marcher sur les remparts, mode d’emploi"),
    dek: "Les remparts de Dubrovnik offrent la meilleure vue sur la vieille ville — à condition de bien choisir son créneau.",
    body: [
      { text: "Les remparts qui encerclent la vieille ville sur près de 2 km sont le site le plus visité de Dubrovnik, avec une vue imprenable sur les toits de tuiles et l’Adriatique." },
      { heading: "Le bon moment", text: "L’ouverture (souvent 8h) ou la fin d’après-midi offrent la lumière la plus douce et une affluence nettement plus faible que la mi-journée, surtout quand un bateau de croisière est au port." },
      { heading: "Le parcours", text: "Comptez 1h30 à 2h pour faire le tour complet, avec plusieurs points d’accès (dont la porte Pile et la porte Ploče) — pas besoin de repartir du même point d’entrée." },
      { heading: "Bon à savoir", text: "Peu d’ombre sur le parcours : chapeau, eau et crème solaire sont indispensables en été, où la chaleur sur la pierre peut être intense." },
    ],
  },
  {
    city: "Ljubljana",
    title: "Le château de Ljubljana, mode d’emploi",
    slug: slugify("Le château de Ljubljana, mode d’emploi"),
    dek: "La meilleure vue sur la capitale slovène se mérite (un peu) ou s’atteint en funiculaire.",
    body: [
      { text: "Perché sur une colline dominant le centre-ville, le château de Ljubljana offre le meilleur point de vue sur la capitale et ses environs." },
      { heading: "Y monter", text: "Le funiculaire, au départ du marché central, monte en quelques minutes ; les plus courageux peuvent aussi grimper à pied en 15-20 minutes par un sentier boisé." },
      { heading: "Sur place", text: "Expositions sur l’histoire slovène, galerie d’art, et surtout la tour panoramique offrant une vue à 360° sur la ville et, par temps clair, les Alpes juliennes au loin." },
      { heading: "Bon à savoir", text: "Le billet funiculaire + château peut être combiné ; la visite se prête bien à une fin d’après-midi, avec la ville éclairée par la lumière dorée depuis la tour." },
    ],
  },
  {
    city: "Nice",
    title: "Vieux Nice ou Promenade des Anglais ?",
    slug: slugify("Vieux Nice ou Promenade des Anglais ?"),
    dek: "L’Italie qui affleure dans les ruelles, ou l’élégance de la Côte d’Azur en bord de mer.",
    body: [
      { text: "Vieux Nice et la Promenade des Anglais se touchent presque, mais offrent deux ambiances niçoises bien distinctes." },
      { heading: "Vieux Nice : l’héritage italien", text: "Façades colorées, marché du cours Saleya, ruelles étroites qui rappellent la proximité historique avec l’Italie. Dense et vivant, surtout le matin au marché." },
      { heading: "Promenade des Anglais : l’élégance balnéaire", text: "Front de mer emblématique de 7 km, grands hôtels Belle Époque, galets et Méditerranée à perte de vue. Plus posé, plus cher." },
      { heading: "Le bon choix", text: "Loger près du Vieux Nice pour l’ambiance et la marche, profiter de la Promenade pour les balades matinales ou les couchers de soleil." },
    ],
  },
  {
    city: "Lyon",
    title: "Manger dans un vrai bouchon lyonnais",
    slug: slugify("Manger dans un vrai bouchon lyonnais"),
    dek: "Lyon a inventé son propre genre de restaurant — voici comment reconnaître un vrai bouchon.",
    body: [
      { text: "Le bouchon lyonnais est une institution née au XIXe siècle pour nourrir les ouvriers de la soie — aujourd’hui, le terme est parfois utilisé sans respecter la tradition." },
      { heading: "Comment reconnaître un vrai bouchon", text: "Cherchez le label officiel « Les Bouchons Lyonnais », délivré par l’association des restaurateurs traditionnels — une garantie contre les adresses purement touristiques." },
      { heading: "À la carte", text: "Quenelles de brochet, andouillette, salade lyonnaise (œuf poché, lardons), tablier de sapeur — une cuisine généreuse et peu filtrée, pas toujours adaptée aux palais délicats." },
      { heading: "L’ambiance", text: "Nappes à carreaux, tables serrées, ambiance conviviale et souvent bruyante — le bouchon se vit autant qu’il se mange, dans le Vieux Lyon ou la Presqu’île." },
    ],
  },
  {
    city: "Marseille",
    title: "Les calanques depuis Marseille, mode d’emploi",
    slug: slugify("Les calanques depuis Marseille, mode d’emploi"),
    dek: "Les falaises et criques les plus spectaculaires de la Méditerranée commencent aux portes de la ville.",
    body: [
      { text: "Le parc national des Calanques s’étend entre Marseille et Cassis, offrant des criques d’eau turquoise encadrées de falaises calcaires — sans quitter l’agglomération marseillaise." },
      { heading: "Les incontournables", text: "Sormiou et Morgiou sont accessibles en voiture (accès réglementé en été, réservation souvent nécessaire) ; Sugiton et En-Vau se rejoignent à pied depuis Luminy ou Cassis, pour les plus marcheurs." },
      { heading: "En bateau", text: "Des excursions en bateau au départ du Vieux-Port longent plusieurs calanques en 2-3h, une option simple sans marche ni réservation de parking." },
      { heading: "Bon à savoir", text: "L’accès à certaines calanques est interdit ou limité en été en raison du risque incendie — vérifiez les restrictions du jour avant de partir, surtout en juillet-août." },
    ],
  },
  {
    city: "Hamburg",
    title: "La Speicherstadt et l’Elbphilharmonie",
    slug: slugify("La Speicherstadt et l’Elbphilharmonie"),
    dek: "Le plus grand entrepôt du monde sur pilotis et la salle de concert la plus spectaculaire d’Allemagne, côte à côte.",
    body: [
      { text: "La Speicherstadt, classée UNESCO, et l’Elbphilharmonie voisine forment le duo architectural le plus photographié de Hambourg — l’un hérité du XIXe siècle, l’autre inauguré en 2017." },
      { heading: "La Speicherstadt", text: "Entrepôts de brique rouge sur pilotis, canaux, autrefois entrepôts d’épices et de tapis — aujourd’hui musées et bureaux, avec de superbes vues depuis les ponts au crépuscule." },
      { heading: "L’Elbphilharmonie", text: "Salle de concert posée sur un ancien entrepôt, façade de verre ondulée. La plateforme panoramique (Plaza), gratuite avec réservation de créneau, offre l’une des meilleures vues sur le port de Hambourg." },
      { heading: "Bon à savoir", text: "Réservez le créneau gratuit pour la Plaza en ligne à l’avance, surtout le week-end — les places sans réservation sont limitées et partent vite." },
    ],
  },
  {
    city: "Valencia",
    title: "Manger la vraie paella à Valence",
    slug: slugify("Manger la vraie paella à Valence"),
    dek: "La paella est née à Valence — et la version originale surprend souvent ceux qui ne connaissent que la version touristique.",
    body: [
      { text: "Contrairement à l’image répandue, la paella valencienne traditionnelle ne contient ni fruits de mer ni chorizo — c’est une recette paysanne à base de viande et de légumes locaux." },
      { heading: "La recette originale", text: "Poulet, lapin, haricots verts plats (ferradura) et garrofón (gros haricots blancs), riz cuit dans un bouillon parfumé au safran, le tout dans la poêle plate qui donne son nom au plat." },
      { heading: "La paella de fruits de mer", text: "Une variante tout aussi légitime existe sur la côte, mais les deux versions ne se mélangent traditionnellement pas — la « paella mixta » (mer et terre) est plutôt une invention touristique." },
      { heading: "Où et quand", text: "La paella se mange traditionnellement au déjeuner, jamais le soir, et se prépare pour plusieurs personnes — méfiez-vous des portions individuelles proposées à toute heure près des zones très touristiques." },
    ],
  },
  {
    city: "Washington DC",
    title: "Les musées Smithsonian gratuits, lesquels choisir",
    slug: slugify("Les musées Smithsonian gratuits, lesquels choisir"),
    dek: "19 musées gratuits, un seul séjour : voici comment prioriser.",
    body: [
      { text: "L’institution Smithsonian gère la majorité des musées du National Mall, tous gratuits — un cas unique parmi les grandes capitales mondiales, mais qui rend le choix difficile faute de temps." },
      { heading: "Les incontournables", text: "Le National Air and Space Museum (modules Apollo, avions historiques) et le National Museum of Natural History (diamant Hope, dinosaures) sont les plus demandés — prévoir 2-3h chacun." },
      { heading: "Les pépites moins connues", text: "Le National Museum of African American History and Culture, souvent cité comme le plus marquant de tous, demande une réservation de créneau gratuite même sans affluence apparente." },
      { heading: "Comment s’organiser", text: "Deux musées maximum par jour permettent de vraiment profiter sans saturation — le Mall se traverse à pied, mais les distances entre musées opposés prennent 15-20 minutes." },
    ],
  },
  {
    city: "Boston",
    title: "Suivre le Freedom Trail",
    slug: slugify("Suivre le Freedom Trail"),
    dek: "Une ligne rouge au sol relie les 16 sites fondateurs de la Révolution américaine.",
    body: [
      { text: "Le Freedom Trail est un parcours balisé de 4 km à travers le centre de Boston, reliant les lieux clés de l’indépendance américaine, matérialisé par une ligne rouge peinte ou pavée au sol." },
      { heading: "Le parcours", text: "De Boston Common à l’USS Constitution à Charlestown, en passant par l’Old North Church (le fameux « one if by land, two if by sea ») et Paul Revere House. Comptez 2 à 3h pour le suivre sans s’arrêter partout." },
      { heading: "Avec ou sans guide", text: "Le parcours se suit seul gratuitement en suivant la ligne rouge, ou avec un guide costumé pour les anecdotes historiques détaillées — l’entrée de certains sites (comme l’Old State House) reste payante." },
      { heading: "Bon à savoir", text: "Le trajet traverse plusieurs quartiers historiques de Boston (North End italien, Beacon Hill) — une bonne façon de découvrir la ville sans itinéraire séparé." },
    ],
  },
  {
    city: "Las Vegas",
    title: "Voir un spectacle à Las Vegas",
    slug: slugify("Voir un spectacle à Las Vegas"),
    dek: "Le Strip concentre la plus forte densité de spectacles au monde — voici comment choisir.",
    body: [
      { text: "Des dizaines de spectacles résidents tournent en permanence à Las Vegas, des productions Cirque du Soleil aux résidences de stars internationales." },
      { heading: "Cirque du Soleil", text: "Plusieurs spectacles permanents (O, aquatique, au Bellagio ; Mystère, au Treasure Island) offrent la valeur la plus sûre pour un premier spectacle à Vegas." },
      { heading: "Résidences musicales", text: "De nombreux artistes internationaux tiennent des résidences de plusieurs mois dans les salles des grands casinos-hôtels — à vérifier au calendrier avant de réserver son séjour." },
      { heading: "Réserver", text: "Les prix varient fortement selon le jour et l’avance de réservation ; les sites de revente officiels des hôtels proposent parfois des réductions de dernière minute en semaine." },
    ],
  },
  {
    city: "Seattle",
    title: "Pike Place Market, mode d’emploi",
    slug: slugify("Pike Place Market, mode d’emploi"),
    dek: "Le marché le plus emblématique de Seattle se visite mieux tôt le matin.",
    body: [
      { text: "Ouvert depuis 1907, Pike Place Market est l’un des plus anciens marchés fermiers continuellement actifs des États-Unis, et le cœur touristique de Seattle." },
      { heading: "Les incontournables", text: "Les poissonniers qui lancent les saumons à la volée (Pike Place Fish Market), le tout premier Starbucks (la file est longue, le café identique aux autres succursales), et la vue sur la baie depuis le marché." },
      { heading: "Au-delà des poissonniers", text: "Le marché regorge d’artisans locaux, de petits producteurs et d’un passage secret (le Gum Wall, un mur couvert de chewing-gums) juste en dessous." },
      { heading: "Le bon moment", text: "Arriver à l’ouverture (souvent 9h) permet d’éviter les groupes de croisiéristes qui envahissent le marché en milieu de journée les jours d’escale." },
    ],
  },
  {
    city: "New Orleans",
    title: "Écouter du jazz live à la Nouvelle-Orléans",
    slug: slugify("Écouter du jazz live à la Nouvelle-Orléans"),
    dek: "Le jazz est né ici — voici où l’écouter comme les habitants, pas comme les touristes.",
    body: [
      { text: "La Nouvelle-Orléans est le berceau historique du jazz, né au tournant du XXe siècle dans les fanfares et les clubs de Storyville." },
      { heading: "Frenchmen Street", text: "À quelques rues du French Quarter mais nettement moins touristique, cette rue concentre les meilleurs clubs de jazz live de la ville, fréquentés autant par les locaux que par les connaisseurs de passage." },
      { heading: "Preservation Hall", text: "Institution historique du French Quarter, sans air conditionné ni boissons, concentrée sur la musique pure dans un cadre volontairement dépouillé — l’expérience la plus authentique, mais avec file d’attente." },
      { heading: "Bon à savoir", text: "Beaucoup de bars n’exigent pas de consommation minimum pour écouter un set, mais laisser un pourboire aux musiciens (souvent via un chapeau qui circule) fait partie du rituel." },
    ],
  },
  {
    city: "Honolulu",
    title: "Waikiki, ce qu’il faut savoir avant de réserver",
    slug: slugify("Waikiki, ce qu’il faut savoir avant de réserver"),
    dek: "La plage la plus célèbre du Pacifique n’est pas la plus authentique d’Hawaï — mais elle reste la plus pratique.",
    body: [
      { text: "Waikiki concentre la majorité des hôtels d’Oahu sur environ 3 km de plage, face à l’océan et au pied du Diamond Head." },
      { heading: "Ce que Waikiki offre", text: "Plage large et protégée par un récif (idéale pour débuter le surf), infrastructure hôtelière dense, restaurants et boutiques à toute heure. Très pratique pour un premier séjour sans voiture." },
      { heading: "Ce que Waikiki n’est pas", text: "Ce n’est pas le « vrai » Hawaï local : le quartier est largement tourné vers le tourisme international, avec une ambiance plus proche d’une station balnéaire mondiale que d’un village hawaïen." },
      { heading: "Le bon équilibre", text: "Waikiki comme base pratique pour les 2-3 premiers jours, puis louer une voiture pour explorer la côte nord d’Oahu, plus sauvage et plus locale." },
    ],
  },
  {
    city: "Cancún",
    title: "Zona Hotelera ou Ciudad Cancún ?",
    slug: slugify("Zona Hotelera ou Ciudad Cancún ?"),
    dek: "Cancún fonctionne sur deux vitesses bien distinctes — plages et resorts, ou vraie ville mexicaine.",
    body: [
      { text: "La Zona Hotelera et Ciudad Cancún (le centre-ville) sont à peine à 20 minutes l’une de l’autre, mais offrent deux expériences quasiment opposées." },
      { heading: "Zona Hotelera : le tout compris", text: "Bande hôtelière en bord de plages turquoise des Caraïbes, resorts tout compris, vie nocturne dense. Pratique et sécurisé, mais coûteux et peu représentatif du Mexique réel." },
      { heading: "Ciudad Cancún : le vrai Mexique", text: "Restaurants locaux à prix nettement inférieurs, marchés, ambiance mexicaine authentique — sans la plage à portée de main." },
      { heading: "Le bon choix", text: "Dormir en Zona Hotelera pour la plage, sortir dîner à Ciudad Cancún une ou deux fois pour changer de rythme et de budget." },
    ],
  },
  {
    city: "Tulum",
    title: "Ruines mayas au bord de la plage, mode d’emploi",
    slug: slugify("Ruines mayas au bord de la plage, mode d’emploi"),
    dek: "Tulum est le seul site maya majeur construit directement au bord de la mer des Caraïbes.",
    body: [
      { text: "Perchées sur une falaise dominant une plage de sable blanc, les ruines de Tulum offrent une combinaison unique parmi les sites mayas du Yucatán : histoire et mer dans le même cadre." },
      { heading: "Le site", text: "Ancienne cité maya fortifiée, port commercial actif jusqu’à l’arrivée des Espagnols. Plus petit que Chichen Itza ou Coba, la visite se fait en 1h-1h30." },
      { heading: "Le bon moment", text: "Arriver à l’ouverture (8h) permet d’éviter à la fois la chaleur et les cars de touristes venus en excursion depuis Cancún ou Playa del Carmen en milieu de journée." },
      { heading: "Après la visite", text: "La plage juste en contrebas du site (Playa Paraíso) fait partie des plus belles de la région — prévoir maillot de bain pour enchaîner directement après la visite." },
    ],
  },
  {
    city: "Oaxaca",
    title: "Le mezcal, mode d’emploi",
    slug: slugify("Le mezcal, mode d’emploi"),
    dek: "Oaxaca est la capitale mondiale du mezcal — voici comment le déguster comme il se doit.",
    body: [
      { text: "Contrairement à la tequila, qui n’utilise que l’agave bleue, le mezcal peut être distillé à partir de dizaines de variétés d’agave, presque toutes cultivées dans l’État d’Oaxaca." },
      { heading: "La dégustation traditionnelle", text: "Le mezcal se déguste en petites gorgées, jamais cul sec, souvent accompagné de sal de gusano (sel aux épices et ver d’agave) et de tranches d’orange." },
      { heading: "Où en apprendre plus", text: "De nombreuses palenques (distilleries artisanales) autour d’Oaxaca se visitent, souvent avec dégustation sur place — une façon de comprendre le procédé de distillation traditionnel, encore largement manuel." },
      { heading: "Bon à savoir", text: "Le mezcal artisanal titre souvent plus fort que la tequila industrielle (45-50°) — à consommer lentement, surtout lors d’une première dégustation." },
    ],
  },
  {
    city: "Havana",
    title: "Voyager à Cuba : cash, cartes et internet",
    slug: slugify("Voyager à Cuba : cash, cartes et internet"),
    dek: "Cuba fonctionne encore très différemment du reste de l’Amérique latine — quelques repères avant de partir.",
    body: [
      { text: "L’embargo américain et le système économique cubain rendent certains aspects pratiques du voyage à Cuba assez différents de ce à quoi on peut être habitué ailleurs." },
      { heading: "L’argent", text: "Les cartes bancaires étrangères (notamment américaines) ne fonctionnent généralement pas à Cuba — prévoir du cash en euros ou en dollars à changer sur place, en quantité suffisante pour tout le séjour." },
      { heading: "Internet", text: "Le wifi n’est disponible que dans des zones spécifiques (parcs publics, certains hôtels) via des cartes à gratter prépayées (tarjetas Nauta) — pas de connexion mobile data classique pour les visiteurs." },
      { heading: "Bon à savoir", text: "Le système à deux vitesses (CUP pour les locaux, USD de facto pour les touristes dans de nombreux échanges informels) peut surprendre — mieux vaut se renseigner sur les taux réels avant d’échanger de grosses sommes." },
    ],
  },
  {
    city: "Punta Cana",
    title: "Bien choisir son tout compris à Punta Cana",
    slug: slugify("Bien choisir son tout compris à Punta Cana"),
    dek: "Tous les tout compris ne se valent pas — quelques critères avant de réserver.",
    body: [
      { text: "Punta Cana concentre l’une des plus fortes densités de resorts tout compris des Caraïbes — le choix du bon établissement change complètement l’expérience." },
      { heading: "Le niveau du tout compris", text: "Les gammes vont du tout compris basique (boissons locales, buffet uniquement) au tout compris premium (spiritueux importés, restaurants à la carte inclus, service en chambre). Vérifiez précisément ce qui est inclus avant de comparer les prix." },
      { heading: "La zone", text: "Bávaro concentre le plus grand nombre de resorts et la plage la plus fréquentée ; Cap Cana, plus au sud, offre un cadre plus exclusif avec marina et golf, à prix plus élevé." },
      { heading: "Bon à savoir", text: "Les avis récents comptent plus que la catégorie affichée (4 ou 5 étoiles) : la qualité peut varier significativement d’une année sur l’autre selon la gestion de l’établissement." },
    ],
  },
  {
    city: "San Juan",
    title: "Le Viejo San Juan, mode d’emploi",
    slug: slugify("Le Viejo San Juan, mode d’emploi"),
    dek: "La plus ancienne ville sous drapeau américain se visite à pied, façade par façade.",
    body: [
      { text: "Fondé en 1521, le Viejo San Juan est l’un des ensembles coloniaux espagnols les mieux préservés des Caraïbes, avec ses rues pavées de pierres bleues et ses façades colorées." },
      { heading: "Les forts", text: "El Morro et San Cristóbal, les deux forteresses qui protégeaient la ville des invasions, offrent une vue spectaculaire sur l’océan et se visitent en 1h30 à 2h chacune." },
      { heading: "Les rues à ne pas manquer", text: "La Calle Fortaleza et ses façades multicolores, la Plaza de Armas, et les ruelles adjacentes concentrent galeries d’art, cafés et boutiques indépendantes." },
      { heading: "Le bon moment", text: "Tôt le matin, avant l’arrivée des passagers de croisière qui envahissent le quartier en milieu de journée les jours d’escale — San Juan étant un port de croisière majeur des Caraïbes." },
    ],
  },
  {
    city: "Quito",
    title: "Gérer l’altitude à Quito",
    slug: slugify("Gérer l’altitude à Quito"),
    dek: "À 2 850 m, Quito est la deuxième capitale la plus haute du monde — quelques précautions simples évitent le mal des montagnes.",
    body: [
      { text: "L’altitude de Quito surprend souvent les voyageurs qui ne prévoient pas de temps d’acclimatation, surtout s’ils enchaînent directement avec un trek dans les Andes ou les volcans voisins." },
      { heading: "Les premières 24h", text: "Évitez les efforts physiques intenses le jour d’arrivée, limitez l’alcool le premier soir, et buvez plus d’eau que d’habitude — les symptômes classiques (maux de tête, essoufflement léger) touchent une large majorité des visiteurs." },
      { heading: "Le mate de coca", text: "Comme au Pérou voisin, l’infusion de feuilles de coca est proposée dans de nombreux hôtels dès l’arrivée — un remède traditionnel largement utilisé contre les symptômes légers." },
      { heading: "Si ça persiste", text: "Des maux de tête sévères ou des vertiges importants après 2-3 jours justifient une consultation médicale — les pharmacies locales vendent de l’acétazolamide, mais l’avis d’un médecin reste préférable en cas de doute." },
    ],
  },
  {
    city: "Santiago de Chile",
    title: "Les vignobles depuis Santiago en 1 jour",
    slug: slugify("Les vignobles depuis Santiago en 1 jour"),
    dek: "Le Chili est l’un des grands pays viticoles mondiaux, et ses meilleurs domaines sont à moins d’une heure de la capitale.",
    body: [
      { text: "Plusieurs vallées viticoles réputées entourent Santiago, rendant une excursion œnologique possible sans même changer d’hôtel." },
      { heading: "La vallée de Maipo", text: "La plus proche (30-45 min de route), berceau historique du Cabernet Sauvignon chilien, avec de grands domaines comme Concha y Toro qui proposent visites et dégustations toute l’année." },
      { heading: "La vallée de Casablanca", text: "Plus fraîche grâce à l’influence du Pacifique, spécialisée dans les blancs (Sauvignon Blanc, Chardonnay) et le Pinot Noir — à environ 1h de route, souvent combinée avec une étape à Valparaíso." },
      { heading: "Comment s’organiser", text: "De nombreuses excursions organisées au départ de Santiago couvrent 2-3 domaines en une journée avec transport inclus — une alternative simple à la location de voiture pour une sortie ponctuelle." },
    ],
  },
  {
    city: "Montevideo",
    title: "Marcher ou pédaler sur la Rambla",
    slug: slugify("Marcher ou pédaler sur la Rambla"),
    dek: "22 km de front de mer ininterrompu : la colonne vertébrale de Montevideo.",
    body: [
      { text: "La Rambla de Montevideo longe presque toute la côte de la ville, du port jusqu’aux plages est — l’une des promenades urbaines continues les plus longues d’Amérique du Sud." },
      { heading: "À pied ou à vélo", text: "La piste est large et bien entretenue sur toute sa longueur, partagée entre piétons, joggeurs et cyclistes — location de vélo possible dans plusieurs quartiers en bord de Rambla." },
      { heading: "Les étapes marquantes", text: "Du marché du port (Mercado del Puerto) à Ciudad Vieja, en passant par les plages de Pocitos et le quartier chic de Punta Carretas, la Rambla traverse la plupart des quartiers clés de la ville." },
      { heading: "Bon à savoir", text: "Les Uruguayens y pratiquent le maté en marchant, thermos sous le bras — une scène de vie locale typique à observer en fin d’après-midi." },
    ],
  },
  {
    city: "São Paulo",
    title: "La scène street art de Vila Madalena",
    slug: slugify("La scène street art de Vila Madalena"),
    dek: "São Paulo abrite l’une des scènes de street art les plus denses au monde — Vila Madalena en est l’épicentre.",
    body: [
      { text: "São Paulo, souvent surnommée la capitale mondiale du street art, doit beaucoup à une particularité locale : le pichação, un graffiti calligraphique typiquement pauliste, cohabite avec des fresques figuratives spectaculaires." },
      { heading: "Beco do Batman", text: "Cette ruelle de Vila Madalena, entièrement recouverte de fresques renouvelées en permanence par des artistes locaux et internationaux, est devenue le symbole de la scène street art de la ville." },
      { heading: "Au-delà de la ruelle", text: "Tout le quartier de Vila Madalena et le voisin Pinheiros regorgent de murs peints, à découvrir au hasard des rues plutôt qu’en suivant un parcours strict." },
      { heading: "Bon à savoir", text: "Le quartier est aussi l’un des meilleurs pour sortir le soir — bars et galeries d’art contemporain se mêlent naturellement aux fresques dans les mêmes rues." },
    ],
  },
  {
    city: "Cartagena",
    title: "La vieille ville fortifiée, mode d’emploi",
    slug: slugify("La vieille ville fortifiée, mode d’emploi"),
    dek: "Cartagena est l’une des villes coloniales les mieux préservées d’Amérique latine, entièrement ceinturée de remparts.",
    body: [
      { text: "Classée UNESCO, la vieille ville fortifiée de Cartagena (Ciudad Amurallada) fut construite par les Espagnols au XVIe siècle pour se protéger des attaques de pirates — les remparts sont encore intacts aujourd’hui." },
      { heading: "Se repérer", text: "La vieille ville se divise en plusieurs secteurs : le centre historique proprement dit, plus huppé, et Getsemaní, l’ancien quartier populaire devenu le plus animé côté street art et vie nocturne." },
      { heading: "Marcher sur les remparts", text: "Comme à Dubrovnik, une promenade sur les remparts au coucher du soleil offre l’une des meilleures vues sur la ville et la mer des Caraïbes — gratuit et accessible à plusieurs points de la ville." },
      { heading: "Bon à savoir", text: "La chaleur et l’humidité sont fortes toute l’année : prévoir les visites à pied tôt le matin ou en fin de journée, et beaucoup d’eau." },
    ],
  },
  {
    city: "Quebec City",
    title: "Le Vieux-Québec, mode d’emploi",
    slug: slugify("Le Vieux-Québec, mode d’emploi"),
    dek: "La seule ville fortifiée d’Amérique du Nord au nord du Mexique se visite comme un morceau d’Europe transposé au Canada.",
    body: [
      { text: "Classé UNESCO, le Vieux-Québec se divise en Haute-Ville (derrière les remparts, dominée par le Château Frontenac) et Basse-Ville (le long du fleuve, autour de la rue du Petit-Champlain)." },
      { heading: "La Haute-Ville", text: "Remparts encore intacts, terrasse Dufferin avec vue sur le Saint-Laurent, et le Château Frontenac, l’hôtel le plus photographié du Canada — visible depuis presque tous les points de la ville." },
      { heading: "La Basse-Ville", text: "Accessible par le funiculaire ou l’escalier casse-cou, la rue du Petit-Champlain est considérée comme la plus ancienne rue commerçante d’Amérique du Nord, aujourd’hui pleine de boutiques et de restaurants." },
      { heading: "Bon à savoir", text: "Le Vieux-Québec se visite très bien à pied en une journée, mais prend un tout autre charme en hiver pendant le Carnaval, avec ses sculptures de glace et sa neige sur les toits en pente." },
    ],
  },
  {
    city: "Delhi",
    title: "Old Delhi ou New Delhi ?",
    slug: slugify("Old Delhi ou New Delhi ?"),
    dek: "Deux villes en une, construites à des siècles d’intervalle et visibles côte à côte.",
    body: [
      { text: "Delhi est littéralement double : la vieille ville moghole et la ville planifiée par les Britanniques au XXe siècle, séparées par quelques kilomètres mais des siècles d’histoire." },
      { heading: "Old Delhi : l’immersion moghole", text: "Fort Rouge, Jama Masjid (la plus grande mosquée d’Inde), marchés de Chandni Chowk où se croisent vélo-pousses et étals à perte de vue. Dense, bruyant, incontournable pour l’atmosphère." },
      { heading: "New Delhi : l’ordre colonial", text: "Larges avenues dessinées par l’architecte britannique Edwin Lutyens, India Gate, Connaught Place. Plus aéré, plus facile à naviguer, moins spectaculaire." },
      { heading: "Le bon choix", text: "Consacrer une journée complète à Old Delhi avec un guide ou un rickshaw (le dédale de ruelles se prête mal à l’improvisation), et loger plutôt côté New Delhi pour le confort et les connexions." },
    ],
  },
  {
    city: "Agra",
    title: "Voir le Taj Mahal au lever du soleil",
    slug: slugify("Voir le Taj Mahal au lever du soleil"),
    dek: "Le monument le plus visité d’Inde se révèle différemment selon l’heure — le lever du soleil reste le moment le plus recherché.",
    body: [
      { text: "Construit au XVIIe siècle par l’empereur moghol Shah Jahan en mémoire de son épouse, le Taj Mahal change littéralement de couleur selon la lumière du jour, du rose pâle à l’aube au blanc éclatant en plein jour." },
      { heading: "Pourquoi le lever du soleil", text: "L’entrée dès l’ouverture (environ 30 minutes avant le lever officiel du soleil) offre la lumière la plus douce, une chaleur bien plus supportable, et une affluence largement inférieure à celle de la journée." },
      { heading: "Le bon point de vue", text: "Le bassin central, dans l’axe du monument, offre le reflet classique du Taj Mahal dans l’eau — le point photo le plus recherché, à rejoindre rapidement après l’entrée pour éviter la foule qui s’y agglutine vite." },
      { heading: "Bon à savoir", text: "Le monument est fermé le vendredi (jour de prière) — à vérifier impérativement avant de caler son itinéraire, car cette fermeture surprend encore de nombreux visiteurs." },
    ],
  },
  {
    city: "Jaipur",
    title: "Le fort d’Amber, mode d’emploi",
    slug: slugify("Le fort d’Amber, mode d’emploi"),
    dek: "Le plus spectaculaire des forts du Rajasthan domine un lac à la sortie de Jaipur.",
    body: [
      { text: "Construit en grès jaune et marbre blanc sur une colline surplombant le lac Maota, le fort d’Amber (ou Amer) est considéré comme l’un des plus beaux exemples d’architecture rajpoute en Inde." },
      { heading: "À l’intérieur", text: "Le Sheesh Mahal (palais des Miroirs), dont les murs incrustés de milliers de petits miroirs scintillent à la moindre flamme de bougie, reste la salle la plus admirée du fort." },
      { heading: "S’y rendre", text: "À environ 11 km du centre de Jaipur, accessible en tuk-tuk, taxi ou en bus local — comptez 20-30 minutes de trajet selon le trafic." },
      { heading: "Le bon moment", text: "Une arrivée tôt le matin (ouverture vers 8h) permet d’éviter à la fois la chaleur et les groupes qui envahissent le fort en milieu de journée." },
    ],
  },
  {
    city: "Goa",
    title: "Nord ou Sud Goa ?",
    slug: slugify("Nord ou Sud Goa ?"),
    dek: "Les deux moitiés de Goa offrent deux vitesses de vacances complètement différentes.",
    body: [
      { text: "Séparé par le fleuve Zuari, Goa se divise en deux ambiances bien distinctes qui déterminent tout le rythme du séjour." },
      { heading: "Nord Goa : l’animation", text: "Calangute, Baga et Anjuna concentrent plages festives, marchés aux puces et vie nocturne la plus dense de l’État — le Goa le plus connu à l’international." },
      { heading: "Sud Goa : la tranquillité", text: "Plages comme Palolem, plus préservées et moins développées, hébergements plus haut de gamme et resorts isolés. L’ambiance est nettement plus posée." },
      { heading: "Le bon choix", text: "Nord Goa pour un séjour festif et social, Sud Goa pour une déconnexion complète — les deux sont reliés en 1h-1h30 de route si l’envie de changer de rythme se présente." },
    ],
  },
  {
    city: "Colombo",
    title: "Colombo avant de partir pour le reste du Sri Lanka",
    slug: slugify("Colombo avant de partir pour le reste du Sri Lanka"),
    dek: "La capitale économique du Sri Lanka mérite une ou deux journées avant de rayonner vers l’île.",
    body: [
      { text: "La plupart des voyageurs ne passent qu’une nuit à Colombo en arrivant ou en repartant — pourtant la ville mérite un peu plus de temps avant de filer vers les plages ou les collines à thé." },
      { heading: "À ne pas manquer", text: "Galle Face Green, la grande esplanade en bord d’océan où la ville entière se retrouve au coucher du soleil, et le marché animé de Pettah pour une immersion sensorielle dense." },
      { heading: "D’ici, où aller ensuite", text: "Le train vers Kandy (collines à thé, temple de la Dent de Bouddha) ou vers Galle (ville fortifiée hollandaise au sud) sont les deux prolongements les plus classiques depuis Colombo." },
      { heading: "Bon à savoir", text: "Le trafic à Colombo peut être dense aux heures de pointe — mieux vaut prévoir large pour tout trajet vers l’aéroport ou la gare." },
    ],
  },
  {
    city: "Kathmandu",
    title: "Katmandou avant un trek vers l’Everest",
    slug: slugify("Katmandou avant un trek vers l’Everest"),
    dek: "La capitale népalaise n’est pas qu’une étape logistique — elle mérite son propre temps avant de partir en montagne.",
    body: [
      { text: "Katmandou sert de point de départ obligé pour la quasi-totalité des treks himalayens, mais la vallée concentre à elle seule sept sites classés UNESCO qui méritent d’être vus avant de partir en altitude." },
      { heading: "Avant le départ", text: "Prévoyez au moins une journée complète pour le permis de trek (TIMS) et l’équipement de dernière minute, largement disponible (et souvent contrefait mais fonctionnel) dans les boutiques de Thamel." },
      { heading: "Ce qu’il ne faut pas manquer", text: "Le stupa doré de Boudhanath, le plus grand d’Asie, et Durbar Square, l’ancienne place royale — deux sites accessibles en une demi-journée chacun depuis le centre." },
      { heading: "Bon à savoir", text: "Les vols vers Lukla (point de départ du trek vers l’Everest) sont fréquemment retardés ou annulés pour cause de météo — prévoyez une marge de sécurité d’au moins un jour dans le calendrier avant et après le trek." },
    ],
  },
  {
    city: "Male",
    title: "Resort ou île locale, que choisir ?",
    slug: slugify("Resort ou île locale, que choisir ?"),
    dek: "Les Maldives ne se limitent pas aux resorts de luxe — les îles locales offrent une alternative bien plus abordable.",
    body: [
      { text: "Pendant longtemps, les Maldives n’étaient accessibles qu’en resort privé sur une île entière — depuis 2009, les îles locales habitées peuvent aussi accueillir des visiteurs en guesthouse." },
      { heading: "Le resort classique", text: "Une île entière dédiée à un seul hôtel, bungalows sur pilotis, tout compris souvent luxueux. L’expérience la plus exclusive, mais aussi la plus chère, parfois plusieurs centaines d’euros la nuit." },
      { heading: "L’île locale", text: "Hébergement chez l’habitant ou en petite guesthouse, prix nettement plus accessibles, mais avec quelques règles locales à respecter (pas d’alcool public, tenue modeste en dehors des plages « bikini » désignées, le pays étant musulman)." },
      { heading: "Le bon choix", text: "Le resort pour une lune de miel ou une occasion unique, l’île locale pour découvrir les Maldives à budget plus raisonnable sans sacrifier la beauté des lagons." },
    ],
  },
  {
    city: "Phuket",
    title: "Patong ou Kata/Karon ?",
    slug: slugify("Patong ou Kata/Karon ?"),
    dek: "La plage la plus festive de l’île ou ses voisines plus tranquilles.",
    body: [
      { text: "Patong concentre la réputation (et l’image parfois sulfureuse) de Phuket, tandis que Kata et Karon offrent une version plus posée du même littoral." },
      { heading: "Patong : l’énergie", text: "Vie nocturne la plus intense de l’île (Bangla Road), plage très fréquentée, nombreuses options de restauration et de shopping à toute heure." },
      { heading: "Kata / Karon : le compromis", text: "Plages plus calmes et plus familiales, à 15-20 minutes de route de Patong, tout en restant bien équipées en hôtels et restaurants." },
      { heading: "Le bon choix", text: "Patong pour un séjour axé nightlife, Kata ou Karon pour un équilibre plus tranquille avec la vie nocturne de Patong accessible en soirée si l’envie se présente." },
    ],
  },
  {
    city: "Koh Samui",
    title: "Chaweng ou Lamai ?",
    slug: slugify("Chaweng ou Lamai ?"),
    dek: "Les deux plages principales de Koh Samui, pour deux rythmes de vacances.",
    body: [
      { text: "Chaweng et Lamai sont les deux plages historiques de Koh Samui, situées sur la côte est de l’île." },
      { heading: "Chaweng : la plage principale", text: "La plus longue et la plus fréquentée de l’île, nightlife dense, plus grand choix d’hôtels et de restaurants. Le choix par défaut pour un premier séjour." },
      { heading: "Lamai : la plus posée", text: "Deuxième plage en importance, ambiance nettement plus calme, quelques options festives mais à plus petite échelle. Bon compromis pour souffler sans s’isoler complètement." },
      { heading: "Le bon choix", text: "Chaweng pour l’animation et les options variées, Lamai pour un séjour plus tranquille tout en restant à 15-20 minutes de la vie nocturne de Chaweng." },
    ],
  },
  {
    city: "Phnom Penh",
    title: "Comprendre l’histoire khmère rouge",
    slug: slugify("Comprendre l’histoire khmère rouge"),
    dek: "Pour comprendre le Cambodge d’aujourd’hui, il faut passer par les lieux de mémoire de Phnom Penh.",
    body: [
      { text: "Entre 1975 et 1979, le régime khmer rouge a causé la mort d’environ un quart de la population cambodgienne — un traumatisme national encore très présent, que la capitale documente avec une franchise rare." },
      { heading: "Tuol Sleng (S-21)", text: "Ancien lycée transformé en centre de détention et de torture, aujourd’hui musée du génocide. La visite est difficile mais considérée comme essentielle pour comprendre le pays." },
      { heading: "Choeung Ek (les Killing Fields)", text: "À environ 30 minutes du centre, le site principal d’exécutions de masse propose un audioguide détaillé et poignant, avec un mémorial central rassemblant les restes retrouvés." },
      { heading: "Bon à savoir", text: "Ces deux visites se font généralement le même jour, tôt le matin, et laissent un impact émotionnel fort — prévoir un après-midi plus léger ensuite." },
    ],
  },
  {
    city: "Yangon",
    title: "La pagode Shwedagon au coucher du soleil",
    slug: slugify("La pagode Shwedagon au coucher du soleil"),
    dek: "Le monument le plus sacré du Myanmar se révèle pleinement à la tombée du jour.",
    body: [
      { text: "Recouverte de véritables feuilles d’or et couronnée d’un diamant de 76 carats à son sommet, la pagode Shwedagon domine Yangon et serait vieille de plus de 2 500 ans selon la tradition bouddhiste." },
      { heading: "Pourquoi le coucher de soleil", text: "La lumière dorée de fin de journée fait littéralement rayonner le stupa doré, et la chaleur du sol en marbre (on marche pieds nus, comme l’exige la coutume) devient supportable." },
      { heading: "L’ambiance", text: "Moines en robe safran, familles en prière, bougies allumées à la tombée de la nuit — le site reste un lieu de culte actif, pas seulement un monument touristique." },
      { heading: "Bon à savoir", text: "Les épaules et les genoux doivent être couverts, et les chaussures retirées dès l’entrée du complexe — prévoir des vêtements adaptés avant de s’y rendre." },
    ],
  },
  {
    city: "Taipei",
    title: "Les marchés de nuit, mode d’emploi",
    slug: slugify("Les marchés de nuit, mode d’emploi"),
    dek: "Les marchés nocturnes sont au cœur de la vie sociale et culinaire de Taipei.",
    body: [
      { text: "Taipei compte des dizaines de marchés de nuit, où se concentre l’essentiel de la street food locale — souvent plus intéressante que les restaurants formels de la ville." },
      { heading: "Shilin", text: "Le plus grand et le plus connu des marchés de nuit de Taipei, avec des centaines de stands de street food, jeux et boutiques — parfois écrasé par l’affluence touristique le week-end." },
      { heading: "Raohe ou Ningxia", text: "Plus compacts et plus authentiques, ces marchés plus petits offrent une expérience moins bondée tout en gardant l’essentiel des spécialités locales (bao à la vapeur, brochettes, tofu puant pour les plus curieux)." },
      { heading: "Comment procéder", text: "Venir affamé et goûter par petites portions à plusieurs stands plutôt que de se remplir au premier arrêt — c’est la meilleure façon de couvrir un maximum de spécialités en une soirée." },
    ],
  },
  {
    city: "Guilin",
    title: "La croisière sur la rivière Li, mode d’emploi",
    slug: slugify("La croisière sur la rivière Li, mode d’emploi"),
    dek: "Le paysage karstique le plus peint de Chine se découvre depuis l’eau, entre Guilin et Yangshuo.",
    body: [
      { text: "La rivière Li serpente entre des centaines de pitons calcaires qui ont inspiré des générations de peintres et de poètes chinois — la croisière reste la meilleure façon de les découvrir." },
      { heading: "Le parcours classique", text: "La croisière standard relie Guilin à Yangshuo en environ 4-5h, offrant un défilé continu de formations karstiques, villages de pêcheurs et rizières en terrasse." },
      { heading: "Réserver", text: "Plusieurs compagnies proposent la traversée, avec des standards de confort variables (bateau climatisé ou plus rustique) — mieux vaut comparer les avis récents avant de réserver, plutôt que de choisir uniquement sur le prix." },
      { heading: "Après la croisière", text: "Yangshuo, à l’arrivée, constitue une bien meilleure base que Guilin pour explorer le paysage karstique à vélo ou en radeau de bambou les jours suivants." },
    ],
  },
  {
    city: "Chengdu",
    title: "Voir les pandas géants, mode d’emploi",
    slug: slugify("Voir les pandas géants, mode d’emploi"),
    dek: "Chengdu abrite le plus grand centre de conservation du panda géant au monde.",
    body: [
      { text: "La base de recherche de Chengdu se consacre à la reproduction et à la conservation du panda géant, espèce emblématique du Sichuan et quasiment introuvable à l’état sauvage sans expédition spécialisée." },
      { heading: "Le bon moment", text: "Les pandas sont les plus actifs tôt le matin, entre l’ouverture (souvent 7h30) et 10h — après cette heure, ils se reposent la majeure partie de la journée, rendant l’observation moins intéressante." },
      { heading: "Sur place", text: "Le site est vaste et se parcourt en 2-3h à pied, avec des enclos dédiés aux adultes, aux pandas roux (une espèce différente malgré le nom) et une nurserie visible selon la saison des naissances." },
      { heading: "Bon à savoir", text: "S’y rendre en tout début de matinée demande de partir du centre-ville avant 7h — un effort largement récompensé par l’activité des pandas comparée à une visite en milieu de journée." },
    ],
  },
  {
    city: "Sapporo",
    title: "Le festival de la neige de Sapporo",
    slug: slugify("Le festival de la neige de Sapporo"),
    dek: "Chaque février, Sapporo se couvre de sculptures de glace et de neige monumentales.",
    body: [
      { text: "Le Yuki Matsuri (festival de la neige) de Sapporo est l’un des plus grands événements hivernaux du Japon, attirant plus de deux millions de visiteurs chaque année début février." },
      { heading: "Les sculptures", text: "Plus de 100 sculptures de neige et de glace, certaines monumentales (répliques de châteaux ou de bâtiments célèbres), sont réparties sur plusieurs sites dont le parc Odori, au centre-ville." },
      { heading: "Les trois sites", text: "Odori Park pour les grandes sculptures, Susukino pour les sculptures de glace plus fines et illuminées la nuit, et Tsudome pour les activités familiales et les glissades de neige." },
      { heading: "Bon à savoir", text: "Les hôtels se réservent des mois à l’avance pour cette période — et les températures peuvent descendre bien en dessous de zéro, prévoir des vêtements réellement adaptés au froid japonais du nord." },
    ],
  },
  {
    city: "Nara",
    title: "Nourrir les cerfs sacrés, mode d’emploi",
    slug: slugify("Nourrir les cerfs sacrés, mode d’emploi"),
    dek: "Plus de 1 200 cerfs errent en liberté dans le parc de Nara, considérés comme des messagers divins.",
    body: [
      { text: "Selon la légende shintoïste, un dieu serait arrivé à Nara monté sur un cerf blanc — depuis, les cerfs du parc sont protégés et considérés comme sacrés, habitués à la présence humaine." },
      { heading: "Les biscuits shika senbei", text: "Vendus par des marchands dans tout le parc, ces biscuits de riz sans sucre sont la seule nourriture recommandée — les cerfs les reconnaissent instantanément et peuvent devenir insistants dès qu’ils en aperçoivent un paquet." },
      { heading: "Le rituel", text: "Certains cerfs ont appris à s’incliner légèrement pour réclamer un biscuit — un moment amusant, mais attention : ils peuvent aussi donner des coups de tête ou mordiller les vêtements s’ils s’impatientent." },
      { heading: "Bon à savoir", text: "Évitez de garder de la nourriture visible dans un sac ou une poche si vous ne comptez pas nourrir les cerfs — ils identifient rapidement l’odeur et peuvent devenir insistants." },
    ],
  },
  {
    city: "Hiroshima",
    title: "Le Mémorial de la Paix, mode d’emploi",
    slug: slugify("Le Mémorial de la Paix, mode d’emploi"),
    dek: "Le site le plus important de Hiroshima porte un message universel, au-delà du tourisme.",
    body: [
      { text: "Le parc du Mémorial de la Paix occupe l’hypocentre approximatif du bombardement atomique du 6 août 1945, et concentre les principaux lieux de mémoire de la ville." },
      { heading: "Le dôme de Genbaku", text: "Seul bâtiment resté partiellement debout près de l’épicentre, préservé volontairement en l’état comme témoignage — aujourd’hui classé UNESCO." },
      { heading: "Le musée", text: "Le musée du Mémorial de la Paix retrace les événements avec des objets personnels des victimes et des explications historiques détaillées — une visite intense qui demande au moins 1h30 à 2h." },
      { heading: "Bon à savoir", text: "Le mémorial des enfants, couvert de milliers de grues en origami envoyées du monde entier en hommage à Sadako Sasaki, ajoute une dimension particulièrement poignante à la visite du parc." },
    ],
  },
  {
    city: "Jeju",
    title: "Faire le tour de l’île en voiture",
    slug: slugify("Faire le tour de l’île en voiture"),
    dek: "Jeju se découvre le mieux au volant, entre volcans, cascades et plages.",
    body: [
      { text: "Île volcanique au sud de la péninsule coréenne, Jeju manque de transports en commun denses en dehors de Jeju City — la voiture de location reste de loin le moyen le plus pratique de l’explorer." },
      { heading: "L’itinéraire classique", text: "Le tour complet de l’île (environ 180 km de côte) peut se faire en 2-3 jours, en s’arrêtant au cratère de Seongsan Ilchulbong à l’est, aux cascades de Jeongbang et Cheonjiyeon au sud, et aux plages d’Hyeopjae à l’ouest." },
      { heading: "Le mont Halla", text: "Point culminant de la Corée du Sud (1 947 m), au centre de l’île, accessible par plusieurs sentiers de randonnée de difficulté variable selon le temps disponible." },
      { heading: "Bon à savoir", text: "Un permis de conduire international est nécessaire pour louer une voiture ; la conduite se fait à droite, comme en France, ce qui simplifie l’adaptation pour les visiteurs européens." },
    ],
  },
  {
    city: "Macau",
    title: "Le centre historique portugais, mode d’emploi",
    slug: slugify("Le centre historique portugais, mode d’emploi"),
    dek: "450 ans de présence portugaise ont laissé une empreinte architecturale unique en Asie.",
    body: [
      { text: "Colonie portugaise jusqu’en 1999, Macau conserve un centre historique classé UNESCO où se mêlent églises baroques, places pavées à la portugaise et temples chinois traditionnels." },
      { heading: "Les ruines de Saint-Paul", text: "Façade emblématique de l’ancienne église Saint-Paul, détruite par un incendie au XIXe siècle et ne laissant debout que sa façade monumentale — le symbole architectural de Macau." },
      { heading: "Le Largo do Senado", text: "Place centrale pavée de motifs en vagues typiquement portugais, entourée de bâtiments colorés aux couleurs pastel — l’un des meilleurs exemples de fusion sino-portugaise de la ville." },
      { heading: "Bon à savoir", text: "Le centre historique se visite entièrement à pied en une demi-journée, et contraste fortement avec les méga-casinos du Cotai Strip à quelques kilomètres de là." },
    ],
  },
  {
    city: "Da Nang",
    title: "Le pont d’Or de Ba Na Hills",
    slug: slugify("Le pont d’Or de Ba Na Hills"),
    dek: "Un pont tenu par deux mains géantes de pierre, devenu l’image la plus partagée du centre du Vietnam.",
    body: [
      { text: "Inauguré en 2018, le Cầu Vàng (pont d’Or) de Ba Na Hills est rapidement devenu l’un des sites les plus photographiés du Vietnam, porté par deux mains sculptées géantes émergeant de la végétation." },
      { heading: "Le site de Ba Na Hills", text: "Ancienne station climatique française perchée à 1 400 m d’altitude, aujourd’hui parc à thème complet avec un village reconstitué de style européen, accessible par le plus long téléphérique monocâble du monde." },
      { heading: "S’y rendre", text: "À environ 45 minutes de route de Da Nang, suivi d’une ascension en téléphérique offrant une vue spectaculaire sur la jungle environnante." },
      { heading: "Bon à savoir", text: "Le site est très fréquenté le week-end ; une arrivée en semaine ou tôt le matin permet de profiter du pont et de la vue sans attendre pour la photo classique." },
    ],
  },
  {
    city: "Tel Aviv",
    title: "L’architecture Bauhaus de Tel Aviv",
    slug: slugify("L’architecture Bauhaus de Tel Aviv"),
    dek: "Tel Aviv abrite la plus grande concentration au monde de bâtiments Bauhaus, classée UNESCO.",
    body: [
      { text: "Dans les années 1930, des architectes juifs formés en Europe (souvent directement à l’école du Bauhaus) ont fui la montée du nazisme pour s’installer à Tel Aviv, y important un style résolument moderniste." },
      { heading: "La Ville Blanche", text: "Plus de 4 000 bâtiments de style Bauhaus, aux lignes épurées et aux façades blanches adaptées au climat méditerranéen (balcons pour l’ombre, fenêtres étroites), forment ce que l’UNESCO appelle la « Ville Blanche »." },
      { heading: "Où les voir", text: "Le boulevard Rothschild concentre certains des exemples les mieux préservés, avec un petit centre d’information dédié au style Bauhaus pour comprendre les codes architecturaux avant de se promener." },
      { heading: "Bon à savoir", text: "De nombreux bâtiments restent des habitations privées — on les admire depuis la rue, sans possibilité de visiter l’intérieur sauf exception signalée." },
    ],
  },
  {
    city: "Jerusalem",
    title: "La vieille ville en un jour, mode d’emploi",
    slug: slugify("La vieille ville en un jour, mode d’emploi"),
    dek: "Un kilomètre carré concentre les lieux saints de trois religions monothéistes.",
    body: [
      { text: "La vieille ville de Jérusalem se divise en quatre quartiers (juif, chrétien, musulman, arménien), chacun avec ses propres lieux de culte majeurs, tous accessibles à pied en une journée bien organisée." },
      { heading: "Le Mur des Lamentations", text: "Dernier vestige du Second Temple, lieu de prière le plus sacré du judaïsme — accessible librement, avec une séparation entre les zones de prière des hommes et des femmes." },
      { heading: "Le Saint-Sépulcre et l’esplanade des Mosquées", text: "Le Saint-Sépulcre, lieu de la crucifixion et de la résurrection selon la tradition chrétienne, et le Dôme du Rocher, sur l’esplanade des Mosquées, troisième lieu saint de l’islam — les deux se visitent en quelques heures." },
      { heading: "Bon à savoir", text: "L’accès à l’esplanade des Mosquées est soumis à des horaires stricts et réservé aux non-musulmans à certains créneaux seulement — se renseigner sur place le matin même." },
    ],
  },
  {
    city: "Beirut",
    title: "Gemmayze et Mar Mikhael, la nuit beyrouthine",
    slug: slugify("Gemmayze et Mar Mikhael, la nuit beyrouthine"),
    dek: "Deux rues qui concentrent la vie nocturne la plus vivante du Liban.",
    body: [
      { text: "Gemmayze et Mar Mikhael, quartiers voisins de Beyrouth, forment l’épicentre de la vie nocturne de la capitale libanaise depuis les années 2000." },
      { heading: "Gemmayze", text: "Rue Gouraud bordée de bars, restaurants et galeries dans des bâtiments patrimoniaux aux balcons typiques — ambiance festive dès le coucher du soleil." },
      { heading: "Mar Mikhael", text: "Juste à côté, un peu plus alternatif et créatif, avec une scène musicale live plus développée et des adresses plus confidentielles." },
      { heading: "Bon à savoir", text: "Ces deux quartiers ont été durement touchés par l’explosion du port de Beyrouth en 2020, mais la scène de sorties a largement repris depuis — un symbole de la résilience beyrouthine souvent cité par les habitants eux-mêmes." },
    ],
  },
  {
    city: "Riyadh",
    title: "Diriyah, le berceau historique du royaume",
    slug: slugify("Diriyah, le berceau historique du royaume"),
    dek: "Avant Riyad, il y avait Diriyah — le site où est né l’État saoudien moderne.",
    body: [
      { text: "Diriyah, aux portes de Riyad, fut la première capitale de la dynastie saoudienne au XVIIIe siècle, avant sa destruction en 1818 — aujourd’hui restaurée et classée UNESCO." },
      { heading: "At-Turaif", text: "Le quartier historique en pisé (architecture najdi traditionnelle), restauré avec soin, comprend palais, mosquées et maisons d’origine, offrant un aperçu rare de l’Arabie avant l’ère pétrolière." },
      { heading: "Al Bujairi", text: "Le quartier patrimonial restauré juste en face d’At-Turaif, aujourd’hui rempli de restaurants avec vue sur les remparts illuminés le soir — l’un des lieux de sortie les plus prisés de Riyad." },
      { heading: "Bon à savoir", text: "Le site se visite aussi bien de jour (pour l’architecture) que de nuit (pour l’ambiance des restaurants d’Al Bujairi face aux remparts éclairés)." },
    ],
  },
  {
    city: "Casablanca",
    title: "La mosquée Hassan II, mode d’emploi",
    slug: slugify("La mosquée Hassan II, mode d’emploi"),
    dek: "L’une des plus grandes mosquées du monde, en partie construite sur l’océan Atlantique.",
    body: [
      { text: "Achevée en 1993, la mosquée Hassan II peut accueillir 25 000 fidèles à l’intérieur et 80 000 supplémentaires sur son parvis, en partie suspendu au-dessus de l’Atlantique." },
      { heading: "Le minaret", text: "À 210 mètres, c’est le plus haut minaret du monde, visible depuis une grande partie de la ville et doté d’un laser pointant vers La Mecque, allumé la nuit." },
      { heading: "La visite", text: "C’est l’une des rares mosquées du Maroc ouvertes aux non-musulmans, en visite guidée à heures fixes — l’intérieur, avec son toit ouvrant et ses matériaux précieux, impressionne autant que l’extérieur." },
      { heading: "Bon à savoir", text: "Tenue modeste exigée (épaules et jambes couvertes) et chaussures retirées à l’entrée de la salle de prière, comme dans toute mosquée en activité." },
    ],
  },
  {
    city: "Fes",
    title: "Se repérer dans la médina de Fès",
    slug: slugify("Se repérer dans la médina de Fès"),
    dek: "La plus grande zone piétonne du monde n’a pas de logique de plan occidental — quelques repères aident à ne pas paniquer.",
    body: [
      { text: "Avec plus de 9 000 ruelles sans voitures, Fès el-Bali est souvent citée comme le plus grand labyrinthe urbain intact au monde. Se perdre y est presque inévitable — et fait partie de l’expérience." },
      { heading: "Les repères principaux", text: "Bab Boujloud (la porte bleue) à l’entrée ouest, et la Kairaouine (la plus ancienne université encore active au monde) au centre, servent de points de repère fiables pour se réorienter." },
      { heading: "Les artisans locaux", text: "Les enfants ou jeunes qui proposent spontanément de « vous montrer le chemin » demandent généralement un pourboire — ce n’est pas obligatoire mais fait partie des usages locaux si vous acceptez leur aide." },
      { heading: "Le bon réflexe", text: "Un guide officiel pour la première visite permet de comprendre la logique par corporation (quartier des tanneurs, des tisserands, des dinandiers) qui organise en réalité la médina, invisible à l’œil non averti." },
    ],
  },
  {
    city: "Johannesburg",
    title: "Visiter Soweto et le musée de l’Apartheid",
    slug: slugify("Visiter Soweto et le musée de l’Apartheid"),
    dek: "Comprendre l’Afrique du Sud contemporaine passe par l’histoire de l’apartheid, documentée sans filtre à Johannesburg.",
    body: [
      { text: "Johannesburg concentre deux lieux essentiels pour comprendre la lutte contre l’apartheid : le musée dédié et le township de Soweto, épicentre historique de la résistance." },
      { heading: "Le musée de l’Apartheid", text: "À l’entrée, les visiteurs sont assignés aléatoirement à une file « blanche » ou « non-blanche », une mise en situation immersive avant un parcours chronologique complet, de la ségrégation à la libération de Nelson Mandela." },
      { heading: "Soweto", text: "Ancien township où a éclaté le soulèvement étudiant de 1976, aujourd’hui quartier vivant avec la maison-musée de Mandela sur Vilakazi Street — la seule rue au monde ayant abrité deux prix Nobel de la paix (Mandela et Desmond Tutu)." },
      { heading: "Bon à savoir", text: "Une visite guidée (à pied ou en vélo) est vivement recommandée pour Soweto, à la fois pour le contexte historique et pour des raisons pratiques de logistique." },
    ],
  },
  {
    city: "Accra",
    title: "Les forts d’esclaves de la Cape Coast depuis Accra",
    slug: slugify("Les forts d’esclaves de la Cape Coast depuis Accra"),
    dek: "Un lieu de mémoire essentiel de la traite négrière transatlantique, à quelques heures d’Accra.",
    body: [
      { text: "La côte ghanéenne concentre l’une des plus fortes densités de forts coloniaux au monde, construits pour le commerce de l’or puis, tragiquement, pour la traite des esclaves." },
      { heading: "Cape Coast Castle et Elmina", text: "Ces deux forteresses, classées UNESCO, conservent leurs cachots où des dizaines de milliers d’Africains furent détenus avant la traversée de l’Atlantique — la « porte du non-retour » de chaque fort reste un lieu de recueillement intense." },
      { heading: "S’y rendre", text: "Environ 2h30-3h de route depuis Accra ; la plupart des visiteurs combinent les deux forts en une excursion d’une journée, avec un guide sur place pour le contexte historique." },
      { heading: "Bon à savoir", text: "La visite est émotionnellement forte, en particulier pour les visiteurs afro-descendants effectuant ce qui s’apparente souvent à un pèlerinage — nombre d’entre eux considèrent la région comme une destination de mémoire familiale." },
    ],
  },
  {
    city: "Luxor",
    title: "La Vallée des Rois, mode d’emploi",
    slug: slugify("La Vallée des Rois, mode d’emploi"),
    dek: "La nécropole royale de l’Égypte antique, creusée dans la roche de la rive ouest du Nil.",
    body: [
      { text: "Pendant près de 500 ans, les pharaons du Nouvel Empire ont été enterrés dans cette vallée aride plutôt que sous des pyramides, dans des tombeaux creusés directement dans la roche pour déjouer les pilleurs." },
      { heading: "Le billet", text: "Le ticket standard donne accès à trois tombeaux au choix parmi une sélection tournante ; celui de Toutânkhamon (plus petit mais avec le sarcophage encore en place) et de Ramsès VI se paient en supplément." },
      { heading: "Le bon moment", text: "Une arrivée à l’ouverture (souvent 6h en été) permet d’éviter la chaleur intense et la foule qui s’installe en milieu de matinée — les tombeaux eux-mêmes sont climatisés naturellement par la roche." },
      { heading: "Bon à savoir", text: "La photographie est généralement interdite ou payante en supplément à l’intérieur des tombeaux — se renseigner à l’entrée pour éviter toute confusion sur place." },
    ],
  },
  {
    city: "Sharm El Sheikh",
    title: "Plonger dans le parc national de Ras Mohammed",
    slug: slugify("Plonger dans le parc national de Ras Mohammed"),
    dek: "L’un des meilleurs spots de plongée au monde se trouve à moins d’une heure de Sharm El Sheikh.",
    body: [
      { text: "À la pointe sud du Sinaï, le parc national de Ras Mohammed protège des récifs coralliens parmi les plus spectaculaires de la mer Rouge, réputés dans le monde entier de la plongée." },
      { heading: "Ce qu’on y voit", text: "Tombants vertigineux, tortues, raies et une densité de poissons tropicaux exceptionnelle grâce à la protection du parc depuis 1983 — l’un des écosystèmes coralliens les mieux préservés de la région." },
      { heading: "Pour tous les niveaux", text: "Plusieurs sites du parc sont accessibles en snorkeling depuis la plage, tandis que les plongeurs certifiés peuvent explorer les tombants plus profonds avec un club de plongée local." },
      { heading: "Bon à savoir", text: "Une taxe d’entrée au parc national s’ajoute au prix de la sortie plongée ou snorkeling — généralement incluse dans les excursions organisées depuis Sharm El Sheikh." },
    ],
  },
  {
    city: "Seychelles",
    title: "Quelle île choisir : Mahé, Praslin ou La Digue ?",
    slug: slugify("Quelle île choisir : Mahé, Praslin ou La Digue ?"),
    dek: "Les trois îles principales de l’archipel offrent des expériences bien différentes.",
    body: [
      { text: "L’archipel des Seychelles compte 115 îles, mais Mahé, Praslin et La Digue concentrent l’essentiel des visiteurs, chacune avec sa propre identité." },
      { heading: "Mahé : la porte d’entrée", text: "Île principale, capitale Victoria, la plus grande offre d’hébergements et la plage animée de Beau Vallon. Bonne base pour commencer le séjour." },
      { heading: "Praslin : la nature préservée", text: "Vallée de Mai, forêt primitive classée UNESCO abritant le fameux coco de mer, plus tranquille que Mahé." },
      { heading: "La Digue : la carte postale", text: "Anse Source d’Argent, l’une des plages les plus photographiées au monde, île sans voitures où l’on se déplace à vélo." },
      { heading: "Le bon choix", text: "Combiner les trois îles sur un séjour de 8-10 jours reste la formule la plus satisfaisante, en ferry d’une île à l’autre." },
    ],
  },
  {
    city: "Windhoek",
    title: "Louer une voiture pour explorer la Namibie",
    slug: slugify("Louer une voiture pour explorer la Namibie"),
    dek: "La Namibie se découvre presque exclusivement en autotour — quelques repères avant de prendre la route.",
    body: [
      { text: "Avec l’une des plus faibles densités de population au monde, la Namibie n’a pratiquement pas de transport public entre ses sites majeurs — la location de véhicule, souvent un 4x4, est quasiment incontournable." },
      { heading: "Le véhicule", text: "Un 4x4 est recommandé pour les pistes en gravier (la majorité du réseau routier namibien), même si certains grands axes entre Windhoek et les sites principaux sont goudronnés et accessibles en voiture classique." },
      { heading: "Les distances", text: "Les distances entre sites (Windhoek, Sossusvlei, Etosha) se comptent en centaines de kilomètres — prévoir large sur le temps de trajet et ne pas rouler de nuit, où les animaux sauvages traversent fréquemment." },
      { heading: "Bon à savoir", text: "Faire le plein à chaque occasion : les stations-service peuvent être espacées de plusieurs centaines de kilomètres selon l’itinéraire choisi." },
    ],
  },
  {
    city: "Essaouira",
    title: "Essaouira en excursion depuis Marrakech",
    slug: slugify("Essaouira en excursion depuis Marrakech"),
    dek: "Le vent atlantique et les remparts bleus d’Essaouira offrent une vraie pause après l’intensité de Marrakech.",
    body: [
      { text: "À environ 2h30 de route de Marrakech, Essaouira contraste fortement avec l’agitation de la ville rouge : vent constant, médina bleue et blanche, rythme nettement plus lent." },
      { heading: "S’y rendre", text: "Navettes partagées, bus ou taxi grand format depuis Marrakech ; plusieurs départs quotidiens rendent l’aller-retour à la journée possible, même si une nuit sur place permet de mieux profiter de l’ambiance du soir." },
      { heading: "Sur place", text: "Médina classée UNESCO, remparts (la Skala) avec ses canons historiques, port de pêche animé où déguster du poisson grillé directement sur les étals." },
      { heading: "Bon à savoir", text: "Le vent qui a fait la réputation de la ville pour le windsurf et le kitesurf peut aussi rafraîchir sensiblement les soirées, même en été — prévoir une veste légère." },
    ],
  },
  {
    city: "Kuwait City",
    title: "Le souk Al-Mubarakiya, mode d’emploi",
    slug: slugify("Le souk Al-Mubarakiya, mode d’emploi"),
    dek: "Le marché historique de Koweït City a traversé plus d’un siècle sans perdre son authenticité.",
    body: [
      { text: "Plus ancien marché de la capitale koweïtienne, Al-Mubarakiya continue de fonctionner comme un vrai marché local, au milieu des gratte-ciels modernes qui l’encerclent désormais." },
      { heading: "Ce qu’on y trouve", text: "Épices, dattes, textiles, or et argenterie, mais aussi une excellente zone de restauration où se pressent les habitants à l’heure du déjeuner — loin des restaurants pour touristes." },
      { heading: "Le bon moment", text: "Fin d’après-midi et soirée, une fois la chaleur retombée, offrent l’ambiance la plus vivante, avec le marché qui s’anime nettement après le coucher du soleil." },
      { heading: "Bon à savoir", text: "Le marchandage est attendu sur les articles non alimentaires (textiles, artisanat), mais pas sur les produits frais vendus à prix fixe." },
    ],
  },
  {
    city: "Melbourne",
    title: "Les laneways et le street art, mode d’emploi",
    slug: slugify("Les laneways et le street art, mode d’emploi"),
    dek: "Le vrai Melbourne se cache dans des ruelles qu’on ne trouve pas sur une carte touristique classique.",
    body: [
      { text: "Melbourne a développé sa réputation culturelle autour de ses laneways (ruelles) couvertes de street art, souvent invisibles depuis les avenues principales du centre-ville." },
      { heading: "Hosier Lane", text: "La ruelle la plus connue et la plus photographiée, où les œuvres changent en permanence — ce qui est peint aujourd’hui peut avoir disparu la semaine suivante, remplacé par une nouvelle fresque." },
      { heading: "Au-delà du street art", text: "Ces mêmes ruelles abritent souvent les meilleurs cafés cachés de la ville, une autre spécialité locale — Melbourne est reconnue comme l’une des capitales mondiales du café de spécialité." },
      { heading: "Le bon réflexe", text: "Explorer sans itinéraire fixe, en s’enfonçant dans chaque ruelle qui semble intéressante depuis la rue principale — c’est la meilleure façon de découvrir le Melbourne caché." },
    ],
  },
  {
    city: "Auckland",
    title: "Les îles du golfe d’Auckland en 1 jour",
    slug: slugify("Les îles du golfe d’Auckland en 1 jour"),
    dek: "Plusieurs îles spectaculaires sont accessibles en ferry depuis le centre-ville d’Auckland.",
    body: [
      { text: "Le golfe d’Hauraki, au large d’Auckland, compte plusieurs dizaines d’îles, dont certaines se visitent aisément en excursion d’une journée depuis le port du centre-ville." },
      { heading: "Waiheke Island", text: "La plus populaire, réputée pour ses vignobles (plus de 30 domaines) et ses plages, à seulement 40 minutes de ferry — l’excursion la plus simple pour une première sortie." },
      { heading: "Rangitoto Island", text: "Île volcanique offrant une randonnée de 1-2h jusqu’au sommet du cratère, avec une vue panoramique sur Auckland et le golfe — aucune habitation, l’île est un espace naturel protégé." },
      { heading: "Bon à savoir", text: "Les ferries partent régulièrement du Auckland Ferry Terminal, au pied du centre-ville — pas besoin de réserver longtemps à l’avance en dehors de la haute saison estivale." },
    ],
  },
  {
    city: "Queenstown",
    title: "Le saut à l’élastique, mode d’emploi",
    slug: slugify("Le saut à l’élastique, mode d’emploi"),
    dek: "Le saut à l’élastique commercial est né à Queenstown en 1988 — la ville en reste la capitale mondiale.",
    body: [
      { text: "C’est au pont de Kawarau, aux portes de Queenstown, qu’A.J. Hackett a lancé en 1988 le premier site de saut à l’élastique commercial au monde — une institution locale depuis." },
      { heading: "Les sites", text: "Le Kawarau Bridge (43 m) reste le site historique et le plus accessible ; le Nevis Bungy (134 m), suspendu au-dessus d’un canyon, offre le saut le plus vertigineux de Nouvelle-Zélande." },
      { heading: "Pour les moins téméraires", text: "Le Nevis Swing (une balançoire géante) et le Ledge (saut urbain en surplomb de la ville) offrent des sensations fortes avec un engagement psychologique moindre que le saut classique." },
      { heading: "Bon à savoir", text: "Aucune expérience préalable n’est nécessaire : l’équipe encadre chaque saut individuellement, et la plupart des sites acceptent les visiteurs à partir de 10 ans avec une limite de poids à vérifier avant réservation." },
    ],
  },
  {
    city: "Fiji",
    title: "Mamanuca ou Yasawa, quelles îles choisir ?",
    slug: slugify("Mamanuca ou Yasawa, quelles îles choisir ?"),
    dek: "Deux archipels au départ de Nadi, pour deux niveaux d’accessibilité et d’authenticité.",
    body: [
      { text: "Les Mamanuca et les Yasawa sont les deux archipels les plus visités de Fidji, tous deux accessibles en bateau depuis Nadi ou Denarau, mais avec des profils différents." },
      { heading: "Mamanuca : l’accessible", text: "À 30 min-1h de bateau, ces îles concentrent la majorité des resorts et excursions à la journée — pratique pour un court séjour sans trop de logistique." },
      { heading: "Yasawa : l’authentique", text: "Plus reculées (1h30 à 4h de bateau selon l’île), moins développées, avec des villages fidjiens traditionnels encore visitables — l’expérience la plus proche de la vie locale." },
      { heading: "Le bon choix", text: "Mamanuca pour un séjour court et pratique, Yasawa pour ceux qui ont le temps et cherchent une déconnexion plus complète, loin des circuits standards." },
    ],
  },
  {
    city: "Bora Bora",
    title: "Bungalow sur pilotis, ce qu’il faut savoir avant de réserver",
    slug: slugify("Bungalow sur pilotis, ce qu’il faut savoir avant de réserver"),
    dek: "L’image la plus connue de la Polynésie a un prix — et quelques subtilités à connaître avant de réserver.",
    body: [
      { text: "Le bungalow sur pilotis, inventé dans les années 1960 en Polynésie française, reste l’hébergement le plus recherché de Bora Bora — et l’un des plus chers au monde." },
      { heading: "Le prix", text: "Les tarifs varient énormément selon la vue (lagon simple, vue sur le mont Otemanu, ou sur motu privé) — comptez généralement plusieurs centaines d’euros la nuit en haute saison, avec un écart important entre les établissements." },
      { heading: "Le sol en verre", text: "De nombreux bungalows proposent une section de plancher vitrée donnant directement sur le lagon — un vrai plus pour observer les poissons, mais à vérifier explicitement avant de réserver, car toutes les chambres n’en sont pas équipées." },
      { heading: "Bon à savoir", text: "La plupart des grands hôtels se trouvent sur des motu (îlots) séparés du village principal de Vaitape, nécessitant un transfert en bateau inclus dans le séjour — à anticiper pour toute sortie hors de l’hôtel." },
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
