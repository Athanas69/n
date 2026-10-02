import type { Metadata } from "next";
import DestGrid from "@/components/DestGrid";
import CitySearch from "@/components/CitySearch";
import { CITY_NAMES, citiesByRegion } from "@/lib/data";
import { pageOG } from "@/lib/site";

export const metadata: Metadata = pageOG(
  "Toutes les destinations",
  `${CITY_NAMES.length} villes couvertes par Atlas, classées par continent — cherchez une ville ou un pays.`,
  "/atlas/destinations"
);

export default function DestinationsPage() {
  const regions = citiesByRegion();
  return (
    <>
      <section className="hero shell" style={{ paddingBottom: 20 }}>
        <div className="eyebrow">Destinations</div>
        <h1>{CITY_NAMES.length} villes qu’Atlas connaît vraiment.</h1>
        <p>La liste s’allonge continent par continent, mais chaque destination doit rester exceptionnellement utile.</p>
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
