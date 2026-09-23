"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Locale = "fr" | "en" | "es" | "it" | "de" | "zh";

export const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
];

const LOCALE_KEY = "atlas:locale";
const EVENT = "atlas:locale-change";
const DEFAULT_LOCALE: Locale = "fr";

export function getLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = window.localStorage.getItem(LOCALE_KEY);
  return (LOCALES.some((l) => l.code === stored) ? stored : DEFAULT_LOCALE) as Locale;
}

export function setLocale(locale: Locale) {
  window.localStorage.setItem(LOCALE_KEY, locale);
  window.dispatchEvent(new Event(EVENT));
}

export function useLocale(): Locale {
  const subscribeFn = useCallback((cb: () => void) => {
    window.addEventListener(EVENT, cb);
    window.addEventListener("storage", cb);
    return () => {
      window.removeEventListener(EVENT, cb);
      window.removeEventListener("storage", cb);
    };
  }, []);
  return useSyncExternalStore(subscribeFn, getLocale, () => DEFAULT_LOCALE);
}

type Dict = Record<string, string>;

const fr: Dict = {
  "nav.accueil": "Accueil",
  "nav.voyages": "Voyages",
  "nav.creer": "Créer",
  "nav.communaute": "Communauté",
  "nav.triproom": "Trip Room",
  "nav.destinations": "Destinations",
  "nav.guides": "Guides",
  "nav.hotels": "Hôtels",
  "nav.vols": "Vols",
  "nav.favoris": "Favoris",
  "nav.profil": "Profil",
  "footer.mondo.title": "Mondo",
  "footer.atlas.title": "Atlas",
  "footer.compte": "Compte",
  "footer.mondo.line1": "Rencontrer.",
  "footer.mondo.line2": "Organiser. Partir.",
  "footer.atlas.line1": "Explorer.",
  "footer.atlas.line2": "Comprendre. Réserver.",
  "alfred.cta": "Demander à Alfred",
  "common.search": "Rechercher",
  "common.seeOffer": "Voir l’offre",
};

const en: Dict = {
  "nav.accueil": "Home",
  "nav.voyages": "Trips",
  "nav.creer": "Create",
  "nav.communaute": "Community",
  "nav.triproom": "Trip Room",
  "nav.destinations": "Destinations",
  "nav.guides": "Guides",
  "nav.hotels": "Hotels",
  "nav.vols": "Flights",
  "nav.favoris": "Favorites",
  "nav.profil": "Profile",
  "footer.mondo.title": "Mondo",
  "footer.atlas.title": "Atlas",
  "footer.compte": "Account",
  "footer.mondo.line1": "Meet.",
  "footer.mondo.line2": "Plan. Go.",
  "footer.atlas.line1": "Explore.",
  "footer.atlas.line2": "Understand. Book.",
  "alfred.cta": "Ask Alfred",
  "common.search": "Search",
  "common.seeOffer": "See offer",
};

const es: Dict = {
  "nav.accueil": "Inicio",
  "nav.voyages": "Viajes",
  "nav.creer": "Crear",
  "nav.communaute": "Comunidad",
  "nav.triproom": "Trip Room",
  "nav.destinations": "Destinos",
  "nav.guides": "Guías",
  "nav.hotels": "Hoteles",
  "nav.vols": "Vuelos",
  "nav.favoris": "Favoritos",
  "nav.profil": "Perfil",
  "footer.mondo.title": "Mondo",
  "footer.atlas.title": "Atlas",
  "footer.compte": "Cuenta",
  "footer.mondo.line1": "Conoce.",
  "footer.mondo.line2": "Organiza. Viaja.",
  "footer.atlas.line1": "Explora.",
  "footer.atlas.line2": "Entiende. Reserva.",
  "alfred.cta": "Preguntar a Alfred",
  "common.search": "Buscar",
  "common.seeOffer": "Ver oferta",
};

const it: Dict = {
  "nav.accueil": "Home",
  "nav.voyages": "Viaggi",
  "nav.creer": "Crea",
  "nav.communaute": "Community",
  "nav.triproom": "Trip Room",
  "nav.destinations": "Destinazioni",
  "nav.guides": "Guide",
  "nav.hotels": "Hotel",
  "nav.vols": "Voli",
  "nav.favoris": "Preferiti",
  "nav.profil": "Profilo",
  "footer.mondo.title": "Mondo",
  "footer.atlas.title": "Atlas",
  "footer.compte": "Account",
  "footer.mondo.line1": "Incontra.",
  "footer.mondo.line2": "Organizza. Parti.",
  "footer.atlas.line1": "Esplora.",
  "footer.atlas.line2": "Capisci. Prenota.",
  "alfred.cta": "Chiedi ad Alfred",
  "common.search": "Cerca",
  "common.seeOffer": "Vedi l’offerta",
};

const de: Dict = {
  "nav.accueil": "Start",
  "nav.voyages": "Reisen",
  "nav.creer": "Erstellen",
  "nav.communaute": "Community",
  "nav.triproom": "Trip Room",
  "nav.destinations": "Ziele",
  "nav.guides": "Guides",
  "nav.hotels": "Hotels",
  "nav.vols": "Flüge",
  "nav.favoris": "Favoriten",
  "nav.profil": "Profil",
  "footer.mondo.title": "Mondo",
  "footer.atlas.title": "Atlas",
  "footer.compte": "Konto",
  "footer.mondo.line1": "Treffen.",
  "footer.mondo.line2": "Planen. Losfahren.",
  "footer.atlas.line1": "Entdecken.",
  "footer.atlas.line2": "Verstehen. Buchen.",
  "alfred.cta": "Alfred fragen",
  "common.search": "Suchen",
  "common.seeOffer": "Angebot ansehen",
};

const zh: Dict = {
  "nav.accueil": "首页",
  "nav.voyages": "行程",
  "nav.creer": "创建",
  "nav.communaute": "社区",
  "nav.triproom": "行程室",
  "nav.destinations": "目的地",
  "nav.guides": "指南",
  "nav.hotels": "酒店",
  "nav.vols": "机票",
  "nav.favoris": "收藏",
  "nav.profil": "个人资料",
  "footer.mondo.title": "Mondo",
  "footer.atlas.title": "Atlas",
  "footer.compte": "账户",
  "footer.mondo.line1": "相遇。",
  "footer.mondo.line2": "规划。出发。",
  "footer.atlas.line1": "探索。",
  "footer.atlas.line2": "了解。预订。",
  "alfred.cta": "询问 Alfred",
  "common.search": "搜索",
  "common.seeOffer": "查看优惠",
};

const DICTS: Record<Locale, Dict> = { fr, en, es, it, de, zh };

export function useT() {
  const locale = useLocale();
  return useCallback(
    (key: string) => DICTS[locale][key] ?? DICTS.fr[key] ?? key,
    [locale]
  );
}
