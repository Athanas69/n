import NotifyButton from "@/components/NotifyButton";
import { DEFAULT_CITY, cityNameFromSlug } from "@/lib/data";

const OFFERS: Array<[string, string, string, string]> = [
  ["Prix minimum", "1 escale · arrivée tardive", "548 €", "Vous économisez 64 €, mais perdez probablement votre première soirée."],
  ["Choix Atlas", "1 escale courte · bons horaires", "612 €", "Meilleur compromis pour votre itinéraire."],
  ["Direct", "Temps et fatigue minimisés", "742 €", "+130 € pour économiser du temps et réduire la fatigue."],
];

export default async function FlightsPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string }>;
}) {
  const { city: citySlugParam } = await searchParams;
  const cityName = (citySlugParam && cityNameFromSlug(citySlugParam)) || DEFAULT_CITY;

  return (
    <>
      <section className="hero shell" style={{ paddingBottom: 20 }}>
        <div className="eyebrow">Atlas Flights</div>
        <h1>Le vol doit servir le voyage.</h1>
        <p>Prix, bagages, horaires, escales et première journée sont comparés ensemble.</p>
      </section>
      <section className="section shell" style={{ paddingTop: 10 }}>
        <div className="flightsearch">
          <h2>Paris → {cityName}</h2>
          <div className="flightform">
            <div className="flightfield">
              <small>Départ</small>
              <b>Paris CDG</b>
            </div>
            <div className="flightfield">
              <small>Destination</small>
              <b>{cityName}</b>
            </div>
            <div className="flightfield">
              <small>Aller</small>
              <b>10 oct.</b>
            </div>
            <div className="flightfield">
              <small>Retour</small>
              <b>24 oct.</b>
            </div>
            <NotifyButton className="btn primary" message="API vols à connecter.">
              Rechercher
            </NotifyButton>
          </div>
          <div className="flightoptions">
            {OFFERS.map(([tag, subtitle, price, desc]) => (
              <article className="flightcard" key={tag}>
                <span className="tag">{tag}</span>
                <h3>{subtitle}</h3>
                <div className="flightprice">{price}</div>
                <p>{desc}</p>
                <NotifyButton className="btn primary" message="Lien de réservation partenaire à connecter.">
                  Voir l’offre
                </NotifyButton>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
