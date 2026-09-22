import { notFound } from "next/navigation";
import Link from "next/link";
import { getCity } from "@/lib/data";
import { demoTrips, getTripBySlug } from "@/lib/trips";

export function generateStaticParams() {
  return demoTrips.map((t) => ({ slug: t.slug }));
}

export default async function TripDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) notFound();

  const city = getCity(trip.city);
  const routeLabel = trip.route.map((s) => s.city).join(" → ");
  const initials = trip.organizer
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <section className="cityhero shell">
        <div className="cityphoto">
          <img src={city.hero} alt={trip.title} />
          <div className="citytitle">
            <div className="eyebrow" style={{ color: "#fff" }}>
              Voyage de groupe
            </div>
            <h1>{trip.title}</h1>
            <p>
              {routeLabel} · {trip.dates}
            </p>
          </div>
        </div>
        <div className="facts" style={{ marginTop: 16 }}>
          <div className="fact">
            <small>Durée</small>
            <b>{trip.duration}</b>
          </div>
          <div className="fact">
            <small>Budget</small>
            <b>{trip.budget}</b>
          </div>
          <div className="fact">
            <small>Météo sur place</small>
            <b>
              {trip.weather.temp} · {trip.weather.condition}
            </b>
          </div>
          <div className="fact">
            <small>Devise</small>
            <b>{trip.currency.rate}</b>
          </div>
        </div>
      </section>

      <section className="section shell" style={{ paddingTop: 30, paddingBottom: 0 }}>
        <article className="membercard" style={{ padding: 22, maxWidth: 760 }}>
          <div className="memberhead">
            <span className="memberavatar" style={{ background: "var(--ink)" }}>
              {initials}
            </span>
            <div>
              <h3 style={{ fontSize: 17 }}>{trip.organizer}</h3>
              <small className="muted">Organisateur · {trip.members.length} voyageurs déjà inscrits</small>
            </div>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.7, marginTop: 4 }}>{trip.story}</p>
        </article>
      </section>

      <section className="section shell" style={{ paddingTop: 30 }}>
        <div className="cityintro">
          <article className="storybox">
            <div className="eyebrow">Itinéraire</div>
            <h2>Le trajet du groupe.</h2>
            <div className="timeline" style={{ marginTop: 16 }}>
              {trip.route.map((s) => (
                <div className="timeitem" key={s.city}>
                  <b>
                    {s.city} · {s.nights} nuit{s.nights > 1 ? "s" : ""}
                  </b>
                  <p className="muted">{s.highlight}</p>
                </div>
              ))}
            </div>
          </article>
          <aside className="snapshot">
            <h3>Bon à savoir avant de partir</h3>
            <div className="joinrequest" style={{ marginTop: 10 }}>
              <b>Visa</b>
              <p style={{ margin: "4px 0 0", fontSize: 12 }}>{trip.visa}</p>
            </div>
            <div className="joinrequest">
              <b>Devise locale</b>
              <p style={{ margin: "4px 0 0", fontSize: 12 }}>
                {trip.currency.code} · {trip.currency.rate}
              </p>
            </div>
            <div className="joinrequest">
              <b>Météo</b>
              <p style={{ margin: "4px 0 0", fontSize: 12 }}>
                {trip.weather.temp} · {trip.weather.condition}
              </p>
            </div>
          </aside>
        </div>

        <div className="actions" style={{ marginTop: 24 }}>
          <Link href="/mondo/trip-room" className="btn primary">
            Voir la Trip Room
          </Link>
          <Link href="/mondo/join" className="btn">
            Demander à rejoindre
          </Link>
          <Link href="/mondo/trips" className="btn">
            Voir tous les voyages
          </Link>
        </div>
      </section>
    </>
  );
}
