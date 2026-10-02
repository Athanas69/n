"use client";

import { useMemo, useState } from "react";
import NotifyButton from "./NotifyButton";
import { generateFlights, filterAndSortFlights, getOriginNames, type FlightSort } from "@/lib/flights";

const CABINS = ["Économique", "Premium éco", "Affaires"];

function todayPlus(days: number) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export default function FlightSearchForm({ cityName, destAirport }: { cityName: string; destAirport: string }) {
  const origins = getOriginNames();
  const [origin, setOrigin] = useState(origins[0]);
  const [tripType, setTripType] = useState<"round" | "oneway">("round");
  const [depart, setDepart] = useState(todayPlus(21));
  const [ret, setRet] = useState(todayPlus(35));
  const [travelers, setTravelers] = useState(1);
  const [cabin, setCabin] = useState(CABINS[0]);
  const [searched, setSearched] = useState(false);

  const [directOnly, setDirectOnly] = useState(false);
  const [baggageOnly, setBaggageOnly] = useState(false);
  const [sort, setSort] = useState<FlightSort>("price");

  const allOffers = useMemo(
    () => generateFlights({ origin, destCity: cityName, cabin, travelers, tripType, depart }),
    [origin, cityName, cabin, travelers, tripType, depart]
  );

  const offers = useMemo(
    () => filterAndSortFlights(allOffers, { directOnly, baggageOnly }, sort),
    [allOffers, directOnly, baggageOnly, sort]
  );

  const cheapestId = useMemo(() => {
    if (allOffers.length === 0) return null;
    return [...allOffers].sort((a, b) => a.pricePerPerson - b.pricePerPerson)[0].id;
  }, [allOffers]);

  const fastestId = useMemo(() => {
    if (allOffers.length === 0) return null;
    return [...allOffers].sort((a, b) => a.durationMinutes - b.durationMinutes)[0].id;
  }, [allOffers]);

  return (
    <div className="flightsearch">
      <h2>
        {origin} → {cityName}
      </h2>
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
            {origins.map((o) => (
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
        <div className="flightresults">
          <div className="flightfilters">
            <button
              type="button"
              className={directOnly ? "flightfilter on" : "flightfilter"}
              onClick={() => setDirectOnly((v) => !v)}
              aria-pressed={directOnly}
            >
              Vols directs uniquement
            </button>
            <button
              type="button"
              className={baggageOnly ? "flightfilter on" : "flightfilter"}
              onClick={() => setBaggageOnly((v) => !v)}
              aria-pressed={baggageOnly}
            >
              Bagage en soute inclus
            </button>
            <label className="flightsort">
              <small>Trier par</small>
              <select value={sort} onChange={(e) => setSort(e.target.value as FlightSort)}>
                <option value="price">Prix</option>
                <option value="duration">Durée</option>
              </select>
            </label>
          </div>

          <p className="flightresults-count">
            {offers.length} vol{offers.length > 1 ? "s" : ""} trouvé{offers.length > 1 ? "s" : ""}
            {(directOnly || baggageOnly) && offers.length !== allOffers.length ? ` sur ${allOffers.length}` : ""} ·
            plusieurs compagnies comparées
          </p>

          {offers.length === 0 ? (
            <p className="muted" style={{ padding: "20px 0" }}>
              Aucun vol ne correspond à ces filtres — essayez de désactiver « vols directs uniquement » ou « bagage
              inclus ».
            </p>
          ) : (
            <div className="flightresults-list">
              {offers.map((o) => (
                <article className="flightrow" key={o.id}>
                  <div className="flightrow-airline">
                    <span className="flightrow-badge">{o.airlineCode}</span>
                    <div>
                      <b>{o.airline}</b>
                      {o.id === cheapestId && <span className="flighttag cheapest">Moins cher</span>}
                      {o.id === fastestId && o.id !== cheapestId && <span className="flighttag fastest">Plus rapide</span>}
                    </div>
                  </div>
                  <div className="flightrow-times">
                    <div className="flightrow-time">
                      <b>{o.departTime}</b>
                      <small>{origin}</small>
                    </div>
                    <div className="flightrow-path">
                      <small>{o.durationLabel}</small>
                      <span className="flightrow-line" />
                      <small>{o.stops === 0 ? "Direct" : `${o.stops} escale${o.stops > 1 ? "s" : ""}${o.stopCity ? " · " + o.stopCity : ""}`}</small>
                    </div>
                    <div className="flightrow-time">
                      <b>
                        {o.arriveTime}
                        {o.arriveNextDay && <span className="flightrow-nextday">+1</span>}
                      </b>
                      <small>{cityName}</small>
                    </div>
                  </div>
                  <div className="flightrow-baggage">
                    {o.baggageIncluded ? (
                      <span className="flighttag baggage-yes">Bagage inclus</span>
                    ) : (
                      <span className="flighttag baggage-no">Bagage en option</span>
                    )}
                  </div>
                  <div className="flightrow-price">
                    <b>{o.pricePerPerson.toLocaleString("fr-FR")} €</b>
                    <small className="muted">
                      par pers. · {o.totalPrice.toLocaleString("fr-FR")} € total
                    </small>
                    <NotifyButton className="btn primary" message="La réservation en ligne arrive très prochainement.">
                      Voir l’offre
                    </NotifyButton>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
