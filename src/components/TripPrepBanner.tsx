import Link from "next/link";
import { getHotels, citySlug } from "@/lib/data";

function nightsBetween(a: string, b: string) {
  const ms = new Date(b).getTime() - new Date(a).getTime();
  return Math.max(1, Math.round(ms / 86400000));
}

export default function TripPrepBanner({
  city,
  checkin,
  checkout,
  travelers,
}: {
  city: string;
  checkin: string;
  checkout: string;
  travelers: number;
}) {
  const nights = nightsBetween(checkin, checkout);
  const hotels = getHotels(city);
  const comfort = hotels.filter((h) => h.tier === "Confort");
  const avgHotel = comfort.length
    ? Math.round(comfort.reduce((s, h) => s + h.price, 0) / comfort.length)
    : hotels[0]?.price ?? 100;
  const estTotal = avgHotel * nights + travelers * 150; // hotel + rough flight/activities placeholder

  return (
    <div className="tripprep">
      <div>
        <div className="eyebrow" style={{ color: "var(--green)" }}>
          Votre séjour
        </div>
        <h2 style={{ fontSize: 24 }}>
          {city}, {new Date(checkin).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })} →{" "}
          {new Date(checkout).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
        </h2>
        <p className="muted" style={{ fontSize: 12 }}>
          {nights} nuit{nights > 1 ? "s" : ""} · {travelers} voyageur{travelers > 1 ? "s" : ""} · budget estimé ≈{" "}
          {estTotal.toLocaleString("fr-FR")} € pour le groupe (hôtel milieu de gamme + base vols/activités)
        </p>
      </div>
      <div className="tripprep-actions">
        <Link href={`/atlas/hotels?city=${citySlug(city)}`} className="btn primary">
          Voir les hôtels
        </Link>
        <Link href={`/atlas/flights?city=${citySlug(city)}`} className="btn">
          Chercher le vol
        </Link>
      </div>
    </div>
  );
}
