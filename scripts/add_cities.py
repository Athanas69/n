import json

path = "src/data/mondo-atlas.json"
with open(path) as f:
    d = json.load(f)

def img(pid, w=900):
    return f"https://images.unsplash.com/photo-{pid}?auto=format&fit=crop&w={w}&q=86"

def hero(pid):
    return f"https://images.unsplash.com/photo-{pid}?auto=format&fit=crop&w=1800&q=90"

def articles(city):
    return [
        f"Quel quartier choisir à {city} ?",
        f"Comment rejoindre le centre depuis l’aéroport",
        f"{city} en 3 jours",
        "Les quartiers pour sortir",
        "Où prendre un bon petit-déjeuner",
        f"{city} avec un petit budget",
    ]

def make_hotels(neighborhoods):
    n = (neighborhoods * 3)[:3]
    descs = {
        "Budget": "Prix minimum sans sacrifier l’emplacement.",
        "Confort": "Le meilleur équilibre entre confort, quartier et budget.",
        "Premium": "Confort prioritaire, service et chambre plus soignés.",
    }
    plan = [
        ("Budget", ["House", "Stay", "Hotel"], [55, 72, 89], [8.0, 8.2, 8.4]),
        ("Confort", ["Suites", "Rooms", "Lodge"], [171, 188, 205], [8.6, 8.8, 9.0]),
        ("Premium", ["Residence", "Hotel", "Suites"], [272, 289, 306], [8.0, 8.2, 8.4]),
    ]
    hotels = []
    for tier, suffixes, prices, scores in plan:
        for i in range(3):
            hotels.append({
                "name": f"{n[i]} {suffixes[i]}",
                "neighborhood": n[i],
                "tier": tier,
                "price": prices[i],
                "score": scores[i],
                "desc": descs[tier],
            })
    return hotels

CITIES = {}

CITIES["London"] = {
    "country": "Royaume-Uni", "currency": "GBP", "best": "mars–mai · sept.–oct.",
    "airport": "LHR / LGW / STN", "transport": "Tube · Bus · Overground",
    "transitTicket": "Oyster/contactless : £2,80–£6,70 selon zone · Plafond journée zones 1-2 : £8,50",
    "esim": "Fortement recommandée hors UE",
    "intro": "Londres change de visage à chaque quartier : marchés couverts, ruelles georgiennes ou tours de la City.",
    "hero": hero("1547254002-e65e0179fe9f"),
    "neighborhoods": [
        ["Camden", "Marché · musique · alternatif", "Marché couvert, concerts et ambiance alternative au bord du canal.", img("1563792169197-822d0655ef3d")],
        ["Shoreditch", "Street art · branché · nightlife", "Fresques murales, bars à cocktails et scène créative de l’East End.", img("1619684567576-b44c4f643d96")],
        ["Notting Hill", "Maisons pastel · marché · romantique", "Façades colorées et le célèbre marché de Portobello Road.", img("1489257251256-036cd1ac7606")],
        ["Soho", "Nightlife · théâtre · restaurants", "Le cœur du West End : théâtres, bars et restaurants jusqu’à tard.", img("1579194997976-9d1a0a5c7be7")],
        ["Greenwich", "Histoire · parc · vue", "Méridien, observatoire royal et vue panoramique sur la City.", img("1706781742110-9113dc9a39ad")],
        ["Kensington", "Musées · chic · résidentiel", "Natural History Museum, V&A et rues résidentielles huppées.", img("1634336122053-46215a9f604b")],
    ],
    "airportRoutes": [
        ["Heathrow", "Elizabeth line / Piccadilly", "≈ 45–60 min vers le centre selon la ligne."],
        ["Gatwick", "Gatwick Express", "≈ 30 min vers London Victoria."],
        ["Les deux", "Taxi / Uber", "Trajet plus cher mais direct, utile avec bagages."],
    ],
}

CITIES["Barcelona"] = {
    "country": "Espagne", "currency": "EUR", "best": "mai–juin · sept.–oct.",
    "airport": "BCN", "transport": "Metro · Bus · Tram",
    "transitTicket": "T-casual (10 trajets) : 12,15 € · Ticket unique : 2,55 €",
    "esim": "Optionnelle pour voyageurs UE",
    "intro": "Entre mer et montagne, Barcelone alterne ruelles gothiques, avenues modernistes et plages urbaines.",
    "hero": hero("1593368858664-a7fe556ab936"),
    "neighborhoods": [
        ["Gothic Quarter", "Historique · ruelles · animé", "Le cœur médiéval de Barcelone, ruelles étroites et places cachées.", img("1703885195425-ec7ebec8746f")],
        ["Eixample", "Modernisme · Gaudí · élégant", "Grille urbaine du XIXe siècle et la Sagrada Família.", img("1728249960363-13079cc2c6f6")],
        ["Barceloneta", "Plage · fruits de mer · animé", "Le quartier balnéaire, entre plage et restaurants de poisson.", img("1590758351375-6a95b47f98d3")],
        ["Gràcia", "Bohème · places · local", "Ambiance villageoise, petites places et bars sans touristes.", img("1566035989478-a27ecc1d53df")],
        ["El Born", "Design · galeries · médiéval", "Boutiques indépendantes dans un dédale de rues médiévales.", img("1722612129910-ec3eefabc836")],
        ["Montjuïc", "Vue · parcs · culture", "Colline verdoyante avec musées, jardins et vue sur le port.", img("1583422409516-2895a77efded")],
    ],
    "airportRoutes": [
        ["BCN", "Aerobús", "≈ 35 min vers Plaça Catalunya, toutes les 5-10 min."],
        ["BCN", "R2 Nord (train)", "≈ 25 min vers Passeig de Gràcia."],
        ["BCN", "Taxi", "≈ 25-35 € forfait vers le centre."],
    ],
}

CITIES["Amsterdam"] = {
    "country": "Pays-Bas", "currency": "EUR", "best": "avr.–mai · sept.",
    "airport": "AMS (Schiphol)", "transport": "Tram · Métro · Vélo",
    "transitTicket": "Ticket GVB 1h : 3,40 € · Pass journée : 9 €",
    "esim": "Optionnelle pour voyageurs UE",
    "intro": "Amsterdam se découvre à vélo, le long des canaux, entre maisons du Siècle d’or et quartiers créatifs.",
    "hero": hero("1512470876302-972faa2aa9a4"),
    "neighborhoods": [
        ["Jordaan", "Canaux · vélos · charme", "Ruelles pittoresques et canaux, le quartier préféré des locaux.", img("1584003564911-a7a321c84e1c")],
        ["De Pijp", "Marché · multiculturel · vivant", "Marché Albert Cuyp et ambiance de quartier populaire animé.", img("1722525901281-a238b4fb63de")],
        ["Museum Quarter", "Musées · parc · culture", "Rijksmuseum, Van Gogh Museum et le Vondelpark tout proche.", img("1589825743636-cd96373c3319")],
        ["De Wallen", "Historique · nightlife · Oude Kerk", "Le plus vieux quartier d’Amsterdam, entre canaux et vie nocturne.", img("1670318976469-f6ee48c337b9")],
        ["Amsterdam Noord", "Créatif · industriel · alternatif", "Anciens chantiers navals reconvertis en lieux créatifs.", img("1459679749680-18eb1eb37418")],
    ],
    "airportRoutes": [
        ["Schiphol", "Train NS", "≈ 15 min vers Amsterdam Centraal, très fréquent."],
        ["Schiphol", "Bus 397", "≈ 30 min vers le centre, utile la nuit."],
        ["Schiphol", "Taxi", "≈ 25-40 € vers le centre."],
    ],
}

CITIES["Berlin"] = {
    "country": "Allemagne", "currency": "EUR", "best": "mai–sept.",
    "airport": "BER", "transport": "U-Bahn · S-Bahn · Tram",
    "transitTicket": "Ticket AB : 3,80 € · Pass journée : 10,60 €",
    "esim": "Optionnelle pour voyageurs UE",
    "intro": "Berlin assume son histoire et sa liberté créative : quartiers alternatifs, mémoire du Mur, nuits sans fin.",
    "hero": hero("1554072675-66db59dba46f"),
    "neighborhoods": [
        ["Kreuzberg", "Street art · nightlife · multiculturel", "Fresques murales, bars alternatifs et scène nocturne intense.", img("1567886190186-52e1d9766504")],
        ["Prenzlauer Berg", "Résidentiel · familial · cafés", "Immeubles rénovés, cafés et ambiance bobo familiale.", img("1606126210582-3a17753188b9")],
        ["Friedrichshain", "East Side Gallery · jeune · bars", "Vestiges du Mur et l’une des scènes de clubs les plus intenses d’Europe.", img("1641630405549-822dd29961a5")],
        ["Charlottenburg", "Élégant · palais · shopping", "Château de Charlottenburg et grandes avenues commerçantes.", img("1561929651-072653c8b9ea")],
    ],
    "airportRoutes": [
        ["BER", "Train FEX / S-Bahn", "≈ 30 min vers Berlin Hauptbahnhof."],
        ["BER", "Bus express", "≈ 40 min vers le centre, alternative au train."],
        ["BER", "Taxi", "≈ 40-50 € vers le centre."],
    ],
}

CITIES["Lisbon"] = {
    "country": "Portugal", "currency": "EUR", "best": "mars–mai · sept.–oct.",
    "airport": "LIS", "transport": "Tram · Métro · Funiculaire",
    "transitTicket": "Carte Viva Viagem, trajet : 1,65 € · Pass 24h : 6,60 €",
    "esim": "Optionnelle pour voyageurs UE",
    "intro": "Lisbonne se vit en montagnes russes : collines, tramways jaunes et vue sur le Tage à chaque détour.",
    "hero": hero("1718448710250-3e3245d4309a"),
    "neighborhoods": [
        ["Alfama", "Historique · fado · tramway 28", "Le plus vieux quartier, ruelles pentues et maisons de fado.", img("1536663060084-a0d9eeeaf44b")],
        ["Belém", "Monuments · musées · pâtisseries", "Tour de Belém et les célèbres pastéis de nata.", img("1682271630116-2fedc81ad13d")],
        ["Bairro Alto", "Nightlife · bars · miradouros", "Bars serrés et l’un des meilleurs points de vue de la ville.", img("1562762562-8670c946876c")],
    ],
    "airportRoutes": [
        ["Humberto Delgado", "Métro (ligne rouge)", "≈ 25 min vers le centre, direct et économique."],
        ["Humberto Delgado", "Bus Aerobus", "≈ 30 min vers Restauradores et Cais do Sodré."],
        ["Humberto Delgado", "Taxi", "≈ 15-20 € vers le centre."],
    ],
}

CITIES["Vienna"] = {
    "country": "Autriche", "currency": "EUR", "best": "avr.–juin · sept.–oct.",
    "airport": "VIE", "transport": "U-Bahn · Tram · Bus",
    "transitTicket": "Ticket unique : 2,40 € · Pass 24h : 8 €",
    "esim": "Optionnelle pour voyageurs UE",
    "intro": "Vienne conjugue palais impériaux, cafés historiques et l’une des meilleures qualités de vie d’Europe.",
    "hero": hero("1757621850427-a234c0318e01"),
    "neighborhoods": [
        ["Innere Stadt", "Historique · Stephansdom · shopping", "Le centre impérial, cathédrale Saint-Étienne et rues piétonnes.", img("1660488669954-d57c590d9405")],
        ["Naschmarkt", "Marché · gastronomie · animé", "Le grand marché couvert de Vienne, entre étals et petits restaurants.", img("1610086382955-e85af48d3024")],
        ["Prater / Leopoldstadt", "Parc d’attractions · grande roue", "La célèbre grande roue du Prater et son parc populaire.", img("1784556360363-da6777635151")],
    ],
    "airportRoutes": [
        ["VIE", "City Airport Train (CAT)", "≈ 16 min vers Wien Mitte, sans arrêt."],
        ["VIE", "S-Bahn (S7)", "≈ 25 min vers le centre, moins cher que le CAT."],
        ["VIE", "Taxi", "≈ 35-40 € vers le centre."],
    ],
}

CITIES["Prague"] = {
    "country": "Tchéquie", "currency": "CZK", "best": "avr.–mai · sept.–oct.",
    "airport": "PRG", "transport": "Métro · Tram · Bus",
    "transitTicket": "Ticket 90 min : 40 CZK · Pass 24h : 120 CZK",
    "esim": "Optionnelle pour voyageurs UE",
    "intro": "Prague garde son centre médiéval quasi intact, entre pont Charles, château et ruelles pavées.",
    "hero": hero("1713993645333-6f12c832a798"),
    "neighborhoods": [
        ["Staré Město (Vieille Ville)", "Historique · horloge astronomique · animé", "Place de la Vieille Ville et son horloge astronomique médiévale.", img("1668364333285-9540bda3d4b0")],
        ["Malá Strana", "Château · romantique · calme", "Au pied du château, ruelles baroques et jardins.", img("1713993645333-6f12c832a798")],
        ["Žižkov", "Alternatif · bars · local", "Le quartier le plus dense en bars d’Europe, loin des cars de touristes.", img("1754064328810-922632940bcd")],
    ],
    "airportRoutes": [
        ["PRG", "Bus 119 + Métro", "≈ 35 min vers le centre, économique."],
        ["PRG", "Airport Express (AE)", "≈ 35 min vers la gare centrale."],
        ["PRG", "Taxi", "≈ 25-30 € vers le centre."],
    ],
}

CITIES["Athens"] = {
    "country": "Grèce", "currency": "EUR", "best": "avr.–juin · sept.–oct.",
    "airport": "ATH", "transport": "Métro · Tram · Bus",
    "transitTicket": "Ticket 90 min : 1,20 € · Pass 24h : 4,10 €",
    "esim": "Optionnelle pour voyageurs UE",
    "intro": "Athènes mêle ruines antiques et vie de quartier animée, l’Acropole dominant la ville à chaque coin de rue.",
    "hero": hero("1603565816030-6b389eeb23cb"),
    "neighborhoods": [
        ["Plaka", "Historique · charme · pied de l’Acropole", "Ruelles néoclassiques au pied de l’Acropole, la plus ancienne partie d’Athènes.", img("1684196922832-f1caa34e6a14")],
        ["Monastiraki", "Marché aux puces · animé · central", "Marché coloré et point de rencontre entre ancien et moderne.", img("1676453650053-86a1e4bbcee6")],
    ],
    "airportRoutes": [
        ["ATH", "Métro (ligne bleue)", "≈ 40 min vers le centre, direct."],
        ["ATH", "Bus X95", "≈ 60 min vers Syntagma, 24h/24."],
        ["ATH", "Taxi", "Tarif fixe ≈ 40 € de/vers le centre."],
    ],
}

CITIES["Venice"] = {
    "country": "Italie", "currency": "EUR", "best": "avr.–juin · sept.–oct.",
    "airport": "VCE", "transport": "Vaporetto · Marche à pied",
    "transitTicket": "Vaporetto trajet unique : 9,50 € · Pass 24h : 25 €",
    "esim": "Optionnelle pour voyageurs UE",
    "intro": "Venise se traverse à pied et en vaporetto, sans voiture, entre canaux, palais et îles voisines.",
    "hero": hero("1511135570219-bbad9a02f103"),
    "neighborhoods": [
        ["San Polo / Rialto", "Marché · pont · animé", "Le pont du Rialto et son marché aux poissons matinal.", img("1523906834658-6e24ef2386f9")],
        ["Burano", "Maisons colorées · dentelle · île", "Île aux maisons colorées, réputée pour sa dentelle artisanale.", img("1502727051360-3656ce291c5b")],
        ["San Marco", "Basilique · place · touristique", "La place Saint-Marc, cœur historique et touristique de Venise.", img("1535159994443-5d05daa62298")],
    ],
    "airportRoutes": [
        ["VCE", "Bateau-bus Alilaguna", "≈ 60-90 min vers San Marco selon la ligne."],
        ["VCE", "Bus ATVO", "≈ 20 min vers Piazzale Roma."],
        ["VCE", "Taxi (bateau privé)", "≈ 120 € vers le centre historique."],
    ],
}

CITIES["Singapore"] = {
    "country": "Singapour", "currency": "SGD", "best": "fév.–avr.",
    "airport": "SIN (Changi)", "transport": "MRT · Bus · Taxi",
    "transitTicket": "Carte EZ-Link, trajet : ≈ 1,50–2,50 SGD",
    "esim": "Très utile dès l’arrivée",
    "intro": "Singapour condense en une seule ville l’Asie du Sud-Est : gratte-ciel, temples multiculturels et hawker centers.",
    "hero": hero("1525625293386-3f8f99389edd"),
    "neighborhoods": [
        ["Chinatown", "Temples · street food · historique", "Temples multiconfessionnels et hawker centers réputés.", img("1628072380638-21b16e95c562")],
        ["Kampong Glam", "Mosquée · arabe · shopping", "Mosquée du Sultan et boutiques d’Arab Street.", img("1672393027644-210959d2a340")],
        ["Little India", "Coloré · épices · authentique", "Façades colorées, épices et guirlandes de jasmin.", img("1508141052667-829251113b81")],
    ],
    "airportRoutes": [
        ["Changi", "MRT", "≈ 30 min vers le centre, direct et climatisé."],
        ["Changi", "Bus", "≈ 45 min, alternative économique."],
        ["Changi", "Taxi / Grab", "≈ 20-25 SGD vers le centre."],
    ],
}

CITIES["Hong Kong"] = {
    "country": "Hong Kong", "currency": "HKD", "best": "oct.–déc.",
    "airport": "HKG", "transport": "MTR · Tram · Star Ferry",
    "transitTicket": "Carte Octopus, trajet : ≈ 5-15 HKD",
    "esim": "Très utile dès l’arrivée",
    "intro": "Hong Kong empile gratte-ciel et marchés traditionnels entre mer et montagne, avec le Star Ferry comme trait d’union.",
    "hero": hero("1603025174040-9cbbc29cdfb1"),
    "neighborhoods": [
        ["Mong Kok", "Néons · marchés de nuit · dense", "L’un des quartiers les plus denses au monde, marchés de nuit animés.", img("1750658659043-76407ff8d677")],
        ["Central / The Peak", "Affaires · vue · Victoria Peak", "Quartier des affaires et la meilleure vue depuis Victoria Peak.", img("1669250480690-3017208a73b6")],
    ],
    "airportRoutes": [
        ["HKG", "Airport Express", "≈ 24 min vers Hong Kong Station."],
        ["HKG", "Bus", "≈ 45-60 min, plus économique."],
        ["HKG", "Taxi", "≈ 300-400 HKD vers le centre."],
    ],
}

CITIES["Kyoto"] = {
    "country": "Japon", "currency": "JPY", "best": "mars–avr. · oct.–nov.",
    "airport": "Kansai (KIX) via Osaka", "transport": "Bus · Métro · Vélo",
    "transitTicket": "Bus/métro trajet : ≈ ¥230 · Pass bus journée : ¥700",
    "esim": "Très utile dès l’arrivée",
    "intro": "Kyoto est le Japon impérial : temples millénaires, geishas de Gion et jardins zen, à taille humaine.",
    "hero": hero("1681562941774-9bcc1a4ed804"),
    "neighborhoods": [
        ["Gion", "Geishas · traditionnel · ruelles", "Le quartier historique des geiko, maisons de thé et ruelles en bois.", img("1493976040374-85c8e12f0c0e")],
        ["Arashiyama", "Bambous · nature · temples", "La célèbre forêt de bambous et les temples au bord de la rivière.", img("1632923754832-60642c12a7ed")],
        ["Higashiyama", "Kiyomizu-dera · pentes · authentique", "Ruelles pentues menant au temple Kiyomizu-dera.", img("1665706896821-319040b81753")],
    ],
    "airportRoutes": [
        ["Kansai (KIX)", "JR Haruka Express", "≈ 75 min vers Kyoto Station, direct."],
        ["Kansai (KIX)", "Bus limousine", "≈ 90 min, dépose près des hôtels centraux."],
        ["Kansai (KIX)", "Taxi", "Très coûteux, réservé aux groupes."],
    ],
}

CITIES["Sydney"] = {
    "country": "Australie", "currency": "AUD", "best": "sept.–nov. · mars–mai",
    "airport": "SYD", "transport": "Train · Ferry · Bus",
    "transitTicket": "Carte Opal, trajet : ≈ 3-5 AUD · Plafond journée : 17,80 AUD",
    "esim": "Très utile dès l’arrivée",
    "intro": "Sydney vit autour de son port : Opera House, plages urbaines et ferries reliant les quartiers.",
    "hero": hero("1590716209211-ea74d5f63573"),
    "neighborhoods": [
        ["Bondi", "Plage · surf · brunch", "La plage la plus célèbre d’Australie, surf et culture brunch.", img("1555029941-a475f4e50810")],
        ["The Rocks", "Historique · pont · marché", "Le plus vieux quartier de Sydney, au pied du Harbour Bridge.", img("1544698202-afeeb997d98c")],
    ],
    "airportRoutes": [
        ["SYD", "Train (Airport Link)", "≈ 15 min vers le centre, fréquent."],
        ["SYD", "Bus", "≈ 30-40 min, alternative économique."],
        ["SYD", "Taxi / Uber", "≈ 45-55 AUD vers le centre."],
    ],
}

CITIES["Los Angeles"] = {
    "country": "États-Unis", "currency": "USD", "best": "mars–mai · sept.–nov.",
    "airport": "LAX", "transport": "Metro · Bus · Voiture",
    "transitTicket": "TAP Card, trajet : 1,75 $ · Pass journée : 7 $",
    "esim": "Fortement recommandée",
    "intro": "Los Angeles s’explore par quartiers bien distincts, reliés par des kilomètres d’autoroutes et de plages.",
    "hero": hero("1609924211018-5526c55bad5b"),
    "neighborhoods": [
        ["Venice Beach", "Plage · skate · alternatif", "Front de mer bohème, skateparks et Muscle Beach.", img("1573397286878-0ff40aa140cd")],
        ["Hollywood", "Cinéma · Walk of Fame · iconique", "Le panneau Hollywood et le Walk of Fame.", img("1581390114939-946f9a890a7f")],
        ["Santa Monica", "Pier · plage · familial", "La jetée emblématique et son parc d’attractions au bord de l’eau.", img("1505887579242-c7bc04062e98")],
    ],
    "airportRoutes": [
        ["LAX", "Metro (C Line + navette)", "≈ 45 min vers le centre, économique."],
        ["LAX", "FlyAway Bus", "≈ 40 min vers Union Station."],
        ["LAX", "Taxi / Uber", "≈ 35-55 $ selon la destination."],
    ],
}

CITIES["Mexico City"] = {
    "country": "Mexique", "currency": "MXN", "best": "nov.–mars",
    "airport": "MEX (AICM)", "transport": "Métro · Metrobús · Taxi",
    "transitTicket": "Métro trajet : 5 MXN · Metrobús : 6 MXN",
    "esim": "Recommandée",
    "intro": "Mexico est immense mais se découvre quartier par quartier : canaux aztèques, avenues élégantes et art urbain.",
    "hero": hero("1562770174-9dc23ac6b61f"),
    "neighborhoods": [
        ["Coyoacán", "Coloré · Frida Kahlo · marché", "Maison bleue de Frida Kahlo et places pittoresques.", img("1636573533532-fdf7c44af2d5")],
        ["Roma Norte / Condesa", "Cafés · Art déco · branché", "Architecture Art déco, cafés et parcs arborés.", img("1622944732771-98ea30434259")],
        ["Polanco", "Chic · musées · gastronomie", "Le quartier le plus huppé, entre musées et restaurants étoilés.", img("1787382207889-31dad69fa492")],
    ],
    "airportRoutes": [
        ["AICM", "Metrobús ligne 4", "≈ 40 min vers le centre historique."],
        ["AICM", "Taxi officiel (sitio)", "≈ 25-35 min, achetez le ticket au comptoir agréé."],
        ["AICM", "Metro", "Économique mais déconseillé avec bagages aux heures de pointe."],
    ],
}

CITIES["Rio de Janeiro"] = {
    "country": "Brésil", "currency": "BRL", "best": "avr.–juin · sept.–oct.",
    "airport": "GIG (Galeão)", "transport": "Métro · Bus · Tramway",
    "transitTicket": "Carte Riocard, trajet : ≈ 4,70 BRL",
    "esim": "Recommandée",
    "intro": "Rio superpose plages iconiques, favelas colorées et forêt tropicale, dominée par le Christ Rédempteur.",
    "hero": hero("1518639192441-8fce0a366e2e"),
    "neighborhoods": [
        ["Copacabana", "Plage · iconique · animé", "La plage la plus célèbre du Brésil, promenade en mosaïque.", img("1637876308735-74230b34461a")],
        ["Santa Teresa", "Bohème · tramway · artistes", "Quartier d’artistes sur les collines, célèbre pour son tramway jaune.", img("1774451606955-c06dff8d5796")],
    ],
    "airportRoutes": [
        ["Galeão", "Bus premium (BRT)", "≈ 45 min vers Copacabana/Ipanema."],
        ["Galeão", "Taxi officiel", "≈ 60-80 BRL vers la zone sud."],
        ["Galeão", "Uber", "Souvent moins cher que le taxi, très utilisé."],
    ],
}

CITIES["Buenos Aires"] = {
    "country": "Argentine", "currency": "ARS", "best": "avr.–juin · sept.–nov.",
    "airport": "EZE (Ezeiza)", "transport": "Subte · Bus (Colectivo) · Taxi",
    "transitTicket": "Carte SUBE, trajet Subte : ≈ tarif très accessible",
    "esim": "Recommandée",
    "intro": "Buenos Aires respire le tango et l’architecture européenne, entre avenues larges et quartiers colorés.",
    "hero": hero("1672588299018-41c8976e5c3f"),
    "neighborhoods": [
        ["La Boca", "Tango · coloré · Caminito", "Maisons colorées de Caminito, berceau du tango.", img("1691216011700-681f22d79339")],
        ["Recoleta", "Élégant · cimetière · culture", "Quartier chic, cimetière monumental et vie culturelle riche.", img("1665256072769-fdb5870b326d")],
    ],
    "airportRoutes": [
        ["EZE", "Navette Tienda León", "≈ 45 min vers le centre, la plus fiable."],
        ["EZE", "Remise (taxi privé réservé)", "≈ 45-60 min, recommandé à l’arrivée."],
        ["EZE", "Bus 8", "Très économique mais long avec bagages."],
    ],
}

CITIES["Toronto"] = {
    "country": "Canada", "currency": "CAD", "best": "mai–sept.",
    "airport": "YYZ", "transport": "Métro (TTC) · Tram · Bus",
    "transitTicket": "Carte Presto, trajet : ≈ 3,35 CAD",
    "esim": "Recommandée",
    "intro": "Toronto est la ville la plus multiculturelle du Canada, entre gratte-ciel, quartiers ethniques et lac Ontario.",
    "hero": hero("1509118796018-30cc4ce216f1"),
    "neighborhoods": [
        ["Distillery District", "Historique · pavés · galeries", "Anciennes distilleries victoriennes reconverties en galeries et boutiques.", img("1616472423851-e233b558bec9")],
        ["Kensington Market", "Multiculturel · marché · alternatif", "Marché bohème aux influences du monde entier.", img("1565481710128-a1f96b16ac98")],
    ],
    "airportRoutes": [
        ["YYZ", "UP Express (train)", "≈ 25 min vers Union Station, direct."],
        ["YYZ", "Bus TTC", "Plus long mais très économique."],
        ["YYZ", "Taxi", "≈ 60-70 CAD vers le centre."],
    ],
}

CITIES["Cairo"] = {
    "country": "Égypte", "currency": "EGP", "best": "oct.–avr.",
    "airport": "CAI", "transport": "Métro · Taxi · Uber",
    "transitTicket": "Métro trajet : ≈ 8-10 EGP",
    "esim": "Très utile dès l’arrivée",
    "intro": "Le Caire vit entre pyramides millénaires, bazars animés et un Nil qui traverse toute la ville.",
    "hero": hero("1541769740-098e80269166"),
    "neighborhoods": [
        ["Gizeh", "Pyramides · désert · iconique", "Les pyramides de Gizeh et le Sphinx, aux portes de la ville.", img("1708992485876-f193e746f6dd")],
        ["Khan el-Khalili", "Bazar · artisanat · authentique", "Le grand bazar historique du Caire, épices et artisanat.", img("1710211288826-b7df3ab71588")],
    ],
    "airportRoutes": [
        ["CAI", "Taxi officiel", "≈ 45-60 min vers le centre selon trafic."],
        ["CAI", "Uber / Careem", "Plus fiable et négocié à l’avance."],
        ["CAI", "Navette hôtel", "Souvent la solution la plus simple à l’arrivée."],
    ],
}

CITIES["Doha"] = {
    "country": "Qatar", "currency": "QAR", "best": "nov.–mars",
    "airport": "DOH (Hamad)", "transport": "Métro · Bus · Taxi",
    "transitTicket": "Carte Karwa, trajet : 2 QAR · Pass journée : 6 QAR",
    "esim": "Recommandée",
    "intro": "Doha a construit en quelques décennies une skyline futuriste autour d’une corniche et d’un souk préservé.",
    "hero": hero("1642331650537-84e9fa8cad5e"),
    "neighborhoods": [
        ["Souq Waqif", "Marché · traditionnel · lanternes", "Le souk restauré, épices, lanternes et restaurants traditionnels.", img("1646205028143-dbf6880accc2")],
        ["The Pearl", "Luxe · marina · moderne", "Île artificielle de luxe, marina et boutiques haut de gamme.", img("1763811937711-09b7c680d990")],
    ],
    "airportRoutes": [
        ["Hamad", "Métro (ligne rouge)", "≈ 20 min vers le centre, moderne et climatisé."],
        ["Hamad", "Taxi Karwa", "≈ 15-20 min, tarif fixe affiché."],
        ["Hamad", "Navette hôtel", "Souvent incluse dans les hôtels haut de gamme."],
    ],
}

CITIES["Nairobi"] = {
    "country": "Kenya", "currency": "KES", "best": "juin–oct. · janv.–fév.",
    "airport": "NBO", "transport": "Bus (Matatu) · Taxi",
    "transitTicket": "Matatu trajet : ≈ 50-100 KES",
    "esim": "Recommandée",
    "intro": "Nairobi est la seule capitale au monde avec un parc national sauvage à ses portes, lions inclus.",
    "hero": hero("1683435299487-12296f884718"),
    "neighborhoods": [
        ["Nairobi National Park", "Safari · faune · unique", "Un vrai parc national avec lions et girafes, à la lisière de la ville.", img("1683435299487-12296f884718")],
        ["CBD (Centre-ville)", "Affaires · animé · central", "Le centre des affaires, point de départ de la plupart des visites.", img("1554490593-98163f5150f7")],
    ],
    "airportRoutes": [
        ["NBO", "Taxi / Uber", "≈ 30-45 min vers le centre selon trafic."],
        ["NBO", "Navette hôtel", "Solution la plus simple pour un premier voyage."],
        ["NBO", "Bus SGR", "Alternative économique vers certains quartiers."],
    ],
}

CITIES["Shanghai"] = {
    "country": "Chine", "currency": "CNY", "best": "mars–mai · sept.–nov.",
    "airport": "PVG / SHA", "transport": "Métro · Maglev · Bus",
    "transitTicket": "Métro trajet : ≈ 3-9 CNY selon distance",
    "esim": "Très utile dès l’arrivée",
    "intro": "Shanghai confronte gratte-ciel futuristes du Bund et ruelles de la concession française, sans transition.",
    "hero": hero("1545893835-abaa50cbe628"),
    "neighborhoods": [
        ["Yuyuan Garden (Vieille ville)", "Jardin · traditionnel · marché", "Jardin classique chinois entouré d’un bazar animé.", img("1609088399054-7661a95fe0e2")],
        ["Concession française", "Arbres · boutiques · charme", "Larges avenues arborées, boutiques et cafés élégants.", img("1776612601727-bb2160d71105")],
    ],
    "airportRoutes": [
        ["Pudong (PVG)", "Maglev + Métro", "≈ 8 min en Maglev jusqu’à Longyang Rd, puis métro."],
        ["Pudong (PVG)", "Métro (ligne 2)", "≈ 70 min direct vers le centre, plus économique."],
        ["Hongqiao (SHA)", "Métro", "Aéroport domestique, très proche du centre."],
    ],
}

CITIES["Mumbai"] = {
    "country": "Inde", "currency": "INR", "best": "nov.–fév.",
    "airport": "BOM", "transport": "Train de banlieue · Métro · Taxi",
    "transitTicket": "Train de banlieue trajet : ≈ 10-30 INR",
    "esim": "Très utile dès l’arrivée",
    "intro": "Mumbai est la ville la plus dense d’Inde, entre gratte-ciel de Bollywood et vestiges coloniaux au bord de la mer.",
    "hero": hero("1595658658481-d53d3f999875"),
    "neighborhoods": [
        ["Colaba", "Historique · Gateway of India · animé", "Porte de l’Inde, architecture coloniale et marchés de rue.", img("1595658658481-d53d3f999875")],
        ["Bandra", "Branché · mer · Bollywood", "Quartier chic relié par le Bandra-Worli Sea Link, prisé des stars.", img("1569758267239-d08deb78bb1a")],
    ],
    "airportRoutes": [
        ["BOM", "Taxi prépayé", "≈ 45-60 min vers le centre, achetez le ticket au comptoir officiel."],
        ["BOM", "Uber / Ola", "Souvent plus simple et traçable."],
        ["BOM", "Métro", "Utile pour certains quartiers, moins pour un premier trajet avec bagages."],
    ],
}

CITIES["Ubud"] = {
    "country": "Indonésie (Bali)", "currency": "IDR", "best": "avr.–oct.",
    "airport": "DPS (Denpasar)", "transport": "Scooter · Taxi · Chauffeur privé",
    "transitTicket": "Pas de réseau public : scooter à la journée ≈ 70 000–100 000 IDR",
    "esim": "Très utile dès l’arrivée",
    "intro": "Ubud est le cœur spirituel de Bali, rizières en terrasses, temples et yoga au milieu de la jungle.",
    "hero": hero("1555400038-63f5ba517a47"),
    "neighborhoods": [
        ["Centre d’Ubud", "Temples · yoga · rizières", "Temples, ateliers de yoga et rizières de Tegalalang à proximité.", img("1761521998544-272ad6456514")],
        ["Canggu", "Surf · branché · plage", "Spots de surf et cafés branchés au bord de l’océan.", img("1564221549673-b43c122d1c29")],
        ["Seminyak", "Beach clubs · chic · sunset", "Plages animées et beach clubs pour admirer le coucher de soleil.", img("1662950267280-0cdf5f7139b4")],
    ],
    "airportRoutes": [
        ["Denpasar", "Chauffeur privé réservé", "≈ 60-90 min vers Ubud selon trafic."],
        ["Denpasar", "Taxi Bluebird", "Compteur officiel, évitez les taxis non agréés."],
        ["Denpasar", "Navette partagée", "Économique mais plus lent, plusieurs arrêts."],
    ],
}

CITIES["San Francisco"] = {
    "country": "États-Unis", "currency": "USD", "best": "sept.–oct.",
    "airport": "SFO", "transport": "BART · Muni · Tramway",
    "transitTicket": "Clipper Card, trajet Muni : 2,50 $",
    "esim": "Fortement recommandée",
    "intro": "San Francisco tient sur ses collines, entre Golden Gate, quartiers victoriens et scène tech mondiale.",
    "hero": hero("1501594907352-04cda38ebc29"),
    "neighborhoods": [
        ["Haight-Ashbury", "Hippie · maisons victoriennes · vintage", "Berceau du mouvement hippie, boutiques vintage et maisons colorées.", img("1719143313439-0fa59c78680a")],
        ["Fisherman’s Wharf", "Port · phoques · touristique", "Front de mer animé, otaries de Pier 39 et vue sur Alcatraz.", img("1717934923772-a3deabd33512")],
    ],
    "airportRoutes": [
        ["SFO", "BART", "≈ 30 min vers le centre, direct et fréquent."],
        ["SFO", "Navette / shuttle", "Pratique pour un dépôt porte-à-porte."],
        ["SFO", "Taxi / Uber", "≈ 40-60 $ vers le centre selon trafic."],
    ],
}

for name, c in CITIES.items():
    c["articles"] = articles(name)
    d["cities"][name] = c
    d["hotels"][name] = make_hotels([n[0] for n in c["neighborhoods"]])

with open(path, "w") as f:
    json.dump(d, f, ensure_ascii=False, indent=2)
    f.write("\n")

print("Added", len(CITIES), "cities. Total cities now:", len(d["cities"]))
