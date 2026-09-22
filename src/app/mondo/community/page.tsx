import TripGrid from "@/components/TripCard";

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
    </>
  );
}
