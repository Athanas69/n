import FlightSearchForm from "@/components/FlightSearchForm";
import { DEFAULT_CITY, cityNameFromSlug, getCity } from "@/lib/data";

export default async function FlightsPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string }>;
}) {
  const { city: citySlugParam } = await searchParams;
  const cityName = (citySlugParam && cityNameFromSlug(citySlugParam)) || DEFAULT_CITY;
  const destAirport = getCity(cityName).airport;

  return (
    <>
      <section className="hero shell" style={{ paddingBottom: 20 }}>
        <div className="eyebrow">Atlas Flights</div>
        <h1>Le vol doit servir le voyage.</h1>
        <p>Prix, bagages, horaires, escales et première journée sont comparés ensemble.</p>
      </section>
      <section className="section shell" style={{ paddingTop: 10 }}>
        <FlightSearchForm cityName={cityName} destAirport={destAirport} />
      </section>
    </>
  );
}
