import Link from "next/link";
import NotifyButton from "./NotifyButton";
import { getHotels, citySlug } from "@/lib/data";

const IMAGES = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=88",
];

export default function HotelGrid({ city }: { city: string }) {
  const hotels = getHotels(city);
  return (
    <>
      <div className="hotelgrid">
        {hotels.map((h, i) => (
          <article className="stay" key={h.name + h.tier}>
            <div className="stayimg">
              <img src={h.image ?? IMAGES[i % 3]} alt={h.name} />
              <span className="verified" style={{ position: "absolute", left: 10, top: 10 }}>
                {h.tier}
              </span>
            </div>
            <div className="staybody">
              <h3>{h.name}</h3>
              <p>{h.desc}</p>
              <div className="staymeta">
                <span>
                  <span className="source">ATLAS CANDIDATE</span>
                  <br />
                  <small>
                    {h.neighborhood} · {h.score}/10
                  </small>
                </span>
                <span className="stayprice">{h.price} €</span>
              </div>
              <div className="stayactions">
                <NotifyButton className="btn" message="Fiche Atlas : literie, douche, bruit, breakfast, défauts.">
                  Voir la fiche
                </NotifyButton>
                <NotifyButton className="btn primary" message="Réservation affiliée à connecter.">
                  Réserver
                </NotifyButton>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="actions">
        <Link href={`/atlas/hotels?city=${citySlug(city)}`} className="btn primary">
          Voir tous les logements
        </Link>
        <Link href={`/atlas/flights?city=${citySlug(city)}`} className="btn">
          Chercher le vol
        </Link>
      </div>
    </>
  );
}
