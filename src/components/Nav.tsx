"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { citySlug, DEFAULT_CITY } from "@/lib/data";
import { useFavorites, useProfile } from "@/lib/store";
import Mark from "./Mark";
import NavHotelPreview from "./NavHotelPreview";

const mondoLinks = [
  { href: "/mondo", label: "Accueil" },
  { href: "/mondo/trips", label: "Voyages" },
  { href: "/mondo/create", label: "Créer" },
  { href: "/mondo/community", label: "Communauté" },
  { href: "/mondo/trip-room", label: "Trip Room" },
];

export default function Nav({ mode }: { mode: "MONDO" | "ATLAS" }) {
  const pathname = usePathname();
  const favorites = useFavorites();
  const profile = useProfile();
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
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

  function isActive(href: string) {
    if (href === "/mondo" || href === "/atlas") return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className="nav">
      <div className="shell navin">
        <Link href={mode === "MONDO" ? "/mondo" : "/atlas"} className="brand">
          <span className="brandmark">
            <Mark mode={mode} />
          </span>
          {mode}
        </Link>
        <nav className="navlinks">
          {links.map((l) =>
            mode === "ATLAS" && l.label === "Hôtels" ? (
              <div className="navitem-hover" key={l.href}>
                <Link href={l.href} className={isActive(l.href) ? "navactive" : ""}>
                  {l.label}
                </Link>
                <NavHotelPreview city={lastCity} />
              </div>
            ) : (
              <Link key={l.href} href={l.href} className={isActive(l.href) ? "navactive" : ""}>
                {l.label}
              </Link>
            )
          )}
        </nav>
        <div className="navright">
          <Link href="/favorites" className="navfav" aria-label="Favoris">
            ♥{favorites.length > 0 && <span className="navfav-count">{favorites.length}</span>}
          </Link>
          <div className="switch">
            <Link href="/mondo" className={mode === "MONDO" ? "on" : ""}>
              Mondo
            </Link>
            <Link href="/atlas" className={mode === "ATLAS" ? "on" : ""}>
              Atlas
            </Link>
          </div>
          <Link href="/profile" className="avatar navavatar">
            {initials}
          </Link>
        </div>
      </div>
    </header>
  );
}
