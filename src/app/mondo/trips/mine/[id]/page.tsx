"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTrips, saveTrip, deleteTrip, newPackingId, type ItineraryDay, type PackingItem } from "@/lib/store";
import { getCity, citySlug } from "@/lib/data";
import { CITY_COORDS } from "@/lib/coords";
import LiveWeather from "@/components/LiveWeather";

function daysBetween(a: string, b: string) {
  const ms = new Date(b).getTime() - new Date(a).getTime();
  return Math.max(1, Math.round(ms / 86400000));
}

export default function MyTripPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const trips = useTrips();
  const trip = trips.find((t) => t.id === id);
  const router = useRouter();

  const [dayTitle, setDayTitle] = useState("");
  const [dayNotes, setDayNotes] = useState("");
  const [packingText, setPackingText] = useState("");

  if (!trip) {
    return (
      <section className="section shell" style={{ paddingTop: 60, textAlign: "center" }}>
        <h1>Voyage introuvable.</h1>
        <p className="muted">
          Ce voyage n’existe pas sur cet appareil — les voyages créés sont enregistrés localement, pas sur un
          serveur.
        </p>
        <Link href="/mondo/create" className="btn primary" style={{ marginTop: 16, display: "inline-flex" }}>
          Créer un voyage
        </Link>
      </section>
    );
  }

  const city = getCity(trip.city);
  const coords = CITY_COORDS[trip.city];
  const nights = daysBetween(trip.startDate, trip.endDate);
  const totalBudget = trip.budgetPerPerson * trip.travelers;

  function addDay(e: React.FormEvent) {
    e.preventDefault();
    if (!dayTitle.trim()) return;
    const next: ItineraryDay = { title: dayTitle.trim(), notes: dayNotes.trim() };
    saveTrip({ ...trip!, days: [...trip!.days, next] });
    setDayTitle("");
    setDayNotes("");
  }

  function removeDay(i: number) {
    saveTrip({ ...trip!, days: trip!.days.filter((_, idx) => idx !== i) });
  }

  function addPacking(e: React.FormEvent) {
    e.preventDefault();
    if (!packingText.trim()) return;
    const item: PackingItem = { id: newPackingId(), text: packingText.trim(), done: false };
    saveTrip({ ...trip!, packing: [...trip!.packing, item] });
    setPackingText("");
  }

  function togglePacking(itemId: string) {
    saveTrip({
      ...trip!,
      packing: trip!.packing.map((p) => (p.id === itemId ? { ...p, done: !p.done } : p)),
    });
  }

  function removePacking(itemId: string) {
    saveTrip({ ...trip!, packing: trip!.packing.filter((p) => p.id !== itemId) });
  }

  function handleDelete() {
    if (!confirm("Supprimer ce voyage ? Cette action est définitive sur cet appareil.")) return;
    deleteTrip(trip!.id);
    router.push("/mondo/trips");
  }

  return (
    <>
      <section className="cityhero shell">
        <div className="cityphoto" style={{ height: 280 }}>
          <img src={city.hero} alt={trip.city} />
          <div className="citytitle">
            <div className="eyebrow" style={{ color: "#fff" }}>
              Votre voyage
            </div>
            <h1>{trip.title}</h1>
            <p>
              {trip.city} · {new Date(trip.startDate).toLocaleDateString("fr-FR")} –{" "}
              {new Date(trip.endDate).toLocaleDateString("fr-FR")} · {nights} nuits · {trip.travelers} voyageur
              {trip.travelers > 1 ? "s" : ""}
            </p>
          </div>
        </div>
        <div className="facts" style={{ marginTop: 16 }}>
          <div className="fact">
            <small>Budget total</small>
            <b>{totalBudget.toLocaleString("fr-FR")} €</b>
          </div>
          <div className="fact">
            <small>Budget / personne</small>
            <b>{trip.budgetPerPerson.toLocaleString("fr-FR")} €</b>
          </div>
          <div className="fact">
            <small>Étapes planifiées</small>
            <b>{trip.days.length}</b>
          </div>
          <div className="fact">
            <small>Bagages cochés</small>
            <b>
              {trip.packing.filter((p) => p.done).length}/{trip.packing.length}
            </b>
          </div>
        </div>
        {coords && (
          <div style={{ marginTop: 8 }}>
            <LiveWeather lat={coords.lat} lon={coords.lon} />
          </div>
        )}
      </section>

      <section className="section shell" style={{ paddingTop: 10 }}>
        <div className="triproom">
          <section className="panel">
            <h2>Itinéraire</h2>
            {trip.days.length === 0 && <p className="muted">Aucune étape pour l’instant. Ajoutez la première.</p>}
            <div className="timeline">
              {trip.days.map((d, i) => (
                <div className="timeitem" key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                    <b>{d.title}</b>
                    <button type="button" className="btn" style={{ padding: "4px 9px", fontSize: 10 }} onClick={() => removeDay(i)}>
                      Retirer
                    </button>
                  </div>
                  {d.notes && <p className="muted">{d.notes}</p>}
                </div>
              ))}
            </div>
            <form onSubmit={addDay} className="formgrid" style={{ marginTop: 14 }}>
              <label className="field">
                <small>Étape / jour</small>
                <input placeholder="Jour 1 — Arrivée" value={dayTitle} onChange={(e) => setDayTitle(e.target.value)} />
              </label>
              <label className="field">
                <small>Notes</small>
                <input placeholder="Check-in, premier repas…" value={dayNotes} onChange={(e) => setDayNotes(e.target.value)} />
              </label>
              <button type="submit" className="btn primary full" style={{ gridColumn: "1/-1" }}>
                Ajouter à l’itinéraire
              </button>
            </form>
          </section>

          <aside className="panel">
            <h2>Checklist bagages</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 10 }}>
              {trip.packing.map((p) => (
                <label key={p.id} className="joinrequest" style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                  <input type="checkbox" checked={p.done} onChange={() => togglePacking(p.id)} />
                  <span style={{ flex: 1, textDecoration: p.done ? "line-through" : "none", opacity: p.done ? 0.55 : 1 }}>
                    {p.text}
                  </span>
                  <button
                    type="button"
                    onClick={() => removePacking(p.id)}
                    style={{ border: 0, background: "transparent", color: "var(--muted)", fontSize: 11 }}
                  >
                    ×
                  </button>
                </label>
              ))}
              {trip.packing.length === 0 && <p className="muted">Rien dans la valise pour l’instant.</p>}
            </div>
            <form onSubmit={addPacking} style={{ display: "flex", gap: 6, marginTop: 12 }}>
              <input
                className="field"
                style={{ flex: 1, border: "1px solid var(--line)" }}
                placeholder="Ajouter un objet…"
                value={packingText}
                onChange={(e) => setPackingText(e.target.value)}
              />
              <button type="submit" className="btn">
                Ajouter
              </button>
            </form>
          </aside>
        </div>

        <div className="actions" style={{ marginTop: 20 }}>
          <Link href={`/atlas/${citySlug(trip.city)}`} className="btn primary">
            Préparer {trip.city} dans Atlas
          </Link>
          <Link href="/mondo/trips" className="btn">
            Tous vos voyages
          </Link>
          <button type="button" className="btn" onClick={handleDelete} style={{ marginLeft: "auto", color: "#b3413f" }}>
            Supprimer ce voyage
          </button>
        </div>
      </section>
    </>
  );
}
