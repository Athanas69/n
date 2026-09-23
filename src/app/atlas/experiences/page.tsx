import Link from "next/link";
import { EXPERIENCES } from "@/lib/experiences";

export const metadata = {
  title: "Expériences — safaris, croisières",
  description: "Au-delà des villes : safaris et croisières, deux façons de voyager qui suivent une saison et une logistique très différentes.",
};

export default function ExperiencesPage() {
  return (
    <>
      <section className="section shell">
        <div className="section-head">
          <div>
            <div className="eyebrow">Atlas Expériences</div>
            <h2>Au-delà des villes.</h2>
          </div>
          <p>Deux formats de voyage qui ne se planifient pas comme un city trip : saison contrainte, réservation anticipée, logistique spécifique.</p>
        </div>
        <div className="experiencehub">
          {EXPERIENCES.map((e) => (
            <Link href={`/atlas/experiences/${e.slug}`} className="experiencecard" key={e.slug}>
              <img src={e.hero} alt={e.name} />
              <div className="experiencecardtext">
                <div className="eyebrow" style={{ color: "#fff" }}>
                  {e.regions.length} destinations
                </div>
                <h3>{e.name}</h3>
                <p>{e.intro}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
