import HotelGrid from "@/components/HotelGrid";
import { DEFAULT_CITY, citySlug, cityNameFromSlug, cityIn, cityLabel } from "@/lib/data";
import { pageOG } from "@/lib/site";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ city?: string }> }) {
  const { city: citySlugParam } = await searchParams;
  const cityName = (citySlugParam && cityNameFromSlug(citySlugParam)) || DEFAULT_CITY;
  return {
    ...pageOG(
      `Hôtels ${cityIn(cityName)}`,
      `Une sélection courte d’hôtels ${cityIn(cityName)}, par budget : Budget, Confort, Premium.`
    ),
    alternates: { canonical: `/atlas/hotels?city=${citySlug(cityName)}` },
  };
}

export default async function HotelsPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string }>;
}) {
  const { city: citySlugParam } = await searchParams;
  const cityName = (citySlugParam && cityNameFromSlug(citySlugParam)) || DEFAULT_CITY;

  return (
    <>
      <section className="hero shell" style={{ paddingBottom: 20 }}>
        <div className="eyebrow">Atlas Stays · {cityLabel(cityName)}</div>
        <h1>Choisissez peu. Choisissez bien.</h1>
        <p>Budget, Confort, Premium et bientôt le véritable Choix Atlas.</p>
      </section>
      <section className="section shell" style={{ paddingTop: 10 }}>
        <HotelGrid city={cityName} />
      </section>
    </>
  );
}
