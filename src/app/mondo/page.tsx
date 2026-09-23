import Link from "next/link";
import TripGrid from "@/components/TripCard";
import MemberGrid from "@/components/MemberGrid";

export default function MondoHome() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-grid">
          <div className="reveal">
            <div className="eyebrow">Communauté & organisation</div>
            <h1>Le voyage commence par les bonnes personnes.</h1>
            <p>
              Créez une idée simple, trouvez votre groupe, prenez les décisions ensemble puis laissez Atlas rendre
              le voyage possible.
            </p>
            <div className="actions">
              <Link href="/mondo/create" className="btn primary">
                Créer un voyage
              </Link>
              <Link href="/mondo/trips" className="btn">
                Explorer les voyages
              </Link>
            </div>
          </div>
          <div className="hero-photo reveal">
            <img src="/assets/mondo-hero.jpg" alt="Mondo" />
            <div className="hero-caption">
              <h3>Une route, des inconnus, puis une histoire.</h3>
              <p>Mondo doit donner envie de faire partie du groupe.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell reveal">
        <div className="section-head">
          <div>
            <div className="eyebrow">Voyages ouverts</div>
            <h2>Rejoignez une aventure déjà en mouvement.</h2>
          </div>
          <p>Chaque projet expose dates, budget, itinéraire et personnes présentes avant même d’envoyer une demande.</p>
        </div>
        <TripGrid />
      </section>

      <section className="section shell reveal">
        <div className="band">
          <div>
            <div className="eyebrow" style={{ color: "#b8d5c8" }}>
              Le dossier du groupe
            </div>
            <h2>Une seule pièce pour tout décider.</h2>
            <p>Discussion, itinéraire, décisions, budget et réservations vivent dans la même Trip Room.</p>
            <Link href="/mondo/trip-room" className="btn">
              Voir la Trip Room
            </Link>
          </div>
          <div className="steps">
            <div className="step">
              <b>1. Publier une idée</b>
              <small>Destination, période, budget, style.</small>
            </div>
            <div className="step">
              <b>2. Choisir le groupe</b>
              <small>Demandes, profil, discussion avant acceptation.</small>
            </div>
            <div className="step">
              <b>3. Décider</b>
              <small>Votes et décisions transformés en données de voyage.</small>
            </div>
            <div className="step">
              <b>4. Passer dans Atlas</b>
              <small>Aucune information n’est redemandée.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell reveal panel-tint tint-sand">
        <div className="section-head">
          <div>
            <div className="eyebrow">Confiance</div>
            <h2>Voyager avec des inconnus, en confiance.</h2>
          </div>
          <p>Mondo construit la confiance avant le départ, pas après un problème.</p>
        </div>
        <div className="prepare">
          <div>
            <span>🪪</span>
            <b>Profils vérifiés</b>
            <small>identité confirmée avant de rejoindre un groupe</small>
          </div>
          <div>
            <span>⭐</span>
            <b>Avis après chaque voyage</b>
            <small>la réputation se construit voyage après voyage</small>
          </div>
          <div>
            <span>💬</span>
            <b>Discussion avant décision</b>
            <small>jamais d’acceptation à l’aveugle</small>
          </div>
          <div>
            <span>🛟</span>
            <b>Alfred en soutien</b>
            <small>un contact humain en cas de problème sur place</small>
          </div>
        </div>
      </section>

      <section className="section shell reveal">
        <div className="section-head">
          <div>
            <div className="eyebrow">Voyageurs</div>
            <h2>Rejoignez une communauté active.</h2>
          </div>
          <Link href="/mondo/community" className="btn">
            Voir tous les profils
          </Link>
        </div>
        <MemberGrid />
      </section>
    </>
  );
}
