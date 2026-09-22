import { notFound } from "next/navigation";
import Link from "next/link";
import NotifyButton from "@/components/NotifyButton";
import ScrollButton from "@/components/ScrollButton";
import OpenAlfredButton from "@/components/OpenAlfredButton";
import HotelGrid from "@/components/HotelGrid";
import DistrictMap from "@/components/DistrictMap";
import { hoodAnchor } from "@/lib/hoodAnchor";
import { hoodSlug } from "@/lib/hoodSlug";
import CityNav from "@/components/CityNav";
import RememberCity from "@/components/RememberCity";
import { SimpleMap, MetroMap } from "@/components/CityMap";
import { CITY_NAMES, citySlug, cityNameFromSlug, getCity } from "@/lib/data";
import { getArticleSlugForTitle } from "@/lib/articles";
import { CITY_COORDS } from "@/lib/coords";
import LiveWeather from "@/components/LiveWeather";
import CurrencyConverter from "@/components/CurrencyConverter";
import FavoriteButton from "@/components/FavoriteButton";
import TripPrepBanner from "@/components/TripPrepBanner";

export function generateStaticParams() {
  return CITY_NAMES.map((name) => ({ city: citySlug(name) }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const cityName = cityNameFromSlug(slug);
  if (!cityName) return {};
  const c = getCity(cityName);
  return {
    title: `${cityName} — guide, quartiers, hôtels`,
    description: c.intro,
    openGraph: { images: [c.hero] },
  };
}

const GUIDE_ACTIONS = [
  "Comparer les quartiers",
  "Filtrer les vols",
  "Ajouter à mon voyage",
  "Voir les hôtels",
  "Ajouter au jour 2",
  "Comparer le budget",
];

export default async function CityPage({
  params,
  searchParams,
}: {
  params: Promise<{ city: string }>;
  searchParams: Promise<{ checkin?: string; checkout?: string; travelers?: string }>;
}) {
  const { city: slug } = await params;
  const cityName = cityNameFromSlug(slug);
  if (!cityName) notFound();

  const c = getCity(cityName);
  const coords = CITY_COORDS[cityName];
  const sp = await searchParams;
  const hasTripPrep = Boolean(sp.checkin && sp.checkout && sp.travelers);

  return (
    <>
      <RememberCity city={cityName} />
      <section className="cityhero shell">
        <div className="cityphoto">
          <img src={c.hero} alt={cityName} />
          <div className="citytitle">
            <div className="eyebrow" style={{ color: "#fff" }}>
              {c.country}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <h1>{cityName}</h1>
              <FavoriteButton
                favorite={{ id: `city:${cityName}`, type: "city", city: cityName, name: cityName, image: c.hero }}
              />
            </div>
            <p>{c.intro}</p>
          </div>
        </div>
        <CityNav />
        <div className="facts">
          <div className="fact">
            <small>Devise</small>
            <b>{c.currency}</b>
          </div>
          <div className="fact">
            <small>Meilleure période</small>
            <b>{c.best}</b>
          </div>
          <div className="fact">
            <small>Aéroport</small>
            <b>{c.airport}</b>
          </div>
          <div className="fact">
            <small>Réseau</small>
            <b>{c.transport}</b>
          </div>
        </div>
        {hasTripPrep && (
          <TripPrepBanner
            city={cityName}
            checkin={sp.checkin!}
            checkout={sp.checkout!}
            travelers={Number(sp.travelers)}
          />
        )}
        {coords && (
          <div style={{ marginTop: 8 }}>
            <LiveWeather lat={coords.lat} lon={coords.lon} targetDate={sp.checkin} />
          </div>
        )}
      </section>

      <section className="section shell" id="understand">
        <div className="cityintro">
          <article className="storybox">
            <div className="eyebrow">Avant de réserver</div>
            <h2>Quel {cityName} voulez-vous vivre ?</h2>
            <p>{c.intro}</p>
            <div className="actions">
              <ScrollButton target="hoods" className="btn primary">
                Comparer les quartiers
              </ScrollButton>
            </div>
          </article>
          <aside className="snapshot">
            <h3>Les quartiers en un coup d’œil</h3>
            {cityName === "Tokyo" ? <img src="/assets/tokyo-map.jpg" alt="Carte Tokyo" /> : <SimpleMap city={c} />}
            <p className="muted" style={{ fontSize: 9 }}>
              Vue explicative Atlas : elle sert à comprendre la ville, pas à remplacer une carte GPS.
            </p>
            <h3 style={{ marginTop: 16 }}>Convertisseur</h3>
            <CurrencyConverter currency={c.currency} />
          </aside>
        </div>
      </section>

      <section className="section shell" id="hoods">
        <div className="section-head">
          <div>
            <div className="eyebrow">Quartiers</div>
            <h2>Choisissez l’ambiance avant l’adresse.</h2>
          </div>
          <p>Cliquez une zone sur la carte, ou une fiche ci-dessous, pour ouvrir le guide du quartier.</p>
        </div>
        <DistrictMap neighborhoods={c.neighborhoods} city={cityName} />
        <div className="hoodgrid" style={{ marginTop: 14 }}>
          {c.neighborhoods.map((h) => (
            <Link className="hood" id={hoodAnchor(h[0])} key={h[0]} href={`/atlas/${citySlug(cityName)}/quartiers/${hoodSlug(h[0])}`}>
              <img src={h[3]} alt={h[0]} />
              <div className="hoodbody">
                <h3>{h[0]}</h3>
                <span className="tag">{h[1]}</span>
                <p>{h[2]}</p>
                <div className="hoodtags">
                  {h[1].split(" · ").map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section shell" id="stays">
        <div className="section-head">
          <div>
            <div className="eyebrow">Atlas Stays</div>
            <h2>Une sélection courte, par budget.</h2>
          </div>
          <p>3 Budget · 3 Confort · 3 Premium. Le reste reste accessible, mais Atlas fait d’abord le tri.</p>
        </div>
        <HotelGrid city={cityName} />
      </section>

      <section className="section shell" id="transport">
        <div className="section-head">
          <div>
            <div className="eyebrow">Se déplacer</div>
            <h2>Aéroport, métro, pass : compris avant d’arriver.</h2>
          </div>
          <p>Le plan Atlas résume le réseau et donne les options d’arrivée selon le quartier.</p>
        </div>
        <div className="transgrid">
          <article className="transport">
            <h2>{c.transport}</h2>
            <div className="metro">
              <MetroMap city={c} cityName={cityName} />
            </div>
            <p>Schéma simplifié, conçu pour comprendre le réseau en quelques secondes.</p>
            {c.transitTicket && (
              <div className="route">
                <h3>Prix des titres de transport</h3>
                <p>{c.transitTicket}</p>
              </div>
            )}
          </article>
          <article className="transport">
            <h2>{c.airport} → ville</h2>
            {c.airportRoutes.map((r) => (
              <div className="route" key={r[0] + r[1]}>
                <h3>
                  {r[0]} · {r[1]}
                </h3>
                <p>{r[2]}</p>
                <span className="source">Source éditoriale à vérifier</span>
              </div>
            ))}
          </article>
        </div>
      </section>

      <section className="section shell" id="esim">
        <div className="section-head">
          <div>
            <div className="eyebrow">Atlas eSIM</div>
            <h2>Internet dès l’atterrissage.</h2>
          </div>
          <p>
            {c.esim}. Comparez selon durée et volume, pas selon le forfait le plus cher.
          </p>
        </div>
        <EsimPlans />
      </section>

      <section className="section shell" id="guides">
        <div className="section-head">
          <div>
            <div className="eyebrow">Tout ce qu’on ouvre normalement ailleurs</div>
            <h2>Les guides qui répondent aux vraies questions.</h2>
          </div>
          <p>Chaque article doit pouvoir déclencher une action : choisir un quartier, filtrer un vol, ajouter une journée ou réserver.</p>
        </div>
        <div className="articlegrid">
          {c.articles.map((a, i) => {
            const slug = getArticleSlugForTitle(cityName, a);
            return (
            <article className={`article ${i < 2 ? "actionarticle" : ""}`} key={a}>
              <div>
                <div className="eyebrow">{cityName}</div>
                <h3>{a}</h3>
                <p>Guide Atlas pensé pour répondre à une décision concrète du voyage, pas pour remplir un blog.</p>
              </div>
              {i < 6 && (
                <div className="smartaction">
                  <b>Pour votre voyage</b>
                  {GUIDE_ACTIONS[i]} →
                </div>
              )}
              {slug ? (
                <Link href={`/atlas/${citySlug(cityName)}/guides/${slug}`} className="btn">
                  Lire le guide
                </Link>
              ) : (
                <NotifyButton className="btn" message="Article éditorial à produire dans le CMS Atlas.">
                  Lire le guide
                </NotifyButton>
              )}
            </article>
            );
          })}
        </div>
      </section>

      <section className="section shell" id="before">
        <div className="section-head">
          <div>
            <div className="eyebrow">Atlas Before You Go</div>
            <h2>Le voyage change à mesure que le départ approche.</h2>
          </div>
        </div>
        <div className="countdown">
          <div className="count">
            <b>J−30</b>
            <small>Activités à réserver</small>
          </div>
          <div className="count">
            <b>J−14</b>
            <small>Formalités et documents</small>
          </div>
          <div className="count">
            <b>J−7</b>
            <small>Météo, bagages, eSIM</small>
          </div>
          <div className="count">
            <b>J−2</b>
            <small>Check-in, transfert, horaires</small>
          </div>
        </div>
      </section>

      <section className="section shell" id="first24">
        <div className="section-head">
          <div>
            <div className="eyebrow">Atlas First 24h</div>
            <h2>Le jour où vous n’avez envie de réfléchir à rien.</h2>
          </div>
        </div>
        <div className="cityintro">
          <article className="first24">
            <h2>Bienvenue à {cityName}.</h2>
            <div className="firststeps">
              {[
                "Activer l’eSIM",
                "Passer l’immigration",
                "Rejoindre votre quartier",
                "Check-in",
                "Premier repas",
                "Première balade légère",
              ].map((step, i) => (
                <div className="firststep" key={step}>
                  <span>{i + 1}</span>
                  <div>
                    <b>{step}</b>
                    <p className="muted">Atlas affiche ici l’instruction utile au bon moment.</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
          <aside className="before">
            <div className="eyebrow">Alfred Rescue</div>
            <h2>Un problème ?</h2>
            <p>
              Vol annulé, hôtel mauvais, train raté ou document perdu : Alfred réutilise tout le contexte du voyage
              avant de proposer une solution.
            </p>
            <OpenAlfredButton className="btn primary">J’ai un problème</OpenAlfredButton>
          </aside>
        </div>
      </section>
    </>
  );
}

function EsimPlans() {
  const plans: Array<[string, string, string, string]> = [
    ["Essentiel", "3–5 Go", "7–15 jours", "≈ 8–15 €"],
    ["Voyage", "10–20 Go", "15–30 jours", "≈ 18–35 €"],
    ["Intensif", "Gros volume", "15–30 jours", "≈ 30–60 €"],
  ];
  return (
    <div className="esimplans">
      {plans.map(([name, data, duration, price], i) => (
        <article className={`esimplan ${i === 1 ? "featured" : ""}`} key={name}>
          {i === 1 && <span className="verified">Recommandé</span>}
          <h3>{name}</h3>
          <div className="stayprice">{price}</div>
          <div className="esimspec">
            <span>Données</span>
            <b>{data}</b>
          </div>
          <div className="esimspec">
            <span>Durée</span>
            <b>{duration}</b>
          </div>
          <NotifyButton
            className={`btn ${i === 1 ? "primary" : ""}`}
            style={{ width: "100%", marginTop: 10 }}
            message="Comparateur eSIM affilié à connecter."
          >
            Voir les forfaits
          </NotifyButton>
        </article>
      ))}
    </div>
  );
}
