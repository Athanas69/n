import TripGrid from "@/components/TripCard";

export default function TripsPage() {
  return (
    <>
      <section className="hero shell" style={{ paddingBottom: 20 }}>
        <div className="eyebrow">Voyages ouverts</div>
        <h1>Rejoignez une aventure déjà en mouvement.</h1>
        <p>Chaque projet expose dates, budget, itinéraire et personnes présentes avant même d’envoyer une demande.</p>
      </section>
      <section className="section shell" style={{ paddingTop: 10 }}>
        <TripGrid />
      </section>
    </>
  );
}
