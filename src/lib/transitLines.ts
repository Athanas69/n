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
  ],
};
