"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { citySlug, DEFAULT_CITY } from "@/lib/data";
import { useFavorites, useProfile } from "@/lib/store";
import { useT } from "@/lib/i18n";
import Mark from "./Mark";
import NavHotelPreview from "./NavHotelPreview";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav({ mode }: { mode: "MONDO" | "ATLAS" }) {
  const pathname = usePathname();
  const favorites = useFavorites();
  const profile = useProfile();
  const t = useT();

  const mondoLinks = [
    { href: "/mondo", label: t("nav.accueil") },
    { href: "/mondo/trips", label: t("nav.voyages") },
    { href: "/mondo/create", label: t("nav.creer") },
    { href: "/mondo/community", label: t("nav.communaute") },
    { href: "/mondo/trip-room", label: t("nav.triproom") },
  ];
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
    { href: "/atlas", label: t("nav.accueil") },
    { href: "/atlas/destinations", label: t("nav.destinations") },
    { href: `/atlas/${citySlug(lastCity)}`, label: t("nav.guides") },
    { href: "/atlas/hotels", label: t("nav.hotels") },
    { href: "/atlas/flights", label: t("nav.vols") },
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
            mode === "ATLAS" && l.href === "/atlas/hotels" ? (
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
          <LanguageSwitcher />
          <Link href="/favorites" className="navfav" aria-label={t("nav.favoris")}>
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
          <Link href="/profile" className="avatar navavatar" aria-label={t("nav.profil")}>
            {initials}
          </Link>
        </div>
      </div>
    </header>
  );
}
