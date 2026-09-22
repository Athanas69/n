"use client";

import { useMemo, useState } from "react";
import NotifyButton from "./NotifyButton";

const ORIGINS = ["Paris (CDG / Orly)", "Lyon (LYS)", "Marseille (MRS)", "Bruxelles (BRU)", "Genève (GVA)", "Montréal (YUL)"];
const CABINS = ["Économique", "Premium éco", "Affaires"];
const CABIN_MULT: Record<string, number> = { "Économique": 1, "Premium éco": 1.65, Affaires: 2.9 };

const BASE_OFFERS: Array<[tag: string, subtitle: string, base: number, desc: string]> = [
  ["Prix minimum", "1 escale · arrivée tardive", 548, "Vous économisez, mais perdez probablement votre première soirée."],
  ["Choix Atlas", "1 escale courte · bons horaires", 612, "Le meilleur compromis pour un premier jour réussi."],
  ["Direct", "Temps et fatigue minimisés", 742, "Plus cher, mais vous arrivez frais pour commencer le voyage."],
];

function todayPlus(days: number) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export default function FlightSearchForm({ cityName, destAirport }: { cityName: string; destAirport: string }) {
  const [origin, setOrigin] = useState(ORIGINS[0]);
  const [tripType, setTripType] = useState<"round" | "oneway">("round");
  const [depart, setDepart] = useState(todayPlus(21));
  const [ret, setRet] = useState(todayPlus(35));
  const [travelers, setTravelers] = useState(1);
  const [cabin, setCabin] = useState(CABINS[0]);
  const [searched, setSearched] = useState(false);

  const offers = useMemo(() => {
    const cabinMult = CABIN_MULT[cabin] ?? 1;
    const tripMult = tripType === "oneway" ? 0.62 : 1;
    return BASE_OFFERS.map(([tag, subtitle, base, desc]) => {
      const perPerson = Math.round(base * cabinMult * tripMult);
      return { tag, subtitle, desc, perPerson, total: perPerson * travelers };
    });
  }, [cabin, tripType, travelers]);

  return (
    <div className="flightsearch">
      <h2>{origin.split(" (")[0]} → {cityName}</h2>
      <div className="tabs">
        <button type="button" className={tripType === "round" ? "on" : ""} onClick={() => setTripType("round")}>
          Aller-retour
        </button>
        <button type="button" className={tripType === "oneway" ? "on" : ""} onClick={() => setTripType("oneway")}>
          Aller simple
        </button>
      </div>
      <div className="flightform">
        <label className="flightfield">
          <small>Départ de</small>
          <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
            {ORIGINS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
        <div className="flightfield">
          <small>Destination</small>
          <b style={{ display: "block", paddingTop: 4, fontSize: 12 }}>
            {cityName} ({destAirport})
          </b>
        </div>
        <label className="flightfield">
          <small>Voyageurs</small>
          <select value={travelers} onChange={(e) => setTravelers(Number(e.target.value))}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} voyageur{n > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </label>
        <label className="flightfield">
          <small>Aller</small>
          <input type="date" value={depart} onChange={(e) => setDepart(e.target.value)} />
        </label>
        <label className="flightfield">
          <small>Retour</small>
          <input
            type="date"
            value={ret}
            min={depart}
            disabled={tripType === "oneway"}
            onChange={(e) => setRet(e.target.value)}
          />
        </label>
        <label className="flightfield">
          <small>Classe</small>
          <select value={cabin} onChange={(e) => setCabin(e.target.value)}>
            {CABINS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="flightform-actions">
        <button type="button" className="btn primary" onClick={() => setSearched(true)}>
          Rechercher
        </button>
      </div>

      {searched && (
        <div className="flightoptions">
          {offers.map((o) => (
            <article className="flightcard" key={o.tag}>
              <span className="tag">{o.tag}</span>
              <h3>{o.subtitle}</h3>
              <div className="flightprice">{o.perPerson.toLocaleString("fr-FR")} €</div>
              <p className="muted" style={{ fontSize: 10, margin: "2px 0 8px" }}>
                par personne · {o.total.toLocaleString("fr-FR")} € au total pour {travelers} voyageur
                {travelers > 1 ? "s" : ""}
              </p>
              <p>{o.desc}</p>
              <NotifyButton className="btn primary" message="Lien de réservation partenaire à connecter.">
                Voir l’offre
              </NotifyButton>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
