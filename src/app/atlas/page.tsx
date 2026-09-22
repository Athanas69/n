import Link from "next/link";
import CitySearch from "@/components/CitySearch";
import { CITY_NAMES } from "@/lib/data";

export default function AtlasHome() {
  return (
    <>
      <section className="hero shell" style={{ paddingBottom: 60 }}>
        <div className="reveal" style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div className="eyebrow">Guide premium · réservation · assistance</div>
          <h1>Préparez le voyage, pas quinze onglets.</h1>
          <p style={{ margin: "0 auto" }}>
            Atlas commence par comprendre la ville, puis relie quartiers, hôtels, vols, transport, eSIM, articles et
            arrivée sur place. {CITY_NAMES.length} destinations couvertes en profondeur.
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 26 }}>
            <CitySearch />
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
        <div className="band">
          <div>
            <div className="eyebrow" style={{ color: "#b8d5c8" }}>
              Une destination précise en tête ?
            </div>
            <h2>Cherchez-la, plutôt que de la parcourir.</h2>
            <p>
              Atlas n’affiche pas une liste de villes à faire défiler. Tapez ce que vous cherchez, on vous emmène
              directement au bon dossier de préparation.
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
              <b>Une envie</b>
              <small>Bientôt : « plage », « montagne », « nightlife »…</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
