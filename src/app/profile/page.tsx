"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AlfredPanel, { AlfredFab } from "@/components/AlfredPanel";
import { useProfile, saveProfile, useTrips, useFavorites } from "@/lib/store";
import DataBackup from "@/components/DataBackup";

const INTEREST_OPTIONS = [
  "Aventure",
  "Nature",
  "Culture",
  "Nightlife",
  "Gastronomie",
  "Détente",
  "Plage",
  "Rando",
  "Photo",
  "Budget",
  "Luxe",
  "Roadtrip",
];

export default function ProfilePage() {
  const profile = useProfile();
  const trips = useTrips();
  const favorites = useFavorites();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [interests, setInterests] = useState<string[]>(profile.interests);

  function startEditing() {
    setName(profile.name);
    setBio(profile.bio);
    setInterests(profile.interests);
    setEditing(true);
  }

  function toggleInterest(tag: string) {
    setInterests((cur) => (cur.includes(tag) ? cur.filter((t) => t !== tag) : [...cur, tag]));
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    saveProfile({ name: name.trim() || "Voyageur Mondo", bio: bio.trim(), interests });
    setEditing(false);
  }

  return (
    <main className="theme-mondo">
      <Nav mode="MONDO" />
      <section className="hero shell" style={{ paddingBottom: 20 }}>
        <div className="eyebrow">Profil voyageur</div>
        <h1>{profile.name}</h1>
        <p>{profile.bio}</p>
        {!editing && (
          <div className="actions">
            <button className="btn primary" onClick={startEditing}>
              Modifier le profil
            </button>
          </div>
        )}
      </section>

      <section className="section shell" style={{ paddingTop: 10 }}>
        <div className="facts">
          <div className="fact">
            <small>Voyages créés</small>
            <b>{trips.length}</b>
          </div>
          <div className="fact">
            <small>Favoris</small>
            <b>{favorites.length}</b>
          </div>
          <div className="fact">
            <small>Centres d’intérêt</small>
            <b>{profile.interests.length}</b>
          </div>
          <div className="fact">
            <Link href="/favorites">Voir mes favoris →</Link>
          </div>
        </div>
      </section>

      {editing ? (
        <section className="section shell" style={{ paddingTop: 10 }}>
          <form className="formcard" onSubmit={handleSave} style={{ maxWidth: 640 }}>
            <h2>Modifier le profil</h2>
            <div className="formgrid" style={{ marginTop: 14 }}>
              <label className="field full">
                <small>Nom</small>
                <input value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <label className="field full">
                <small>Bio</small>
                <textarea rows={3} value={bio} onChange={(e) => setBio(e.target.value)} />
              </label>
            </div>
            <div style={{ marginTop: 14 }}>
              <small className="muted" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".1em" }}>
                Centres d’intérêt
              </small>
              <div className="hoodtags" style={{ marginTop: 8 }}>
                {INTEREST_OPTIONS.map((tag) => (
                  <button
                    type="button"
                    key={tag}
                    className="tag"
                    style={
                      interests.includes(tag)
                        ? { background: "var(--ink)", color: "#fff" }
                        : { cursor: "pointer" }
                    }
                    onClick={() => toggleInterest(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className="actions" style={{ marginTop: 16 }}>
              <button type="submit" className="btn primary">
                Enregistrer
              </button>
              <button type="button" className="btn" onClick={() => setEditing(false)}>
                Annuler
              </button>
            </div>
          </form>
        </section>
      ) : (
        <section className="section shell" style={{ paddingTop: 10 }}>
          <div className="profilegrid">
            <article className="profilecard">
              <h2>Centres d’intérêt</h2>
              {profile.interests.length === 0 ? (
                <p className="muted">Aucun centre d’intérêt renseigné.</p>
              ) : (
                <div className="hoodtags">
                  {profile.interests.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
            <article className="profilecard">
              <h2>Vos voyages</h2>
              {trips.length === 0 ? (
                <p className="muted">Aucun voyage créé pour l’instant.</p>
              ) : (
                trips.slice(0, 4).map((t) => (
                  <div className="interest" key={t.id}>
                    <Link href={`/mondo/trips/mine/${t.id}`}>
                      <b>{t.title}</b>
                    </Link>
                    <span>{t.city}</span>
                  </div>
                ))
              )}
            </article>
          </div>
          <div style={{ marginTop: 11 }}>
            <DataBackup />
          </div>
        </section>
      )}

      <Footer />
      <AlfredFab />
      <AlfredPanel />
    </main>
  );
}
