import Link from "next/link";
import AtlasSearchBar from "@/components/AtlasSearchBar";
import { CITY_NAMES } from "@/lib/data";

export default function AtlasHome() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-grid">
          <div className="reveal">
            <div className="eyebrow">Plus qu’un guide de voyage</div>
            <h1>Tout votre voyage, en un seul endroit.</h1>
            <p>
              Quartiers, hôtels, vols, transport, connexion sur place : tout au même endroit, sur {CITY_NAMES.length}{" "}
              destinations.
            </p>
          </div>
          <div className="hero-photo reveal">
            <img
              src="https://images.unsplash.com/photo-1786897162869-b0ccd067affd?auto=format&fit=crop&w=1800&q=90"
              alt="Atlas"
            />
            <div className="hero-caption">
              <h3>Le monde est immense. Votre voyage ne doit pas l’être.</h3>
              <p>Une destination, toutes les informations.</p>
            </div>
          </div>
        </div>
        <div className="reveal" style={{ marginTop: 44 }}>
          <AtlasSearchBar />
          <p className="searchhint">
            Une ville, un pays ou juste vos dates — pas de liste à faire défiler.{" "}
            <Link href="/atlas/destinations">Ou parcourez les {CITY_NAMES.length} destinations →</Link>
          </p>
        </div>
      </section>

      <section className="section shell reveal panel-tint tint-blue">
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
    </>
  );
}
