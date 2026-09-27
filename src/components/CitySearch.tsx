"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CITY_NAMES, citySlug, getCities, normalizeSearch } from "@/lib/data";

export default function CitySearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const cities = getCities();

  const results = useMemo(() => {
    const q = normalizeSearch(query.trim());
    if (!q) return [];
    return CITY_NAMES.filter((name) => {
      const c = cities[name];
      return normalizeSearch(name).includes(q) || normalizeSearch(c.country).includes(q);
    }).slice(0, 7);
  }, [query, cities]);

  function go(name: string) {
    setQuery("");
    setOpen(false);
    router.push(`/atlas/${citySlug(name)}`);
  }

  return (
    <div className="citysearch">
      <input
        ref={inputRef}
        type="text"
        placeholder="Chercher une ville, un pays… (Tokyo, Italie, Maroc…)"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && results[0]) go(results[0]);
        }}
      />
      {open && results.length > 0 && (
        <div className="citysearch-results">
          {results.map((name) => {
            const c = cities[name];
            return (
              <button key={name} onMouseDown={() => go(name)}>
                <img src={c.hero} alt={name} />
                <span>
                  <b>{name}</b>
                  <small>{c.country}</small>
                </span>
              </button>
            );
          })}
        </div>
      )}
      {open && query && results.length === 0 && (
        <div className="citysearch-results">
          <p className="citysearch-empty">Aucune destination trouvée pour « {query} ».</p>
        </div>
      )}
    </div>
  );
}
