import Link from "next/link";
import { getHotels, citySlug } from "@/lib/data";

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
];

export default function NavHotelPreview({ city }: { city: string }) {
  const hotels = getHotels(city).filter((h) => h.tier === "Confort").slice(0, 3);

  return (
    <div className="navpreview">
      <div className="navpreview-head">
        <small>Hôtels à {city}</small>
      </div>
      <div className="navpreview-grid">
        {hotels.map((h, i) => (
          <Link href={`/atlas/hotels?city=${citySlug(city)}`} className="navpreview-card" key={h.name}>
            <img src={h.image ?? FALLBACK_IMAGES[i % 3]} alt={h.name} />
            <b>{h.name}</b>
            <span>{h.price} €</span>
          </Link>
        ))}
      </div>
      <Link href={`/atlas/hotels?city=${citySlug(city)}`} className="navpreview-more">
        Voir tous les hôtels de {city} →
      </Link>
    </div>
  );
}
