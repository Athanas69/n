import Link from "next/link";
import TripGrid from "@/components/TripCard";
import MyTripsGrid from "@/components/MyTripsGrid";

export default function TripsPage() {
  return (
    <>
      <section className="hero shell" style={{ paddingBottom: 20 }}>
        <div className="eyebrow">Vos voyages</div>
        <h1>Ce que vous avez créé, en un seul endroit.</h1>
        <p>Vos voyages sont réels et enregistrés sur cet appareil : itinéraire, budget et checklist se retrouvent tels que vous les avez laissés.</p>
        <div className="actions">
          <Link href="/mondo/create" className="btn primary">
            Créer un nouveau voyage
          </Link>
        </div>
      </section>
      <section className="section shell" style={{ paddingTop: 10 }}>
        <MyTripsGrid />
      </section>

      <section className="section shell" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div>
            <div className="eyebrow">Voyages ouverts</div>
            <h2 style={{ fontSize: 28 }}>Rejoignez une aventure déjà en mouvement.</h2>
          </div>
          <p>Projets de démonstration pour montrer comment Mondo fonctionne en groupe.</p>
        </div>
        <TripGrid />
      </section>
    </>
  );
}
