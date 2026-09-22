import Link from "next/link";
import NotifyButton from "@/components/NotifyButton";

export default function CreateTripPage() {
  return (
    <>
      <section className="hero shell" style={{ paddingBottom: 10 }}>
        <div className="eyebrow">Créer un voyage</div>
        <h1 style={{ maxWidth: 800 }}>Une idée suffit pour commencer.</h1>
        <p>On commence volontairement par très peu d’informations. Tout le reste se construit avec le groupe.</p>
      </section>
      <section className="section shell" style={{ paddingTop: 10 }}>
        <div className="creategrid">
          <article className="formcard">
            <h2>Votre projet</h2>
            <div className="formgrid">
              <label className="field">
                <small>Destination</small>
                <input defaultValue="Japon" />
              </label>
              <label className="field">
                <small>Période</small>
                <input defaultValue="Octobre" />
              </label>
              <label className="field">
                <small>Durée</small>
                <input defaultValue="14 jours" />
              </label>
              <label className="field">
                <small>Budget</small>
                <input defaultValue="2 000 € / personne" />
              </label>
              <label className="field full">
                <small>L’idée</small>
                <textarea rows={4} defaultValue="Tokyo, Kyoto et Osaka. Culture, food, quelques soirées, rythme tranquille." />
              </label>
            </div>
            <div className="actions">
              <NotifyButton className="btn primary" message="Projet créé en démonstration.">
                Publier le voyage
              </NotifyButton>
              <Link href="/mondo/trips" className="btn">
                Voir les projets
              </Link>
            </div>
          </article>
          <aside className="formcard" style={{ background: "var(--green2)" }}>
            <div className="eyebrow">Après publication</div>
            <h2>Mondo devient le dossier vivant du voyage.</h2>
            <p className="muted">
              Demandes, messages, décisions, itinéraire et budget restent attachés au même objet Trip.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
