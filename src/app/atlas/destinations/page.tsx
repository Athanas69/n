import DestGrid from "@/components/DestGrid";
import CitySearch from "@/components/CitySearch";
import { CITY_NAMES, citiesByRegion } from "@/lib/data";

export default function DestinationsPage() {
  const regions = citiesByRegion();
  return (
    <>
      <section className="hero shell" style={{ paddingBottom: 20 }}>
        <div className="eyebrow">Destinations</div>
        <h1>{CITY_NAMES.length} villes qu’Atlas connaît vraiment.</h1>
        <p>Peu de destinations pour chaque continent, mais chacune doit être exceptionnellement utile.</p>
        <div style={{ marginTop: 20 }}>
          <CitySearch />
        </div>
      </section>
      {regions.map(([region, names]) => (
        <section className="section shell" style={{ paddingTop: 10, paddingBottom: 30 }} key={region}>
          <div className="section-head">
            <div>
              <div className="eyebrow">{region}</div>
              <h2 style={{ fontSize: 28 }}>
                {names.length} destination{names.length > 1 ? "s" : ""}
              </h2>
            </div>
          </div>
          <DestGrid names={names} />
        </section>
      ))}
    </>
  );
}
