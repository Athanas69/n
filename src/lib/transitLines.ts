export type TransitLine = { name: string; color: string; stations: string[] };

export const REAL_TRANSIT: Record<string, TransitLine[]> = {
  Paris: [
    {
      name: "Ligne 1",
      color: "#ffcd00",
      stations: ["La Défense", "Étoile", "Concorde", "Châtelet", "Bastille", "Nation"],
    },
    {
      name: "Ligne 4",
      color: "#bd1d7c",
      stations: ["Porte de Clignancourt", "Gare du Nord", "Châtelet", "Saint-Michel", "Montparnasse", "Porte d’Orléans"],
    },
    {
      name: "Ligne 14",
      color: "#63247c",
      stations: ["Saint-Lazare", "Madeleine", "Pyramides", "Châtelet", "Gare de Lyon", "Olympiades"],
    },
  ],
  Tokyo: [
    {
      name: "Yamanote",
      color: "#8fce00",
      stations: ["Tokyo", "Yurakucho", "Shibuya", "Shinjuku", "Ikebukuro", "Ueno"],
    },
    {
      name: "Ginza",
      color: "#ff9500",
      stations: ["Shibuya", "Omotesando", "Ginza", "Nihombashi", "Ueno", "Asakusa"],
    },
    {
      name: "Marunouchi",
      color: "#f62e36",
      stations: ["Ogikubo", "Shinjuku", "Yotsuya", "Tokyo", "Ginza", "Ikebukuro"],
    },
  ],
  London: [
    {
      name: "Central",
      color: "#dc241f",
      stations: ["Ealing Broadway", "Notting Hill Gate", "Oxford Circus", "Bank", "Mile End", "Stratford"],
    },
    {
      name: "Piccadilly",
      color: "#003688",
      stations: ["Heathrow", "Hammersmith", "South Kensington", "Green Park", "King’s Cross", "Cockfosters"],
    },
    {
      name: "Jubilee",
      color: "#a0a5a9",
      stations: ["Stanmore", "Baker Street", "Bond Street", "Green Park", "London Bridge", "Stratford"],
    },
  ],
  "New York": [
    {
      name: "Ligne 6",
      color: "#00933c",
      stations: ["Pelham Bay Park", "125 St", "86 St", "Union Square", "Brooklyn Bridge", "City Hall"],
    },
    {
      name: "Ligne L",
      color: "#a7a9ac",
      stations: ["8 Av", "Union Square", "Bedford Av", "Myrtle–Wyckoff", "Broadway Jct", "Canarsie"],
    },
    {
      name: "Ligne N",
      color: "#fccc0a",
      stations: ["Astoria–Ditmars", "Queensboro Plaza", "Times Sq–42 St", "Union Square", "Canal St", "Coney Island"],
    },
  ],
  Barcelona: [
    {
      name: "L1",
      color: "#e4032e",
      stations: ["Hospital de Bellvitge", "Plaça Espanya", "Universitat", "Catalunya", "Arc de Triomf", "Fondo"],
    },
    {
      name: "L3",
      color: "#6cb33f",
      stations: ["Zona Universitària", "Sants Estació", "Liceu", "Catalunya", "Diagonal", "Fontana"],
    },
  ],
  Berlin: [
    {
      name: "U2",
      color: "#e3000f",
      stations: ["Pankow", "Alexanderplatz", "Potsdamer Platz", "Nollendorfplatz", "Zoologischer Garten", "Ruhleben"],
    },
    {
      name: "U6",
      color: "#8c6dab",
      stations: ["Alt-Tegel", "Naturkundemuseum", "Friedrichstraße", "Stadtmitte", "Mehringdamm", "Alt-Mariendorf"],
    },
  ],
  Singapore: [
    {
      name: "North-South",
      color: "#d42e12",
      stations: ["Jurong East", "Bishan", "Orchard", "City Hall", "Raffles Place", "Marina Bay"],
    },
    {
      name: "East-West",
      color: "#009645",
      stations: ["Changi Airport", "Tanah Merah", "Bugis", "City Hall", "Raffles Place", "Boon Lay"],
    },
  ],
  "Hong Kong": [
    {
      name: "Island Line",
      color: "#0860a8",
      stations: ["Kennedy Town", "Central", "Admiralty", "Causeway Bay", "North Point", "Chai Wan"],
    },
    {
      name: "Tsuen Wan Line",
      color: "#e2231a",
      stations: ["Tsuen Wan", "Mong Kok", "Jordan", "Tsim Sha Tsui", "Central", "Admiralty"],
    },
  ],
  Seoul: [
    {
      name: "Ligne 2",
      color: "#00a84d",
      stations: ["Euljiro 1(il)-ga", "Sindorim", "Gangnam", "Seolleung", "Hongik Univ.", "Konkuk Univ."],
    },
    {
      name: "Ligne 4",
      color: "#00a5de",
      stations: ["Seoul Station", "Myeong-dong", "Dongdaemun", "Hyehwa", "Sadang", "Ichon"],
    },
  ],
  Rome: [
    {
      name: "Linea A",
      color: "#ff6600",
      stations: ["Battistini", "Cornelia", "Ottaviano (San Pietro)", "Spagna", "Repubblica", "Termini"],
    },
    {
      name: "Linea B",
      color: "#0066b3",
      stations: ["Laurentina", "Piramide", "Colosseo", "Termini", "Policlinico", "Rebibbia"],
    },
  ],
  "Mexico City": [
    {
      name: "Línea 1",
      color: "#e4007c",
      stations: ["Observatorio", "Tacubaya", "Balderas", "Salto del Agua", "Pino Suárez", "Pantitlán"],
    },
    {
      name: "Línea 2",
      color: "#003da5",
      stations: ["Cuatro Caminos", "Tacuba", "Hidalgo", "Bellas Artes", "Zócalo", "Tasqueña"],
    },
  ],
  Toronto: [
    {
      name: "Ligne 1",
      color: "#f8c300",
      stations: ["Finch", "Sheppard-Yonge", "Bloor-Yonge", "Union", "St George", "Vaughan"],
    },
    {
      name: "Ligne 2",
      color: "#00a650",
      stations: ["Kipling", "Islington", "Bloor-Yonge", "Castle Frank", "Broadview", "Kennedy"],
    },
  ],
  Chicago: [
    {
      name: "Red Line",
      color: "#c60c30",
      stations: ["Howard", "Belmont", "Chicago", "Lake", "Roosevelt", "95th/Dan Ryan"],
    },
    {
      name: "Blue Line",
      color: "#00a1de",
      stations: ["O’Hare", "Logan Square", "Damen", "Clark/Lake", "UIC-Halsted", "Forest Park"],
    },
  ],
  Budapest: [
    {
      name: "M1 Földalatti",
      color: "#f5a800",
      stations: ["Vörösmarty tér", "Deák Ferenc tér", "Opera", "Oktogon", "Kodály körönd", "Mexikói út"],
    },
    {
      name: "M2",
      color: "#e4022e",
      stations: ["Déli pályaudvar", "Széll Kálmán tér", "Deák Ferenc tér", "Astoria", "Keleti pályaudvar", "Örs vezér tere"],
    },
  ],
  Montreal: [
    {
      name: "Ligne Orange",
      color: "#f07d00",
      stations: ["Côte-Vertu", "Lionel-Groulx", "Place-des-Arts", "Berri-UQAM", "Papineau", "Montmorency"],
    },
    {
      name: "Ligne Verte",
      color: "#008e4c",
      stations: ["Angrignon", "Lionel-Groulx", "Place-des-Arts", "Berri-UQAM", "Papineau", "Honoré-Beaugrand"],
    },
  ],
  Vancouver: [
    {
      name: "Expo Line",
      color: "#0060a9",
      stations: ["Waterfront", "Granville", "Main St–Science World", "Metrotown", "Surrey Central", "King George"],
    },
    {
      name: "Canada Line",
      color: "#4fb6cb",
      stations: ["Waterfront", "Yaletown-Roundhouse", "Broadway–City Hall", "Oakridge–41st", "Bridgeport", "Richmond–Brighouse"],
    },
  ],
  Dubai: [
    {
      name: "Red Line",
      color: "#e4022e",
      stations: ["Rashidiya", "Union", "BurJuman", "Business Bay", "Mall of the Emirates", "UAE Exchange"],
    },
    {
      name: "Green Line",
      color: "#00a651",
      stations: ["Etisalat", "Al Rigga", "Union", "BurJuman", "Al Jafiliya", "Creek"],
    },
  ],
  Stockholm: [
    {
      name: "Röda linjen",
      color: "#d71920",
      stations: ["Mörby centrum", "Östermalmstorg", "T-Centralen", "Slussen", "Gullmarsplan", "Norsborg"],
    },
    {
      name: "Gröna linjen",
      color: "#009645",
      stations: ["Hässelby strand", "Fridhemsplan", "T-Centralen", "Slussen", "Medborgarplatsen", "Farsta strand"],
    },
  ],
  Shanghai: [
    {
      name: "Ligne 1",
      color: "#e4022e",
      stations: ["Xinzhuang", "Shanghai South Railway", "People’s Square", "Shanghai Railway Station", "Hanzhong Road", "Fujin Road"],
    },
    {
      name: "Ligne 2",
      color: "#62bb46",
      stations: ["Hongqiao Airport", "Zhongshan Park", "People’s Square", "Nanjing East Road", "Century Park", "Pudong Airport"],
    },
  ],
};
