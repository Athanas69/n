"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
      <div className="eyebrow">Erreur inattendue</div>
      <h1 style={{ fontSize: "clamp(28px,5vw,44px)", maxWidth: 520 }}>Quelque chose s’est mal passé.</h1>
      <p className="muted" style={{ maxWidth: 440 }}>
        Le problème a été enregistré. Essayez de recharger la page — si ça persiste, repartez de l’accueil.
      </p>
      <div style={{ display: "flex", gap: 10, marginTop: 8, flexWrap: "wrap", justifyContent: "center" }}>
        <button type="button" className="btn primary" onClick={() => reset()}>
          Réessayer
        </button>
        <Link href="/" className="btn">
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
