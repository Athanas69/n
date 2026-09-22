import Link from "next/link";
import DestGrid from "@/components/DestGrid";
import { CITY_NAMES, getCity } from "@/lib/data";

export default function AtlasHome() {
  const tokyo = getCity("Tokyo");
  return (
    <>
      <section className="hero shell">
        <div className="hero-grid">
          <div className="reveal">
            <div className="eyebrow">Guide premium · réservation · assistance</div>
            <h1>Préparez le voyage, pas quinze onglets.</h1>
            <p>
              Atlas commence par comprendre la ville, puis relie quartiers, hôtels, vols, transport, eSIM, articles
              et arrivée sur place.
            </p>
            <div className="actions">
              <Link href="/atlas/destinations" className="btn primary">
                Choisir une destination
              </Link>
              <Link href="/atlas/tokyo" className="btn">
                Voir Tokyo
              </Link>
            </div>
            <div className="bookingbar">
              <div className="bookcell">
                <small>Destination</small>
                <b>Tokyo</b>
              </div>
              <div className="bookcell">
                <small>Aller</small>
                <b>10 oct.</b>
              </div>
              <div className="bookcell">
                <small>Retour</small>
                <b>24 oct.</b>
              </div>
              <div className="bookcell">
                <small>Voyageurs</small>
                <b>4</b>
              </div>
              <Link href="/atlas/flights?city=tokyo" className="btn primary">
                Vols & hôtels
              </Link>
            </div>
          </div>
          <div className="hero-photo reveal">
            <img src={tokyo.hero} alt="Tokyo" />
            <div className="hero-caption">
              <h3>Votre Tokyo commence par le bon quartier.</h3>
              <p>Comprendre avant de réserver.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell reveal">
        <div className="section-head">
          <div>
            <div className="eyebrow">Votre Travel OS</div>
            <h2>Les cinq choses qu’Atlas doit régler.</h2>
          </div>
          <p>Tout reste dans la destination, sans ouvrir de nouveaux onglets.</p>
        </div>
        <div className="prepare">
          <div>
            <span>🗺️</span>
            <b>Quartiers</b>
            <small>où dormir selon votre style</small>
          </div>
          <div>
            <span>🏨</span>
            <b>Hôtels</b>
            <small>sélection courte par budget</small>
          </div>
          <div>
            <span>✈️</span>
            <b>Vols</b>
            <small>prix, fatigue, horaires</small>
          </div>
          <div>
            <span>🚇</span>
            <b>Transports</b>
            <small>aéroport, métro, pass</small>
          </div>
          <div>
            <span>📶</span>
            <b>eSIM</b>
            <small>connecté dès l’arrivée</small>
          </div>
        </div>
      </section>

      <section className="section shell reveal">
        <div className="section-head">
          <div>
            <div className="eyebrow">Guides villes</div>
            <h2>Commencez par comprendre l’endroit.</h2>
          </div>
          <p>Chaque ville est conçue comme un dossier complet de préparation.</p>
        </div>
        <DestGrid names={CITY_NAMES.slice(0, 8)} />
      </section>
    </>
  );
}
