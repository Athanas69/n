"use client";

import Link from "next/link";
import { useTrips } from "@/lib/store";
import { getCity } from "@/lib/data";

export default function MyTripsGrid() {
  const trips = useTrips();

  if (trips.length === 0) {
    return (
      <div className="formcard" style={{ background: "var(--green2)" }}>
        <h3>Aucun voyage créé pour l’instant.</h3>
        <p className="muted">Vos voyages créés apparaîtront ici, enregistrés sur cet appareil.</p>
        <Link href="/mondo/create" className="btn primary" style={{ marginTop: 10, display: "inline-flex" }}>
          Créer un voyage
        </Link>
      </div>
    );
  }

  return (
    <div className="tripgrid">
      {trips.map((t) => {
        const city = getCity(t.city);
        return (
          <Link href={`/mondo/trips/mine/${t.id}`} className="tripcard" key={t.id}>
            <img src={city.hero} alt={t.title} />
            <div className="tripbody">
              <h3>{t.title}</h3>
              <p className="muted">
                {t.city} · {new Date(t.startDate).toLocaleDateString("fr-FR")}
              </p>
              <div className="tripmeta">
                <span className="tag">
                  {t.travelers} voyageur{t.travelers > 1 ? "s" : ""}
                </span>
                <b>{(t.budgetPerPerson * t.travelers).toLocaleString("fr-FR")} €</b>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
