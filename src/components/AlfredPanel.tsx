"use client";

import { useEffect, useState } from "react";
import { ALFRED_EVENT } from "@/lib/notify";
import { DEFAULT_CITY, citySlug } from "@/lib/data";
import { useRouter } from "next/navigation";

export function AlfredFab() {
  return (
    <button
      className="alfredfab"
      onClick={() => window.dispatchEvent(new Event(ALFRED_EVENT))}
    >
      Alfred
    </button>
  );
}

export default function AlfredPanel() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function handle() {
      setOpen(true);
    }
    window.addEventListener(ALFRED_EVENT, handle);
    return () => window.removeEventListener(ALFRED_EVENT, handle);
  }, []);

  return (
    <aside id="alfred" className={open ? "open" : ""}>
      <button className="btn" style={{ float: "right" }} onClick={() => setOpen(false)}>
        ×
      </button>
      <div className="eyebrow" style={{ color: "#bad4c8" }}>
        Alfred
      </div>
      <h2>Je maintiens le voyage cohérent.</h2>
      <div className="alfredcard">
        Votre groupe part au Japon du 10 au 24 octobre. Tokyo est la première étape. Budget : 2 000 € / personne.
      </div>
      <div className="alfredcard">
        <b>Point à surveiller</b>
        <br />
        Si vous choisissez Shibuya, 5 activités sauvegardées restent à moins de 25 minutes. Shinjuku gagne en
        transport interville.
      </div>
      <button
        className="btn"
        onClick={() => {
          window.localStorage.setItem("atlasCity", DEFAULT_CITY);
          setOpen(false);
          router.push(`/atlas/${citySlug(DEFAULT_CITY)}`);
        }}
      >
        Ouvrir Tokyo
      </button>
    </aside>
  );
}
