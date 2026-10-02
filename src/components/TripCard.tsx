"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCity } from "@/lib/data";
import { demoTrips } from "@/lib/trips";
import { AUDIENCE_LABELS, AUDIENCE_OPTIONS, type TripAudience } from "@/lib/trips";

const FILTERS: Array<TripAudience | "Tous"> = ["Tous", ...AUDIENCE_OPTIONS];

export default function TripGrid() {
  const [filter, setFilter] = useState<TripAudience | "Tous">("Tous");

  const trips = useMemo(
    () => (filter === "Tous" ? demoTrips : demoTrips.filter((t) => t.audience === filter)),
    [filter]
  );

  return (
    <>
      <div className="tripfilters">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className={filter === f ? "tripfilter on" : "tripfilter"}
            onClick={() => setFilter(f)}
          >
            {f === "Tous" ? "Tous les voyages" : AUDIENCE_LABELS[f]}
          </button>
        ))}
      </div>

      {trips.length === 0 ? (
        <p className="muted" style={{ padding: "20px 0" }}>
          Aucun voyage « {AUDIENCE_LABELS[filter as TripAudience]} » pour l’instant — revenez bientôt, la communauté
          s’étoffe.
        </p>
      ) : (
        <div className="tripgrid">
          {trips.map((t) => {
            const city = getCity(t.city);
            return (
              <article className="tripcard" key={t.slug}>
                <Link href={`/mondo/trips/${t.slug}`} className="tripcard-photo">
                  <Image src={city.hero} alt={t.title} fill sizes="(max-width: 980px) 100vw, 33vw" />
                  <span className="verified tripcard-audience">{AUDIENCE_LABELS[t.audience]}</span>
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
      )}
    </>
  );
}
