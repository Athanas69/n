"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { citySlug, DEFAULT_CITY } from "@/lib/data";
import Mark from "./Mark";

const mondoLinks = [
  { href: "/mondo", label: "Accueil" },
  { href: "/mondo/trips", label: "Voyages" },
  { href: "/mondo/create", label: "Créer" },
  { href: "/mondo/community", label: "Communauté" },
  { href: "/mondo/trip-room", label: "Trip Room" },
];

export default function Nav({ mode }: { mode: "MONDO" | "ATLAS" }) {
  const [lastCity, setLastCity] = useState(DEFAULT_CITY);

  useEffect(() => {
    // Synced after mount (not in the lazy initial state) to avoid a hydration
    // mismatch between the server-rendered default and the visitor's stored city.
    const stored = window.localStorage.getItem("atlasCity");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored) setLastCity(stored);
  }, []);

  const atlasLinks = [
    { href: "/atlas", label: "Accueil" },
    { href: "/atlas/destinations", label: "Destinations" },
    { href: `/atlas/${citySlug(lastCity)}`, label: "Guides" },
    { href: "/atlas/hotels", label: "Hôtels" },
    { href: "/atlas/flights", label: "Vols" },
  ];

  const links = mode === "MONDO" ? mondoLinks : atlasLinks;

  return (
    <header className="nav">
      <div className="shell navin">
        <Link href={mode === "MONDO" ? "/mondo" : "/atlas"} className="brand">
          <span className="brandmark">
            <Mark />
          </span>
          {mode}
        </Link>
        <nav className="navlinks">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="navright">
          <div className="switch">
            <Link href="/mondo" className={mode === "MONDO" ? "on" : ""}>
              Mondo
            </Link>
            <Link href="/atlas" className={mode === "ATLAS" ? "on" : ""}>
              Atlas
            </Link>
          </div>
          <Link href="/profile" className="avatar navavatar">
            NA
          </Link>
        </div>
      </div>
    </header>
  );
}
