import { notFound } from "next/navigation";
import Link from "next/link";
import { CITY_NAMES, citySlug, cityNameFromSlug, getCity, getHotels } from "@/lib/data";
import { hoodSlug } from "@/lib/hoodSlug";
import NotifyButton from "@/components/NotifyButton";
import FavoriteButton from "@/components/FavoriteButton";

export function generateStaticParams() {
  return CITY_NAMES.flatMap((name) => {
    const city = getCity(name);
    return city.neighborhoods.map((h) => ({ city: citySlug(name), hood: hoodSlug(h[0]) }));
  });
}

export async function generateMetadata({ params }: { params: Promise<{ city: string; hood: string }> }) {
  const { city: citySlugParam, hood: hoodSlugParam } = await params;
  const cityName = cityNameFromSlug(citySlugParam);
  if (!cityName) return {};
  const c = getCity(cityName);
  const hood = c.neighborhoods.find((h) => hoodSlug(h[0]) === hoodSlugParam);
  if (!hood) return {};
  return {
    title: `${hood[0]}, ${cityName} — quartier`,
    description: hood[2],
    openGraph: { images: [hood[3]] },
  };
}

export default async function HoodPage({ params }: { params: Promise<{ city: string; hood: string }> }) {
  const { city: citySlugParam, hood: hoodSlugParam } = await params;
  const cityName = cityNameFromSlug(citySlugParam);
  if (!cityName) notFound();
  const c = getCity(cityName);
  const hood = c.neighborhoods.find((h) => hoodSlug(h[0]) === hoodSlugParam);
  if (!hood) notFound();

  const [name, tags, description, image] = hood;
  const tagList = tags.split(" · ");
  const hoodHotels = getHotels(cityName).filter((h) => h.neighborhood === name);

  return (
    <>
      <section className="cityhero shell">
        <div className="cityphoto">
          <img src={image} alt={name} />
          <div className="citytitle">
            <div className="eyebrow" style={{ color: "#fff" }}>
              {cityName}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <h1>{name}</h1>
              <FavoriteButton
                favorite={{ id: `hood:${cityName}:${name}`, type: "city", city: cityName, name: `${name}, ${cityName}`, image }}
              />
            </div>
            <p>{description}</p>
          </div>
        </div>
      </section>

      <section className="section shell" style={{ paddingTop: 30 }}>
        <div className="cityintro">
          <article className="storybox">
            <div className="eyebrow">L’ambiance</div>
            <h2>Pourquoi venir ici plutôt qu’ailleurs.</h2>
            <p>{description}</p>
            <div className="hoodtags" style={{ marginTop: 12 }}>
              {tagList.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="actions">
              <NotifyButton className="btn" message="Guide détaillé (restaurants, bars, activités) à produire dans le CMS Atlas.">
                Lire le guide complet
              </NotifyButton>
            </div>
          </article>
          <aside className="snapshot">
            <h3>Se déplacer depuis {name}</h3>
            <div className="joinrequest">
              <b>Réseau</b>
              <p style={{ margin: "4px 0 0", fontSize: 12 }}>{c.transport}</p>
            </div>
            <div className="joinrequest">
              <b>Aéroport</b>
              <p style={{ margin: "4px 0 0", fontSize: 12 }}>{c.airport}</p>
            </div>
            {c.transitTicket && (
              <div className="joinrequest">
                <b>Titres de transport</b>
                <p style={{ margin: "4px 0 0", fontSize: 12 }}>{c.transitTicket}</p>
              </div>
            )}
          </aside>
        </div>
      </section>

      <section className="section shell" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div>
            <div className="eyebrow">Où dormir</div>
            <h2 style={{ fontSize: 28 }}>Hôtels à {name}</h2>
          </div>
        </div>
        {hoodHotels.length > 0 ? (
          <div className="hotelgrid">
            {hoodHotels.map((h) => (
              <article className="stay" key={h.name + h.tier}>
                <div className="stayimg">
                  <img src={h.image} alt={h.name} />
                  <span className="verified" style={{ position: "absolute", left: 10, top: 10 }}>
                    {h.tier}
                  </span>
                </div>
                <div className="staybody">
                  <h3>{h.name}</h3>
                  <p>{h.desc}</p>
                  <div className="staymeta">
                    <span>
                      <small>{h.score}/10</small>
                    </span>
                    <span className="stayprice">{h.price} €</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="muted">
            Pas encore de sélection Atlas propre à {name}.{" "}
            <Link href={`/atlas/hotels?city=${citySlug(cityName)}`}>Voir tous les hôtels de {cityName} →</Link>
          </p>
        )}
      </section>

      <section className="section shell" style={{ paddingTop: 0 }}>
        <Link href={`/atlas/${citySlug(cityName)}#hoods`} className="btn">
          ← Retour aux quartiers de {cityName}
        </Link>
      </section>
    </>
  );
}
