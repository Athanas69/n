import Link from "next/link";
import AtlasSearchBar from "@/components/AtlasSearchBar";
import { CITY_NAMES } from "@/lib/data";

export default function AtlasHome() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-grid">
          <div className="reveal">
            <div className="eyebrow">Guide premium · réservation · assistance</div>
            <h1>Préparez le voyage, pas quinze onglets.</h1>
            <p>
              Dites-nous où et quand : Atlas relie quartiers, hôtels, vols, transport, eSIM et arrivée sur place
              pour {CITY_NAMES.length} destinations, directement personnalisées pour vos dates.
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
        <div className="reveal" style={{ marginTop: 30 }}>
          <AtlasSearchBar />
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
        <div className="band">
          <div>
            <div className="eyebrow" style={{ color: "#b8d5c8" }}>
              Une destination précise en tête ?
            </div>
            <h2>Cherchez-la, plutôt que de la parcourir.</h2>
            <p>
              Atlas n’affiche pas une liste de villes à faire défiler. Indiquez vos dates, on prépare directement
              votre séjour.
            </p>
            <Link href="/atlas/destinations" className="btn">
              Parcourir toutes les destinations
            </Link>
          </div>
          <div className="steps">
            <div className="step">
              <b>Une ville</b>
              <small>« Kyoto », « Lisbonne »…</small>
            </div>
            <div className="step">
              <b>Un pays</b>
              <small>« Japon », « Italie »…</small>
            </div>
            <div className="step">
              <b>Vos dates</b>
              <small>météo et budget personnalisés</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
