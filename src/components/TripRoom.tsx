"use client";

import { useState } from "react";
import Link from "next/link";
import NotifyButton from "./NotifyButton";
import type { Trip } from "@/lib/data";

const TABS = [
  { key: "overview", label: "Vue d’ensemble" },
  { key: "decisions", label: "Décisions" },
  { key: "chat", label: "Discussion" },
  { key: "budget", label: "Budget" },
  { key: "bookings", label: "Réservations" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export default function TripRoom({ trip }: { trip: Trip }) {
  const [tab, setTab] = useState<TabKey>("overview");

  return (
    <>
      <section className="hero shell" style={{ paddingBottom: 20 }}>
        <div className="eyebrow">Trip Room · JP-1048</div>
        <h1>{trip.title}</h1>
        <p>
          {trip.dates} · {trip.budget} · {trip.members.length} voyageurs
        </p>
      </section>
      <section className="section shell" style={{ paddingTop: 0 }}>
        <div className="triproom">
          <section className="panel">
            <div className="tabs">
              {TABS.map((t) => (
                <button key={t.key} className={tab === t.key ? "on" : ""} onClick={() => setTab(t.key)}>
                  {t.label}
                </button>
              ))}
            </div>
            <TabContent tab={tab} trip={trip} />
          </section>
          <aside className="panel">
            <div className="eyebrow">Alfred</div>
            <h2>Le voyage est prêt à passer dans Atlas.</h2>
            <p className="muted">Dates, membres, itinéraire et budget sont déjà connus.</p>
            <Link href="/atlas/tokyo" className="btn primary">
              Préparer Tokyo dans Atlas
            </Link>
            <div className="joinrequest">
              <b>Lina souhaite rejoindre</b>
              <p>“J’adore culture + food, budget OK.”</p>
              <div className="actions">
                <NotifyButton className="btn soft" message="Lina acceptée.">
                  Accepter
                </NotifyButton>
                <NotifyButton className="btn" message="Discussion ouverte avec Lina.">
                  Discuter
                </NotifyButton>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function TabContent({ tab, trip }: { tab: TabKey; trip: Trip }) {
  if (tab === "overview") {
    return (
      <>
        <h2>Itinéraire</h2>
        <div className="timeline">
          {trip.route.map((r) => (
            <div className="timeitem" key={r}>
              <b>{r}</b>
              <p className="muted">Décisions et réservations liées à cette étape.</p>
            </div>
          ))}
        </div>
      </>
    );
  }
  if (tab === "decisions") {
    return (
      <>
        <h2>Decision Room</h2>
        {trip.decisions.map((d) => (
          <div className="decision" key={d.q}>
            <div className="decision-head">
              <b>{d.q}</b>
              <span className="tag">{d.status}</span>
            </div>
            <p>{d.result}</p>
            {d.status === "Ouvert" && (
              <div className="vote">
                <NotifyButton message="Vote enregistré : Shibuya">Shibuya</NotifyButton>
                <NotifyButton message="Vote enregistré : Shinjuku">Shinjuku</NotifyButton>
              </div>
            )}
          </div>
        ))}
      </>
    );
  }
  if (tab === "chat") {
    return (
      <>
        <h2>Discussion</h2>
        <div className="chat">
          <div className="bubble">Sarah : Shibuya pour les soirées ?</div>
          <div className="bubble me">Je préfère Shinjuku pour les transports.</div>
          <div className="bubble">Alfred : je peux comparer les deux selon votre programme.</div>
        </div>
      </>
    );
  }
  if (tab === "budget") {
    return (
      <>
        <h2>Budget partagé</h2>
        <div className="facts">
          <div className="fact">
            <small>Vol</small>
            <b>620 €</b>
          </div>
          <div className="fact">
            <small>Hôtels</small>
            <b>840 €</b>
          </div>
          <div className="fact">
            <small>Transport</small>
            <b>160 €</b>
          </div>
          <div className="fact">
            <small>Marge</small>
            <b>380 €</b>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <h2>Réservations</h2>
      <p className="muted">Aucune réservation confirmée. Atlas peut maintenant chercher vols et logements.</p>
      <Link href="/atlas" className="btn primary">
        Ouvrir Atlas
      </Link>
    </>
  );
}
