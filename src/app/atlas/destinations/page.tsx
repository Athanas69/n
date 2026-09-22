import DestGrid from "@/components/DestGrid";
import { CITY_NAMES } from "@/lib/data";

export default function DestinationsPage() {
  return (
    <>
      <section className="hero shell" style={{ paddingBottom: 20 }}>
        <div className="eyebrow">Destinations</div>
        <h1>Les villes qu’Atlas connaît vraiment.</h1>
        <p>Peu de destinations au départ, mais chacune doit être exceptionnellement utile.</p>
      </section>
      <section className="section shell" style={{ paddingTop: 10 }}>
        <DestGrid names={CITY_NAMES} />
      </section>
    </>
  );
}
