import Link from "next/link";

export default function AtlasNotFound() {
  return (
    <section className="hero shell" style={{ textAlign: "center", paddingTop: 80, paddingBottom: 80 }}>
      <div className="eyebrow">Erreur 404</div>
      <h1 style={{ maxWidth: 600, margin: "0 auto" }}>Cette destination ou cette page n’existe pas.</h1>
      <p className="muted" style={{ maxWidth: 440, margin: "10px auto 0" }}>
        Le lien est peut-être périmé, ou la ville que vous cherchez n’est pas encore couverte par Atlas.
      </p>
      <div style={{ display: "flex", gap: 10, marginTop: 20, justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/atlas/destinations" className="btn primary">
          Voir toutes les destinations
        </Link>
        <Link href="/atlas" className="btn">
          Retour à l’accueil Atlas
        </Link>
      </div>
    </section>
  );
}
