"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ALFRED_EVENT } from "@/lib/notify";
import { citySlug } from "@/lib/data";
import { useTrips } from "@/lib/store";
import { ArrowheadMark } from "./Mark";

export function AlfredFab() {
  return (
    <button
      className="alfredfab"
      onClick={() => window.dispatchEvent(new Event(ALFRED_EVENT))}
    >
      <ArrowheadMark size={16} />
      Demander à Alfred
    </button>
  );
}

function daysUntil(dateStr: string) {
  const ms = new Date(dateStr).getTime() - Date.now();
  return Math.ceil(ms / 86400000);
}

export default function AlfredPanel() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const trips = useTrips();
  const trip = trips[0];

  useEffect(() => {
    function handle() {
      setOpen(true);
    }
    window.addEventListener(ALFRED_EVENT, handle);
    return () => window.removeEventListener(ALFRED_EVENT, handle);
  }, []);

  function goToCity(city: string) {
    window.localStorage.setItem("atlasCity", city);
    setOpen(false);
    router.push(`/atlas/${citySlug(city)}`);
  }

  const departureIn = trip ? daysUntil(trip.startDate) : null;

  return (
    <aside id="alfred" className={open ? "open" : ""}>
      <button className="btn" style={{ float: "right" }} onClick={() => setOpen(false)}>
        ×
      </button>
      <div className="eyebrow" style={{ color: "#bad4c8" }}>
        Alfred
      </div>
      <h2>Je maintiens le voyage cohérent.</h2>

      {trip ? (
        <>
          <div className="alfredcard">
            <b>{trip.title}</b>
            <br />
            {trip.city} · {new Date(trip.startDate).toLocaleDateString("fr-FR")} –{" "}
            {new Date(trip.endDate).toLocaleDateString("fr-FR")} · {trip.travelers} voyageur
            {trip.travelers > 1 ? "s" : ""} · budget {(trip.budgetPerPerson * trip.travelers).toLocaleString("fr-FR")} €
          </div>
          <div className="alfredcard">
            <b>{departureIn !== null && departureIn >= 0 ? `Départ dans ${departureIn} jour${departureIn > 1 ? "s" : ""}` : "Départ déjà passé"}</b>
            <br />
            {trip.days.length === 0
              ? "Aucune étape planifiée pour l’instant — commencez l’itinéraire pour ce voyage."
              : `${trip.days.length} étape${trip.days.length > 1 ? "s" : ""} déjà planifiée${trip.days.length > 1 ? "s" : ""}.`}
            {trip.packing.length > 0 && (
              <>
                {" "}
                Checklist bagages : {trip.packing.filter((p) => p.done).length}/{trip.packing.length}.
              </>
            )}
          </div>
          <div className="actions">
            <button className="btn" onClick={() => { setOpen(false); router.push(`/mondo/trips/mine/${trip.id}`); }}>
              Ouvrir le voyage
            </button>
            <button className="btn" onClick={() => goToCity(trip.city)}>
              Préparer {trip.city}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="alfredcard">
            Vous n’avez pas encore de voyage. Créez-en un dans Mondo — je garde ensuite l’itinéraire, le budget et
            la checklist cohérents jusqu’au départ.
          </div>
          <button
            className="btn"
            onClick={() => {
              setOpen(false);
              router.push("/mondo/create");
            }}
          >
            Créer un voyage
          </button>
        </>
      )}
    </aside>
  );
}
