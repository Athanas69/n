import TripGrid from "@/components/TripCard";
import MemberGrid from "@/components/MemberGrid";

export default function CommunityPage() {
  return (
    <>
      <section className="hero shell" style={{ paddingBottom: 20 }}>
        <div className="eyebrow">Communauté</div>
        <h1>Des conversations qui deviennent des départs.</h1>
        <p>Les posts restent centrés sur des projets réels de voyage.</p>
      </section>
      <section className="section shell" style={{ paddingTop: 10 }}>
        <TripGrid />
      </section>
      <section className="section shell" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div>
            <div className="eyebrow">Voyageurs</div>
            <h2>Des profils vérifiés, pas des inconnus.</h2>
          </div>
          <p>Chaque membre construit sa réputation voyage après voyage : avis, voyages complétés, centres d’intérêt.</p>
        </div>
        <MemberGrid />
      </section>
    </>
  );
}
