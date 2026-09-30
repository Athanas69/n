import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
        gap: 14,
      }}
    >
      <div className="eyebrow">Erreur 404</div>
      <h1 style={{ fontSize: "clamp(32px,6vw,52px)", maxWidth: 560 }}>Cette page n’existe pas, ou plus.</h1>
      <p className="muted" style={{ maxWidth: 440 }}>
        Le lien est peut-être périmé, ou l’adresse mal orthographiée. Repartez depuis l’un de ces deux points de
        départ.
      </p>
      <div style={{ display: "flex", gap: 10, marginTop: 8, flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/atlas" className="btn primary">
          Explorer Atlas
        </Link>
        <Link href="/mondo" className="btn">
          Découvrir Mondo
        </Link>
      </div>
    </main>
  );
}
