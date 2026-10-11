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
        text: "Pour une soirée plus posée, la promenade le long de la Tamise entre Londres Eye et Tower Bridge, ponctuée de bars avec vue, change du rythme plus électrique des autres quartiers.",
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
    title: "Quel quartier choisir à Vienne ?",
    slug: slugify("Quel quartier choisir à Vienne ?"),
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
    title: "Quel quartier choisir à Singapour ?",
    slug: slugify("Quel quartier choisir à Singapour ?"),
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
    title: "Quel quartier choisir à Lisbonne ?",
    slug: slugify("Quel quartier choisir à Lisbonne ?"),
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
    title: "Visiter Al-Balad, le vieux Djeddah",
    slug: slugify("Visiter Al-Balad, le vieux Djeddah"),
    dek: "Le quartier historique classé UNESCO se découvre différemment selon l’heure de la journée.",
    body: [
      {
        text: "Al-Balad concentre l’histoire marchande de Djeddah, avec ses maisons de corail aux balcons de bois sculptés (rawasheen), certaines vieilles de plusieurs siècles. Le quartier vit à deux vitesses très différentes.",
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
      { text: "Downtown et Dubaï Marina concentrent la majorité des hôtels de la ville, mais répondent à deux envies différentes." },
      { heading: "Downtown : le Dubaï spectaculaire", text: "Burj Khalifa, Dubaï Mall, fontaines chorégraphiées. Le plus central pour le tourisme classique, mais aussi le plus minéral — peu de plage à proximité immédiate." },
      { heading: "Dubaï Marina : la vie balnéaire", text: "Gratte-ciels au bord de l’eau, promenade animée, plage de JBR à pied. Ambiance plus détendue, restaurants en terrasse, mais à 25-30 min de Downtown." },
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
    title: "Quel quartier choisir à Athènes ?",
    slug: slugify("Quel quartier choisir à Athènes ?"),
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
    title: "Quel quartier choisir à Venise ?",
    slug: slugify("Quel quartier choisir à Venise ?"),
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
    title: "Quel quartier choisir à Mexico ?",
    slug: slugify("Quel quartier choisir à Mexico ?"),
    dek: "Roma Norte fait quasiment l’unanimité, mais Polanco et Coyoacán ont chacun leur public.",
    body: [
      { text: "Mexico est immense, mais la plupart des visiteurs gravitent autour de trois quartiers aux profils bien distincts." },
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
    title: "Quel quartier choisir au Caire ?",
    slug: slugify("Quel quartier choisir au Caire ?"),
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
    title: "Quel quartier choisir à Pékin ?",
    slug: slugify("Quel quartier choisir à Pékin ?"),
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
    title: "Quel quartier choisir à Montréal ?",
    slug: slugify("Quel quartier choisir à Montréal ?"),
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
      { text: "Colonie portugaise jusqu’en 1999, Macao conserve un centre historique classé UNESCO où se mêlent églises baroques, places pavées à la portugaise et temples chinois traditionnels." },
      { heading: "Les ruines de Saint-Paul", text: "Façade emblématique de l’ancienne église Saint-Paul, détruite par un incendie au XIXe siècle et ne laissant debout que sa façade monumentale — le symbole architectural de Macao." },
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
    dek: "L’un des meilleurs spots de plongée au monde se trouve à moins d’une heure de Charm el-Cheikh.",
    body: [
      { text: "À la pointe sud du Sinaï, le parc national de Ras Mohammed protège des récifs coralliens parmi les plus spectaculaires de la mer Rouge, réputés dans le monde entier de la plongée." },
      { heading: "Ce qu’on y voit", text: "Tombants vertigineux, tortues, raies et une densité de poissons tropicaux exceptionnelle grâce à la protection du parc depuis 1983 — l’un des écosystèmes coralliens les mieux préservés de la région." },
      { heading: "Pour tous les niveaux", text: "Plusieurs sites du parc sont accessibles en snorkeling depuis la plage, tandis que les plongeurs certifiés peuvent explorer les tombants plus profonds avec un club de plongée local." },
      { heading: "Bon à savoir", text: "Une taxe d’entrée au parc national s’ajoute au prix de la sortie plongée ou snorkeling — généralement incluse dans les excursions organisées depuis Charm el-Cheikh." },
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
  {
    city: "Tokyo",
    title: "Haneda ou Narita ?",
    slug: slugify("Haneda ou Narita ?"),
    dek: "Deux aéroports, deux distances : le choix dépend surtout de votre quartier et de votre heure d’arrivée.",
    body: [
      { text: "Tokyo est desservie par deux grands aéroports internationaux, et la différence se joue en temps de trajet : Haneda est nettement plus proche du centre, Narita plus éloigné mais très bien relié." },
      { heading: "Haneda, le plus pratique", text: "Comptez environ une demi-heure vers Shinagawa par la ligne Keikyu, ou le monorail vers Hamamatsucho. C’est l’option idéale pour une arrivée tardive ou si vous logez au sud ou au centre de la ville." },
      { heading: "Narita, plus loin mais bien relié", text: "Le Narita Express rejoint Tokyo et Shinjuku sans changement, et le Skyliner dessert Nippori et Ueno plus vite : à Ueno ou Asakusa, c’est même l’option la plus directe. Prévoyez environ une heure, parfois davantage." },
      { heading: "Le bon choix", text: "Si le prix du vol est comparable, prenez Haneda. Si Narita est moins cher, l’économie vaut le détour tant que votre arrivée tombe avant le dernier train de la soirée." },
    ],
  },
  {
    city: "Tokyo",
    title: "Tokyo en 5 jours",
    slug: slugify("Tokyo en 5 jours"),
    dek: "Cinq jours permettent de voir plusieurs visages de la ville sans courir d’un bout à l’autre.",
    body: [
      { text: "Cinq jours suffisent pour sentir la diversité de Tokyo, à condition de regrouper les visites par secteur plutôt que de zigzaguer d’un quartier à l’autre." },
      { heading: "Jours 1 et 2 : tradition et culture", text: "Commencez par Asakusa et son temple, puis Ueno pour son parc et ses musées. Le lendemain, Ginza pour la gastronomie et les grands magasins, avec une soirée calme dans un quartier plus posé." },
      { heading: "Jours 3 et 4 : la ville contemporaine", text: "Consacrez une journée à Shibuya et Shinjuku, entre carrefours, boutiques et restaurants, puis une autre à Akihabara pour la culture manga et gaming, si cela vous parle." },
      { heading: "Jour 5 : respirer", text: "Gardez la dernière journée pour une excursion hors de la ville, vers Kamakura par exemple, ou pour revenir dans le quartier qui vous a le plus plu. Les journées trop chargées fatiguent vite à Tokyo." },
    ],
  },
  {
    city: "Tokyo",
    title: "Le métro sans stress",
    slug: slugify("Le métro sans stress"),
    dek: "Le réseau paraît intimidant mais suit une logique simple, une fois deux ou trois repères en main.",
    body: [
      { text: "Le métro de Tokyo est dense et ponctuel, avec plusieurs exploitants, ce qui déroute au début. Quelques réflexes suffisent à le rendre très confortable." },
      { heading: "Cartes et billets", text: "Une carte rechargeable de type Suica ou Pasmo évite de calculer chaque trajet. Tokyo Metro et Toei étant deux réseaux distincts, une correspondance entre eux est parfois facturée en plus ; le Tokyo Subway Ticket 24 h à 800 ¥ couvre les deux." },
      { heading: "Éviter les heures de pointe", text: "Entre 7 h 30 et 9 h 30, les rames sont bondées, parfois au point de ne pas pouvoir monter. Décalez vos départs si vous avez des bagages, et notez que les derniers trains partent vers minuit." },
      { heading: "S’orienter dans les grandes gares", text: "Shinjuku ou Shibuya comptent des dizaines de sorties : repérez la bonne sortie avant de monter à la surface, elle change tout pour rejoindre votre destination à pied." },
    ],
  },
  {
    city: "Tokyo",
    title: "Tokyo sous la pluie",
    slug: slugify("Tokyo sous la pluie"),
    dek: "La pluie ne gâche pas un séjour à Tokyo : la ville regorge d’alternatives couvertes.",
    body: [
      { text: "Entre la saison des pluies, vers juin, et quelques épisodes de typhon en fin d’été, il arrive de visiter Tokyo sous la pluie. La ville y est plutôt bien préparée." },
      { heading: "Musées et lieux couverts", text: "Le parc d’Ueno rassemble plusieurs grands musées à quelques pas les uns des autres, ce qui permet d’occuper facilement une journée. Les galeries d’Akihabara et les centres commerciaux fonctionnent aussi bien sous la pluie." },
      { heading: "Manger à l’abri", text: "Les sous-sols des grands magasins de Ginza abritent de vastes halles gourmandes, idéales pour un déjeuner varié sans sortir. Les galeries commerçantes couvertes sont également nombreuses autour des gares." },
      { heading: "Bon à savoir", text: "Les parapluies s’achètent partout pour quelques centaines de yens, dans les supérettes comme dans les gares. Pensez à des chaussures qui sèchent vite, car on marche beaucoup." },
    ],
  },
  {
    city: "Tokyo",
    title: "Combien coûte une journée ?",
    slug: slugify("Combien coûte une journée ?"),
    dek: "Un ordre de grandeur pour budgéter une journée à Tokyo, de l’économe au confortable.",
    body: [
      { text: "Tokyo a la réputation d’être très chère, mais elle est en réalité plus abordable qu’on ne le croit pour manger et se déplacer. Le logement pèse le plus lourd dans le budget." },
      { heading: "Transports", text: "Un trajet en métro coûte entre 180 et 330 ¥ selon la distance, et le Tokyo Subway Ticket 24 h est proposé à 800 ¥. Sur une journée de visites, comptez entre 600 et 1 000 ¥ en moyenne." },
      { heading: "Repas", text: "Un déjeuner en formule ou un bol de ramen se trouve couramment autour de 1 000 ¥, et les supérettes dépannent pour moins. Un dîner dans un restaurant plus soigné grimpe plus vite, à vous de choisir votre rythme." },
      { heading: "Ordre de grandeur", text: "En voyageant simplement, comptez environ 70 à 100 € par jour hors hébergement, et nettement plus pour des restaurants et visites payantes. Ces montants sont indicatifs, vérifiez les tarifs avant de partir." },
    ],
  },
  {
    city: "Tokyo",
    title: "Les erreurs qui font perdre du temps",
    slug: slugify("Les erreurs qui font perdre du temps"),
    dek: "Quelques pièges classiques à Tokyo, faciles à éviter avec un peu d’anticipation.",
    body: [
      { text: "Tokyo est vaste, et une mauvaise organisation coûte vite des heures de trajet. Voici les erreurs les plus fréquentes chez les premiers visiteurs." },
      { heading: "Mélanger les quartiers", text: "Passer de Asakusa à Shibuya puis à Ueno dans la même journée consomme beaucoup de temps dans les transports. Regroupez vos visites par secteur pour garder de l’énergie." },
      { heading: "Arriver sans réservation", text: "Certains restaurants très prisés et plusieurs attractions fonctionnent sur réservation, et les files d’attente peuvent être longues. Anticipez les adresses que vous tenez à tester." },
      { heading: "Trimballer ses valises", text: "Les escaliers des gares et les rames bondées compliquent le transport de bagages. Les services d’envoi de bagages vers l’hôtel, très courants au Japon, permettent de voyager léger." },
    ],
  },
  {
    city: "Paris",
    title: "CDG ou Orly : comment rejoindre votre hôtel",
    slug: slugify("CDG ou Orly : comment rejoindre votre hôtel"),
    dek: "Deux aéroports, deux liaisons très différentes : voici comment choisir selon votre point de chute.",
    body: [
      { text: "Paris compte deux grands aéroports, Roissy-Charles-de-Gaulle (CDG) et Orly, et la meilleure façon de rejoindre la ville diffère de l’un à l’autre." },
      { heading: "Depuis CDG", text: "Le RER B met environ 50 minutes jusqu’à Châtelet et coûte 11,80 €. C’est le plus économique, mais il peut être bondé aux heures de pointe et se prête mal aux gros bagages." },
      { heading: "Depuis Orly", text: "La ligne 14 du métro relie Orly au centre en une trentaine de minutes, pour 13,10 €. Elle est rapide, directe et accessible, et dessert plusieurs quartiers sans changement." },
      { heading: "Le taxi ou le VTC", text: "Un forfait taxi tourne autour de 55 € depuis CDG et 35 € depuis Orly, porte-à-porte. Si vous êtes à plusieurs avec des valises, ou si vous arrivez tard, la différence se réduit." },
    ],
  },
  {
    city: "Paris",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Où boire un verre et faire la fête à Paris, selon l’ambiance recherchée.",
    body: [
      { text: "Paris ne dort pas dans tous ses quartiers : la vie nocturne se concentre dans quelques secteurs, chacun avec une ambiance différente." },
      { heading: "Bastille et Oberkampf", text: "Le 11e arrondissement est l’un des plus animés le soir, jeune et dense en bars. C’est le point de chute idéal pour une soirée sans programme précis, à pied entre deux adresses." },
      { heading: "Canal Saint-Martin et Pigalle", text: "Le canal, dans le 10e, attire une clientèle branchée autour de ses berges, tandis que Pigalle, dans le 9e, mêle bars à cocktails et salles de concert. Les ambiances sont très différentes." },
      { heading: "Rentrer sans stress", text: "Le métro s’arrête vers 1 h en semaine et plus tard le week-end ; au-delà, des bus de nuit prennent le relais. Vérifiez votre trajet de retour avant de sortir, surtout si vous logez en périphérie." },
    ],
  },
  {
    city: "Paris",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Du comptoir de boulangerie au café à la terrasse, quelques façons d’aborder la première heure du jour.",
    body: [
      { text: "Le petit-déjeuner parisien classique tient en peu de choses : un café, un croissant, parfois une tartine. Mais plusieurs options coexistent selon le budget et le temps." },
      { heading: "À la boulangerie", text: "Une viennoiserie achetée en boulangerie et un café pris au comptoir d’un bar voisin coûtent moins cher qu’un petit-déjeuner assis, et c’est exactement ce que font beaucoup de Parisiens." },
      { heading: "Au café", text: "Les cafés proposent des formules petit-déjeuner avec boisson chaude, jus et viennoiserie. À Saint-Germain ou dans le Marais, on y paie surtout la terrasse, mais l’ambiance vaut parfois le détour." },
      { heading: "Le bon réflexe", text: "Commencez tôt : les boulangeries sont souvent les plus fournies avant 9 h, et les cafés les plus agréables se remplissent vite le week-end. Évitez les adresses collées aux grands monuments." },
    ],
  },
  {
    city: "Paris",
    title: "Paris avec 100 € par jour",
    slug: slugify("Paris avec 100 € par jour"),
    dek: "Possible, mais à condition de faire des choix clairs sur l’hébergement et les repas.",
    body: [
      { text: "Paris avec 100 € par jour est faisable pour un voyageur seul qui reste attentif à ses dépenses, à condition de dormir en auberge ou dans une chambre économique." },
      { heading: "Se déplacer", text: "Le Pass Navigo Jour à 8,65 € permet des trajets illimités sur la journée, et beaucoup de visites se font à pied dans le centre. Pour un court séjour, le ticket à l’unité à 2,15 € reste aussi une option." },
      { heading: "Manger", text: "Un sandwich de boulangerie ou une formule du midi coûtent nettement moins qu’un dîner à la carte, et un pique-nique au bord de la Seine fait partie des plaisirs gratuits. Réservez vos dîners plus soignés pour une seule soirée." },
      { heading: "Visiter", text: "Les jardins, les églises et les promenades sont gratuits, et plusieurs musées offrent des réductions ou la gratuité à certains publics. Choisissez deux ou trois visites payantes plutôt que de tout cocher." },
    ],
  },
  {
    city: "Bangkok",
    title: "BTS/MRT : comment choisir son quartier",
    slug: slugify("BTS/MRT : comment choisir son quartier"),
    dek: "À Bangkok, la proximité d’une station change plus le séjour que le quartier lui-même.",
    body: [
      { text: "Bangkok est une ville très étendue où la circulation peut décupler les temps de trajet. Loger près d’une station de BTS ou de MRT facilite tout." },
      { heading: "Le long du BTS", text: "Sukhumvit et Silom sont reliées au réseau aérien et disposent d’une offre nocturne et de restaurants fournie. C’est le choix le plus simple pour un premier séjour." },
      { heading: "Au bord du fleuve et dans la vieille ville", text: "Riverside et Old Town sont plus éloignés du BTS, et on s’y déplace volontiers en bateau-bus sur le Chao Phraya. Le cadre est superbe, mais prévoyez des trajets en taxi ou en bateau." },
      { heading: "Un quartier plus local", text: "Ari, plus calme et résidentiel, offre un compromis agréable avec des cafés et un accès au BTS. Il convient bien à un séjour plus long, où l’on cherche une ambiance moins touristique." },
    ],
  },
  {
    city: "Bangkok",
    title: "48 h à Bangkok",
    slug: slugify("48 h à Bangkok"),
    dek: "Deux jours pour voir l’essentiel : le Bangkok historique d’un côté, la ville moderne de l’autre.",
    body: [
      { text: "En deux jours, Bangkok demande de choisir. Voici un parcours qui sépare le Bangkok des temples de celui des marchés et des quartiers modernes." },
      { heading: "Jour 1 : temples et fleuve", text: "Partez tôt vers la vieille ville pour les temples, avant la chaleur et la foule, en couvrant épaules et genoux comme l’exigent les lieux. Descendez ensuite le fleuve en bateau, puis finissez à Chinatown pour le street food de nuit." },
      { heading: "Jour 2 : marchés et quartiers modernes", text: "Le week-end, le marché de Chatuchak, qui compte plus de 8 000 stands, mérite une matinée entière. L’après-midi, Thonglor offre cafés et bars plus tendance." },
      { heading: "Bon à savoir", text: "La chaleur est écrasante en milieu de journée : alternez extérieur le matin et lieux climatisés l’après-midi. Le meilleur moment pour visiter se situe de novembre à février." },
    ],
  },
  {
    city: "Bangkok",
    title: "Quel budget quotidien ?",
    slug: slugify("Quel budget quotidien ?"),
    dek: "Bangkok reste l’une des grandes capitales les plus abordables au monde, avec une grande amplitude possible.",
    body: [
      { text: "Bangkok permet des budgets très variés, du sac à dos économe au séjour confortable. La monnaie est le baht, avec un change favorable pour les voyageurs européens." },
      { heading: "Se déplacer", text: "Un trajet en BTS coûte entre 16 et 59 ฿ selon la distance, et un pass journée BTS est vendu 150 ฿. Les taxis au compteur restent économiques, hors embouteillages." },
      { heading: "Manger", text: "Un plat de street food se règle souvent quelques dizaines de bahts, tandis qu’un repas au restaurant coûte nettement plus. Manger local permet de maintenir un budget très bas sans sacrifier la qualité." },
      { heading: "Ordre de grandeur", text: "En voyageant simplement, comptez environ 35 à 50 € par jour hors hébergement, et plus du double pour un séjour confortable. Ces montants sont indicatifs et dépendent surtout du logement." },
    ],
  },
  {
    city: "Bangkok",
    title: "Depuis BKK ou DMK",
    slug: slugify("Depuis BKK ou DMK"),
    dek: "Bangkok a deux aéroports internationaux, et la bonne liaison dépend de celui où vous atterrissez.",
    body: [
      { text: "Bangkok a deux aéroports principaux : Suvarnabhumi (BKK) et Don Mueang (DMK), ce dernier étant souvent utilisé par les compagnies à bas coût." },
      { heading: "Depuis BKK", text: "L’Airport Rail Link rejoint rapidement Phaya Thai, où l’on prend le BTS. C’est le moyen le plus fiable pour éviter les embouteillages, notamment aux heures de pointe." },
      { heading: "Depuis DMK", text: "Le train de la ligne Red Line relie l’aéroport à Bang Sue, où l’on prend le MRT. La correspondance prend un peu plus de temps, mais reste économique." },
      { heading: "Le taxi", text: "Un taxi, de préférence pris à la file officielle et au compteur, est simple avec des bagages ou à une heure tardive. Anticipez les péages et les embouteillages, qui peuvent doubler le trajet." },
    ],
  },
  {
    city: "Rome",
    title: "Rome en 3 jours",
    slug: slugify("Rome en 3 jours"),
    dek: "Trois jours pour voir l’Antiquité, le Vatican et le Rome vivant des quartiers.",
    body: [
      { text: "Rome se prête bien à un séjour de trois jours, à condition de regrouper les visites par secteur et de réserver les sites les plus fréquentés à l’avance." },
      { heading: "Jour 1 : le centre historique", text: "Le Panthéon, la place Navone et la fontaine de Trevi se parcourent à pied dans le centro storico. Le soir, traversez le Tibre pour dîner à Trastevere, plus animé." },
      { heading: "Jour 2 : le Vatican", text: "Saint-Pierre et les musées du Vatican occupent facilement une matinée, avec une réservation conseillée. L’après-midi, le quartier Prati offre un rythme plus calme." },
      { heading: "Jour 3 : la Rome antique", text: "Le Colisée, le Forum et le Palatin se visitent avec un billet commun, à réserver en ligne pour éviter les files. Finissez à Monti ou Testaccio, plus authentiques." },
    ],
  },
  {
    city: "Rome",
    title: "Fiumicino → centre",
    slug: slugify("Fiumicino → centre"),
    dek: "Plusieurs options pour rejoindre Rome depuis l’aéroport, avec des différences réelles de prix et de confort.",
    body: [
      { text: "L’aéroport de Fiumicino, officiellement Leonardo da Vinci, est à une trentaine de kilomètres du centre. Plusieurs liaisons existent, pour des budgets différents." },
      { heading: "Leonardo Express", text: "Ce train direct relie l’aéroport à la gare de Termini en une trentaine de minutes, sans arrêt. C’est le plus simple et le plus fiable, mais aussi le plus cher des transports en commun." },
      { heading: "Le train régional", text: "Un train régional dessert d’autres gares, comme Trastevere ou Tiburtina, pour un tarif plus bas. C’est utile si votre hébergement se trouve de ce côté de la ville, moins si vous allez à Termini." },
      { heading: "Taxi et bus", text: "Le taxi à tarif fixe pour le centre évite toute mauvaise surprise, à condition de le prendre à la file officielle. Les navettes en bus sont une alternative économique avec peu de bagages." },
    ],
  },
  {
    city: "Rome",
    title: "Rome à pied",
    slug: slugify("Rome à pied"),
    dek: "Rome se visite mieux à pied qu’en métro : voici comment le faire sans s’épuiser.",
    body: [
      { text: "Le centre de Rome est compact, et le métro, qui compte peu de lignes, y est moins utile que la marche. Quelques précautions rendent les journées plus confortables." },
      { heading: "Les chaussures", text: "Les pavés, appelés sampietrini, sont inconfortables avec des semelles fines et glissants sous la pluie. Des chaussures de marche solides valent mieux que des sandales." },
      { heading: "La chaleur", text: "En été, évitez le milieu de journée pour les visites en plein air. Les fontaines publiques, les nasoni, offrent de l’eau potable gratuite : une gourde suffit." },
      { heading: "Dans les églises", text: "Les épaules et les genoux doivent être couverts pour entrer dans les églises et au Vatican. Gardez un foulard ou un vêtement léger dans votre sac." },
    ],
  },
  {
    city: "Rome",
    title: "Budget réel",
    slug: slugify("Budget réel"),
    dek: "Les vraies dépenses d’un séjour à Rome, y compris les petits frais que l’on oublie.",
    body: [
      { text: "Rome n’est pas la ville la plus chère d’Europe, mais quelques frais surprennent. Voici à quoi s’attendre pour construire un budget réaliste." },
      { heading: "Transports", text: "Le billet unique BIT, valable 100 minutes sur tous les modes, coûte 1,50 €, et le Pass Roma 24 h est proposé à 7 €. Beaucoup de visites se font à pied, ce qui limite la dépense." },
      { heading: "Repas", text: "Une part de pizza au comptoir coûte quelques euros, un dîner en trattoria nettement plus. Dans de nombreux restaurants, le couvert, le coperto, s’ajoute à l’addition : vérifiez-le sur le menu." },
      { heading: "À ne pas oublier", text: "Une taxe de séjour est facturée par nuit dans la plupart des hébergements, et les grands sites payants ajoutent vite à la facture. Ces montants sont indicatifs, vérifiez les tarifs avant de partir." },
    ],
  },
  {
    city: "Istanbul",
    title: "Comprendre les ferries",
    slug: slugify("Comprendre les ferries"),
    dek: "À Istanbul, le ferry n’est pas une attraction : c’est un transport quotidien, bon marché et spectaculaire.",
    body: [
      { text: "Istanbul est coupée en deux par le Bosphore, et les ferries y font office de transports en commun. Les utiliser, c’est à la fois économique et la plus belle façon de voir la ville." },
      { heading: "Les traversées utiles", text: "Des bateaux relient régulièrement les rives européenne et asiatique, depuis des embarcadères comme Karaköy, Eminönü ou Beşiktaş vers Kadıköy et Üsküdar. La traversée dure une vingtaine de minutes." },
      { heading: "Payer sa place", text: "L’Istanbulkart, la carte rechargeable utilisée aussi pour le métro et le tram, permet de monter à bord. Le tarif reste bien inférieur à celui des croisières touristiques proposées sur le Bosphore." },
      { heading: "Le bon réflexe", text: "Prenez le ferry en fin de journée pour voir la ville s’illuminer, avec un thé ou un simit acheté à bord. Évitez les heures de pointe, quand les bateaux sont bondés de pendulaires." },
    ],
  },
  {
    city: "Istanbul",
    title: "IST ou SAW",
    slug: slugify("IST ou SAW"),
    dek: "Istanbul a deux grands aéroports, sur deux continents : le choix influence tout le début du séjour.",
    body: [
      { text: "Istanbul est desservie par deux aéroports, IST sur la rive européenne et SAW, Sabiha Gökçen, sur la rive asiatique. La distance au centre change beaucoup l’expérience d’arrivée." },
      { heading: "Depuis IST", text: "Le grand aéroport, éloigné du centre, est relié par une ligne de métro qui rejoint le réseau urbain. Comptez un trajet assez long, quel que soit le mode, et prévoyez de la marge en cas de trafic." },
      { heading: "Depuis SAW", text: "L’aéroport asiatique est relié par le métro, ce qui le rend très pertinent si vous logez à Kadıköy. Pour la rive européenne, il faut en revanche prévoir une traversée supplémentaire." },
      { heading: "Taxi ou navette", text: "Les navettes aéroport et les taxis simplifient l’arrivée selon votre quartier. Vérifiez que le taxi utilise bien le compteur, et gardez de la marge de temps pour le retour à l’aéroport." },
    ],
  },
  {
    city: "Istanbul",
    title: "48 h à Istanbul",
    slug: slugify("48 h à Istanbul"),
    dek: "Deux jours pour voir l’essentiel : la vieille ville d’un côté, le Bosphore et ses quartiers de l’autre.",
    body: [
      { text: "Deux jours à Istanbul obligent à choisir. Voici un parcours qui regroupe les grands monuments d’un côté, la ville vivante et le Bosphore de l’autre." },
      { heading: "Jour 1 : Sultanahmet", text: "Le quartier historique concentre la basilique Sainte-Sophie, la Mosquée Bleue, le palais de Topkapı et la citerne Basilique, à quelques minutes à pied. Dans les mosquées, retirez vos chaussures et couvrez épaules et genoux." },
      { heading: "Jour 2 : Karaköy, Beyoğlu et le Bosphore", text: "Montez à Galata, flânez sur l’avenue Istiklal, puis prenez un ferry vers Kadıköy pour dîner sur la rive asiatique. Le retour en bateau, de nuit, clôt bien la journée." },
      { heading: "Bon à savoir", text: "Certains sites ferment un jour par semaine et l’accès aux mosquées est suspendu pendant les prières. Vérifiez les horaires avant de bâtir votre journée, et partez tôt pour éviter les files." },
    ],
  },
  {
    city: "Istanbul",
    title: "Budget quotidien",
    slug: slugify("Budget quotidien"),
    dek: "Istanbul reste raisonnable pour un voyageur européen, mais les prix en livres évoluent vite.",
    body: [
      { text: "Istanbul est globalement abordable pour un voyageur payant en euros, même si l’inflation turque fait bouger les prix en livres. Raisonnez à partir d’un taux de change récent." },
      { heading: "Se déplacer", text: "Un trajet avec l’Istanbulkart coûte autour de 27 livres, avec des correspondances à tarif réduit dans les deux heures. Les transports restent très économiques à l’échelle d’une journée." },
      { heading: "Manger", text: "Les sandwichs et grillades de rue, les lokantas, restaurants populaires, et les petits-déjeuners turcs permettent de manger bien pour peu. Les restaurants à vue sur le Bosphore se paient nettement plus cher." },
      { heading: "Ordre de grandeur", text: "Pour un voyage simple, comptez environ 40 à 60 € par jour hors hébergement, plus si vous dînez dans les quartiers touristiques. Ces montants sont indicatifs, vérifiez les prix avant de partir." },
    ],
  },
  {
    city: "New York",
    title: "JFK, EWR ou LGA ?",
    slug: slugify("JFK, EWR ou LGA ?"),
    dek: "Trois aéroports pour New York : la liaison la plus rapide dépend de votre hôtel.",
    body: [
      { text: "New York compte trois aéroports principaux, JFK, LaGuardia (LGA) et Newark (EWR), chacun avec ses propres liaisons vers Manhattan." },
      { heading: "Depuis JFK", text: "L’AirTrain rejoint le métro ou le train de banlieue LIRR, qui est le plus rapide vers Manhattan. L’option AirTrain et métro est la plus économique, mais plus lente avec des bagages." },
      { heading: "Depuis Newark", text: "L’AirTrain relie l’aéroport à la gare où passent les trains de NJ Transit vers Penn Station. Le trajet est rapide, mais un supplément de billet s’ajoute au tarif habituel." },
      { heading: "Depuis LaGuardia", text: "Il n’y a pas de train : on passe par un bus de liaison vers le métro, ou par un taxi ou un VTC. C’est l’aéroport le plus proche de Manhattan, et le trajet en voiture reste court hors embouteillages." },
    ],
  },
  {
    city: "New York",
    title: "New York en 5 jours",
    slug: slugify("New York en 5 jours"),
    dek: "Cinq jours pour parcourir Manhattan, Brooklyn et Harlem sans passer sa vie dans le métro.",
    body: [
      { text: "Cinq jours à New York permettent de voir plusieurs visages de la ville, à condition de regrouper les visites par secteur." },
      { heading: "Jours 1 et 2 : le sud de Manhattan", text: "Traversez le pont de Brooklyn à pied, puis marchez jusqu’à la Promenade de Brooklyn Heights pour la vue sur la skyline. Le lendemain, Greenwich Village, SoHo et leurs restaurants se parcourent à pied." },
      { heading: "Jours 3 et 4 : le nord de la ville", text: "Consacrez une journée à Central Park et à l’Upper West Side, puis une autre à Harlem, berceau du jazz, pour son histoire et sa musique. Les brownstones emblématiques s’y admirent à pied." },
      { heading: "Jour 5 : l’énergie nocturne", text: "Gardez la dernière soirée pour Williamsburg ou le Lower East Side, pour leurs bars, restaurants et scènes créatives. Leur ambiance locale change des grands sites touristiques." },
    ],
  },
  {
    city: "New York",
    title: "Le métro expliqué simplement",
    slug: slugify("Le métro expliqué simplement"),
    dek: "Le métro new-yorkais fonctionne 24 heures sur 24 : quelques règles suffisent pour s’y repérer.",
    body: [
      { text: "Le métro de New York fonctionne en continu et dessert presque tous les quartiers. Son plan intimide, mais sa logique est assez simple." },
      { heading: "Lire une ligne", text: "Chaque ligne a une lettre ou un chiffre et une couleur. Repérez toujours le sens : uptown vers le nord, downtown vers le sud, et vérifiez si le train est omnibus ou express." },
      { heading: "Payer", text: "Le ticket unique coûte 2,90 $, et un pass illimité de 7 jours est proposé à 34 $. Selon la formule en vigueur, un paiement par carte sans contact peut plafonner automatiquement le coût hebdomadaire." },
      { heading: "Les pièges", text: "Le week-end, des travaux modifient souvent les trajets : vérifiez les annonces avant de partir. Tard le soir, privilégiez les rames et les stations où se trouvent d’autres voyageurs." },
    ],
  },
  {
    city: "New York",
    title: "Budget quotidien",
    slug: slugify("Budget quotidien"),
    dek: "New York est chère, surtout pour dormir, mais plusieurs postes se maîtrisent bien.",
    body: [
      { text: "New York fait partie des grandes villes les plus chères au monde, et le logement en est le principal poste. Les autres dépenses se règlent plus facilement." },
      { heading: "Prix affichés et pourboires", text: "Les prix affichés s’entendent hors taxes, et les pourboires, généralement de 18 à 20 % au restaurant, s’ajoutent à l’addition. Cela change le montant réellement payé." },
      { heading: "Se déplacer", text: "Un trajet coûte 2,90 $ et le pass de 7 jours 34 $, ce qui rend le métro très rentable dès que l’on se déplace beaucoup. Beaucoup de visites restent par ailleurs gratuites en extérieur." },
      { heading: "Ordre de grandeur", text: "Hors hébergement, comptez environ 80 à 120 $ par jour pour manger, se déplacer et visiter avec un budget raisonnable. Ces montants sont indicatifs et varient selon vos habitudes." },
    ],
  },
  {
    city: "Marrakech",
    title: "Comment choisir son riad",
    slug: slugify("Comment choisir son riad"),
    dek: "Dormir dans un riad est l’expérience la plus typique de Marrakech, à condition de bien le choisir.",
    body: [
      { text: "Un riad est une maison traditionnelle organisée autour d’un patio, souvent transformée en maison d’hôtes. Le choix est large, et quelques critères évitent les mauvaises surprises." },
      { heading: "L’emplacement", text: "Dans la médina, beaucoup de riads sont au fond de ruelles piétonnes introuvables sans guide. Demandez à l’hôte un accueil à un point de repère, ou un porteur, pour vos bagages." },
      { heading: "Le confort", text: "Vérifiez la climatisation en été et le chauffage en hiver, car les nuits peuvent être fraîches. Une terrasse sur le toit pour le petit-déjeuner fait souvent la différence." },
      { heading: "Le bruit", text: "Les riads proches de la place Jemaa el-Fna sont animés tard, tandis que ceux de la Kasbah sont plus calmes. Selon votre sommeil, le quartier pèse autant que la chambre elle-même." },
    ],
  },
  {
    city: "Marrakech",
    title: "Depuis l’aéroport",
    slug: slugify("Depuis l’aéroport"),
    dek: "Taxi, bus ou transfert privé : trois façons de rejoindre la médina depuis l’aéroport de Marrakech.",
    body: [
      { text: "L’aéroport de Marrakech (RAK) est proche du centre, et plusieurs solutions s’offrent à vous pour rejoindre votre hébergement." },
      { heading: "En taxi", text: "C’est l’option la plus simple vers la médina, Guéliz ou Hivernage. Convenez toujours du prix avant de monter, car les compteurs sont rarement utilisés pour les trajets depuis l’aéroport." },
      { heading: "En bus", text: "Une ligne de bus dessert le centre-ville à petit prix, pratique si vous voyagez léger. Vérifiez à l’arrivée où elle vous dépose, car l’accès à un riad se fait ensuite à pied." },
      { heading: "Le transfert privé", text: "Il est utile pour une arrivée tardive ou pour un riad difficile d’accès, car le chauffeur ou l’hôte vous guide jusqu’à la porte. Beaucoup de maisons d’hôtes le proposent à l’avance." },
    ],
  },
  {
    city: "Marrakech",
    title: "Marrakech en 3 jours",
    slug: slugify("Marrakech en 3 jours"),
    dek: "Médina, jardins et excursions : un itinéraire de trois jours qui mélange les visages de Marrakech.",
    body: [
      { text: "Trois jours à Marrakech permettent de combiner la médina, les quartiers modernes et une échappée vers les environs, sans enchaîner les visites." },
      { heading: "Jour 1 : la médina", text: "La place Jemaa el-Fna, les souks, la Koutoubia : le cœur historique se parcourt à pied. Terminez par la Kasbah, avec le palais Bahia et les tombeaux saadiens, plus calmes." },
      { heading: "Jour 2 : Guéliz et les jardins", text: "Le quartier moderne de Guéliz offre cafés, restaurants et boutiques, et le jardin Majorelle, très fréquenté, mérite une réservation. Hivernage ou Sidi Ghanem complètent la journée." },
      { heading: "Jour 3 : hors de la ville", text: "La Palmeraie convient à une matinée de détente, tandis que l’Atlas permet une excursion d’une journée en été pour fuir la chaleur. Choisissez selon votre énergie." },
    ],
  },
  {
    city: "Marrakech",
    title: "Combien prévoir par jour",
    slug: slugify("Combien prévoir par jour"),
    dek: "Marrakech est abordable, mais le marchandage et les riads font varier fortement la note.",
    body: [
      { text: "Marrakech reste une destination abordable pour un voyageur européen. Le budget dépend surtout de l’hébergement et de vos habitudes d’achat dans les souks." },
      { heading: "Se déplacer", text: "Un trajet en bus urbain coûte autour de 4 à 6 dirhams, et une course courte en petit taxi entre 10 et 20 dirhams. À pied, la médina se parcourt sans transports." },
      { heading: "Manger", text: "Les stands de la place Jemaa el-Fna et les petits restaurants de la médina offrent des repas à petit prix. Les restaurants de riads ou d’Hivernage sont nettement plus chers." },
      { heading: "Ordre de grandeur", text: "Pour un voyage simple, comptez environ 30 à 50 € par jour hors hébergement. Ces montants sont indicatifs, et les achats dans les souks peuvent les faire grimper." },
    ],
  },
  {
    city: "Marrakech",
    title: "Les erreurs à éviter",
    slug: slugify("Les erreurs à éviter"),
    dek: "Quelques pièges classiques de Marrakech, faciles à éviter avec un peu d’anticipation.",
    body: [
      { text: "Marrakech est une ville vivante où quelques erreurs de débutant fatiguent vite les visiteurs. Voici les plus fréquentes." },
      { heading: "Suivre un guide non officiel", text: "Dans la médina, des inconnus proposent de vous guider ou de vous indiquer un chemin, puis réclament une rémunération. Un refus poli et une direction ferme règlent généralement le sujet." },
      { heading: "Ne pas fixer le prix du taxi", text: "Les petits taxis refusent souvent d’utiliser le compteur pour les touristes. Négociez le tarif avant de monter pour éviter les mauvaises surprises à l’arrivée." },
      { heading: "Sous-estimer la chaleur", text: "L’été, les températures sont très élevées : la meilleure période va de mars à mai et de septembre à novembre. Couvrez-vous aussi les épaules, par respect pour les usages locaux." },
    ],
  },
  {
    city: "Dubai",
    title: "Se déplacer sans exploser le budget taxi",
    slug: slugify("Se déplacer sans exploser le budget taxi"),
    dek: "Métro, tram et carte Nol : Dubaï se parcourt à petit prix à condition de savoir comment faire.",
    body: [
      { text: "Dubaï est très étendue, et les taxis s’accumulent vite. Le métro et le tram, modernes et climatisés, couvrent pourtant les secteurs les plus visités." },
      { heading: "La carte Nol", text: "Cette carte rechargeable sert pour le métro, le tram et les bus, avec des tarifs de 3 à 8,5 dirhams selon les zones. Le Nol Red Ticket, valable une journée, est proposé à 20 dirhams." },
      { heading: "Combiner les modes", text: "Le métro dessert Downtown et Bur Dubaï, le tram relie la Marina et JBR. Un taxi ponctuel pour la dernière portion reste souvent plus malin qu’un trajet complet en voiture." },
      { heading: "Bon à savoir", text: "Évitez le métro aux heures de pointe, et notez qu’un wagon est réservé aux femmes et aux enfants. En été, la chaleur rend les trajets à pied jusqu’aux stations plus pénibles." },
    ],
  },
  {
    city: "Dubai",
    title: "Dubaï en 4 jours",
    slug: slugify("Dubaï en 4 jours"),
    dek: "Quatre jours pour voir la ville moderne, le Dubaï historique et la plage, sans se fatiguer dans les transports.",
    body: [
      { text: "Dubaï s’étire sur des dizaines de kilomètres, et quatre jours permettent de couvrir les facettes de la ville en regroupant les visites par secteur." },
      { heading: "Jour 1 : Downtown", text: "Le Burj Khalifa et le Dubaï Mall concentrent les grandes attractions. Réservez le sommet de la tour à l’avance et finissez par le spectacle de la fontaine." },
      { heading: "Jour 2 : le vieux Dubaï", text: "Al Fahidi et ses maisons à tours à vent, puis une traversée en abra sur la crique vers les souks de Deira. C’est l’autre visage de la ville, loin des gratte-ciel." },
      { heading: "Jours 3 et 4 : plage et détente", text: "Consacrez une journée à la Marina et à JBR pour la plage, et gardez la dernière pour Palm Jumeirah ou une excursion dans le désert. Évitez les sorties en plein air l’après-midi en été." },
    ],
  },
  {
    city: "Dubai",
    title: "Depuis DXB",
    slug: slugify("Depuis DXB"),
    dek: "Métro ou taxi : l’aéroport de Dubaï est bien relié, mais le terminal d’arrivée compte.",
    body: [
      { text: "L’aéroport international de Dubaï (DXB) est proche des zones centrales, ce qui facilite l’arrivée. Deux options se comparent selon votre hôtel." },
      { heading: "Le métro", text: "La Red Line dessert l’aéroport et traverse la ville jusqu’à plusieurs grands quartiers. C’est très pratique si votre hôtel se trouve à proximité d’une station." },
      { heading: "Le taxi", text: "Il est simple et souvent pertinent à plusieurs, avec un supplément à la prise en charge à l’aéroport. Un taxi direct évite les correspondances avec des bagages." },
      { heading: "Le transfert d’hôtel", text: "Certains hôtels proposent une navette, à comparer au taxi selon l’heure d’arrivée. Vérifiez le terminal d’arrivée, car tous ne sont pas directement reliés au métro." },
    ],
  },
  {
    city: "Dubai",
    title: "Où dormir pas cher",
    slug: slugify("Où dormir pas cher"),
    dek: "Dubaï a la réputation d’être chère, mais certains quartiers offrent un bien meilleur rapport qualité-prix.",
    body: [
      { text: "Dubaï est associée au luxe, mais l’hébergement y varie beaucoup selon le quartier. Choisir le bon secteur change le budget plus que l’hôtel lui-même." },
      { heading: "Bur Dubaï et Deira", text: "Plus locaux et nettement moins chers, ces quartiers historiques offrent le meilleur rapport prix, avec un accès direct au métro. L’ambiance y est plus authentique." },
      { heading: "À éviter pour économiser", text: "La Marina, JBR, Downtown et Palm Jumeirah sont les zones les plus chères. Leur attrait balnéaire ou luxueux se paie, surtout en haute saison, de novembre à mars." },
      { heading: "À savoir", text: "Une taxe touristique est facturée par nuit dans les hôtels, en plus du prix affiché. Les prix baissent nettement en été, quand la chaleur éloigne les voyageurs." },
    ],
  },
  {
    city: "Dubai",
    title: "Petit-déjeuner : hôtel ou dehors ?",
    slug: slugify("Petit-déjeuner : hôtel ou dehors ?"),
    dek: "À Dubaï, le petit-déjeuner de l’hôtel est pratique mais souvent coûteux : quelques alternatives existent.",
    body: [
      { text: "Le petit-déjeuner buffet de l’hôtel est une habitude à Dubaï, mais il ajoute vite au budget. Plusieurs solutions permettent de manger différemment." },
      { heading: "Le petit-déjeuner émirati", text: "Pain plat, œufs, fromages, thé au lait épicé et préparations sucrées sont des classiques locaux. On les trouve dans les cafés traditionnels, notamment dans le vieux Dubaï." },
      { heading: "Les boulangeries de quartier", text: "Les boulangeries libanaises et iraniennes des quartiers de Bur Dubaï servent des pains frais à petit prix. C’est une excellente alternative pour manger sur le pouce." },
      { heading: "Pendant le ramadan", text: "Certains cafés ferment en journée pendant le mois de ramadan, même si les règles se sont assouplies. Renseignez-vous à l’avance si votre séjour tombe pendant cette période." },
    ],
  },
  {
    city: "Cape Town",
    title: "Depuis l’aéroport",
    slug: slugify("Depuis l’aéroport"),
    dek: "L’aéroport du Cap est à une vingtaine de minutes du centre : trois façons de le rejoindre.",
    body: [
      { text: "L’aéroport international du Cap (CPT) est proche de la ville, et la plupart des visiteurs rejoignent leur hébergement en voiture, faute d’alternative ferroviaire simple." },
      { heading: "Taxi et VTC", text: "C’est l’option la plus simple, que ce soit en taxi ou avec une application de VTC. Prenez de préférence un véhicule réservé à l’avance ou une application, plutôt qu’un chauffeur abordé dans le hall." },
      { heading: "Le transfert d’hôtel", text: "Il est pertinent pour une première arrivée, surtout tard le soir : le chauffeur vous attend avec votre nom et vous dépose directement. Beaucoup d’hôtels et de maisons d’hôtes le proposent." },
      { heading: "MyCiTi ensuite", text: "Le réseau de bus MyCiTi dessert la ville une fois installé, avec une carte rechargeable. Il est utile selon le quartier, mais il ne remplace pas un VTC pour sortir le soir." },
    ],
  },
  {
    city: "Cape Town",
    title: "Le Cap sans voiture ?",
    slug: slugify("Le Cap sans voiture ?"),
    dek: "Oui, c’est possible, à condition de combiner bus, VTC et quelques excursions organisées.",
    body: [
      { text: "Beaucoup de voyageurs louent une voiture au Cap, mais on peut très bien s’en passer si l’on reste surtout en ville et sur la côte atlantique." },
      { heading: "En ville", text: "Le réseau MyCiTi relie le centre, le Waterfront et plusieurs quartiers côtiers, avec des tarifs d’environ 15 à 30 rands selon la distance. Pour le reste, les VTC sont nombreux et peu chers à l’échelle européenne." },
      { heading: "Les sites éloignés", text: "La péninsule du Cap, avec ses colonies de manchots et son extrémité rocheuse, est difficile à rejoindre sans véhicule. Une excursion à la journée, ou une location pour un seul jour, règle la question." },
      { heading: "Bon à savoir", text: "Évitez les trains de banlieue, déconseillés aux visiteurs, et privilégiez les VTC le soir. Le téléphérique de Table Mountain ferme les jours de vent fort : prévoyez de la flexibilité." },
    ],
  },
  {
    city: "Cape Town",
    title: "3 jours parfaits",
    slug: slugify("3 jours parfaits"),
    dek: "Trois jours entre ville, montagne et péninsule, en gardant de la marge pour la météo.",
    body: [
      { text: "Le Cap réunit en peu de distance une ville, une montagne et deux océans. En trois jours, on en voit l’essentiel à condition de s’adapter au temps." },
      { heading: "Jour 1 : la ville et Table Mountain", text: "Montez à Table Mountain tôt le matin, quand la visibilité est la meilleure, puis descendez vers Bo-Kaap et ses maisons colorées. Finissez au V&A Waterfront, avec vue sur la montagne." },
      { heading: "Jour 2 : la péninsule du Cap", text: "Consacrez la journée à la route côtière, aux colonies de manchots et à la pointe de la péninsule. C’est la plus belle excursion, mais elle demande une voiture ou une visite organisée." },
      { heading: "Jour 3 : le littoral et les quartiers créatifs", text: "Promenez-vous à Sea Point, puis profitez du coucher de soleil à Camps Bay. Woodstock, plus créatif, convient à une soirée de bars et de restaurants." },
    ],
  },
  {
    city: "Cape Town",
    title: "Budget réel",
    slug: slugify("Budget réel"),
    dek: "Le Cap reste abordable pour un voyageur payant en euros, hors vols et hébergement haut de gamme.",
    body: [
      { text: "Grâce à un rand relativement faible, Le Cap est l’une des grandes villes les plus accessibles pour les Européens, avec un bon rapport qualité-prix à table." },
      { heading: "Se déplacer", text: "Un trajet MyCiTi coûte autour de 15 à 30 rands selon la distance, avec la carte myconnect. Les VTC représentent le gros du budget transport, surtout le soir." },
      { heading: "Manger et sortir", text: "Les restaurants offrent un excellent rapport qualité-prix, y compris dans les quartiers les plus recherchés, et le pourboire d’environ 10 % est d’usage. Les dégustations de vin se négocient selon le domaine." },
      { heading: "Ordre de grandeur", text: "En voyageant simplement, comptez environ 50 à 80 € par jour hors hébergement. Ces montants sont indicatifs, vérifiez les tarifs avant de partir." },
    ],
  },
  {
    city: "Cape Town",
    title: "Les erreurs à éviter",
    slug: slugify("Les erreurs à éviter"),
    dek: "Quelques erreurs classiques au Cap, la plupart liées à la météo et à la sécurité.",
    body: [
      { text: "Le Cap est une destination formidable, mais quelques erreurs de débutant gâchent facilement une journée." },
      { heading: "Compter sur le beau temps", text: "Le vent et les nuages peuvent fermer le téléphérique de Table Mountain ou masquer la vue. Gardez des créneaux flexibles et ne réservez pas la montagne le dernier jour." },
      { heading: "Laisser des objets visibles", text: "Les vols dans les voitures sont courants : ne laissez rien en vue, ni sac ni téléphone. Dans la rue, évitez de sortir un téléphone ou un appareil photo coûteux." },
      { heading: "Mal choisir la saison", text: "La meilleure période va de novembre à mars, avec un temps sec et chaud. L’hiver austral, de juin à août, apporte pluie et vent, et rend plusieurs excursions plus aléatoires." },
    ],
  },
  {
    city: "Seoul",
    title: "AREX : comment rejoindre Séoul",
    slug: slugify("AREX : comment rejoindre Séoul"),
    dek: "Deux trains relient l’aéroport d’Incheon au centre : l’un rapide, l’autre avec plus d’arrêts utiles.",
    body: [
      { text: "L’aéroport d’Incheon (ICN) est à une soixantaine de kilomètres de Séoul, mais le train AREX en fait un trajet simple. Deux services se partagent la ligne." },
      { heading: "L’AREX Express", text: "Il rejoint directement la gare de Séoul, sans arrêt intermédiaire, en une quarantaine de minutes. C’est le plus rapide, idéal si votre hôtel est proche du centre ou de la gare." },
      { heading: "L’AREX omnibus", text: "Moins cher et plus lent, il s’arrête dans plusieurs stations, dont celle qui dessert Hongdae. Il évite une correspondance si vous logez de ce côté de la ville." },
      { heading: "Le bus limousine", text: "Des bus directs desservent certains hôtels, une option confortable avec des bagages. Vérifiez la ligne qui passe près de votre hébergement avant de choisir." },
    ],
  },
  {
    city: "Seoul",
    title: "Le métro sans stress",
    slug: slugify("Le métro sans stress"),
    dek: "Le métro de Séoul est l’un des plus pratiques au monde : quelques réflexes suffisent.",
    body: [
      { text: "Le métro de Séoul est propre, ponctuel et climatisé, avec des annonces et des panneaux en plusieurs langues. Il dessert presque tous les quartiers." },
      { heading: "La carte T-money", text: "Rechargeable, elle sert aussi dans les bus, avec un tarif de base d’environ 1 400 à 1 550 wons selon la distance. Elle simplifie les correspondances, qui sont moins chères qu’avec des billets séparés." },
      { heading: "S’orienter", text: "Les lignes sont numérotées et colorées, et les noms de stations sont écrits en lettres latines. Les applications coréennes de cartographie sont bien plus fiables que Google Maps pour les trajets." },
      { heading: "Bon à savoir", text: "Évitez les heures de pointe, surtout sur les lignes qui desservent les zones de bureaux. Les derniers trains partent vers minuit ou une heure du matin selon les lignes." },
    ],
  },
  {
    city: "Seoul",
    title: "Séoul en 5 jours",
    slug: slugify("Séoul en 5 jours"),
    dek: "Cinq jours pour alterner palais, quartiers modernes et soirées, sans passer sa vie dans le métro.",
    body: [
      { text: "Séoul est une métropole étendue, mais cinq jours suffisent pour en saisir les contrastes. Voici un parcours qui regroupe les visites par secteur." },
      { heading: "Jours 1 et 2 : la Séoul traditionnelle", text: "Commencez par les palais royaux, Bukchon et ses maisons hanok, puis Insadong et ses maisons de thé. Le lendemain, Ikseon-dong, où les maisons traditionnelles abritent cafés et boutiques." },
      { heading: "Jours 3 et 4 : la ville moderne", text: "Myeongdong pour le shopping, Hongdae pour la musique et les soirées étudiantes, Itaewon pour les cuisines internationales. Gangnam offre un visage plus haut de gamme." },
      { heading: "Jour 5 : le fleuve ou l’excursion", text: "Gardez la dernière journée pour les berges du Han à Yeouido, célèbres pour leurs cerisiers au printemps, ou pour une excursion hors de la ville. Réservez à l’avance les visites qui demandent un passeport." },
    ],
  },
  {
    city: "Seoul",
    title: "Budget quotidien",
    slug: slugify("Budget quotidien"),
    dek: "Séoul se situe dans la moyenne des grandes villes asiatiques, avec d’excellents repas à petit prix.",
    body: [
      { text: "Séoul n’est ni la plus chère ni la moins chère des grandes villes asiatiques. Le transport est très économique et la restauration très variée." },
      { heading: "Se déplacer", text: "Un trajet en métro coûte entre 1 400 et 1 550 wons, et le Seoul Citypass+ pour une journée est vendu environ 15 000 wons. Les trajets sont rarement assez longs pour justifier un taxi." },
      { heading: "Manger", text: "Un bibimbap, un kimbap ou un bol de nouilles se règle pour quelques milliers de wons, et le barbecue coréen coûte plus cher à plusieurs. Les cafés sont, eux, assez chers." },
      { heading: "Ordre de grandeur", text: "Pour un voyage simple, comptez environ 50 à 80 € par jour hors hébergement. Ces montants sont indicatifs, vérifiez les tarifs avant de partir." },
    ],
  },
  {
    city: "London",
    title: "Quel quartier choisir à Londres ?",
    slug: slugify("Quel quartier choisir à Londres ?"),
    dek: "Londres est immense et chère : le bon quartier dépend de votre rythme plus que de la distance au centre.",
    body: [
      { text: "Londres est une ville de quartiers, et la proximité d’une station de métro compte autant que l’adresse. Chaque secteur propose une ambiance bien distincte." },
      { heading: "Pour un premier séjour", text: "Soho, au cœur du West End, concentre théâtres, bars et restaurants, avec un accès à pied à de nombreux sites. C’est le plus pratique, mais aussi le plus animé et l’un des plus chers." },
      { heading: "Calme ou créatif", text: "Kensington convient à ceux qui veulent des musées et des rues résidentielles, Notting Hill à ceux qui aiment les façades colorées et le marché de Portobello Road. Camden et Shoreditch séduisent un public plus alternatif." },
      { heading: "Plus loin du centre", text: "Greenwich, avec son parc, son méridien et sa vue sur la City, est plus calme et souvent plus abordable. Prévoyez simplement un trajet un peu plus long pour rejoindre le centre." },
    ],
  },
  {
    city: "London",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Londres a plusieurs aéroports, et chacun a sa liaison la plus pratique vers la ville.",
    body: [
      { text: "Londres est desservie par plusieurs aéroports, dont Heathrow, Gatwick et Stansted. La meilleure liaison dépend de celui où vous atterrissez." },
      { heading: "Depuis Heathrow", text: "La ligne Elizabeth et la ligne Piccadilly du métro desservent le centre, en 45 à 60 minutes selon la ligne. Le Heathrow Express est plus rapide vers Paddington, mais nettement plus cher." },
      { heading: "Depuis Gatwick et Stansted", text: "Le Gatwick Express rejoint la gare de Victoria en une trentaine de minutes. Depuis Stansted, un train direct dessert la gare de Liverpool Street, pour un trajet un peu plus long." },
      { heading: "Le taxi", text: "Plus cher, mais direct, il se justifie avec beaucoup de bagages ou à plusieurs. Les applications de VTC permettent de connaître le prix avant de partir." },
    ],
  },
  {
    city: "London",
    title: "Londres en 3 jours",
    slug: slugify("Londres en 3 jours"),
    dek: "Trois jours pour les grands classiques, quelques musées gratuits et une soirée dans les quartiers vivants.",
    body: [
      { text: "Londres est vaste, et trois jours demandent de regrouper les visites. Voici un itinéraire qui limite les trajets." },
      { heading: "Jour 1 : Westminster et la Tamise", text: "Parlement, Big Ben et l’abbaye de Westminster se visitent à pied, puis la promenade au bord de la Tamise mène vers la rive sud. Une soirée au bord de l’eau clôt bien la journée." },
      { heading: "Jour 2 : musées et quartiers", text: "Les grands musées de Kensington, comme celui d’histoire naturelle, sont gratuits. L’après-midi, Notting Hill et son marché de Portobello Road, plus animé le samedi." },
      { heading: "Jour 3 : la Tour et l’est", text: "La Tour de Londres et Tower Bridge occupent la matinée. Terminez par Greenwich, ou par Shoreditch pour ses fresques et ses bars à cocktails." },
    ],
  },
  {
    city: "London",
    title: "Londres avec un petit budget",
    slug: slugify("Londres avec un petit budget"),
    dek: "Londres est chère, mais ses musées gratuits et son réseau de bus permettent de réduire la note.",
    body: [
      { text: "Londres est l’une des capitales les plus chères d’Europe, mais plusieurs postes se maîtrisent bien. L’hébergement est le plus lourd, les visites le plus facile à alléger." },
      { heading: "Des visites gratuites", text: "Les grands musées nationaux, dont le British Museum, la National Gallery et la Tate Modern, sont gratuits pour leurs collections permanentes. Les parcs et les marchés ne coûtent rien." },
      { heading: "Se déplacer moins cher", text: "Le paiement sans contact plafonne la dépense à 8,50 £ par jour en zones 1 et 2, d’après la grille actuelle. Les bus, moins chers que le métro, permettent de voir la ville en surface." },
      { heading: "Manger pas cher", text: "Les formules sandwich-boisson-snack des supermarchés dépannent pour un déjeuner, et les marchés couverts offrent des repas variés. Les pubs servent souvent des plats corrects à un prix raisonnable." },
    ],
  },
  {
    city: "Barcelona",
    title: "Quel quartier choisir à Barcelone ?",
    slug: slugify("Quel quartier choisir à Barcelone ?"),
    dek: "Entre ruelles gothiques, avenues modernistes et plage, chaque quartier de Barcelone raconte un séjour différent.",
    body: [
      { text: "Barcelone est assez compacte, mais ses quartiers ont des ambiances très différentes. Le choix influence surtout le bruit, l’ambiance et le temps de marche." },
      { heading: "Le centre historique", text: "Le Quartier gothique et El Born, aux ruelles médiévales, sont très pratiques pour un premier séjour. Ils sont aussi animés tard le soir et fréquentés par les pickpockets : restez vigilant." },
      { heading: "Élégant ou villageois", text: "L’Eixample, avec ses avenues modernistes et la Sagrada Família, est plus calme et élégant. Gràcia offre une ambiance de village, avec ses petites places et ses bars sans touristes." },
      { heading: "Au bord de la mer", text: "Barceloneta convient à ceux qui veulent la plage et les restaurants de poisson. Montjuïc, plus verte, est idéale pour les musées, mais compte peu d’hébergements." },
    ],
  },
  {
    city: "Barcelona",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Bus, train ou taxi : trois façons simples de rejoindre le centre de Barcelone depuis l’aéroport.",
    body: [
      { text: "L’aéroport de Barcelone, El Prat (BCN), est bien relié au centre. Trois solutions simples se comparent selon votre hébergement." },
      { heading: "L’Aerobús", text: "Il rejoint la place de Catalogne en environ 35 minutes, avec un départ toutes les 5 à 10 minutes. C’est pratique avec des bagages, car il dessert directement le centre." },
      { heading: "Le train R2 Nord", text: "Il met environ 25 minutes pour rejoindre Passeig de Gràcia. Le tarif est inférieur à celui du bus, mais il oblige à marcher jusqu’au quai et à s’adapter à ses horaires." },
      { heading: "Le taxi", text: "Comptez 25 à 35 € environ vers le centre selon l’adresse, avec une prise en charge à la station officielle. C’est plus confortable, mais pas toujours plus rapide aux heures de pointe." },
    ],
  },
  {
    city: "Barcelona",
    title: "Barcelone en 3 jours",
    slug: slugify("Barcelone en 3 jours"),
    dek: "Trois jours pour les grands classiques de Gaudí, le centre médiéval et la mer.",
    body: [
      { text: "Barcelone se visite très bien en trois jours, à condition de réserver à l’avance les monuments les plus fréquentés." },
      { heading: "Jour 1 : le centre médiéval", text: "Le Quartier gothique et sa cathédrale, puis El Born et ses ruelles. En fin de journée, Barceloneta pour le coucher de soleil et un dîner de poisson." },
      { heading: "Jour 2 : le Barcelone moderniste", text: "La Sagrada Família, à réserver en ligne, et les édifices de Gaudí sur Passeig de Gràcia occupent la journée. Gràcia offre un bon cadre pour la soirée." },
      { heading: "Jour 3 : Montjuïc et la mer", text: "Montez à Montjuïc pour ses musées, ses jardins et sa vue sur le port. L’après-midi, détendez-vous à la plage, ou visitez le parc Güell sur réservation." },
    ],
  },
  {
    city: "Barcelona",
    title: "Barcelone avec un petit budget",
    slug: slugify("Barcelone avec un petit budget"),
    dek: "Barcelone se visite sans se ruiner, à condition de bien choisir ses repas et ses transports.",
    body: [
      { text: "Barcelone est plus abordable que la plupart des grandes capitales d’Europe de l’Ouest, surtout pour manger. Quelques choix suffisent à tenir un budget serré." },
      { heading: "Les transports", text: "Le ticket unique coûte 2,55 €, tandis que le carnet T-casual de 10 trajets revient à 12,15 €, soit bien moins par trajet. Le centre se parcourt largement à pied." },
      { heading: "Manger", text: "Le menu du jour, servi à midi dans de nombreux restaurants, est souvent la meilleure affaire de la journée. Les bars à tapas permettent aussi de composer un repas à prix maîtrisé." },
      { heading: "Visites gratuites", text: "La plage, les places du Quartier gothique et plusieurs points de vue sont gratuits. Pour les monuments payants, choisissez-en deux ou trois plutôt que de tout visiter." },
    ],
  },
  {
    city: "Amsterdam",
    title: "Quel quartier choisir à Amsterdam ?",
    slug: slugify("Quel quartier choisir à Amsterdam ?"),
    dek: "Amsterdam est petite, mais ses quartiers n’ont ni le même rythme ni le même bruit.",
    body: [
      { text: "Amsterdam se parcourt à pied ou à vélo, et presque tout est à moins de vingt minutes du centre. Le quartier détermine surtout l’ambiance de vos soirées." },
      { heading: "Charme et calme", text: "Le Jordaan, avec ses canaux et ses ruelles pittoresques, est le quartier préféré des habitants. Le quartier des musées, autour du Rijksmuseum et du Vondelpark, est plus calme et plus élégant." },
      { heading: "Vivant et local", text: "De Pijp, autour du marché Albert Cuyp, offre une ambiance populaire et multiculturelle, avec beaucoup de restaurants. Amsterdam Noord, de l’autre côté de l’IJ, séduit par ses lieux créatifs installés dans d’anciens chantiers navals." },
      { heading: "À éviter si vous cherchez le calme", text: "De Wallen, le plus vieux quartier, est animé jour et nuit, avec une vie nocturne bruyante. Il est idéal pour une soirée, moins pour dormir." },
    ],
  },
  {
    city: "Amsterdam",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "L’aéroport de Schiphol est relié au centre d’Amsterdam par un train rapide et très fréquent.",
    body: [
      { text: "Schiphol est l’un des aéroports les mieux reliés d’Europe, et la gare d’Amsterdam-Centraal se trouve à quelques minutes seulement." },
      { heading: "Le train", text: "Les trains NS rejoignent Amsterdam-Centraal en environ 15 minutes, avec des départs très fréquents. Achetez votre billet aux automates de la gare, avant de monter dans la rame." },
      { heading: "Le bus de nuit", text: "Le bus 397 met environ 30 minutes pour rejoindre le centre. Il est utile la nuit, quand les trains se font plus rares." },
      { heading: "Le taxi", text: "Il coûte entre 25 et 40 € vers le centre, ce qui n’est intéressant qu’à plusieurs ou avec beaucoup de bagages. Le train reste, de loin, le plus simple." },
    ],
  },
  {
    city: "Amsterdam",
    title: "Amsterdam en 3 jours",
    slug: slugify("Amsterdam en 3 jours"),
    dek: "Trois jours pour les canaux, les musées et un peu de vie de quartier, à pied ou à vélo.",
    body: [
      { text: "Amsterdam se visite très bien en trois jours. Marcher le long des canaux est déjà, en soi, une visite." },
      { heading: "Jour 1 : canaux et Jordaan", text: "Flânez le long des canaux du Jordaan, jusqu’à la maison d’Anne Frank, dont les billets se réservent très longtemps à l’avance. En fin de journée, dînez dans l’un des quartiers voisins." },
      { heading: "Jour 2 : musées et marché", text: "Le Rijksmuseum et le Musée Van Gogh occupent une journée, avec des billets à horaire fixe à réserver en ligne. Terminez par le marché Albert Cuyp, à De Pijp." },
      { heading: "Jour 3 : Noord ou excursion", text: "Prenez le ferry gratuit depuis la gare centrale pour rejoindre Amsterdam Noord et ses lieux créatifs. Ou partez en excursion d’une demi-journée hors de la ville." },
    ],
  },
  {
    city: "Amsterdam",
    title: "Amsterdam avec un petit budget",
    slug: slugify("Amsterdam avec un petit budget"),
    dek: "Amsterdam est chère, mais plusieurs astuces permettent de visiter sans exploser le budget.",
    body: [
      { text: "Amsterdam est l’une des capitales les plus chères d’Europe, surtout pour dormir, et la taxe de séjour y est élevée. Les autres postes se maîtrisent mieux." },
      { heading: "Se déplacer", text: "Un ticket GVB d’une heure coûte 3,40 € et le pass journée 9 €. Beaucoup de visites se font à pied, et le ferry vers Noord est gratuit." },
      { heading: "Manger", text: "Les marchés, comme celui de De Pijp, et les supermarchés permettent de composer des repas économiques. Un déjeuner simple coûte nettement moins qu’un dîner à la carte." },
      { heading: "Les astuces", text: "Les promenades au bord des canaux, les parcs et les quartiers au-delà du centre ne coûtent rien. Réservez les musées en ligne pour éviter des files d’attente qui font perdre du temps." },
    ],
  },
  {
    city: "Berlin",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Le nouvel aéroport de Berlin est bien relié au centre, mais attention au bon billet.",
    body: [
      { text: "L’aéroport de Berlin-Brandebourg (BER) est situé au sud-est de la ville, et plusieurs liaisons desservent le centre." },
      { heading: "Le train", text: "Le train express FEX et le S-Bahn rejoignent la gare centrale, Hauptbahnhof, en une trentaine de minutes. L’aéroport se trouve en zone C : prenez un billet couvrant les zones A, B et C." },
      { heading: "Le bus express", text: "Il met environ 40 minutes pour rejoindre le centre. C’est une alternative au train, selon la destination et l’horaire." },
      { heading: "Le taxi", text: "Comptez entre 40 et 50 € vers le centre. C’est surtout utile à plusieurs ou pour une arrivée tardive." },
    ],
  },
  {
    city: "Berlin",
    title: "Berlin en 3 jours",
    slug: slugify("Berlin en 3 jours"),
    dek: "Trois jours pour comprendre l’histoire de la ville et profiter de son énergie créative.",
    body: [
      { text: "Berlin est une ville étendue, mais trois jours suffisent pour en saisir l’histoire et l’esprit. Voici un parcours qui regroupe les visites." },
      { heading: "Jour 1 : le centre historique", text: "La porte de Brandebourg, le Reichstag, dont la coupole se visite gratuitement sur réservation, et l’île aux Musées. Le soir, dînez dans le quartier de Mitte." },
      { heading: "Jour 2 : mémoire du Mur", text: "L’East Side Gallery à Friedrichshain, plus long vestige du Mur, puis les mémoriaux consacrés à cette période. Terminez la journée à Kreuzberg, pour ses bars et sa scène multiculturelle." },
      { heading: "Jour 3 : palais et quartiers résidentiels", text: "Le château de Charlottenburg le matin, puis Prenzlauer Berg et ses cafés. Le dimanche, le marché aux puces de Mauerpark est un bon moment à passer." },
    ],
  },
  {
    city: "Berlin",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Berlin est réputée pour ses nuits : voici où aller selon l’ambiance recherchée.",
    body: [
      { text: "La vie nocturne berlinoise est l’une des plus libres d’Europe, avec des bars et des clubs qui ouvrent tard et ferment souvent le lendemain." },
      { heading: "Kreuzberg et Neukölln", text: "Bars alternatifs, scène multiculturelle et salles de concert : ces quartiers offrent des soirées variées, du petit bar au club. Ils conviennent bien si vous ne voulez pas de programme fixe." },
      { heading: "Friedrichshain", text: "Il abrite l’une des scènes de clubs les plus intenses d’Europe. Attendez-vous à une sélection à l’entrée, et à des soirées qui se prolongent bien après l’aube." },
      { heading: "Rentrer", text: "Les lignes de U-Bahn fonctionnent la nuit le week-end, complétées par des bus de nuit. Prévoyez du liquide, car beaucoup de bars ne prennent pas la carte." },
    ],
  },
  {
    city: "Berlin",
    title: "Berlin avec un petit budget",
    slug: slugify("Berlin avec un petit budget"),
    dek: "Berlin reste plus abordable que la plupart des grandes capitales d’Europe de l’Ouest.",
    body: [
      { text: "Berlin est l’une des capitales les moins chères d’Europe occidentale, même si les loyers et les hôtels ont augmenté. Voici comment garder un budget serré." },
      { heading: "Se déplacer", text: "Un ticket AB coûte 3,80 € et le pass journée 10,60 €. Pour un séjour de plusieurs jours, un pass de plusieurs jours revient moins cher par jour." },
      { heading: "Manger", text: "Les kebabs, la currywurst et les boulangeries permettent de manger bon marché. Les supermarchés et les marchés hebdomadaires dépannent pour les repas du midi." },
      { heading: "Visites gratuites", text: "La coupole du Reichstag, l’East Side Gallery en plein air et la porte de Brandebourg sont gratuits. De nombreux musées proposent des tarifs réduits pour les jeunes." },
    ],
  },
  {
    city: "Lisbon",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "L’aéroport de Lisbonne est à quelques minutes du centre, et le métro y arrive directement.",
    body: [
      { text: "L’aéroport Humberto Delgado est l’un des plus proches du centre-ville de toutes les capitales européennes. Trois solutions s’offrent à vous." },
      { heading: "Le métro", text: "La ligne rouge rejoint le centre en environ 25 minutes, avec un trajet direct et économique. Il faut acheter la carte rechargeable Viva Viagem, qui coûte un petit supplément." },
      { heading: "L’Aerobus", text: "Il met environ 30 minutes pour rejoindre Restauradores et Cais do Sodré. Il est pratique si votre hôtel se trouve près d’un de ses arrêts." },
      { heading: "Le taxi", text: "Comptez 15 à 20 € environ vers le centre, avec un trajet court. Les applications de VTC sont également très courantes à Lisbonne et pratiques pour une arrivée tardive." },
    ],
  },
  {
    city: "Lisbon",
    title: "Lisbonne en 3 jours",
    slug: slugify("Lisbonne en 3 jours"),
    dek: "Trois jours pour les collines, le fleuve et une excursion vers les palais de Sintra.",
    body: [
      { text: "Lisbonne s’étend sur plusieurs collines, ce qui rend les déplacements physiques mais les points de vue magnifiques. Trois jours suffisent pour en profiter." },
      { heading: "Jour 1 : Alfama", text: "Le plus vieux quartier de Lisbonne, avec ses ruelles pentues, son château et ses maisons de fado. Le tramway 28 est célèbre mais bondé : prenez-le tôt le matin." },
      { heading: "Jour 2 : Belém", text: "La tour de Belém, le monastère des Hiéronymites et les célèbres pastéis de nata. Le quartier se visite bien en demi-journée, au bord du Tage." },
      { heading: "Jour 3 : le centre ou Sintra", text: "Baixa, Chiado et Bairro Alto se parcourent à pied, avec leurs points de vue sur la ville. Pour une excursion, Sintra est accessible en train depuis le centre en moins d’une heure." },
    ],
  },
  {
    city: "Lisbon",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Lisbonne est une ville de soirées longues : voici où aller selon l’ambiance.",
    body: [
      { text: "Lisbonne vit tard, avec des dîners qui commencent vers vingt heures et des bars ouverts jusqu’au petit matin." },
      { heading: "Bairro Alto et Cais do Sodré", text: "Bairro Alto est un dédale de bars serrés où l’on boit dans la rue, avec une foule jeune et internationale. Cais do Sodré, proche du fleuve, propose une ambiance un peu plus variée." },
      { heading: "Fado et ambiance calme", text: "Alfama est le lieu du fado, avec des soirées intimes dans de petites salles. Réservez à l’avance et évitez les adresses qui racolent dans la rue." },
      { heading: "Rentrer", text: "Le métro s’arrête vers une heure du matin, et les collines rendent la marche fatigante en fin de soirée. Les VTC sont très abordables pour rentrer." },
    ],
  },
  {
    city: "Lisbon",
    title: "Lisbonne avec un petit budget",
    slug: slugify("Lisbonne avec un petit budget"),
    dek: "Lisbonne reste l’une des capitales d’Europe de l’Ouest les plus abordables.",
    body: [
      { text: "Lisbonne offre un excellent rapport qualité-prix, même si les loyers touristiques ont augmenté. Quelques choix suffisent pour tenir un budget serré." },
      { heading: "Se déplacer", text: "Un trajet avec la carte Viva Viagem coûte 1,65 € et le pass 24 heures 6,60 €. Le centre se parcourt largement à pied, malgré les collines." },
      { heading: "Manger", text: "Le plat du jour, le prato do dia, offre un déjeuner complet à petit prix dans les restaurants de quartier. Une pâtisserie et un café au comptoir font un petit-déjeuner très économique." },
      { heading: "Visites gratuites", text: "Les belvédères, les ruelles d’Alfama et les promenades au bord du Tage ne coûtent rien. Les monuments payants se choisissent mieux à deux ou trois qu’en série." },
    ],
  },
  {
    city: "Vienna",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Trois liaisons desservent le centre de Vienne depuis l’aéroport, du plus rapide au plus économique.",
    body: [
      { text: "L’aéroport de Vienne (VIE) est relié au centre par plusieurs trains, ce qui rend l’arrivée très simple." },
      { heading: "Le City Airport Train", text: "Le CAT rejoint la station Wien Mitte en une quinzaine de minutes, sans arrêt. C’est le plus rapide, mais aussi le plus cher des trois options." },
      { heading: "Le S-Bahn", text: "La ligne S7 met environ 25 minutes pour rejoindre le centre, pour un tarif nettement moins élevé. C’est le meilleur choix si le gain de dix minutes ne vous importe pas." },
      { heading: "Le taxi", text: "Comptez entre 35 et 40 € vers le centre. C’est surtout utile à plusieurs ou avec des bagages lourds." },
    ],
  },
  {
    city: "Vienna",
    title: "Vienne en 3 jours",
    slug: slugify("Vienne en 3 jours"),
    dek: "Trois jours pour les palais impériaux, les cafés historiques et un soir à l’opéra.",
    body: [
      { text: "Vienne est une ville compacte et très bien desservie, parfaite pour trois jours. Elle se visite à pied, avec de longues pauses dans ses cafés." },
      { heading: "Jour 1 : le centre impérial", text: "La cathédrale Saint-Étienne, le palais de la Hofburg et les rues piétonnes du centre. Prévoyez une pause dans un café historique pour goûter à une pâtisserie." },
      { heading: "Jour 2 : Schönbrunn et le marché", text: "Le château de Schönbrunn, accessible en métro, occupe la matinée. L’après-midi, le Naschmarkt et ses petits restaurants font une bonne pause déjeuner." },
      { heading: "Jour 3 : musées et Prater", text: "Le Belvédère, avec ses œuvres de Klimt, puis le Prater et sa célèbre grande roue en fin de journée. Les places debout à l’opéra sont une façon économique d’y assister." },
    ],
  },
  {
    city: "Vienna",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Vienne ne se résume pas à ses cafés : voici où sortir le soir.",
    body: [
      { text: "Vienne offre une vie nocturne plus tranquille que Berlin, mais bien réelle, avec des bars, des clubs et des tavernes à vin." },
      { heading: "Dans le centre", text: "Le Bermudadreieck, un triangle de rues autour de l’Innere Stadt, concentre bars et restaurants. C’est pratique et animé, mais plus touristique que le reste de la ville." },
      { heading: "Plus alternatif", text: "Le long du Gürtel et près du Naschmarkt, plusieurs bars et clubs attirent un public plus jeune. Le quartier du MuseumsQuartier propose aussi des terrasses animées l’été." },
      { heading: "Rentrer", text: "Le week-end, le métro circule toute la nuit, complété par des bus de nuit en semaine. Vérifiez le dernier passage avant de partir." },
    ],
  },
  {
    city: "Vienna",
    title: "Vienne avec un petit budget",
    slug: slugify("Vienne avec un petit budget"),
    dek: "Vienne n’est pas bon marché, mais elle offre de nombreuses façons de faire des économies.",
    body: [
      { text: "Vienne est l’une des capitales les plus chères d’Europe, mais plusieurs astuces permettent de réduire le budget." },
      { heading: "Se déplacer", text: "Un ticket unique coûte 2,40 € et le pass 24 heures 8 €. L’eau du robinet, d’excellente qualité, évite d’acheter des bouteilles." },
      { heading: "Manger", text: "Les menus du midi et les stands de saucisses, les Würstelstände, permettent de manger pour peu. Dans un café historique, un café suffit pour rester assis aussi longtemps que l’on veut." },
      { heading: "Culture à petit prix", text: "Les places debout à l’opéra et dans les grandes salles sont vendues à quelques euros. De nombreux musées proposent des réductions pour les jeunes." },
    ],
  },
  {
    city: "Prague",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Bus, train express ou taxi : trois façons de rejoindre Prague depuis l’aéroport.",
    body: [
      { text: "L’aéroport de Prague (PRG) est situé à une dizaine de kilomètres du centre, et plusieurs liaisons simples existent." },
      { heading: "Le bus et le métro", text: "Le bus 119 rejoint la station de métro Nádraží Veleslavín en quelques minutes, puis la ligne A mène au centre. Le trajet total prend environ 35 minutes, avec un seul ticket de transport en commun." },
      { heading: "L’Airport Express", text: "Ce bus direct dessert la gare centrale en environ 35 minutes. Il évite la correspondance, mais coûte plus cher que le bus et le métro." },
      { heading: "Le taxi", text: "Comptez 25 à 30 € vers le centre. Choisissez un taxi réservé via l’application ou à la file officielle, car les abus ont longtemps existé avec les chauffeurs non officiels." },
    ],
  },
  {
    city: "Prague",
    title: "Prague en 3 jours",
    slug: slugify("Prague en 3 jours"),
    dek: "Trois jours pour le centre médiéval, le château et un autre visage de la ville.",
    body: [
      { text: "Prague est compacte et se parcourt à pied. Trois jours suffisent pour voir l’essentiel sans courir." },
      { heading: "Jour 1 : la Vieille Ville", text: "La place de la Vieille Ville, avec son horloge astronomique, puis le quartier juif. Le pont Charles est plus agréable tôt le matin, avant les foules." },
      { heading: "Jour 2 : Malá Strana et le château", text: "Traversez le pont pour rejoindre les ruelles baroques de Malá Strana, puis montez au château et à la cathédrale Saint-Guy. Terminez la journée par un dîner calme dans le quartier." },
      { heading: "Jour 3 : un autre visage", text: "Žižkov et Vinohrady offrent une ambiance plus locale. Si vous avez du temps, Kutná Hora, avec son ossuaire, se visite en train en une demi-journée." },
    ],
  },
  {
    city: "Prague",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "La bière coule à flots à Prague : voici où boire un verre sans tomber dans les pièges touristiques.",
    body: [
      { text: "Prague est réputée pour sa bière, bon marché, et ses bars installés dans des caves médiévales. Mais tous les quartiers ne se valent pas." },
      { heading: "Žižkov", text: "Réputé pour être le quartier le plus dense en bars d’Europe, il offre une ambiance locale et décontractée, loin des cars de touristes. C’est le meilleur choix pour une soirée authentique." },
      { heading: "Vinohrady et le centre", text: "Vinohrady, plus élégant, propose bars à vin et restaurants. Dans la Vieille Ville, les adresses sont nombreuses mais souvent plus chères et plus touristiques." },
      { heading: "À savoir", text: "Comparez les prix avant de vous asseoir, car les écarts peuvent être importants entre une brasserie de quartier et un bar du centre. Évitez les bureaux de change de rue." },
    ],
  },
  {
    city: "Prague",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Du café-pâtisserie au petit-déjeuner à la tchèque, quelques repères pour commencer la journée.",
    body: [
      { text: "Le petit-déjeuner tchèque traditionnel est assez copieux, avec du pain, de la charcuterie et du fromage. Mais Prague offre aujourd’hui des options très variées." },
      { heading: "À la boulangerie", text: "Les boulangeries de quartier vendent viennoiseries et petits pains à petit prix, à emporter avec un café. C’est la solution la plus économique et la plus locale." },
      { heading: "Dans un café", text: "Les cafés de Vinohrady et de Holešovice proposent des petits-déjeuners variés, avec des formules brunch le week-end. Ceux du centre historique sont plus chers, pour un cadre plus touristique." },
      { heading: "Le bon réflexe", text: "Éloignez-vous de la place de la Vieille Ville pour manger, car les prix grimpent vite autour des grands monuments. Un quartier résidentiel offre un meilleur rapport qualité-prix." },
    ],
  },
  {
    city: "Prague",
    title: "Prague avec un petit budget",
    slug: slugify("Prague avec un petit budget"),
    dek: "Prague reste abordable pour un voyageur européen, à condition d’éviter les pièges du centre.",
    body: [
      { text: "Prague est plus abordable que la plupart des capitales d’Europe de l’Ouest, surtout pour manger et boire. Quelques astuces permettent de réduire encore la note." },
      { heading: "Se déplacer", text: "Un ticket de 90 minutes coûte 40 couronnes et le pass 24 heures 120 couronnes. Le centre se visite très bien à pied." },
      { heading: "Manger et boire", text: "Les menus du jour, servis à midi dans les restaurants de quartier, sont souvent excellents et bon marché. La bière est généralement moins chère que l’eau minérale dans les brasseries locales." },
      { heading: "Payer en couronnes", text: "Payez en couronnes tchèques plutôt qu’en euros, car les taux appliqués en euros sont souvent défavorables. Évitez les bureaux de change de rue et préférez le retrait ou la carte." },
    ],
  },
  {
    city: "Athens",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Métro, bus ou taxi à tarif fixe : l’aéroport d’Athènes est bien relié au centre.",
    body: [
      { text: "L’aéroport international d’Athènes (ATH) est à environ 35 kilomètres du centre, mais trois liaisons simples existent." },
      { heading: "Le métro", text: "La ligne bleue rejoint le centre, notamment Syntagma, en une quarantaine de minutes, sans changement. Le billet aéroport est plus cher qu’un ticket urbain, mais reste bien inférieur à un taxi." },
      { heading: "Le bus X95", text: "Il dessert Syntagma en environ une heure, 24 heures sur 24. C’est la solution pour une arrivée très tardive ou un départ à l’aube." },
      { heading: "Le taxi", text: "Le tarif est fixe, d’environ 40 €, entre l’aéroport et le centre. C’est rassurant avec des bagages ou à plusieurs." },
    ],
  },
  {
    city: "Athens",
    title: "Athènes en 3 jours",
    slug: slugify("Athènes en 3 jours"),
    dek: "Trois jours pour l’Acropole, les marchés et un coucher de soleil sur la ville.",
    body: [
      { text: "Athènes est une ville vivante, où l’Antiquité côtoie la vie quotidienne. Trois jours suffisent pour en faire le tour." },
      { heading: "Jour 1 : l’Acropole et Plaka", text: "Montez à l’Acropole dès l’ouverture, avant la chaleur et la foule, puis redescendez par Plaka, au pied de la colline. Le musée de l’Acropole complète la visite." },
      { heading: "Jour 2 : agora et marchés", text: "L’ancienne agora, puis Monastiraki et son marché aux puces, très animé le dimanche. Le Musée archéologique national occupe l’après-midi." },
      { heading: "Jour 3 : points de vue et mer", text: "Montez à la colline du Lycabette à Kolonaki pour le coucher de soleil. Ou prenez le bus pour le cap Sounion et son temple de Poséidon, au bord de la mer." },
    ],
  },
  {
    city: "Athens",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "À Athènes, on dîne tard et on sort encore plus tard : voici où aller.",
    body: [
      { text: "Athènes vit tard : les dîners commencent vers vingt-deux heures, et les bars restent ouverts jusqu’au petit matin." },
      { heading: "Psyrri et Monastiraki", text: "Psyrri, avec ses tavernes, ses bars et ses fresques, est l’un des quartiers les plus animés. Les terrasses de Monastiraki offrent une vue sur l’Acropole éclairée." },
      { heading: "Plus chic ou plus local", text: "Kolonaki propose des bars et cafés élégants, tandis que Koukaki, plus tranquille, offre une ambiance de quartier. Gazi est connu pour ses clubs." },
      { heading: "Rentrer", text: "Le métro s’arrête vers minuit en semaine et plus tard le week-end. Les taxis et les VTC sont abordables pour rentrer." },
    ],
  },
  {
    city: "Athens",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Du koulouri acheté dans la rue aux boulangeries de quartier, le petit-déjeuner athénien est simple et bon marché.",
    body: [
      { text: "Le petit-déjeuner grec est léger et se prend souvent sur le pouce. Athènes en offre plusieurs versions, toutes économiques." },
      { heading: "Le koulouri", text: "Cet anneau de pain au sésame se vend dans la rue pour quelques dizaines de centimes. C’est le petit-déjeuner de nombreux Athéniens, souvent accompagné d’un café." },
      { heading: "Les boulangeries", text: "Les fournos vendent des tiropitas, des feuilletés au fromage, et des spanakopitas, aux épinards. Ils sont chauds, bon marché et disponibles dès le matin." },
      { heading: "Au café", text: "Le yaourt grec avec du miel et le freddo, le café glacé local, sont des classiques. Les cafés de Koukaki et de Kolonaki offrent un cadre agréable pour s’attarder." },
    ],
  },
  {
    city: "Athens",
    title: "Athènes avec un petit budget",
    slug: slugify("Athènes avec un petit budget"),
    dek: "Athènes reste l’une des capitales d’Europe de l’Ouest les plus abordables, surtout pour manger.",
    body: [
      { text: "Athènes est abordable, surtout pour la restauration et les transports. Le coût de l’Acropole et des sites payants est le principal poste à anticiper." },
      { heading: "Se déplacer", text: "Un ticket valable 90 minutes coûte 1,20 € et le pass 24 heures 4,10 €. Le centre se parcourt largement à pied." },
      { heading: "Manger", text: "Un souvlaki, une brochette dans une pita, coûte quelques euros, et les tavernes de quartier servent des repas complets à petit prix. Les terrasses les plus proches de l’Acropole sont les plus chères." },
      { heading: "Visites payantes", text: "Les sites archéologiques ont vu leur tarif d’entrée augmenter ces dernières années. Vérifiez les billets combinés, qui regroupent plusieurs sites et reviennent moins cher." },
    ],
  },
  {
    city: "Venice",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "À Venise, l’arrivée se fait par l’eau ou par la route, mais pas jusqu’à votre porte.",
    body: [
      { text: "L’aéroport Marco Polo (VCE) est situé sur la terre ferme, à quelques kilomètres de la lagune. Selon votre hébergement, trois solutions se présentent." },
      { heading: "Le bus", text: "Les bus ATVO et les liaisons urbaines rejoignent Piazzale Roma en une vingtaine de minutes. C’est le plus rapide et le plus économique, mais Piazzale Roma est le dernier point accessible par la route." },
      { heading: "Le bateau-bus", text: "Alilaguna dessert plusieurs arrêts de la lagune, dont Saint-Marc, en 60 à 90 minutes selon la ligne. C’est plus lent, mais le trajet sur l’eau fait déjà partie du voyage." },
      { heading: "Le taxi des eaux", text: "Un bateau privé coûte environ 120 € jusqu’au centre historique. Il dépose près de l’hôtel, ce qui en vaut la peine avec beaucoup de bagages ou à plusieurs." },
    ],
  },
  {
    city: "Venice",
    title: "Venise en 3 jours",
    slug: slugify("Venise en 3 jours"),
    dek: "Trois jours pour Saint-Marc, les quartiers plus calmes et une excursion sur les îles de la lagune.",
    body: [
      { text: "Venise se visite à pied et en vaporetto. Trois jours permettent de dépasser Saint-Marc pour découvrir des quartiers plus tranquilles." },
      { heading: "Jour 1 : Saint-Marc", text: "La basilique, le palais des Doges et le campanile se visitent le matin, avant l’afflux de visiteurs. Réservez les entrées en ligne pour éviter de longues files d’attente." },
      { heading: "Jour 2 : Rialto et Dorsoduro", text: "Le marché du Rialto, plus animé le matin, puis le quartier de Dorsoduro et ses musées. Terminez par une promenade au bord de l’eau, sur les Zattere." },
      { heading: "Jour 3 : les îles", text: "Murano, pour le verre, Burano, pour ses maisons colorées, et Torcello, plus calme, s’explorent en vaporetto. À certaines dates, une taxe d’accès est demandée aux visiteurs à la journée : renseignez-vous avant de partir." },
    ],
  },
  {
    city: "Venice",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Venise se couche tôt, mais quelques quartiers offrent de belles soirées autour des bars à cicchetti.",
    body: [
      { text: "La vie nocturne vénitienne est calme comparée à celle d’autres grandes villes italiennes, mais elle existe, avec une ambiance conviviale." },
      { heading: "Cannaregio et Rialto", text: "Les bacari, ces petits bars à vin et à cicchetti, des amuse-bouches, y sont nombreux. On y boit un verre debout, en mangeant par petites bouchées, à des prix raisonnables." },
      { heading: "Dorsoduro", text: "La place Santa Margherita, fréquentée par les étudiants, anime les soirées avec ses terrasses et ses bars. C’est l’un des endroits les plus vivants de la ville après la tombée de la nuit." },
      { heading: "Rentrer", text: "Les vaporetti circulent la nuit avec un service réduit, et l’orientation dans les ruelles se complique après quelques verres. Repérez votre trajet de retour avant de sortir." },
    ],
  },
  {
    city: "Venice",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "À Venise comme ailleurs en Italie, le petit-déjeuner se prend vite, debout, au comptoir.",
    body: [
      { text: "Le petit-déjeuner italien se compose d’un café et d’une viennoiserie, que l’on prend généralement au comptoir. À Venise, le cadre fait parfois varier les prix." },
      { heading: "Au comptoir", text: "Un cappuccino et un cornetto pris debout coûtent bien moins cher que le même petit-déjeuner assis. C’est la façon de faire des Vénitiens, et la plus économique." },
      { heading: "Les pâtisseries", text: "Les pasticcerie des quartiers résidentiels proposent des viennoiseries et des pâtisseries variées, loin des adresses touristiques. Cannaregio et Dorsoduro en comptent plusieurs." },
      { heading: "À éviter", text: "Les cafés de la place Saint-Marc facturent le cadre à prix d’or, et le service à table s’ajoute au prix. Éloignez-vous de quelques rues pour des prix bien plus raisonnables." },
    ],
  },
  {
    city: "Venice",
    title: "Venise avec un petit budget",
    slug: slugify("Venise avec un petit budget"),
    dek: "Venise a la réputation d’être chère, mais certains choix permettent de limiter nettement la note.",
    body: [
      { text: "Venise est l’une des villes les plus chères d’Italie, surtout pour dormir et se déplacer en bateau. Quelques astuces aident à contenir le budget." },
      { heading: "Se déplacer", text: "Un trajet en vaporetto coûte 9,50 € et le pass 24 heures 25 €, ce qui fait de la marche le premier réflexe. Pour traverser le Grand Canal, un traghetto, bac simple, coûte bien moins." },
      { heading: "Dormir moins cher", text: "Loger à Mestre, sur la terre ferme, est nettement moins cher, avec un train pour Venise en une dizaine de minutes. La contrepartie est de perdre l’ambiance du soir à Venise." },
      { heading: "Manger", text: "Les cicchetti dans les bacari permettent de composer un repas pour peu, loin des restaurants à menu touristique. Évitez les cafés de la place Saint-Marc." },
    ],
  },
  {
    city: "Singapore",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "L’aéroport de Changi est l’un des mieux reliés du monde : métro, bus ou taxi, au choix.",
    body: [
      { text: "L’aéroport de Changi est situé à l’est de Singapour, et le centre n’est jamais bien loin. Trois options se comparent selon votre budget." },
      { heading: "Le MRT", text: "Le métro rejoint le centre en une trentaine de minutes, avec parfois une correspondance. Il est climatisé, ponctuel et très économique." },
      { heading: "Le bus", text: "Il met environ 45 minutes et reste très bon marché. C’est une alternative simple si votre hôtel se trouve près d’un arrêt, mais le métro reste plus rapide." },
      { heading: "Le taxi ou le VTC", text: "Comptez 20 à 25 dollars de Singapour pour le centre, avec un supplément à l’aéroport. C’est confortable avec des bagages, à condition d’éviter les heures de pointe." },
    ],
  },
  {
    city: "Singapore",
    title: "Singapour en 3 jours",
    slug: slugify("Singapour en 3 jours"),
    dek: "Trois jours pour la ville futuriste, les quartiers ethniques et les hawker centers.",
    body: [
      { text: "Singapour est compacte et très bien desservie, ce qui permet d’y voir beaucoup en trois jours. Elle se visite en alternant extérieur et lieux climatisés." },
      { heading: "Jour 1 : Marina Bay", text: "Gardens by the Bay, l’hôtel Marina Bay Sands et le front de mer constituent la vitrine futuriste. Revenez en soirée pour les illuminations." },
      { heading: "Jour 2 : les quartiers", text: "Chinatown, avec ses temples et ses hawker centers, Kampong Glam, avec la mosquée du Sultan, et Little India, pour ses couleurs et ses épices. Chaque quartier offre un autre visage." },
      { heading: "Jour 3 : verdure et shopping", text: "Les jardins botaniques, classés à l’Unesco, offrent une pause verte. Orchard Road convient à une après-midi de shopping, à l’abri de la chaleur." },
    ],
  },
  {
    city: "Singapore",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Singapour sait faire la fête, mais l’alcool y est cher : mieux vaut choisir ses adresses.",
    body: [
      { text: "La vie nocturne singapourienne est animée mais chère, car l’alcool y est lourdement taxé. Quelques quartiers concentrent les bonnes adresses." },
      { heading: "Clarke Quay et Boat Quay", text: "Les anciens entrepôts au bord de la rivière accueillent de nombreux bars et restaurants. L’ambiance est animée et très touristique." },
      { heading: "Chinatown et Kampong Glam", text: "Chinatown propose des bars à cocktails dans des ruelles de boutiques anciennes. Kampong Glam, autour de Haji Lane, offre une ambiance plus décontractée." },
      { heading: "Rentrer", text: "Le dernier métro part vers minuit, et les taxis ou les VTC prennent le relais. Les bars sur les toits offrent de belles vues, mais leurs prix sont à la hauteur." },
    ],
  },
  {
    city: "Singapore",
    title: "Singapour avec un petit budget",
    slug: slugify("Singapour avec un petit budget"),
    dek: "Singapour est chère, mais elle offre aussi l’une des meilleures cuisines de rue du monde, à petit prix.",
    body: [
      { text: "Singapour est l’une des villes les plus chères d’Asie, surtout pour le logement et l’alcool. La nourriture de rue, elle, reste très abordable." },
      { heading: "Se déplacer", text: "Un trajet avec une carte rechargeable coûte entre 1,50 et 2,50 dollars de Singapour selon la distance. Le métro dessert presque tous les sites d’intérêt." },
      { heading: "Manger", text: "Les hawker centers, ces halls de cuisine de rue, servent des plats complets pour quelques dollars. C’est la meilleure façon de manger local, sans dépasser un petit budget." },
      { heading: "Visites gratuites", text: "Les jardins botaniques, plusieurs parcs et les quartiers ethniques se visitent librement. L’eau du robinet est potable, ce qui évite d’acheter des bouteilles." },
    ],
  },
  {
    city: "Hong Kong",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "L’Airport Express est le moyen le plus rapide de rejoindre Hong Kong depuis l’aéroport.",
    body: [
      { text: "L’aéroport de Hong Kong (HKG) est situé sur l’île de Lantau, et trois liaisons desservent la ville." },
      { heading: "L’Airport Express", text: "Ce train rejoint la station Hong Kong, dans le quartier de Central, en une vingtaine de minutes. C’est le plus rapide et le plus confortable, mais aussi le plus cher des transports en commun." },
      { heading: "Le bus", text: "Plus économique, il met entre 45 et 60 minutes selon la destination. Il dessert plusieurs quartiers de Kowloon et de l’île de Hong Kong." },
      { heading: "Le taxi", text: "Comptez 300 à 400 dollars de Hong Kong vers le centre. Les taxis de différentes couleurs desservent des zones différentes : la couleur du véhicule dépend de votre destination." },
    ],
  },
  {
    city: "Hong Kong",
    title: "Hong Kong en 3 jours",
    slug: slugify("Hong Kong en 3 jours"),
    dek: "Trois jours pour les gratte-ciel, les marchés, le port et une escapade sur une île.",
    body: [
      { text: "Hong Kong est dense et très bien desservie. Trois jours permettent d’en voir les contrastes, entre gratte-ciel et marchés." },
      { heading: "Jour 1 : l’île de Hong Kong", text: "Le tramway du Peak monte à Victoria Peak pour la vue sur la ville. Descendez ensuite vers Central et Sheung Wan, avant de traverser le port en Star Ferry." },
      { heading: "Jour 2 : Kowloon", text: "Mong Kok et ses marchés, notamment de nuit, puis la promenade de Tsim Sha Tsui face à la skyline. Le spectacle de lumières du port a lieu chaque soir." },
      { heading: "Jour 3 : une île", text: "Lantau, avec son téléphérique et son grand Bouddha, ou une petite île plus calme comme Lamma pour une journée de détente. La meilleure période va d’octobre à décembre." },
    ],
  },
  {
    city: "Hong Kong",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Hong Kong ne dort jamais vraiment : voici où boire un verre selon l’ambiance.",
    body: [
      { text: "Hong Kong offre une vie nocturne dense et variée, concentrée dans quelques quartiers bien desservis par le métro." },
      { heading: "Central et Soho", text: "Lan Kwai Fong et Soho, au pied des escaliers mécaniques de Central, concentrent bars et restaurants. L’ambiance est internationale et animée, surtout le week-end." },
      { heading: "Kowloon", text: "Les bars sur les toits de Tsim Sha Tsui offrent une vue sur la skyline. Les marchés de nuit de Mong Kok et de Temple Street sont plus un lieu de promenade et de street food qu’un lieu de fête." },
      { heading: "Rentrer", text: "Le dernier métro part vers minuit et demi, et les taxis ou les bus de nuit prennent le relais. Les happy hours permettent de réduire les prix des verres en début de soirée." },
    ],
  },
  {
    city: "Hong Kong",
    title: "Hong Kong avec un petit budget",
    slug: slugify("Hong Kong avec un petit budget"),
    dek: "Hong Kong est chère pour se loger, mais ses transports et ses repas restent accessibles.",
    body: [
      { text: "Hong Kong est l’une des villes les plus chères d’Asie pour dormir. Les transports et la nourriture offrent heureusement des repères plus abordables." },
      { heading: "Se déplacer", text: "Un trajet avec la carte Octopus coûte entre 5 et 15 dollars de Hong Kong environ. Le tramway et le Star Ferry sont encore moins chers, et valent un trajet pour l’ambiance." },
      { heading: "Manger", text: "Les cha chaan teng, cafés populaires, servent des repas complets à petit prix. Les stands de rue et les restaurants de nouilles sont aussi très économiques." },
      { heading: "Visites gratuites", text: "La promenade de Tsim Sha Tsui, les marchés et le spectacle de lumières du port ne coûtent rien. Les randonnées, comme celle du Peak, sont gratuites, et offrent de superbes vues." },
    ],
  },
  {
    city: "Kyoto",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Kyoto n’a pas d’aéroport : on arrive par celui d’Osaka-Kansai, relié par un train direct.",
    body: [
      { text: "Kyoto est desservie par l’aéroport international du Kansai (KIX), situé près d’Osaka, à environ une heure et demie de la ville." },
      { heading: "Le train Haruka", text: "Le JR Haruka Express rejoint la gare de Kyoto en 75 minutes, sans changement. C’est la solution la plus rapide et la plus simple, avec des départs fréquents." },
      { heading: "Le bus limousine", text: "Il met environ 90 minutes et dépose près de plusieurs hôtels du centre. C’est pratique avec beaucoup de bagages, car il évite les correspondances en gare." },
      { heading: "Le taxi", text: "Il est très coûteux et réservé aux groupes. Pour un voyageur seul ou en couple, le train reste de loin le meilleur choix." },
    ],
  },
  {
    city: "Kyoto",
    title: "Kyoto en 3 jours",
    slug: slugify("Kyoto en 3 jours"),
    dek: "Trois jours pour les temples, les ruelles de Gion et la forêt de bambous.",
    body: [
      { text: "Kyoto compte des centaines de temples et de sanctuaires, et trois jours demandent de choisir. Voici un parcours qui regroupe les sites par secteur." },
      { heading: "Jour 1 : Higashiyama et Gion", text: "Montez au temple Kiyomizu-dera, descendez par les ruelles pentues, puis rejoignez Gion en fin de journée. Les ruelles de bois y sont très photogéniques." },
      { heading: "Jour 2 : Arashiyama et Fushimi", text: "Arashiyama et sa forêt de bambous sont plus agréables tôt le matin, avant la foule. L’après-midi, les portiques rouges de Fushimi Inari offrent une promenade en forêt." },
      { heading: "Jour 3 : le centre", text: "Le Pavillon d’or, le château de Nijō et le marché de Nishiki, au cœur de la ville. Les amateurs de nature peuvent remplacer une de ces visites par une excursion à Nara." },
    ],
  },
  {
    city: "Kyoto",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Kyoto se couche tôt, mais certaines ruelles offrent des soirées mémorables, entre bars et izakayas.",
    body: [
      { text: "Kyoto n’est pas une ville de fête tardive, mais ses ruelles de restaurants et ses bars discrets offrent des soirées très agréables." },
      { heading: "Pontochō et Kiyamachi", text: "La ruelle étroite de Pontochō, au bord de la rivière, abrite des restaurants dont certains ouvrent des terrasses sur l’eau en été. Kiyamachi, plus décontractée, regorge d’izakayas et de bars." },
      { heading: "Gion", text: "Ses maisons de thé et ses clubs restent très traditionnels, et souvent réservés à des clients présentés. Mieux vaut y flâner à la tombée de la nuit que de chercher à y entrer." },
      { heading: "Rentrer", text: "Les derniers trains et bus partent entre vingt-trois heures et minuit, plus tôt qu’à Tokyo. Prévoyez votre retour avant de commencer la soirée." },
    ],
  },
  {
    city: "Kyoto",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Du petit-déjeuner japonais à la formule café-toast, Kyoto offre plusieurs façons de commencer la journée.",
    body: [
      { text: "Le petit-déjeuner à Kyoto va du repas japonais traditionnel à la formule de café plus occidentale. Quelques repères aident à choisir." },
      { heading: "Le kissaten", text: "Ces cafés à l’ancienne proposent le matin des formules de café avec toast et œuf, à petit prix. C’est une institution locale, et une façon agréable de commencer la journée." },
      { heading: "Au konbini", text: "Les supérettes vendent des onigiri, boules de riz garnies, et des sandwiches frais, pour une somme modique. C’est la solution la plus rapide avant de partir visiter." },
      { heading: "Dans une auberge", text: "Les ryokan servent souvent un petit-déjeuner japonais complet, avec poisson grillé, riz et soupe miso. Réservez-le à l’avance si vous n’y dormez pas." },
    ],
  },
  {
    city: "Kyoto",
    title: "Kyoto avec un petit budget",
    slug: slugify("Kyoto avec un petit budget"),
    dek: "Kyoto offre beaucoup de visites gratuites et se visite à petit prix en choisissant bien ses temples.",
    body: [
      { text: "Kyoto est moins chère que Tokyo, surtout pour manger, mais les entrées de temples s’additionnent vite. Quelques choix suffisent pour maîtriser le budget." },
      { heading: "Se déplacer", text: "Un trajet en bus ou en métro coûte environ 230 yens. Louer un vélo permet de visiter une grande partie de la ville à petit prix, car elle est plate." },
      { heading: "Choisir ses temples", text: "Beaucoup de sanctuaires sont gratuits, comme Fushimi Inari, alors que d’autres demandent quelques centaines de yens. Choisissez ceux qui vous parlent plutôt que de tout visiter." },
      { heading: "Manger", text: "Les restaurants de nouilles, les izakayas de quartier et les supérettes offrent des repas bon marché. Le marché de Nishiki permet de goûter à plusieurs spécialités pour une somme modérée." },
    ],
  },
  {
    city: "Sydney",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Le train relie l’aéroport de Sydney au centre en un quart d’heure, avec un supplément à prévoir.",
    body: [
      { text: "L’aéroport de Sydney (SYD) est proche du centre, ce qui rend l’arrivée simple. Trois solutions se comparent." },
      { heading: "Le train", text: "L’Airport Link rejoint le centre en une quinzaine de minutes, avec des trains fréquents. Un supplément d’accès à la gare de l’aéroport s’ajoute au prix du trajet." },
      { heading: "Le bus", text: "Plus lent, avec 30 à 40 minutes de trajet, il est aussi plus économique. Il convient bien si votre hôtel est desservi directement." },
      { heading: "Le taxi ou le VTC", text: "Comptez 45 à 55 dollars australiens vers le centre. C’est pratique à plusieurs, mais le train est plus rapide aux heures de pointe." },
    ],
  },
  {
    city: "Sydney",
    title: "Sydney en 3 jours",
    slug: slugify("Sydney en 3 jours"),
    dek: "Trois jours pour le port, les plages et un peu de nature, avec les ferries comme fil conducteur.",
    body: [
      { text: "Sydney vit autour de son port, et se visite aussi bien en ferry qu’à pied. Trois jours permettent de voir l’essentiel." },
      { heading: "Jour 1 : le port", text: "L’Opéra, le pont du Harbour Bridge et le quartier historique de The Rocks, puis les jardins botaniques. Un coucher de soleil sur le port clôt bien la journée." },
      { heading: "Jour 2 : Manly", text: "Le ferry jusqu’à Manly offre l’une des plus belles vues de la ville. Sur place, plage, promenade et ambiance décontractée." },
      { heading: "Jour 3 : Bondi et Surry Hills", text: "Bondi pour la plage et la célèbre promenade côtière vers Coogee. Le soir, Surry Hills pour dîner dans un quartier réputé pour sa scène gastronomique." },
    ],
  },
  {
    city: "Sydney",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Sydney offre des soirées variées, des pubs historiques aux bars de quartier plus alternatifs.",
    body: [
      { text: "Sydney a une vie nocturne variée, répartie entre plusieurs quartiers bien distincts." },
      { heading: "Surry Hills et Newtown", text: "Surry Hills offre des bars et restaurants dans une ambiance branchée. Newtown, plus alternatif, est apprécié pour ses bars, sa musique et son ambiance décontractée." },
      { heading: "The Rocks et Darling Harbour", text: "Les pubs historiques de The Rocks sont charmants mais touristiques. Darling Harbour propose de grands établissements, moins authentiques mais très accessibles." },
      { heading: "Rentrer", text: "Les trains et les bus de nuit circulent, mais moins fréquemment. Les VTC sont une option simple et sûre pour rentrer." },
    ],
  },
  {
    city: "Sydney",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "À Sydney, le brunch est un art de vivre : voici comment en profiter sans se ruiner.",
    body: [
      { text: "La culture du café et du brunch est très forte à Sydney. Le petit-déjeuner y est une vraie sortie, avec des cartes variées." },
      { heading: "Les cafés de quartier", text: "Surry Hills et Bondi comptent de nombreux cafés réputés pour leur flat white et leurs plats de brunch. Arrivez tôt le week-end pour éviter l’attente." },
      { heading: "Pour moins cher", text: "Un café et un en-cas à emporter coûtent bien moins qu’un brunch à table. Les boulangeries et les cafés de rue proposent des pâtisseries et des tartines à petit prix." },
      { heading: "À savoir", text: "Un brunch complet est souvent assez cher à Sydney. Comparez les cartes avant de vous asseoir, et partagez les plats, qui sont généralement copieux." },
    ],
  },
  {
    city: "Sydney",
    title: "Sydney avec un petit budget",
    slug: slugify("Sydney avec un petit budget"),
    dek: "Sydney est chère, mais ses plus beaux sites, plages et promenades, sont gratuits.",
    body: [
      { text: "Sydney est l’une des villes les plus chères du monde pour dormir, mais ses plus belles attractions ne coûtent rien." },
      { heading: "Se déplacer", text: "Un trajet avec la carte Opal coûte entre 3 et 5 dollars australiens, et la dépense est plafonnée à 17,80 dollars par jour. Le plafond est plus bas le dimanche." },
      { heading: "Gratuit", text: "Les plages, les jardins botaniques, la promenade côtière de Bondi à Coogee et l’extérieur de l’Opéra sont gratuits. Le ferry, plus économique qu’une croisière, offre aussi de belles vues." },
      { heading: "Manger", text: "Les barbecues électriques gratuits dans les parcs, les supermarchés et les repas à emporter permettent d’économiser. Le déjeuner est en général moins cher que le dîner." },
    ],
  },
  {
    city: "Los Angeles",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Depuis LAX, entre navette, métro, bus et VTC, l’arrivée à Los Angeles demande un peu d’organisation.",
    body: [
      { text: "L’aéroport de Los Angeles (LAX) est situé à l’ouest de la ville, et la circulation conditionne tout trajet. Plusieurs solutions existent." },
      { heading: "Le métro", text: "Une navette gratuite rejoint la station de la ligne C, puis le métro mène au centre en environ 45 minutes. C’est économique, mais plus lent qu’un VTC aux heures creuses." },
      { heading: "Le FlyAway", text: "Ce bus direct rejoint Union Station en environ 40 minutes. Il est pratique avec des bagages, mais soumis aux embouteillages." },
      { heading: "Taxi et VTC", text: "Comptez 35 à 55 dollars selon la destination. Les prises en charge des VTC ont lieu dans un parc dédié, accessible par navette depuis les terminaux." },
    ],
  },
  {
    city: "Los Angeles",
    title: "Los Angeles en 3 jours",
    slug: slugify("Los Angeles en 3 jours"),
    dek: "Trois jours pour Hollywood, les plages et le centre, avec un peu de voiture ou de VTC.",
    body: [
      { text: "Los Angeles est très étendue : trois jours demandent de regrouper les visites par secteur et d’accepter de passer du temps sur la route." },
      { heading: "Jour 1 : Hollywood", text: "Le Walk of Fame, le panneau Hollywood vu de loin, puis l’observatoire Griffith au coucher du soleil. L’entrée y est gratuite et la vue sur la ville est superbe." },
      { heading: "Jour 2 : le littoral", text: "La jetée de Santa Monica, puis le front de mer de Venice Beach et ses skateparks. La promenade entre les deux se fait à pied ou à vélo." },
      { heading: "Jour 3 : Downtown", text: "Le marché couvert de Grand Central Market, les musées et les salles de concert du centre. Plusieurs musées sont gratuits sur réservation." },
    ],
  },
  {
    city: "Los Angeles",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Los Angeles ne manque pas de bars ni de clubs, mais il faut savoir où aller et comment rentrer.",
    body: [
      { text: "La vie nocturne de Los Angeles est dispersée sur de nombreux quartiers, et les déplacements demandent une vraie organisation." },
      { heading: "West Hollywood et Hollywood", text: "West Hollywood, avec le Sunset Strip, est connue pour ses bars, ses clubs et sa vie nocturne ouverte. Hollywood propose des salles de concert et des bars plus touristiques." },
      { heading: "Plus alternatif", text: "Silver Lake offre des bars décontractés et des salles de concert, dans un cadre plus local. Downtown, avec ses bars sur les toits, séduit un public plus branché." },
      { heading: "Rentrer", text: "Les bars servent de l’alcool jusqu’à deux heures du matin. Le métro est limité la nuit : prévoyez un VTC et ne conduisez jamais après avoir bu." },
    ],
  },
  {
    city: "Los Angeles",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Du burrito du matin au brunch de Venice, Los Angeles offre un petit-déjeuner pour chaque envie.",
    body: [
      { text: "Los Angeles est une ville de brunchs et de petits-déjeuners variés, influencés par la cuisine mexicaine et la culture du bien-être." },
      { heading: "Le breakfast burrito", text: "Cette spécialité locale, une tortilla garnie d’œufs, de pommes de terre et de viande, se vend dans de nombreux petits restaurants. C’est un petit-déjeuner copieux et bon marché." },
      { heading: "Cafés et bols de fruits", text: "Venice et Santa Monica comptent de nombreux cafés avec des bols d’açaï et des jus frais. Les cafés de Silver Lake sont plus créatifs et décontractés." },
      { heading: "Au marché", text: "Grand Central Market, à Downtown, réunit de nombreux stands qui servent le matin. C’est un bon endroit pour comparer plusieurs cuisines sans s’engager dans un seul restaurant." },
    ],
  },
  {
    city: "Los Angeles",
    title: "Los Angeles avec un petit budget",
    slug: slugify("Los Angeles avec un petit budget"),
    dek: "Los Angeles peut vite coûter cher, entre voiture, parking et restaurants, mais il existe des alternatives.",
    body: [
      { text: "Los Angeles est chère, surtout à cause des transports et de l’hébergement. Quelques choix permettent de limiter la facture." },
      { heading: "Les transports", text: "Un trajet en métro avec la carte TAP coûte 1,75 dollar et le pass journée 7 dollars. Les trajets en VTC, très répandus, pèsent le plus lourd dans le budget." },
      { heading: "Gratuit", text: "Les plages, l’observatoire Griffith et plusieurs musées sont gratuits ou gratuits sur réservation. Le front de mer de Venice se parcourt à pied, sans rien dépenser." },
      { heading: "Manger", text: "Les tacos de rue, les food trucks et le marché de Downtown offrent des repas copieux à petit prix. Évitez les restaurants autour des sites touristiques, nettement plus chers." },
    ],
  },
  {
    city: "Mexico City",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Metrobús, taxi officiel ou métro : trois façons de rejoindre le centre de Mexico depuis l’aéroport.",
    body: [
      { text: "L’aéroport international Benito Juárez (AICM) est l’un des plus proches du centre-ville des grandes capitales, mais la circulation allonge souvent le trajet." },
      { heading: "Le Metrobús", text: "La ligne 4 rejoint le centre historique en environ 40 minutes, pour un tarif très bas. Il faut une carte rechargeable, vendue aux distributeurs de la station." },
      { heading: "Le taxi officiel", text: "Prenez un taxi de sitio : achetez le ticket au comptoir agréé, dans le terminal, puis suivez les indications. Le trajet dure 25 à 35 minutes, selon la circulation." },
      { heading: "Le métro", text: "Il est très économique, mais déconseillé avec des bagages aux heures de pointe, quand les rames sont bondées. En journée creuse, il reste une option envisageable." },
    ],
  },
  {
    city: "Mexico City",
    title: "Mexico en 3 jours",
    slug: slugify("Mexico en 3 jours"),
    dek: "Trois jours pour le centre historique, les quartiers de Roma et Condesa et Coyoacán.",
    body: [
      { text: "Mexico est immense, mais ses meilleurs quartiers se visitent bien en trois jours, à condition de regrouper les sorties." },
      { heading: "Jour 1 : le Centro Histórico", text: "Le Zócalo, la cathédrale et les vestiges du Templo Mayor se visitent à pied. Le Palais national abrite les fresques de Diego Rivera, qui valent la visite." },
      { heading: "Jour 2 : Roma, Condesa et Chapultepec", text: "Promenez-vous dans les rues arborées de Roma et Condesa, au parc México, avec leurs cafés. Le musée d’anthropologie, dans le parc de Chapultepec, est l’un des plus beaux d’Amérique latine." },
      { heading: "Jour 3 : Coyoacán et Xochimilco", text: "Coyoacán et la maison bleue de Frida Kahlo, à réserver à l’avance, puis Xochimilco et ses canaux. Si vous avez du temps, Teotihuacán se visite en excursion d’une journée." },
    ],
  },
  {
    city: "Mexico City",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Mexico ne dort jamais vraiment : voici où dîner, boire un mezcal et danser.",
    body: [
      { text: "Mexico a une vie nocturne extrêmement variée, des cantinas traditionnelles aux bars à cocktails branchés." },
      { heading: "Roma et Condesa", text: "Ces deux quartiers concentrent bars à cocktails, mezcalerías et restaurants. L’ambiance est décontractée et très animée le week-end." },
      { heading: "Centro et Polanco", text: "Le centre historique propose des cantinas traditionnelles et la place Garibaldi, célèbre pour ses mariachis. Polanco, plus chic, séduit pour ses restaurants et ses bars élégants." },
      { heading: "Rentrer", text: "Le métro ferme vers minuit : utilisez un VTC ou un taxi réservé pour rentrer. À 2 240 mètres d’altitude, l’alcool fait effet plus vite : buvez modérément." },
    ],
  },
  {
    city: "Mexico City",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Chilaquiles, tamales et pain sucré : le petit-déjeuner mexicain est copieux et varié.",
    body: [
      { text: "Le petit-déjeuner mexicain est généreux, souvent salé et épicé. Mexico en offre une version à chaque coin de rue." },
      { heading: "Les classiques", text: "Les chilaquiles, des tortillas en sauce avec œufs ou poulet, et les huevos rancheros sont des classiques. Les tamales, accompagnés d’atole, une boisson chaude, se vendent dans la rue." },
      { heading: "Les boulangeries", text: "Les panaderías vendent du pan dulce, des pains sucrés dont la concha est la plus connue. Avec un café de olla, c’est un petit-déjeuner économique." },
      { heading: "Dans les cafés", text: "Roma et Condesa comptent de nombreux cafés avec brunch plus occidental. Les fondas et les marchés, eux, servent des repas plus traditionnels pour moins cher." },
    ],
  },
  {
    city: "Mexico City",
    title: "Mexico avec un petit budget",
    slug: slugify("Mexico avec un petit budget"),
    dek: "Mexico est l’une des grandes capitales les plus abordables d’Amérique, surtout pour manger.",
    body: [
      { text: "Mexico offre un excellent rapport qualité-prix, particulièrement pour la nourriture et les transports. Voici comment tenir un budget serré." },
      { heading: "Se déplacer", text: "Un trajet en métro coûte 5 pesos et en Metrobús 6 pesos, ce qui en fait l’un des transports les moins chers au monde. Les VTC sont aussi très abordables." },
      { heading: "Manger", text: "La comida corrida, un menu du jour en plusieurs plats, offre un repas complet à petit prix dans les petits restaurants. Les tacos de rue sont très économiques." },
      { heading: "Gratuit", text: "Le parc de Chapultepec, le Zócalo et les promenades de Roma sont gratuits. Le dimanche, plusieurs grandes avenues sont fermées aux voitures pour les piétons et les cyclistes." },
    ],
  },
  {
    city: "Rio de Janeiro",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Bus, taxi ou VTC : l’arrivée à Rio demande un peu de vigilance, mais reste simple.",
    body: [
      { text: "L’aéroport international de Galeão (GIG) est à une vingtaine de kilomètres de la zone sud, où se trouvent la plupart des hébergements." },
      { heading: "Le bus premium", text: "Une ligne de bus directe dessert Copacabana et Ipanema en environ 45 minutes. C’est une bonne option économique, avec des arrêts proches de nombreux hôtels." },
      { heading: "Le taxi officiel", text: "Prenez un taxi à un comptoir agréé, à l’intérieur du terminal, et évitez les chauffeurs qui vous abordent. Le tarif est fixé à l’avance." },
      { heading: "Le VTC", text: "Souvent moins cher que le taxi, il est très utilisé à Rio. Suivez les indications de l’application pour trouver votre véhicule au point de rendez-vous." },
    ],
  },
  {
    city: "Rio de Janeiro",
    title: "Rio de Janeiro en 3 jours",
    slug: slugify("Rio de Janeiro en 3 jours"),
    dek: "Trois jours pour le Christ Rédempteur, les plages et les quartiers de la colline.",
    body: [
      { text: "Rio est entourée de montagnes et de plages, et la météo conditionne les visites. Gardez de la flexibilité dans votre programme." },
      { heading: "Jour 1 : Corcovado et Santa Teresa", text: "Montez au Christ Rédempteur tôt le matin, quand la visibilité est la meilleure, à réserver à l’avance. Descendez ensuite vers Santa Teresa et ses ruelles d’artistes, puis l’escalier Selarón à Lapa." },
      { heading: "Jour 2 : les plages", text: "Copacabana et Ipanema se parcourent à pied le long de la plage. Au coucher du soleil, le Pain de Sucre ou le rocher d’Arpoador offrent les meilleures vues." },
      { heading: "Jour 3 : nature", text: "Le jardin botanique, le lac Rodrigo de Freitas ou la forêt de Tijuca, au choix. Les amateurs de randonnée apprécieront les sentiers de la forêt tropicale urbaine." },
    ],
  },
  {
    city: "Rio de Janeiro",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Samba à Lapa, bars de plage à Ipanema : Rio sait faire la fête.",
    body: [
      { text: "Rio vit tard et sort en groupe, avec une culture de la musique et des bars de rue. Chaque quartier a son style." },
      { heading: "Lapa", text: "Le quartier historique de la samba, avec ses arches et ses clubs, est très animé les vendredis et samedis soir. C’est l’endroit où sortir pour une soirée typique." },
      { heading: "Les quartiers du bord de mer", text: "Ipanema et Leblon offrent des bars et des restaurants plus élégants, tandis que Copacabana propose des kiosques de plage. Santa Teresa a des bars plus bohèmes." },
      { heading: "Rentrer", text: "Prenez toujours un VTC ou un taxi réservé pour rentrer le soir. Évitez de sortir un téléphone ou un bijou dans la rue." },
    ],
  },
  {
    city: "Rio de Janeiro",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Pão de queijo, jus de fruits frais et açaí : le petit-déjeuner carioca est tropical.",
    body: [
      { text: "À Rio, on prend son petit-déjeuner dans les padarias, boulangeries-cafés qui servent aussi des jus de fruits et des plats chauds." },
      { heading: "Les classiques", text: "Le pão de queijo, un petit pain au fromage, et le café com leite sont des incontournables. La tapioca, une crêpe de manioc garnie, est aussi très populaire." },
      { heading: "Les jus et l’açaí", text: "Les bars à jus servent des jus de fruits tropicaux frais, souvent inconnus en Europe. L’açaí, servi en bol, est très populaire près des plages." },
      { heading: "Dans une padaria", text: "Une formule avec café, pain et fromage coûte peu, et l’ambiance de quartier est garantie. Les hôtels proposent aussi de copieux buffets, plus chers." },
    ],
  },
  {
    city: "Rio de Janeiro",
    title: "Rio de Janeiro avec un petit budget",
    slug: slugify("Rio de Janeiro avec un petit budget"),
    dek: "Rio offre de nombreuses activités gratuites, mais certaines attractions ont un prix.",
    body: [
      { text: "Rio peut être économique, car ses plus grands attraits, les plages et les promenades, sont gratuits. Les excursions payantes pèsent le plus sur le budget." },
      { heading: "Se déplacer", text: "Un trajet avec la carte Riocard coûte environ 4,70 réais. Le métro dessert la zone sud et le centre, ce qui permet de limiter les VTC." },
      { heading: "Gratuit", text: "Les plages de Copacabana et d’Ipanema, le coucher de soleil d’Arpoador et l’escalier Selarón ne coûtent rien. Le tramway et le Christ Rédempteur sont payants." },
      { heading: "Manger", text: "Les restaurants au kilo, où l’on paie selon le poids de son assiette, offrent des repas complets à petit prix. Les jus et les en-cas de plage complètent facilement un repas." },
    ],
  },
  {
    city: "Buenos Aires",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "L’aéroport d’Ezeiza est loin du centre : mieux vaut choisir une solution fiable dès l’arrivée.",
    body: [
      { text: "L’aéroport d’Ezeiza (EZE) est situé à une trentaine de kilomètres du centre de Buenos Aires. Le trajet prend environ 45 minutes en dehors des heures de pointe." },
      { heading: "La navette", text: "Tienda León est la navette la plus fiable, avec un comptoir dans le terminal. Elle dépose dans le centre, et plusieurs hôtels sont desservis." },
      { heading: "Le remise", text: "Le remise est un taxi privé que l’on réserve à un comptoir officiel de l’aéroport. Il est recommandé à l’arrivée, car le tarif est fixé à l’avance." },
      { heading: "Le bus", text: "La ligne 8 est très économique, mais longue et peu pratique avec des bagages. À éviter si vous arrivez tard." },
    ],
  },
  {
    city: "Buenos Aires",
    title: "Buenos Aires en 3 jours",
    slug: slugify("Buenos Aires en 3 jours"),
    dek: "Trois jours entre le centre historique, San Telmo, La Boca et les grands parcs de Palermo.",
    body: [
      { text: "Buenos Aires est une grande ville aux quartiers contrastés. Trois jours suffisent pour en sentir l’atmosphère." },
      { heading: "Jour 1 : le centre", text: "La place de Mai, la Casa Rosada, la grande avenue du 9 Juillet et le théâtre Colón. Les visites guidées du théâtre sont très appréciées." },
      { heading: "Jour 2 : San Telmo et La Boca", text: "San Telmo et sa foire d’antiquités le dimanche, puis La Boca et ses maisons colorées de Caminito, à visiter de jour. Terminez par un spectacle de tango." },
      { heading: "Jour 3 : Recoleta et Palermo", text: "Le cimetière de la Recoleta, où repose Evita, puis les parcs de Palermo. Les boutiques de créateurs du quartier occupent bien l’après-midi." },
    ],
  },
  {
    city: "Buenos Aires",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "À Buenos Aires, on dîne tard et on sort encore plus tard, souvent jusqu’à l’aube.",
    body: [
      { text: "Les Porteños sortent tard : on dîne vers vingt-deux heures, et les clubs ne s’animent qu’après deux heures du matin." },
      { heading: "Palermo", text: "Ses bars, ses restaurants et ses terrasses en font le quartier le plus animé. Palermo Soho est plus branché, et Palermo Hollywood plus tourné vers la gastronomie." },
      { heading: "San Telmo et Puerto Madero", text: "San Telmo offre bars historiques et milongas, ces soirées de tango ouvertes à tous. Puerto Madero propose des restaurants plus chics au bord de l’eau." },
      { heading: "Rentrer", text: "Le métro s’arrête tôt le soir : prenez un taxi, un VTC ou un remise pour rentrer. Évitez de sortir un téléphone dans la rue." },
    ],
  },
  {
    city: "Buenos Aires",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Medialunas, café et dulce de leche : le petit-déjeuner argentin est sucré et convivial.",
    body: [
      { text: "Le petit-déjeuner argentin est léger et plutôt sucré. On le prend souvent au comptoir d’un café, en quelques minutes." },
      { heading: "Les medialunas", text: "Ces petits croissants, salés ou sucrés, sont accompagnés d’un café ou d’un cortado. C’est le petit-déjeuner de nombreux habitants." },
      { heading: "Les classiques", text: "Le tostado, un sandwich grillé jambon-fromage, est un incontournable. Les tartines au dulce de leche, la confiture de lait, sont un autre classique." },
      { heading: "Dans un café historique", text: "Plusieurs cafés centenaires, comme ceux de l’avenue de Mai, sont de belles adresses pour s’attarder. Ils sont plus chers que les cafés de quartier, pour le cadre." },
    ],
  },
  {
    city: "Buenos Aires",
    title: "Buenos Aires avec un petit budget",
    slug: slugify("Buenos Aires avec un petit budget"),
    dek: "Buenos Aires reste abordable, mais les prix et le change évoluent vite : renseignez-vous avant de partir.",
    body: [
      { text: "Buenos Aires a longtemps été très abordable pour les visiteurs étrangers, mais l’inflation et les changements de taux de change rendent les prix instables." },
      { heading: "Se déplacer", text: "Le métro et les bus fonctionnent avec la carte SUBE, avec des tarifs très accessibles. Le taxi reste économique à l’échelle européenne." },
      { heading: "Manger", text: "Les empanadas, les pizzas et les menus du jour offrent des repas complets à petit prix. La viande grillée, en parrilla, est excellente mais coûte plus cher." },
      { heading: "Le change", text: "Renseignez-vous sur la meilleure façon de payer avant de partir, car les écarts entre les modes de paiement peuvent être importants. Gardez un peu d’argent liquide pour les petits achats." },
    ],
  },
  {
    city: "Toronto",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Un train express relie l’aéroport Pearson au centre de Toronto en une vingtaine de minutes.",
    body: [
      { text: "L’aéroport international Pearson (YYZ) est situé à une vingtaine de kilomètres du centre. Trois solutions s’offrent à vous." },
      { heading: "L’UP Express", text: "Ce train direct rejoint Union Station en environ 25 minutes, avec des départs fréquents. C’est le plus rapide, pour un tarif plus élevé qu’un trajet de transports en commun." },
      { heading: "Le bus TTC", text: "Plus long, il est aussi beaucoup plus économique. Il rejoint une station de métro, où l’on prend ensuite la ligne vers le centre." },
      { heading: "Le taxi", text: "Comptez 60 à 70 dollars canadiens vers le centre. C’est pratique à plusieurs, mais soumis aux embouteillages." },
    ],
  },
  {
    city: "Toronto",
    title: "Toronto en 3 jours",
    slug: slugify("Toronto en 3 jours"),
    dek: "Trois jours pour la tour CN, les quartiers multiculturels et le bord du lac.",
    body: [
      { text: "Toronto est une ville étendue mais bien desservie. Trois jours suffisent pour en saisir la diversité." },
      { heading: "Jour 1 : le centre et le lac", text: "La tour CN et le front de mer, puis le ferry vers les îles de Toronto pour la vue sur la skyline. Les jours de beau temps, c’est un excellent moment." },
      { heading: "Jour 2 : quartiers multiculturels", text: "Le marché de Kensington, Chinatown et le musée d’art de l’Ontario. Queen West permet de finir la journée dans un quartier créatif." },
      { heading: "Jour 3 : Distillery et marché", text: "Le Distillery District et ses pavés, puis le marché Saint-Laurent, plus animé le samedi. Yorkville, plus élégant, convient à l’après-midi." },
    ],
  },
  {
    city: "Toronto",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Toronto offre des soirées très variées, des clubs du centre aux bars de quartier.",
    body: [
      { text: "Toronto a une vie nocturne diversifiée, reflet de sa population cosmopolite. Chaque quartier a son public." },
      { heading: "Entertainment District", text: "Les clubs et les grands établissements du centre attirent un public jeune, surtout le week-end. L’ambiance est animée, mais plus commerciale." },
      { heading: "Queen West et Kensington", text: "Queen West et la rue Ossington comptent des bars à cocktails et des salles de concert, dans une ambiance plus décontractée. Kensington Market propose des terrasses et des bars bohèmes." },
      { heading: "Rentrer", text: "Les bars servent jusqu’à deux heures du matin. Le métro s’arrête vers une heure et demie, avec un réseau de bus de nuit ensuite." },
    ],
  },
  {
    city: "Toronto",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Du sandwich au bacon de Saint-Laurent aux brunchs de quartier, Toronto aime son petit-déjeuner.",
    body: [
      { text: "Toronto est une ville de brunchs, influencée par les cuisines du monde entier. Le petit-déjeuner y est une vraie sortie." },
      { heading: "Le peameal bacon", text: "Ce sandwich au bacon pané à la semoule de maïs est une spécialité locale, servie notamment au marché Saint-Laurent. C’est un petit-déjeuner copieux et typique." },
      { heading: "Les brunchs", text: "Queen West et Kensington comptent de nombreux cafés qui servent des brunchs créatifs le week-end. Arrivez tôt pour éviter l’attente." },
      { heading: "À emporter", text: "Les cafés de chaîne, comme Tim Hortons, sont une institution canadienne et servent des petits-déjeuners rapides à petit prix. C’est une expérience locale à tester une fois." },
    ],
  },
  {
    city: "Toronto",
    title: "Toronto avec un petit budget",
    slug: slugify("Toronto avec un petit budget"),
    dek: "Toronto est chère, surtout à cause des taxes et des pourboires qui s’ajoutent aux prix affichés.",
    body: [
      { text: "Toronto est une grande ville nord-américaine, avec des prix élevés pour le logement et la restauration. Les taxes et les pourboires s’ajoutent aux prix affichés." },
      { heading: "Prix affichés", text: "Les prix s’affichent hors taxes, et une taxe d’environ 13 % s’ajoute à la caisse. Au restaurant, le pourboire usuel est de 15 à 20 %." },
      { heading: "Se déplacer", text: "Un trajet avec la carte Presto coûte environ 3,35 dollars canadiens. La carte permet des transferts gratuits pendant un temps limité." },
      { heading: "Gratuit ou pas cher", text: "Les quartiers à parcourir à pied, le front de mer et les parcs ne coûtent rien. Le marché de Kensington permet de manger à petit prix, dans une ambiance bohème." },
    ],
  },
  {
    city: "Cairo",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "L’arrivée au Caire demande un peu de préparation : trafic, tarifs à négocier et solutions fiables.",
    body: [
      { text: "L’aéroport du Caire (CAI) est situé au nord-est de la ville, et la circulation rend le trajet long. Préparez votre transfert à l’avance." },
      { heading: "Le taxi officiel", text: "Le trajet vers le centre dure 45 à 60 minutes selon le trafic. Convenez du prix avant de monter, ou choisissez un taxi à tarif fixe du comptoir officiel." },
      { heading: "Les applications", text: "Uber et Careem sont plus fiables, avec un prix connu à l’avance. Ils sont très utilisés au Caire." },
      { heading: "La navette d’hôtel", text: "C’est souvent la solution la plus simple à l’arrivée, notamment si vous arrivez tard. Demandez-la à l’avance à votre hébergement." },
    ],
  },
  {
    city: "Cairo",
    title: "Le Caire en 3 jours",
    slug: slugify("Le Caire en 3 jours"),
    dek: "Trois jours pour les pyramides, le Caire islamique et les rives du Nil.",
    body: [
      { text: "Le Caire est immense, bruyante et fascinante. Trois jours permettent d’en voir les grands sites, à condition de s’organiser." },
      { heading: "Jour 1 : Gizeh", text: "Les pyramides et le Sphinx, aux portes de la ville, sont à visiter tôt le matin, avant la chaleur. Le Grand Musée égyptien, près du site, complète la visite." },
      { heading: "Jour 2 : le Caire islamique", text: "Khan el-Khalili, le grand bazar, la rue al-Muizz et la citadelle de Saladin. Les mosquées demandent une tenue couvrante." },
      { heading: "Jour 3 : le Caire copte et le Nil", text: "Les églises du quartier copte, puis une balade en felouque sur le Nil au coucher du soleil. Le musée égyptien de la place Tahrir reste une visite classique." },
    ],
  },
  {
    city: "Cairo",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Au Caire, les soirées se passent surtout dans les cafés, au bord du Nil et dans les hôtels.",
    body: [
      { text: "La vie nocturne cairote est surtout faite de cafés, de terrasses et de longues soirées de conversation. L’alcool se trouve surtout dans les hôtels et certains restaurants." },
      { heading: "Zamalek", text: "Cette île du Nil est le quartier le plus agréable pour sortir, avec ses cafés, ses galeries et ses restaurants. Les promenades au bord de l’eau y sont agréables en soirée." },
      { heading: "Downtown", text: "Les cafés traditionnels du centre, où l’on joue au backgammon en fumant la chicha, sont des institutions. L’ambiance est plus locale et plus animée." },
      { heading: "Rentrer", text: "Utilisez Uber ou Careem pour rentrer le soir. Évitez de marcher dans les quartiers que vous ne connaissez pas." },
    ],
  },
  {
    city: "Cairo",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Fèves, falafels et pain frais : le petit-déjeuner égyptien est simple, copieux et bon marché.",
    body: [
      { text: "Le petit-déjeuner égyptien est copieux et économique. On le prend souvent dans de petits restaurants ou à des stands de rue." },
      { heading: "Le ful medames", text: "Ce plat de fèves mijotées, assaisonné d’huile, de citron et d’épices, est le petit-déjeuner national. Il se mange avec du pain plat, l’aish baladi." },
      { heading: "La ta’amiya", text: "C’est la version égyptienne du falafel, faite de fèves et non de pois chiches. Elle est servie en sandwich ou à l’assiette, avec des salades." },
      { heading: "Dans un café", text: "Les cafés de Zamalek proposent des petits-déjeuners plus variés, avec des œufs et du fromage. Ils sont plus chers, mais agréables pour s’attarder." },
    ],
  },
  {
    city: "Cairo",
    title: "Le Caire avec un petit budget",
    slug: slugify("Le Caire avec un petit budget"),
    dek: "Le Caire est abordable pour un voyageur européen, mais les entrées des grands sites sont élevées.",
    body: [
      { text: "Le Caire est l’une des capitales les plus abordables au monde pour les voyageurs étrangers. Les entrées des sites pèsent le plus dans le budget." },
      { heading: "Se déplacer", text: "Un trajet en métro coûte autour de 8 à 10 livres égyptiennes. Les VTC sont économiques, mais attention au trafic." },
      { heading: "Manger", text: "Le koshari, un plat de riz, de pâtes et de lentilles, est très économique et copieux. Les restaurants populaires servent des repas complets à petit prix." },
      { heading: "Les entrées", text: "Les tarifs d’entrée pour les étrangers sont nettement plus élevés que pour les Égyptiens. Prévoyez un budget dédié pour Gizeh et les musées, et gardez des petites coupures pour les pourboires." },
    ],
  },
  {
    city: "Doha",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "L’aéroport de Doha est l’un des plus proches du centre au monde, et le métro y arrive directement.",
    body: [
      { text: "L’aéroport international Hamad (DOH) est relié au centre par un métro moderne. Trois options simples se comparent." },
      { heading: "Le métro", text: "La ligne rouge rejoint le centre en une vingtaine de minutes, dans des rames modernes et climatisées. Le tarif est très bas." },
      { heading: "Le taxi Karwa", text: "Comptez 15 à 20 minutes de trajet, avec un tarif affiché et un supplément de prise en charge à l’aéroport. C’est confortable avec des bagages." },
      { heading: "La navette d’hôtel", text: "Elle est souvent incluse dans les hôtels haut de gamme. Demandez-la à l’avance, car elle est parfois facturée en supplément." },
    ],
  },
  {
    city: "Doha",
    title: "Doha en 3 jours",
    slug: slugify("Doha en 3 jours"),
    dek: "Trois jours pour les musées, le souk et la skyline futuriste.",
    body: [
      { text: "Doha est une ville récente, aux musées spectaculaires et à la skyline futuriste. Trois jours suffisent pour en faire le tour." },
      { heading: "Jour 1 : le souk et la Corniche", text: "Le souk Waqif est plus animé en fin de journée. La promenade de la Corniche, au bord de la baie, offre une belle vue sur les tours." },
      { heading: "Jour 2 : musées", text: "Le musée d’art islamique et le musée national du Qatar, à l’architecture inspirée de la rose des sables. Le village culturel de Katara complète la journée." },
      { heading: "Jour 3 : The Pearl et le désert", text: "La marina et les boutiques de The Pearl, ou une excursion en 4x4 dans les dunes. La meilleure saison va de novembre à mars." },
    ],
  },
  {
    city: "Doha",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "À Doha, les soirées se passent surtout dans les souks, les cafés et les restaurants.",
    body: [
      { text: "La vie nocturne de Doha est discrète. Elle s’organise autour des restaurants, des cafés et des hôtels, avec des règles à respecter." },
      { heading: "Souq Waqif", text: "Les cafés et les restaurants du souk, à la lueur des lanternes, sont l’endroit le plus animé le soir. On y fume la chicha et on y mange de la cuisine traditionnelle." },
      { heading: "The Pearl et West Bay", text: "Les restaurants de la marina et les lounges des grands hôtels offrent une ambiance plus moderne. L’alcool n’y est servi que dans certains établissements autorisés." },
      { heading: "À respecter", text: "Vêtements couvrants dans les lieux publics, ivresse interdite dans l’espace public. Informez-vous sur les règles en vigueur avant de partir." },
    ],
  },
  {
    city: "Doha",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Pains plats, thé épicé et vermicelle sucré : le petit-déjeuner qatari est une expérience à part entière.",
    body: [
      { text: "Le petit-déjeuner qatari est riche et parfumé, avec des préparations que l’on ne trouve pas en Europe." },
      { heading: "Les classiques", text: "Le balaleet, des vermicelles sucrés servis avec une omelette, est une spécialité locale. Le pain khameer et le thé karak, un thé épicé au lait, complètent le repas." },
      { heading: "Où en trouver", text: "Les restaurants traditionnels du souk Waqif servent ces plats le matin. Les cafés de Msheireb proposent des versions plus modernes." },
      { heading: "À l’hôtel", text: "Les buffets des hôtels sont complets mais chers. Pour économiser, prenez un petit-déjeuner dehors, dans un café de quartier." },
    ],
  },
  {
    city: "Doha",
    title: "Doha avec un petit budget",
    slug: slugify("Doha avec un petit budget"),
    dek: "Doha est chère pour se loger et sortir, mais ses transports et ses sites principaux restent accessibles.",
    body: [
      { text: "Doha est une destination plutôt chère, surtout pour l’hébergement et l’alcool. Quelques choix permettent de réduire la note." },
      { heading: "Se déplacer", text: "Un trajet en métro ou en bus avec la carte Karwa coûte 2 riyals, et le pass journée 6 riyals. C’est très économique par rapport aux taxis." },
      { heading: "Gratuit", text: "La Corniche, le souk Waqif et les parcs ne coûtent rien. Plusieurs sites de la ville sont aussi accessibles gratuitement ou à petit prix." },
      { heading: "Manger", text: "Les restaurants de quartier et les stands du souk offrent des repas à prix raisonnables. Les restaurants des grands hôtels sont nettement plus chers." },
    ],
  },
  {
    city: "Nairobi",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "À Nairobi, la circulation fait le trajet : anticipez et choisissez un transfert fiable.",
    body: [
      { text: "L’aéroport Jomo Kenyatta (NBO) est situé à une quinzaine de kilomètres du centre, mais les embouteillages peuvent doubler le trajet." },
      { heading: "Taxi et VTC", text: "Les applications de VTC sont très répandues et plus fiables que les taxis non réservés. Le trajet dure 30 à 45 minutes selon la circulation." },
      { heading: "La navette d’hôtel", text: "C’est la solution la plus simple pour un premier voyage, surtout si vous arrivez de nuit. Demandez-la à l’avance à votre hébergement." },
      { heading: "Les autres options", text: "Le train SGR dessert certains quartiers, pour une option économique. Il convient moins à un premier séjour, car il demande un peu de préparation." },
    ],
  },
  {
    city: "Nairobi",
    title: "Nairobi en 3 jours",
    slug: slugify("Nairobi en 3 jours"),
    dek: "Trois jours pour un safari aux portes de la ville, les girafes, les éléphanteaux et les marchés.",
    body: [
      { text: "Nairobi se distingue par un parc national à ses portes. Trois jours permettent de combiner safari et découverte de la ville." },
      { heading: "Jour 1 : le parc national", text: "Le parc de Nairobi permet de voir des lions, des girafes et des rhinocéros, avec la skyline en arrière-plan. Les sorties à l’aube sont les plus intéressantes." },
      { heading: "Jour 2 : Karen", text: "Le centre des girafes, l’orphelinat d’éléphanteaux, qui demande une réservation, et le musée Karen Blixen. Ces sites sont regroupés dans le même quartier." },
      { heading: "Jour 3 : musée et artisanat", text: "Le musée national, puis un marché d’artisanat, comme les marchés masaï organisés certains jours. Les amateurs de nature peuvent opter pour une excursion à Naivasha." },
    ],
  },
  {
    city: "Nairobi",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "À Nairobi, on sort surtout à Westlands et à Kilimani, avec des précautions pour rentrer.",
    body: [
      { text: "Nairobi a une vie nocturne animée, mais dispersée, qui demande de choisir son quartier et son moyen de transport." },
      { heading: "Westlands", text: "Ses bars, ses restaurants et ses clubs en font le quartier le plus animé. L’ambiance est moderne et internationale." },
      { heading: "Karen et Kilimani", text: "Karen propose des restaurants plus calmes, dont certains spécialisés dans les grillades, la nyama choma. Kilimani offre des bars et des cafés dans un cadre résidentiel." },
      { heading: "Rentrer", text: "Utilisez toujours un VTC ou un taxi réservé le soir, et évitez le centre-ville après la tombée de la nuit. Ne marchez pas seul dans les rues sombres." },
    ],
  },
  {
    city: "Nairobi",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Mandazi, chai et fruits tropicaux : le petit-déjeuner kényan est simple et savoureux.",
    body: [
      { text: "Le petit-déjeuner kényan est simple, avec des fruits frais et du thé. Nairobi en propose des versions locales et plus internationales." },
      { heading: "Les classiques", text: "Les mandazi, de petits beignets légèrement sucrés, se prennent avec du chai, un thé au lait épicé. Le porridge, appelé uji, est aussi un classique." },
      { heading: "Les fruits", text: "Mangue, ananas et fruit de la passion sont vendus frais sur les marchés et dans les cafés. Ils font un petit-déjeuner léger et savoureux." },
      { heading: "Dans un café", text: "Westlands et Karen comptent des cafés qui servent des petits-déjeuners complets, avec œufs et pain. Ils sont plus chers, mais très agréables." },
    ],
  },
  {
    city: "Nairobi",
    title: "Nairobi avec un petit budget",
    slug: slugify("Nairobi avec un petit budget"),
    dek: "Nairobi peut être économique, mais les safaris et les transports demandent un budget à part.",
    body: [
      { text: "Nairobi est plus abordable que de nombreuses capitales, mais les excursions et les entrées de parc pèsent sur le budget." },
      { heading: "Se déplacer", text: "Les matatus, des minibus collectifs, coûtent entre 50 et 100 shillings, mais ils sont bondés et peu pratiques pour un premier séjour. Les VTC sont une alternative sûre et bon marché." },
      { heading: "Manger", text: "Les restaurants de quartier et les stands de rue offrent des repas copieux à petit prix. La nyama choma, la viande grillée, est la spécialité locale." },
      { heading: "Les parcs", text: "L’entrée des parcs est payante pour les étrangers, avec des tarifs plus élevés que pour les résidents. Prévoyez ce poste à part." },
    ],
  },
  {
    city: "Shanghai",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Shanghai a deux aéroports et un train à sustentation magnétique : le trajet dépend de l’aéroport.",
    body: [
      { text: "Shanghai est desservie par deux aéroports : Pudong (PVG), pour la majorité des vols internationaux, et Hongqiao (SHA), plutôt domestique." },
      { heading: "Depuis Pudong", text: "Le Maglev rejoint la station Longyang Road en environ 8 minutes, puis le métro prend le relais. La ligne 2 du métro relie aussi directement le centre en environ 70 minutes, pour moins cher." },
      { heading: "Depuis Hongqiao", text: "Cet aéroport est très proche du centre et relié au métro. Si vous y arrivez, le trajet est court et simple." },
      { heading: "Le taxi", text: "Prenez un taxi à la file officielle et refusez les chauffeurs qui vous abordent. Les conducteurs utilisent le compteur, et les applications de VTC fonctionnent aussi." },
    ],
  },
  {
    city: "Shanghai",
    title: "Shanghai en 3 jours",
    slug: slugify("Shanghai en 3 jours"),
    dek: "Trois jours pour la skyline, les jardins et la concession française.",
    body: [
      { text: "Shanghai est une ville tentaculaire, mais son centre se visite bien en trois jours. Le métro dessert presque tous les sites." },
      { heading: "Jour 1 : le Bund et Pudong", text: "La promenade du Bund est plus belle à l’aube ou au crépuscule. Traversez ensuite le fleuve pour la tour de Shanghai et son observatoire." },
      { heading: "Jour 2 : la vieille ville et la concession", text: "Le jardin Yuyuan et son bazar animé, à visiter tôt, puis la concession française, avec ses avenues arborées. Les cafés y sont nombreux." },
      { heading: "Jour 3 : Xintiandi ou une excursion", text: "Xintiandi et ses ruelles rénovées, ou une excursion en train à grande vitesse vers Suzhou ou Hangzhou. Les deux sont à moins d’une heure." },
    ],
  },
  {
    city: "Shanghai",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Shanghai offre des soirées variées, des bars sur les toits du Bund aux caves de la concession française.",
    body: [
      { text: "Shanghai est la capitale chinoise de la fête, avec une scène de bars et de clubs très riche." },
      { heading: "Le Bund", text: "Les bars sur les toits offrent une vue exceptionnelle sur la skyline de Pudong. Les prix y sont élevés, mais un verre suffit pour profiter du panorama." },
      { heading: "La concession française et Xintiandi", text: "Les bars à cocktails et les restaurants de la concession française offrent une ambiance plus décontractée. Xintiandi est plus élégant et plus cher." },
      { heading: "Rentrer", text: "Le métro ferme vers vingt-trois heures. Utilisez un taxi ou une application de VTC pour rentrer, et gardez l’adresse de votre hôtel en chinois." },
    ],
  },
  {
    city: "Shanghai",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Lait de soja, beignets et brioches : le petit-déjeuner shanghaïen est une institution de rue.",
    body: [
      { text: "À Shanghai, on prend souvent son petit-déjeuner dans la rue, auprès de petits stands qui servent à toute heure." },
      { heading: "Les classiques", text: "Le lait de soja chaud accompagné d’un youtiao, un beignet allongé, est le petit-déjeuner traditionnel. Le jianbing, une crêpe garnie, est aussi très populaire." },
      { heading: "Les raviolis", text: "Les xiaolongbao, raviolis à la soupe, et les shengjian bao, brioches grillées à la viande, sont des spécialités de Shanghai. On les trouve dans de petits restaurants dès le matin." },
      { heading: "À savoir", text: "Les stands de rue acceptent surtout le paiement mobile chinois. Gardez un peu d’espèces, ou vérifiez que votre carte est liée à une application de paiement." },
    ],
  },
  {
    city: "Shanghai",
    title: "Shanghai avec un petit budget",
    slug: slugify("Shanghai avec un petit budget"),
    dek: "Shanghai est plus chère que les autres villes chinoises, mais se visite bien à petit prix.",
    body: [
      { text: "Shanghai est la ville la plus chère de Chine continentale, mais reste abordable pour un voyageur européen. Quelques choix suffisent à tenir un budget serré." },
      { heading: "Se déplacer", text: "Un trajet en métro coûte entre 3 et 9 yuans selon la distance, ce qui est très économique. Le Maglev est plus cher, pour un gain de temps limité." },
      { heading: "Manger", text: "Les restaurants populaires et les stands de rue offrent des repas complets à petit prix. Les restaurants du Bund et de Xintiandi sont nettement plus chers." },
      { heading: "Internet et paiement", text: "Beaucoup de services occidentaux sont bloqués en Chine : une eSIM de voyage, qui passe par l’étranger, évite de dépendre du Wi-Fi. Configurez le paiement mobile avant d’arriver." },
    ],
  },
  {
    city: "Mumbai",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "À Mumbai, le trajet est long et la circulation dense : anticipez et choisissez un transfert fiable.",
    body: [
      { text: "L’aéroport international de Mumbai (BOM) est situé au nord de la ville, et il faut compter plus d’une heure pour rejoindre le sud, selon la circulation." },
      { heading: "Le taxi prépayé", text: "Achetez votre ticket au comptoir officiel de l’aéroport, avant de sortir. Le trajet vers le centre dure 45 à 60 minutes, et le prix est fixé à l’avance." },
      { heading: "Les VTC", text: "Uber et Ola sont souvent plus simples et traçables. Les points de prise en charge sont indiqués dans l’application." },
      { heading: "Le métro", text: "Il dessert certains quartiers, mais il est moins adapté à un premier trajet avec bagages. Évitez aussi les trains de banlieue avec des valises." },
    ],
  },
  {
    city: "Mumbai",
    title: "Mumbai en 3 jours",
    slug: slugify("Mumbai en 3 jours"),
    dek: "Trois jours pour le sud colonial, la corniche et les quartiers branchés du nord.",
    body: [
      { text: "Mumbai est une mégapole, dont le sud et le nord offrent des visages différents. Trois jours permettent d’en voir l’essentiel." },
      { heading: "Jour 1 : Colaba et Kala Ghoda", text: "La porte de l’Inde, l’hôtel Taj Mahal Palace et le marché de Colaba, puis la gare Chhatrapati Shivaji, classée à l’Unesco. L’excursion en bateau vers les grottes d’Elephanta part de la porte de l’Inde." },
      { heading: "Jour 2 : Marine Drive", text: "La corniche, au coucher du soleil, puis la plage de Chowpatty et sa cuisine de rue. Le Haji Ali, accessible à marée basse, est une visite très particulière." },
      { heading: "Jour 3 : Bandra", text: "Le quartier branché de Bandra, avec son front de mer, ses cafés et ses fresques murales. Un trajet en train de banlieue, hors des heures de pointe, est une expérience locale." },
    ],
  },
  {
    city: "Mumbai",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Mumbai sort surtout à Bandra et dans le sud, avec quelques règles locales à connaître.",
    body: [
      { text: "Mumbai a une vie nocturne animée, avec des bars, des clubs et des restaurants ouverts tard." },
      { heading: "Bandra", text: "Le quartier le plus branché de la ville, avec des bars à cocktails, des restaurants et des salles de concert. L’ambiance est plus décontractée et plus jeune." },
      { heading: "Colaba et Lower Parel", text: "Colaba offre des cafés historiques et des bars plus traditionnels. Lower Parel, plus moderne, abrite des brasseries et des clubs." },
      { heading: "À savoir", text: "Certains jours, comme les jours d’élection, la vente d’alcool est interdite. Utilisez un VTC pour rentrer, car les trains s’arrêtent vers minuit." },
    ],
  },
  {
    city: "Mumbai",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Poha, vada pav et chai : le petit-déjeuner de Mumbai est généreux et très économique.",
    body: [
      { text: "Le petit-déjeuner de Mumbai est une institution de rue, avec des plats rapides, chauds et économiques." },
      { heading: "Les classiques", text: "Le poha, du riz aplati épicé, et l’upma sont des petits-déjeuners légers. Le vada pav, un beignet de pommes de terre dans un petit pain, est le plus célèbre en-cas de la ville." },
      { heading: "Les cafés iraniens", text: "Ces cafés historiques servent du bun maska, du pain au beurre, avec un thé chaud. Ils font partie du patrimoine de Mumbai." },
      { heading: "Le chai", text: "Le thé au lait épicé se boit partout, dans de petits verres, pour quelques roupies. C’est le meilleur moyen de commencer la journée comme un habitant." },
    ],
  },
  {
    city: "Mumbai",
    title: "Mumbai avec un petit budget",
    slug: slugify("Mumbai avec un petit budget"),
    dek: "Mumbai est très abordable pour un voyageur européen, surtout pour manger et se déplacer.",
    body: [
      { text: "Mumbai est une destination économique, surtout pour la nourriture et les transports. Le logement reste le poste le plus lourd." },
      { heading: "Se déplacer", text: "Un trajet en train de banlieue coûte entre 10 et 30 roupies. Les taxis noir et jaune fonctionnent au compteur et sont bon marché." },
      { heading: "Manger", text: "Un vada pav coûte quelques dizaines de roupies, et un repas complet dans un restaurant populaire reste très abordable. Buvez de l’eau en bouteille et évitez les glaçons." },
      { heading: "Les entrées", text: "Les tarifs d’entrée dans les monuments sont plus élevés pour les étrangers. Prévoyez un petit budget pour les visites, et pour les pourboires." },
    ],
  },
  {
    city: "Ubud",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Ubud est à plus d’une heure de l’aéroport de Denpasar : choisissez votre transfert à l’avance.",
    body: [
      { text: "L’aéroport de Denpasar (DPS) est situé au sud de Bali, à 60 à 90 minutes d’Ubud selon la circulation. Il n’y a pas de transport public." },
      { heading: "Le chauffeur privé", text: "Réservé à l’avance, il vous attend à l’arrivée et vous dépose à votre hébergement. C’est la solution la plus simple, surtout après un long vol." },
      { heading: "Le taxi", text: "Prenez un taxi Bluebird, avec compteur officiel, et évitez les taxis non agréés. Les applications de VTC sont souvent limitées à Bali, avec des restrictions locales." },
      { heading: "La navette partagée", text: "Elle est économique, mais plus lente, avec plusieurs arrêts. Elle convient si vous n’êtes pas pressé." },
    ],
  },
  {
    city: "Ubud",
    title: "Ubud en 3 jours",
    slug: slugify("Ubud en 3 jours"),
    dek: "Trois jours pour les rizières, les temples et un lever de soleil sur un volcan.",
    body: [
      { text: "Ubud est le cœur culturel de Bali, entouré de rizières et de temples. Trois jours permettent de combiner culture, nature et détente." },
      { heading: "Jour 1 : le centre d’Ubud", text: "Le palais royal, le marché et la forêt des singes sacrés, où il faut surveiller ses affaires. La promenade de la crête de Campuhan est agréable à la fin de la journée." },
      { heading: "Jour 2 : rizières et temples", text: "Les rizières en terrasses de Tegalalang, à visiter tôt, puis le temple Tirta Empul et sa source sacrée. Respectez la tenue demandée dans les temples." },
      { heading: "Jour 3 : volcan ou détente", text: "La randonnée au lever du soleil sur le mont Batur demande un départ très tôt. Sinon, offrez-vous un cours de cuisine, de yoga ou une cascade." },
    ],
  },
  {
    city: "Ubud",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Ubud se couche tôt, mais la côte offre des soirées plus animées : choisissez selon l’ambiance.",
    body: [
      { text: "La vie nocturne d’Ubud est calme et culturelle. Pour faire la fête, il faut plutôt viser la côte." },
      { heading: "À Ubud", text: "Les spectacles de danse balinaise, souvent donnés au palais royal, sont le meilleur moyen de passer la soirée. Quelques bars et cafés restent ouverts tard dans le centre." },
      { heading: "Canggu et Seminyak", text: "Canggu est l’endroit des surfeurs et des bars décontractés. Seminyak est plus chic, avec des beach clubs au coucher du soleil." },
      { heading: "Prudence", text: "Méfiez-vous des cocktails à base d’arak de provenance douteuse, qui peuvent être dangereux. Le soir, évitez de rentrer à scooter si vous avez bu." },
    ],
  },
  {
    city: "Ubud",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Du bubur ayam des warungs aux smoothie bowls des cafés, Ubud offre de belles tables matinales.",
    body: [
      { text: "Le petit-déjeuner à Ubud est varié, entre cuisine balinaise traditionnelle et cafés tournés vers le bien-être." },
      { heading: "Les warungs", text: "Ces petits restaurants familiaux servent du bubur ayam, un porridge de riz au poulet, ou du nasi campur. C’est la façon la plus économique de manger local." },
      { heading: "Les cafés", text: "Les smoothie bowls, les jus pressés et les pancakes sont très populaires auprès des voyageurs. Les cafés d’Ubud sont réputés pour leur cadre au milieu des rizières." },
      { heading: "Le café balinais", text: "Le café local, servi avec un fond de marc, est fort et parfumé. Goûtez-le dans un warung, plutôt que dans un café touristique." },
    ],
  },
  {
    city: "Ubud",
    title: "Ubud avec un petit budget",
    slug: slugify("Ubud avec un petit budget"),
    dek: "Ubud est abordable, mais le scooter et les excursions demandent d’organiser son budget.",
    body: [
      { text: "Ubud est l’une des destinations les plus abordables de Bali. Les hébergements simples et les warungs permettent de tenir un budget serré." },
      { heading: "Se déplacer", text: "Un scooter se loue entre 70 000 et 100 000 roupies par jour, mais le permis international est obligatoire et l’assurance parfois refusée sans lui. Les chauffeurs à la journée sont une alternative plus sûre." },
      { heading: "Manger", text: "Les warungs servent des repas complets à petit prix, bien moins que les restaurants des cafés touristiques. Les jus et les en-cas sont aussi économiques." },
      { heading: "Les entrées", text: "Les temples et les sites naturels demandent généralement une petite entrée. Prévoyez des petites coupures pour les dons et les droits d’accès." },
    ],
  },
  {
    city: "San Francisco",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Le BART relie l’aéroport de San Francisco au centre en une demi-heure, sans changement.",
    body: [
      { text: "L’aéroport international de San Francisco (SFO) est situé au sud de la ville, et plusieurs solutions s’offrent à vous." },
      { heading: "Le BART", text: "Le métro rejoint le centre en environ 30 minutes, sans changement, avec des trains fréquents. C’est la solution la plus simple et la plus économique." },
      { heading: "La navette", text: "Les shuttles partagés déposent à la porte de l’hôtel. C’est pratique avec des bagages, mais plus lent que le métro." },
      { heading: "Le taxi ou le VTC", text: "Comptez 40 à 60 dollars vers le centre, selon le trafic. Il est utile pour les arrivées tardives, quand le BART ne circule plus." },
    ],
  },
  {
    city: "San Francisco",
    title: "San Francisco en 3 jours",
    slug: slugify("San Francisco en 3 jours"),
    dek: "Trois jours pour le Golden Gate, les fresques de Mission et les cable cars.",
    body: [
      { text: "San Francisco est compacte mais vallonnée, et le brouillard peut cacher la vue. Gardez de la flexibilité dans votre programme." },
      { heading: "Jour 1 : le port", text: "Fisherman’s Wharf et ses otaries, puis Alcatraz, dont les billets se réservent très en avance. Un trajet en cable car vaut un détour." },
      { heading: "Jour 2 : Golden Gate et Haight", text: "La traversée à pied ou à vélo du Golden Gate Bridge, puis le parc du Presidio. L’après-midi, Haight-Ashbury et ses boutiques vintage." },
      { heading: "Jour 3 : Mission et North Beach", text: "Les fresques murales de Mission et le parc Dolores, puis le quartier italien de North Beach et sa librairie City Lights. Pour une excursion, Muir Woods demande une réservation." },
    ],
  },
  {
    city: "San Francisco",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "San Francisco offre des soirées variées, mais mieux vaut choisir ses rues le soir.",
    body: [
      { text: "San Francisco a une vie nocturne variée, répartie entre plusieurs quartiers, avec une ambiance plus décontractée que dans d’autres grandes villes américaines." },
      { heading: "Mission et North Beach", text: "Mission offre des bars et des restaurants animés, dans un quartier jeune. North Beach propose des bars plus traditionnels, dans une ambiance italienne." },
      { heading: "Le Castro et SoMa", text: "Le Castro est le quartier historique de la communauté gay, très animé le soir. SoMa abrite des clubs plus grands." },
      { heading: "Prudence", text: "Certaines rues du centre, notamment dans le Tenderloin, sont déconseillées le soir. Utilisez un VTC pour rentrer, et ne laissez rien de visible dans une voiture." },
    ],
  },
  {
    city: "San Francisco",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Pain au levain, burritos et marché du Ferry Building : le petit-déjeuner de San Francisco est copieux.",
    body: [
      { text: "San Francisco est une ville de gastronomes, et son petit-déjeuner reflète sa diversité." },
      { heading: "Le pain au levain", text: "La ville est célèbre pour son sourdough, qu’on trouve dans de nombreuses boulangeries. Une tartine avec un café fait un petit-déjeuner simple et bon." },
      { heading: "Le burrito", text: "Le quartier de Mission est considéré comme le berceau du burrito. Une version du matin, garnie d’œufs, est copieuse et bon marché." },
      { heading: "Le marché", text: "Le marché du Ferry Building, le samedi, réunit des producteurs locaux et des stands de café et de viennoiseries. C’est un bon endroit pour déjeuner au bord de l’eau." },
    ],
  },
  {
    city: "San Francisco",
    title: "San Francisco avec un petit budget",
    slug: slugify("San Francisco avec un petit budget"),
    dek: "San Francisco est chère, mais ses plus beaux sites, parcs, ponts et fresques, sont gratuits.",
    body: [
      { text: "San Francisco est l’une des villes les plus chères des États-Unis, surtout pour dormir. Les dépenses de visite se réduisent bien." },
      { heading: "Se déplacer", text: "Un trajet Muni avec la carte Clipper coûte 2,50 dollars, et le cable car est plus cher. Renoncer à la voiture de location évite les frais de parking et les vols dans les véhicules." },
      { heading: "Gratuit", text: "Le Golden Gate, les fresques de Mission, le parc Dolores et les sentiers de Lands End ne coûtent rien. Les quartiers se parcourent à pied, malgré les collines." },
      { heading: "Manger", text: "Les burritos et les repas à emporter de Mission sont économiques. Au restaurant, les taxes et le pourboire s’ajoutent à l’addition." },
    ],
  },
  {
    city: "Chicago",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Le métro aérien relie les deux aéroports de Chicago au centre, de jour comme de nuit.",
    body: [
      { text: "Chicago est desservie par deux aéroports, O’Hare (ORD) et Midway (MDW), tous deux reliés au centre par le métro." },
      { heading: "Depuis O’Hare", text: "La ligne bleue rejoint le centre en environ 45 minutes, 24 heures sur 24. C’est la solution la plus simple, sans changement." },
      { heading: "Depuis Midway", text: "La ligne orange met environ 30 minutes pour atteindre le Loop. Le trajet est court, avec des trains fréquents." },
      { heading: "Le taxi ou le VTC", text: "Comptez 35 à 50 dollars selon l’aéroport et le trafic. Il est utile avec des bagages, mais les embouteillages peuvent allonger le trajet." },
    ],
  },
  {
    city: "Chicago",
    title: "Chicago en 3 jours",
    slug: slugify("Chicago en 3 jours"),
    dek: "Trois jours pour l’architecture, le lac et les quartiers créatifs.",
    body: [
      { text: "Chicago est la ville de l’architecture moderne, et se visite très bien en trois jours. Le métro dessert presque tous les sites." },
      { heading: "Jour 1 : le Loop", text: "Millennium Park et sa sculpture Cloud Gate, appelée le Bean, puis l’Art Institute. Une croisière d’architecture sur la rivière Chicago est un incontournable." },
      { heading: "Jour 2 : le lac", text: "La promenade du lac Michigan, Navy Pier et l’observatoire de la Willis Tower. Les jours de beau temps, la piste cyclable du bord du lac est très agréable." },
      { heading: "Jour 3 : les quartiers", text: "Wicker Park pour ses boutiques et ses bars, ou Lincoln Park et son zoo gratuit. Goûtez à la pizza deep-dish, la spécialité locale." },
    ],
  },
  {
    city: "Chicago",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Blues, comédie et bars de quartier : Chicago a une vie nocturne riche et variée.",
    body: [
      { text: "Chicago est la capitale du blues et de l’improvisation. La vie nocturne y est variée, et les quartiers très distincts." },
      { heading: "River North et le Loop", text: "Les clubs et les bars du centre attirent un public jeune. L’ambiance est animée, mais plus commerciale." },
      { heading: "Wicker Park et Lincoln Park", text: "Wicker Park offre des bars et des salles de concert indépendantes. Lincoln Park propose des bars plus décontractés, près du parc." },
      { heading: "Blues et comédie", text: "Plusieurs clubs de blues et de comédie, dont le Second City, sont des institutions. Réservez à l’avance le week-end, et prévoyez de rentrer en VTC." },
    ],
  },
  {
    city: "Chicago",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Diners, brunchs de quartier et bagels : le petit-déjeuner de Chicago est généreux.",
    body: [
      { text: "Chicago est une ville de diners, ces restaurants américains où l’on sert le petit-déjeuner toute la journée." },
      { heading: "Le diner", text: "Pancakes, œufs et pommes de terre sautées sont des classiques, servis dans de nombreux restaurants de quartier. Beaucoup sont tenus par des familles d’origine grecque." },
      { heading: "Les brunchs", text: "Le West Loop et Wicker Park comptent de nombreux restaurants de brunch, très fréquentés le week-end. Arrivez tôt pour éviter l’attente." },
      { heading: "À emporter", text: "Les cafés et les boulangeries du centre proposent des formules rapides. C’est la solution idéale pour une journée de visite." },
    ],
  },
  {
    city: "Chicago",
    title: "Chicago avec un petit budget",
    slug: slugify("Chicago avec un petit budget"),
    dek: "Chicago est moins chère que New York, mais les taxes et les pourboires pèsent sur le budget.",
    body: [
      { text: "Chicago est plus abordable que New York ou San Francisco, mais les taxes y sont élevées. Quelques choix permettent de contenir le budget." },
      { heading: "Se déplacer", text: "Un trajet en métro avec la carte Ventra coûte 2,50 dollars. Un pass pour une journée ou plus est plus économique si vous vous déplacez beaucoup." },
      { heading: "Gratuit", text: "Le bord du lac, Millennium Park et le zoo de Lincoln Park sont gratuits. L’Art Institute est payant pour les visiteurs, avec des jours à tarif réduit." },
      { heading: "Manger", text: "Les hot-dogs à la mode de Chicago et les parts de pizza coûtent peu. Au restaurant, les taxes élevées et le pourboire s’ajoutent à l’addition." },
    ],
  },
  {
    city: "Miami",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Le métro dessert le centre de Miami depuis l’aéroport, mais South Beach demande un autre moyen.",
    body: [
      { text: "L’aéroport international de Miami (MIA) est proche du centre, mais loin de South Beach. Le moyen de transport dépend de votre destination." },
      { heading: "Le Metrorail", text: "La ligne orange rejoint le centre-ville en environ 25 minutes. C’est économique, mais il faut ensuite prendre un bus ou un VTC pour la plage." },
      { heading: "Les navettes", text: "Les shuttles partagés déposent directement à l’hôtel. C’est pratique avec des bagages, mais le trajet peut être plus long." },
      { heading: "Le taxi ou le VTC", text: "Comptez 25 à 35 dollars jusqu’à South Beach. C’est la solution la plus simple si vous logez sur la plage." },
    ],
  },
  {
    city: "Miami",
    title: "Miami en 3 jours",
    slug: slugify("Miami en 3 jours"),
    dek: "Trois jours pour l’Art déco, les fresques de Wynwood et la culture cubaine.",
    body: [
      { text: "Miami est une ville étalée, aux quartiers très différents. Trois jours permettent de varier les ambiances." },
      { heading: "Jour 1 : South Beach", text: "Les façades Art déco d’Ocean Drive, la plage et Lincoln Road. Une visite guidée du quartier Art déco permet d’en comprendre l’histoire." },
      { heading: "Jour 2 : Wynwood", text: "Les fresques monumentales du quartier de Wynwood, puis le Design District et ses boutiques. Les galeries et cafés du quartier occupent l’après-midi." },
      { heading: "Jour 3 : Little Havana", text: "La rue Calle Ocho, ses cafés cubains et ses orchestres. En option, une excursion aux Everglades, à environ une heure de route." },
    ],
  },
  {
    city: "Miami",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Clubs de South Beach, bars de Wynwood et rooftops de Brickell : Miami sort tard.",
    body: [
      { text: "Miami est connue pour ses nuits très longues. La vie nocturne s’y répartit entre plusieurs quartiers aux ambiances différentes." },
      { heading: "South Beach", text: "Les clubs d’Ocean Drive et de Collins Avenue attirent une foule internationale. Beaucoup appliquent un code vestimentaire et ne s’animent qu’après minuit." },
      { heading: "Wynwood et Brickell", text: "Wynwood propose des bars décontractés dans un décor de fresques. Brickell est plus chic, avec ses bars sur les toits." },
      { heading: "Little Havana", text: "Le vendredi, des soirées de musique et d’art animent la rue Calle Ocho. L’ambiance y est plus populaire et plus locale." },
    ],
  },
  {
    city: "Miami",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Café cubain, pastelitos et jus frais : le petit-déjeuner de Miami a un accent latino.",
    body: [
      { text: "Miami est marquée par ses influences cubaines et latino-américaines, qui se retrouvent dans le petit-déjeuner." },
      { heading: "Le café cubain", text: "Le cafecito, un petit café fort et sucré, se boit debout à une fenêtre de rue. C’est une institution locale, accompagnée d’un pastelito, une pâtisserie fourrée." },
      { heading: "La tostada", text: "Du pain cubain grillé et beurré, trempé dans le café au lait. C’est simple, économique et typique." },
      { heading: "À South Beach", text: "Les brunchs d’Ocean Drive sont chers pour le cadre. Éloignez-vous de quelques rues pour des prix plus raisonnables." },
    ],
  },
  {
    city: "Miami",
    title: "Miami avec un petit budget",
    slug: slugify("Miami avec un petit budget"),
    dek: "Miami est chère, avec des frais cachés comme les resort fees, mais ses plages sont gratuites.",
    body: [
      { text: "Miami est une destination plutôt chère, surtout en haute saison, de décembre à avril. Plusieurs frais s’ajoutent au prix affiché." },
      { heading: "Se déplacer", text: "Un trajet en Metrorail coûte 2,25 dollars, et le Metromover, qui dessert le centre, est gratuit. Plusieurs lignes locales de trolley sont aussi gratuites." },
      { heading: "Gratuit", text: "Les plages et les fresques extérieures de Wynwood ne coûtent rien. Les repas cubains, comme un sandwich, sont très économiques." },
      { heading: "Les frais cachés", text: "De nombreux hôtels ajoutent des resort fees, des frais obligatoires, au prix de la chambre. Vérifiez le prix total avant de réserver, parking compris." },
    ],
  },
  {
    city: "Munich",
    title: "Comment rejoindre le centre depuis l’aéroport",
    slug: slugify("Comment rejoindre le centre depuis l’aéroport"),
    dek: "Train de banlieue ou bus express : l’aéroport de Munich est à une quarantaine de minutes du centre.",
    body: [
      { text: "L’aéroport de Munich (MUC) est situé au nord-est de la ville, à une quarantaine de kilomètres du centre." },
      { heading: "Le S-Bahn", text: "Les lignes S1 et S8 rejoignent le centre en environ 45 minutes, avec des trains fréquents. Un billet journée pour la zone aéroport est souvent plus avantageux qu’un trajet seul." },
      { heading: "Le bus express", text: "Le bus Lufthansa Express rejoint la gare centrale sans arrêt. C’est une alternative directe au train." },
      { heading: "Le taxi", text: "Comptez 60 à 70 euros vers le centre. C’est surtout utile à plusieurs ou avec des bagages lourds." },
    ],
  },
  {
    city: "Munich",
    title: "Munich en 3 jours",
    slug: slugify("Munich en 3 jours"),
    dek: "Trois jours pour le centre historique, les musées et les jardins de la ville.",
    body: [
      { text: "Munich est une ville agréable, à taille humaine, dont le centre se parcourt à pied. Trois jours suffisent pour en faire le tour." },
      { heading: "Jour 1 : le centre", text: "La place Marienplatz et son carillon, le marché de Viktualienmarkt, la Frauenkirche et la Résidence. Prévoyez une pause dans une brasserie traditionnelle." },
      { heading: "Jour 2 : parc et musées", text: "L’Englischer Garten, avec ses surfeurs sur la rivière Eisbach, puis les grands musées d’art du quartier de Maxvorstadt. Une brasserie en plein air clôt bien la journée." },
      { heading: "Jour 3 : château ou excursion", text: "Le château de Nymphenburg, ou une excursion vers le château de Neuschwanstein, à environ deux heures. Pendant l’Oktoberfest, réservez très en avance." },
    ],
  },
  {
    city: "Munich",
    title: "Les quartiers pour sortir",
    slug: slugify("Les quartiers pour sortir"),
    dek: "Brasseries historiques, biergartens et bars du Glockenbach : Munich sort de façon décontractée.",
    body: [
      { text: "Munich est la capitale de la bière, mais sa vie nocturne est plus variée que ses brasseries historiques. Les quartiers ont chacun leur style." },
      { heading: "Brasseries et biergartens", text: "Le Hofbräuhaus est célèbre, mais très touristique. Les biergartens traditionnels, où l’on peut parfois apporter son pique-nique, sont plus authentiques et fermés tôt, vers 23 heures." },
      { heading: "Glockenbach et Schwabing", text: "Le Glockenbachviertel, ouvert et animé, concentre bars et restaurants. Schwabing, plus étudiant, offre des cafés et des bars plus décontractés." },
      { heading: "Rentrer", text: "Le week-end, des lignes de nuit complètent le métro. Vérifiez les horaires avant de partir." },
    ],
  },
  {
    city: "Munich",
    title: "Où prendre un bon petit-déjeuner",
    slug: slugify("Où prendre un bon petit-déjeuner"),
    dek: "Saucisses blanches, bretzels et bière de blé : le petit-déjeuner munichois est une tradition à part.",
    body: [
      { text: "Le petit-déjeuner bavarois est copieux et typique, avec des spécialités que l’on ne trouve qu’à Munich." },
      { heading: "Le Weißwurstfrühstück", text: "Les saucisses blanches de veau, servies avec un bretzel, de la moutarde douce et souvent une bière de blé, se mangent traditionnellement avant midi. C’est une institution locale." },
      { heading: "À la boulangerie", text: "Les boulangeries vendent des bretzels et des petits pains à la viande, à petit prix. C’est la solution la plus économique." },
      { heading: "Les cafés", text: "Les cafés du Glockenbachviertel et de Schwabing proposent des petits-déjeuners plus modernes, avec du pain frais. Le week-end, réservez ou arrivez tôt." },
    ],
  },
  {
    city: "Munich",
    title: "Munich avec un petit budget",
    slug: slugify("Munich avec un petit budget"),
    dek: "Munich est l’une des villes les plus chères d’Allemagne, mais plusieurs astuces permettent d’économiser.",
    body: [
      { text: "Munich est plus chère que Berlin, surtout pour dormir, et les prix explosent pendant l’Oktoberfest. Quelques choix permettent de limiter la note." },
      { heading: "Se déplacer", text: "Un ticket unique coûte 3,90 € et le pass journée 8,80 €. Pour un séjour de plusieurs jours, un pass de plusieurs jours est plus avantageux." },
      { heading: "Manger et boire", text: "Une bière dans un biergarten coûte nettement plus cher qu’en Allemagne du Nord. Les boulangeries et les marchés permettent de composer des repas à petit prix." },
      { heading: "Gratuit ou pas cher", text: "L’Englischer Garten et le marché de Viktualienmarkt sont gratuits. Les musées de l’État de Bavière ne coûtent qu’un euro le dimanche." },
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
