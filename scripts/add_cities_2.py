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
        "Comment rejoindre le centre depuis l’aéroport",
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

CITIES["Chicago"] = {
    "country": "États-Unis", "currency": "USD", "best": "mai–sept.",
    "airport": "ORD / MDW", "transport": "L Train · Bus · Métra",
    "transitTicket": "Ventra Card, trajet : 2,50 $",
    "esim": "Fortement recommandée",
    "intro": "Chicago est une ville d’architecture, entre gratte-ciel pionniers, lac Michigan et culture du deep-dish.",
    "hero": hero("1494522855154-9297ac14b55f"),
    "neighborhoods": [
        ["Millennium Park", "Art public · Cloud Gate · central", "Le fameux « Bean » et un parc au cœur des gratte-ciel.", img("1494522855154-9297ac14b55f")],
        ["River North", "Architecture · croisière · galeries", "Croisières d’architecture sur la rivière Chicago.", img("1718980888858-16365e9e5a80")],
    ],
    "airportRoutes": [
        ["O’Hare (ORD)", "L Train (Blue Line)", "≈ 45 min vers le centre, direct 24h/24."],
        ["Midway (MDW)", "L Train (Orange Line)", "≈ 30 min vers le Loop."],
        ["Les deux", "Taxi / Uber", "≈ 35-50 $ selon aéroport et trafic."],
    ],
}

CITIES["Miami"] = {
    "country": "États-Unis", "currency": "USD", "best": "déc.–avr.",
    "airport": "MIA", "transport": "Metrorail · Metromover · Bus",
    "transitTicket": "EASY Card, trajet : 2,25 $ · Metromover gratuit",
    "esim": "Fortement recommandée",
    "intro": "Miami mélange Art déco, plages ensoleillées et influences latino-américaines toute l’année.",
    "hero": hero("1603888613934-ee2f7d143dd0"),
    "neighborhoods": [
        ["South Beach", "Art déco · plage · nightlife", "Façades Art déco pastel et la plage la plus célèbre de Floride.", img("1603888613934-ee2f7d143dd0")],
        ["Wynwood", "Street art · galeries · branché", "Fresques monumentales et scène artistique en plein essor.", img("1548209454-8548045387bc")],
    ],
    "airportRoutes": [
        ["MIA", "Metrorail (Orange Line)", "≈ 25 min vers le centre."],
        ["MIA", "SuperShuttle", "Navette partagée pratique avec bagages."],
        ["MIA", "Taxi / Uber", "≈ 25-35 $ vers South Beach."],
    ],
}

CITIES["Munich"] = {
    "country": "Allemagne", "currency": "EUR", "best": "mai–sept.",
    "airport": "MUC", "transport": "U-Bahn · S-Bahn · Tram",
    "transitTicket": "Ticket unique : 3,90 € · Pass journée : 8,80 €",
    "esim": "Optionnelle pour voyageurs UE",
    "intro": "Munich équilibre tradition bavaroise, brasseries historiques et l’un des plus grands parcs urbains d’Europe.",
    "hero": hero("1682495867747-aa7ae4dbf9fd"),
    "neighborhoods": [
        ["Marienplatz", "Historique · Rathaus · central", "L’hôtel de ville néogothique et son célèbre carillon.", img("1682495867747-aa7ae4dbf9fd")],
        ["Englischer Garten", "Parc · détente · surf urbain", "L’un des plus grands parcs urbains au monde, surf sur l’Eisbach.", img("1588744349807-e5f0e99abed0")],
    ],
    "airportRoutes": [
        ["MUC", "S-Bahn (S1/S8)", "≈ 45 min vers le centre."],
        ["MUC", "Bus Lufthansa Express", "Alternative directe vers la gare centrale."],
        ["MUC", "Taxi", "≈ 60-70 € vers le centre."],
    ],
}

CITIES["Dublin"] = {
    "country": "Irlande", "currency": "EUR", "best": "mai–sept.",
    "airport": "DUB", "transport": "Luas (tram) · Bus · DART",
    "transitTicket": "Carte Leap, trajet bus : ≈ 2 €",
    "esim": "Optionnelle pour voyageurs UE",
    "intro": "Dublin tient dans un mouchoir de poche : pubs historiques, littérature et bord de mer accessible en train.",
    "hero": hero("1651127403819-6c15d8b5f589"),
    "neighborhoods": [
        ["Temple Bar", "Pubs · musique live · animé", "Le quartier des pubs et de la musique traditionnelle irlandaise.", img("1651127403819-6c15d8b5f589")],
        ["Trinity College", "Historique · bibliothèque · étudiant", "Le Long Room et le Livre de Kells, cœur académique de Dublin.", img("1646435517735-076ec89e610d")],
    ],
    "airportRoutes": [
        ["DUB", "Bus Airlink", "≈ 30 min vers le centre-ville."],
        ["DUB", "Bus Dublin Express", "Alternative directe vers plusieurs points centraux."],
        ["DUB", "Taxi", "≈ 25-30 € vers le centre."],
    ],
}

CITIES["Budapest"] = {
    "country": "Hongrie", "currency": "HUF", "best": "avr.–juin · sept.–oct.",
    "airport": "BUD", "transport": "Métro · Tram · Bus",
    "transitTicket": "Ticket unique : 450 HUF · Pass 24h : 2 500 HUF",
    "esim": "Optionnelle pour voyageurs UE",
    "intro": "Budapest se partage entre Buda la vallonnée et Pest l’animée, reliées par des ponts sur le Danube.",
    "hero": hero("1616432902940-b7a1acbc60b3"),
    "neighborhoods": [
        ["Quartier des bars-ruines", "Nightlife · alternatif · Erzsébetváros", "Bars insolites installés dans d’anciens bâtiments délabrés.", img("1788882681232-4dd3b1016ccd")],
    ],
    "airportRoutes": [
        ["BUD", "Bus 100E", "≈ 40 min vers le centre, direct."],
        ["BUD", "Navette miniBUD", "Réservation à l’avance, dépose à l’hôtel."],
        ["BUD", "Taxi officiel (Főtaxi)", "≈ 20-25 € vers le centre."],
    ],
}

CITIES["Stockholm"] = {
    "country": "Suède", "currency": "SEK", "best": "mai–août",
    "airport": "ARN (Arlanda)", "transport": "Métro (Tunnelbana) · Bus · Ferry",
    "transitTicket": "Ticket SL, trajet : ≈ 39 SEK",
    "esim": "Optionnelle pour voyageurs UE",
    "intro": "Stockholm s’étend sur 14 îles, entre vieille ville médiévale et design scandinave minimaliste.",
    "hero": hero("1596636478939-59fed7a083f2"),
    "neighborhoods": [
        ["Gamla Stan", "Vieille ville · pavés · historique", "La vieille ville médiévale, ruelles pavées et façades colorées.", img("1596636478939-59fed7a083f2")],
        ["Södermalm", "Branché · vues · cafés", "Quartier créatif avec les meilleures vues sur la ville.", img("1553798081-85009962337f")],
    ],
    "airportRoutes": [
        ["Arlanda", "Arlanda Express", "≈ 20 min vers le centre, rapide mais cher."],
        ["Arlanda", "Bus Flygbussarna", "≈ 45 min, alternative économique."],
        ["Arlanda", "Taxi", "Tarif fixe ≈ 500-600 SEK, à négocier avant le départ."],
    ],
}

CITIES["Kuala Lumpur"] = {
    "country": "Malaisie", "currency": "MYR", "best": "déc.–fév.",
    "airport": "KUL", "transport": "LRT · Monorail · MRT",
    "transitTicket": "Ticket unique : ≈ 1-5 MYR selon distance",
    "esim": "Très utile dès l’arrivée",
    "intro": "Kuala Lumpur juxtapose tours futuristes, marchés multiculturels et jungle tropicale aux portes de la ville.",
    "hero": hero("1508062878650-88b52897f298"),
    "neighborhoods": [
        ["KLCC", "Tours Petronas · shopping · moderne", "Les tours jumelles emblématiques et leur parc au pied des gratte-ciel.", img("1508062878650-88b52897f298")],
        ["Bukit Bintang", "Shopping · nightlife · street food", "Le quartier commerçant et nocturne le plus animé de la ville.", img("1679113230029-a11884eb7293")],
    ],
    "airportRoutes": [
        ["KUL", "KLIA Ekspres", "≈ 28 min vers KL Sentral, direct."],
        ["KUL", "Bus", "≈ 60-90 min, économique."],
        ["KUL", "Taxi / Grab", "≈ 30-40 min selon trafic."],
    ],
}

CITIES["Beijing"] = {
    "country": "Chine", "currency": "CNY", "best": "mars–mai · sept.–oct.",
    "airport": "PEK / PKX", "transport": "Métro · Bus · Taxi",
    "transitTicket": "Métro trajet : ≈ 3-9 CNY selon distance",
    "esim": "Très utile dès l’arrivée",
    "intro": "Pékin conjugue la grandeur impériale de la Cité interdite et les ruelles hutong plus intimes.",
    "hero": hero("1614555383820-941c466f1b52"),
    "neighborhoods": [
        ["Cité interdite", "Impérial · monuments · historique", "L’ancien palais impérial, cœur historique de la Chine.", img("1614555383820-941c466f1b52")],
        ["Hutong", "Ruelles · traditionnel · authentique", "Ruelles traditionnelles à explorer en vélo ou pousse-pousse.", img("1774404541165-65604e3de17e")],
    ],
    "airportRoutes": [
        ["Capital (PEK)", "Airport Express + Métro", "≈ 40 min vers le centre."],
        ["Daxing (PKX)", "Daxing Airport Express", "≈ 20 min vers le centre, aéroport plus récent."],
        ["Les deux", "Taxi", "≈ 60-90 min selon trafic."],
    ],
}

CITIES["Montreal"] = {
    "country": "Canada", "currency": "CAD", "best": "juin–sept.",
    "airport": "YUL", "transport": "Métro (STM) · Bus · Vélo",
    "transitTicket": "Ticket OPUS, trajet : 3,75 CAD",
    "esim": "Recommandée",
    "intro": "Montréal garde un charme européen dans son Vieux-Port, avec une identité francophone bien affirmée.",
    "hero": hero("1770488767468-234694839ede"),
    "neighborhoods": [
        ["Vieux-Montréal", "Pavés · européen · historique", "Rues pavées et architecture du XVIIe siècle au bord du fleuve.", img("1770488767468-234694839ede")],
        ["Plateau Mont-Royal", "Escaliers colorés · bohème · cafés", "Maisons à escaliers extérieurs typiques et ambiance créative.", img("1576375801517-45814f908aa4")],
    ],
    "airportRoutes": [
        ["YUL", "Bus 747", "≈ 45-60 min vers le centre, 24h/24."],
        ["YUL", "Taxi", "Tarif fixe ≈ 45 CAD vers le centre."],
        ["YUL", "Uber", "Souvent comparable au taxi selon la demande."],
    ],
}

CITIES["Vancouver"] = {
    "country": "Canada", "currency": "CAD", "best": "juin–sept.",
    "airport": "YVR", "transport": "SkyTrain · Bus · SeaBus",
    "transitTicket": "Carte Compass, trajet : ≈ 3-6 CAD selon zones",
    "esim": "Recommandée",
    "intro": "Vancouver combine gratte-ciel, forêt tropicale et montagnes enneigées visibles depuis le centre-ville.",
    "hero": hero("1664813128436-a5c35a42e78b"),
    "neighborhoods": [
        ["Stanley Park", "Nature · vélo · vue", "Immense parc urbain avec sentier côtier et vue sur les montagnes.", img("1664813128436-a5c35a42e78b")],
        ["Gastown", "Historique · pavés · horloge à vapeur", "Le quartier historique, célèbre pour son horloge à vapeur.", img("1601310960741-599135fc3337")],
    ],
    "airportRoutes": [
        ["YVR", "Canada Line (SkyTrain)", "≈ 25 min vers le centre, direct."],
        ["YVR", "Taxi", "≈ 35-40 CAD vers le centre."],
        ["YVR", "Navette hôtel", "Disponible pour certains grands hôtels."],
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
