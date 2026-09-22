"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CITY_NAMES, getCity } from "@/lib/data";
import { saveTrip, newTripId, type UserTrip } from "@/lib/store";

function defaultDates() {
  const start = new Date();
  start.setDate(start.getDate() + 30);
  const end = new Date(start);
  end.setDate(end.getDate() + 7);
  const iso = (d: Date) => d.toISOString().slice(0, 10);
  return { start: iso(start), end: iso(end) };
}

export default function CreateTripPage() {
  const router = useRouter();
  const { start, end } = defaultDates();
  const [title, setTitle] = useState("");
  const [city, setCity] = useState(CITY_NAMES[0]);
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);
  const [travelers, setTravelers] = useState(2);
  const [budget, setBudget] = useState(1500);
  const [notes, setNotes] = useState("");
  const [story, setStory] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trip: UserTrip = {
      id: newTripId(),
      title: title.trim() || `Voyage à ${city}`,
      city,
      startDate,
      endDate,
      travelers,
      budgetPerPerson: budget,
      notes,
      story,
      days: [],
      packing: [],
      createdAt: Date.now(),
    };
    saveTrip(trip);
    router.push(`/mondo/trips/mine/${trip.id}`);
  }

  return (
    <>
      <section className="hero shell" style={{ paddingBottom: 10 }}>
        <div className="eyebrow">Créer un voyage</div>
        <h1 style={{ maxWidth: 800 }}>Une idée suffit pour commencer.</h1>
        <p>Ce voyage est réel : il est enregistré sur cet appareil et vous pourrez y revenir, l’éditer, le compléter.</p>
      </section>
      <section className="section shell" style={{ paddingTop: 10 }}>
        <form className="creategrid" onSubmit={handleSubmit}>
          <article className="formcard">
            <h2>Votre projet</h2>
            <div className="formgrid">
              <label className="field full">
                <small>Titre du voyage</small>
                <input
                  placeholder={`Voyage à ${city}`}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label className="field">
                <small>Destination</small>
                <select value={city} onChange={(e) => setCity(e.target.value)} style={{ width: "100%", border: 0, background: "transparent", color: "inherit", outline: 0 }}>
                  {CITY_NAMES.map((name) => (
                    <option key={name} value={name}>
                      {name} — {getCity(name).country}
                    </option>
                  ))}
                </select>
              </label>
              <label className="field">
                <small>Voyageurs</small>
                <input
                  type="number"
                  min={1}
                  value={travelers}
                  onChange={(e) => setTravelers(Math.max(1, Number(e.target.value)))}
                />
              </label>
              <label className="field">
                <small>Départ</small>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              </label>
              <label className="field">
                <small>Retour</small>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              </label>
              <label className="field">
                <small>Budget / personne (€)</small>
                <input
                  type="number"
                  min={0}
                  value={budget}
                  onChange={(e) => setBudget(Math.max(0, Number(e.target.value)))}
                />
              </label>
              <label className="field full">
                <small>L’idée en une ligne</small>
                <textarea
                  rows={2}
                  placeholder="Culture, food, quelques soirées, rythme tranquille…"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </label>
              <label className="field full">
                <small>Présentez le voyage</small>
                <textarea
                  rows={6}
                  placeholder="Qui organise, pourquoi cette destination, à quoi ressemblera le séjour, qui est le bienvenu… Comme une vraie annonce, pas juste une case à remplir."
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                />
              </label>
            </div>
            <div className="actions">
              <button type="submit" className="btn primary">
                Créer le voyage
              </button>
            </div>
          </article>
          <aside className="formcard" style={{ background: "var(--green2)" }}>
            <div className="eyebrow">Après publication</div>
            <h2>Mondo devient le dossier vivant du voyage.</h2>
            <p className="muted">
              Vous arrivez directement sur votre Trip Room : itinéraire jour par jour, budget et checklist bagages,
              tout reste sauvegardé sur cet appareil.
            </p>
          </aside>
        </form>
      </section>
    </>
  );
}
