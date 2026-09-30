import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions générales d’utilisation",
  description: "Les règles d’utilisation de Mondo × Atlas.",
};

export default function CguPage() {
  return (
    <section className="section shell" style={{ paddingTop: 30, maxWidth: 760, margin: "0 auto" }}>
      <Link href="/" className="btn" style={{ display: "inline-flex", marginBottom: 20 }}>
        ← Accueil
      </Link>
      <div className="eyebrow">Règles d’utilisation</div>
      <h1 style={{ fontSize: "clamp(32px,5vw,44px)", marginTop: 8 }}>Conditions générales d’utilisation</h1>
      <p className="muted" style={{ fontSize: 13, marginTop: 10 }}>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

      <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 24, fontSize: 14, lineHeight: 1.75 }}>
        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>1. Objet</h2>
          <p>
            Les présentes conditions générales d’utilisation (CGU) régissent l’accès et l’usage de Mondo × Atlas, un
            site composé de deux volets : <b>Atlas</b>, des guides de destination et outils de comparaison
            (hôtels, vols) à but informatif, et <b>Mondo</b>, un outil de planification de voyage et un espace
            communautaire pour trouver des compagnons de voyage. L’utilisation du site implique l’acceptation pleine
            et entière des présentes CGU.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>2. Nature du service</h2>
          <p>
            Le site ne nécessite pas de création de compte : les fonctionnalités de Mondo (créer un voyage, favoris,
            profil) enregistrent les données localement dans votre navigateur, comme détaillé dans la{" "}
            <Link href="/confidentialite">politique de confidentialité</Link>. Les comparateurs de vols, d’hôtels et d’eSIM
            présentés sur Atlas sont, à ce stade, des outils de simulation à visée illustrative et informative :
            aucune réservation ni paiement réel n’est effectué via le site. Les prix affichés sont indicatifs.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>3. Contenu communautaire (Mondo)</h2>
          <p>
            Les voyages affichés dans la section Communauté sont, à ce stade, des exemples éditoriaux destinés à
            illustrer le fonctionnement du service. Lorsque la publication de voyages par de véritables utilisateurs
            sera activée, chaque organisateur restera seul responsable du contenu qu’il publie (titre, description,
            photos). Sont notamment interdits : tout contenu illicite, trompeur, discriminatoire au sens de la loi,
            portant atteinte aux droits de tiers, ou faisant la promotion d’activités dangereuses ou illégales.
          </p>
          <p style={{ marginTop: 8 }}>
            Le champ « composition du groupe » (mixte, entre hommes, entre femmes, voyage musulman) est une préférence
            déclarée par l’organisateur pour aider chacun à trouver un voyage qui lui correspond — ce n’est ni une
            vérification, ni une garantie assurée par la plateforme quant à la composition réelle du groupe au moment
            du départ.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>4. Exactitude des informations</h2>
          <p>
            Les informations pratiques (visa, devise, prises électriques, numéros d’urgence, météo, taux de change)
            sont fournies à titre indicatif et peuvent comporter des inexactitudes ou devenir obsolètes. Elles ne
            dispensent pas de vérifier les informations officielles (ambassade, consulat, compagnie aérienne) avant
            tout déplacement. L’éditeur du site ne saurait être tenu responsable d’un préjudice résultant d’une
            information erronée ou périmée.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>5. Propriété intellectuelle</h2>
          <p>
            Les textes, guides et la structure du site sont protégés par le droit d’auteur. Les photographies
            affichées proviennent d’Unsplash et sont utilisées conformément à la licence Unsplash. Toute reproduction
            du contenu éditorial du site sans autorisation préalable est interdite.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>6. Disponibilité du service</h2>
          <p>
            L’éditeur s’efforce d’assurer l’accessibilité du site mais ne garantit pas une disponibilité continue et
            ne saurait être tenu responsable d’interruptions temporaires liées à la maintenance, à des mises à jour ou
            à des causes indépendantes de sa volonté.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>7. Évolution des CGU</h2>
          <p>
            Ces CGU peuvent être modifiées à tout moment, notamment lors de l’activation de nouvelles fonctionnalités
            (comptes partagés, réservations réelles, paiement). La date de dernière mise à jour en haut de cette page
            fait foi.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>8. Droit applicable</h2>
          <p>Les présentes CGU sont soumises au droit français. Tout litige relève des tribunaux compétents.</p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Contact</h2>
          <p>
            Pour toute question relative à ces conditions : <b>[À compléter : adresse e-mail de contact]</b>.
          </p>
        </div>
      </div>
    </section>
  );
}
