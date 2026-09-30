import Link from "next/link";

export default function MondoNotFound() {
  return (
    <section className="hero shell" style={{ textAlign: "center", paddingTop: 80, paddingBottom: 80 }}>
      <div className="eyebrow">Erreur 404</div>
      <h1 style={{ maxWidth: 600, margin: "0 auto" }}>Ce voyage ou cette page n’existe pas.</h1>
      <p className="muted" style={{ maxWidth: 440, margin: "10px auto 0" }}>
        Le lien est peut-être périmé, ou le voyage a été retiré par son organisateur.
      </p>
      <div style={{ display: "flex", gap: 10, marginTop: 20, justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/mondo/community" className="btn primary">
          Voir la communauté
        </Link>
        <Link href="/mondo" className="btn">
          Retour à l’accueil Mondo
        </Link>
      </div>
    </section>
  );
}
