import Link from "next/link";
import { getCity } from "@/lib/data";
import { demoTrips } from "@/lib/trips";

export default function TripGrid() {
  return (
    <div className="tripgrid">
      {demoTrips.map((t) => {
        const city = getCity(t.city);
        return (
          <article className="tripcard" key={t.slug}>
            <Link href={`/mondo/trips/${t.slug}`}>
              <img src={city.hero} alt={t.title} />
            </Link>
            <div className="tripbody">
              <Link href={`/mondo/trips/${t.slug}`}>
                <h3>{t.title}</h3>
              </Link>
              <p className="muted">
                {t.route.map((s) => s.city).join(" → ")} · {t.dates}
              </p>
              <div className="tripmeta">
                <div className="faces">
                  {t.members.map((m) => (
                    <span className="face" key={m}>
                      {m.slice(0, 2).toUpperCase()}
                    </span>
                  ))}
                </div>
                <b>{t.budget}</b>
              </div>
              <div className="trip-actions">
                <Link href={`/mondo/trips/${t.slug}`} className="btn">
                  Voir le voyage
                </Link>
                <Link href="/mondo/join" className="btn primary">
                  Demander à rejoindre
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
