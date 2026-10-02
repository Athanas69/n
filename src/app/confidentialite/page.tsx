import type { Metadata } from "next";
import Link from "next/link";
import { pageOG } from "@/lib/site";

export const metadata: Metadata = pageOG(
  "Politique de confidentialité",
  "Comment Mondo × Atlas traite (et ne traite pas) vos données.",
  "/confidentialite"
);

export default function ConfidentialitePage() {
  return (
    <section className="section shell" style={{ paddingTop: 30, maxWidth: 760, margin: "0 auto" }}>
      <Link href="/" className="btn" style={{ display: "inline-flex", marginBottom: 20 }}>
        ← Accueil
      </Link>
      <div className="eyebrow">Vos données</div>
      <h1 style={{ fontSize: "clamp(32px,5vw,44px)", marginTop: 8 }}>Politique de confidentialité</h1>
      <p className="muted" style={{ fontSize: 13, marginTop: 10 }}>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

      <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 24, fontSize: 14, lineHeight: 1.75 }}>
        <div style={{ background: "var(--green2)", borderRadius: "var(--r)", padding: 22, color: "var(--ink)" }}>
          <p style={{ margin: 0 }}>
            <b>En résumé :</b> Mondo × Atlas ne dispose d’aucun compte utilisateur ni serveur de base de données. Les
            voyages que vous créez, vos favoris et votre profil sont enregistrés uniquement dans le navigateur de
            l’appareil que vous utilisez (technologie <i>localStorage</i>) — ils ne sont jamais envoyés à, ni stockés
            par, l’éditeur du site. Effacer les données de navigation de votre navigateur les supprime définitivement.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Ce que nous ne collectons pas</h2>
          <p>
            Le site ne demande ni compte, ni adresse e-mail, ni mot de passe. Il n’y a pas de formulaire d’inscription
            et aucune donnée personnelle n’est transmise à un serveur lorsque vous créez un voyage, ajoutez un favori
            ou modifiez votre profil : tout reste sur votre appareil.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Ce qui est stocké dans votre navigateur</h2>
          <p>
            Ces informations restent locales à votre appareil et ne nous sont jamais transmises :
          </p>
          <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
            <li>Les voyages que vous créez sur Mondo (itinéraire, budget, checklist bagages) ;</li>
            <li>Vos destinations, hôtels et articles mis en favoris ;</li>
            <li>Les informations de profil que vous renseignez (nom, bio, centres d’intérêt) ;</li>
            <li>Le dernier pays consulté sur Atlas (pour personnaliser le menu Hôtels).</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Cookies et traceurs</h2>
          <p>
            Le site n’utilise aucun cookie de mesure d’audience, de publicité ou de traçage à ce jour, et aucun
            bandeau de consentement n’est donc affiché. Si un outil de mesure d’audience ou un partenaire publicitaire
            venait à être ajouté, cette page serait mise à jour et un recueil de consentement serait mis en place
            conformément à la réglementation applicable (RGPD, directive ePrivacy).
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Services tiers sollicités lors de la navigation</h2>
          <p>Certaines pages chargent des ressources depuis des services tiers, nécessaires à leur fonctionnement :</p>
          <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
            <li>
              <b>Unsplash</b> — les photographies de destinations sont chargées directement depuis les serveurs
              d’Unsplash, qui reçoit alors votre adresse IP comme tout chargement d’image sur le web.
            </li>
            <li>
              <b>OpenStreetMap</b> — les cartes de quartiers chargent des tuiles cartographiques depuis les serveurs
              d’OpenStreetMap.
            </li>
            <li>
              <b>Open-Meteo</b> — la météo en direct interroge l’API publique et gratuite Open-Meteo avec les
              coordonnées de la ville consultée (aucune donnée personnelle transmise).
            </li>
            <li>
              <b>Taux de change</b> — le convertisseur de devises interroge une API publique de taux de change (aucune
              donnée personnelle transmise).
            </li>
          </ul>
          <p style={{ marginTop: 8 }}>
            Les polices de caractères du site sont en revanche auto-hébergées (via next/font) : aucune requête n’est
            envoyée à Google lors de leur chargement.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Vos droits</h2>
          <p>
            Le site ne conservant aucune donnée personnelle sur ses propres serveurs, il n’y a rien à demander à
            effacer, rectifier ou exporter de notre côté : la suppression se fait directement en effaçant les données
            de site de votre navigateur, ou via l’outil d’export/import présent sur la page Profil. Pour toute
            question, contact : <b>[À compléter : adresse e-mail de contact]</b>.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Évolution de cette politique</h2>
          <p>
            Cette politique reflète le fonctionnement actuel du site, qui n’a pas encore de compte utilisateur ni de
            paiement en ligne réel. Si ces fonctionnalités sont activées (comptes partagés, réservations, paiement),
            cette page sera intégralement revue avant leur mise en service.
          </p>
        </div>
      </div>
    </section>
  );
}
