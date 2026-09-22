import Link from "next/link";
import { getCity } from "@/lib/data";

const demoTrips: Array<{
  title: string;
  route: string;
  dates: string;
  budget: string;
  city: string;
}> = [
  { title: "Japon en octobre", route: "Tokyo → Kyoto → Osaka", dates: "10–24 oct.", budget: "1 850 €", city: "Tokyo" },
  { title: "Bali entre amis", route: "Ubud → Canggu → Lombok", dates: "3–17 nov.", budget: "1 420 €", city: "Bangkok" },
  { title: "Roadtrip Maroc", route: "Marrakech → Atlas → Ouarzazate", dates: "14–21 sept.", budget: "780 €", city: "Marrakech" },
];

export default function TripGrid() {
  return (
    <div className="tripgrid">
      {demoTrips.map((t) => {
        const city = getCity(t.city);
        return (
          <article className="tripcard" key={t.title}>
            <img src={city.hero} alt={t.title} />
            <div className="tripbody">
              <h3>{t.title}</h3>
              <p className="muted">
                {t.route} · {t.dates}
              </p>
              <div className="tripmeta">
                <div className="faces">
                  <span className="face">SA</span>
                  <span className="face">AM</span>
                  <span className="face">CL</span>
                </div>
                <b>{t.budget}</b>
              </div>
              <div className="trip-actions">
                <Link href="/mondo/trip-room" className="btn">
                  Voir le projet
                </Link>
                <Link href="/mondo/join" className="btn primary">
                  Demander à rejoindre
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
