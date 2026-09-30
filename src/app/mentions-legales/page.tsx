import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Informations légales sur l’éditeur et l’hébergeur de Mondo × Atlas.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="section shell" style={{ paddingTop: 30, maxWidth: 760, margin: "0 auto" }}>
      <Link href="/" className="btn" style={{ display: "inline-flex", marginBottom: 20 }}>
        ← Accueil
      </Link>
      <div className="eyebrow">Informations légales</div>
      <h1 style={{ fontSize: "clamp(32px,5vw,44px)", marginTop: 8 }}>Mentions légales</h1>
      <p className="muted" style={{ fontSize: 13, marginTop: 10 }}>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

      <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 24, fontSize: 14, lineHeight: 1.75 }}>
        <div style={{ background: "var(--sand)", borderRadius: "var(--r)", padding: 22, color: "var(--ink)" }}>
          <p style={{ margin: 0 }}>
            <b>À compléter avant mise en ligne publique.</b> Conformément à l’article 6 de la loi n° 2004-575 du 21
            juin 2004 pour la confiance dans l’économie numérique (LCEN), tout site accessible au public doit
            identifier nominativement son éditeur. Les champs ci-dessous sont des emplacements à renseigner avec les
            informations réelles de l’éditeur — ils ne doivent pas rester en l’état lors du lancement.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Éditeur du site</h2>
          <p>
            Le site Mondo × Atlas est édité par : <b>[À compléter : nom de la société ou, si personne physique, nom
            et prénom de l’éditeur]</b>
            <br />
            Forme juridique : <b>[À compléter]</b> · Capital social : <b>[À compléter]</b>
            <br />
            Siège social : <b>[À compléter : adresse complète]</b>
            <br />
            SIREN/SIRET : <b>[À compléter]</b> · RCS : <b>[À compléter]</b>
            <br />
            N° TVA intracommunautaire : <b>[À compléter, si applicable]</b>
            <br />
            Directeur de la publication : <b>[À compléter]</b>
            <br />
            Contact : <b>[À compléter : adresse e-mail de contact]</b>
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Hébergement</h2>
          <p>
            Le site est hébergé par : <b>Vercel Inc.</b>, 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis —{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              vercel.com
            </a>
            . Les images de destinations sont servies via Unsplash (Unsplash Inc.) et les fonds de carte via
            OpenStreetMap.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Propriété intellectuelle</h2>
          <p>
            L’ensemble des éléments du site (textes, guides, structure, code, identité visuelle) est protégé par le
            droit de la propriété intellectuelle. Les photographies de destinations proviennent d’Unsplash et sont
            utilisées sous licence Unsplash. Toute reproduction non autorisée est interdite.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Nature du service à date</h2>
          <p>
            À ce stade, Mondo × Atlas est un site de découverte et de préparation de voyage : les informations
            pratiques (visa, budget, hôtels, vols) sont fournies à titre indicatif et ne constituent pas une offre de
            réservation ferme — aucune transaction financière n’est traitée sur le site. Les fonctionnalités
            « Créer un voyage », favoris et profil enregistrent les données uniquement dans le navigateur du visiteur
            (voir la page Confidentialité). Lorsque des partenariats de réservation (vols, hôtels, eSIM) seront
            activés, cette page et la politique de confidentialité seront mises à jour en conséquence.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Limitation de responsabilité</h2>
          <p>
            Les informations pratiques (visa, prises électriques, numéros d’urgence, taux de change, météo) sont
            fournies à titre indicatif et peuvent évoluer. Vérifiez toujours les informations officielles auprès des
            autorités compétentes avant de voyager. L’éditeur ne saurait être tenu responsable des conséquences d’une
            information devenue inexacte.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Droit applicable</h2>
          <p>Les présentes mentions légales sont soumises au droit français.</p>
        </div>
      </div>
    </section>
  );
}
