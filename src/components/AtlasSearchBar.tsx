"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CITY_NAMES, citySlug, getCities } from "@/lib/data";

function defaultDates() {
  const start = new Date();
  start.setDate(start.getDate() + 30);
  const end = new Date(start);
  end.setDate(end.getDate() + 7);
  const iso = (d: Date) => d.toISOString().slice(0, 10);
  return { start: iso(start), end: iso(end) };
}

export default function AtlasSearchBar() {
  const router = useRouter();
  const cities = getCities();
  const { start, end } = defaultDates();

  const [query, setQuery] = useState("");
  const [city, setCity] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [checkin, setCheckin] = useState(start);
  const [checkout, setCheckout] = useState(end);
  const [travelers, setTravelers] = useState(2);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return CITY_NAMES.filter((name) => {
      const c = cities[name];
      return name.toLowerCase().includes(q) || c.country.toLowerCase().includes(q);
    }).slice(0, 6);
  }, [query, cities]);

  function pick(name: string) {
    setCity(name);
    setQuery(name);
    setOpen(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const target = city ?? results[0] ?? (CITY_NAMES.includes(query.trim()) ? query.trim() : null);
    if (!target) {
      inputRef.current?.focus();
      setOpen(true);
      return;
    }
    const params = new URLSearchParams({ checkin, checkout, travelers: String(travelers) });
    router.push(`/atlas/${citySlug(target)}?${params.toString()}`);
  }

  return (
    <form className="atlassearch" onSubmit={handleSubmit}>
      <div className="atlassearch-field atlassearch-dest">
        <small>Destination</small>
        <input
          ref={inputRef}
          placeholder="Où partez-vous ?"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCity(null);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
        />
        {open && results.length > 0 && (
          <div className="atlassearch-results">
            {results.map((name) => (
              <button type="button" key={name} onMouseDown={() => pick(name)}>
                <img src={cities[name].hero} alt={name} />
                <span>
                  <b>{name}</b>
                  <small>{cities[name].country}</small>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="atlassearch-field">
        <small>Aller</small>
        <input type="date" value={checkin} onChange={(e) => setCheckin(e.target.value)} />
      </div>
      <div className="atlassearch-field">
        <small>Retour</small>
        <input type="date" value={checkout} onChange={(e) => setCheckout(e.target.value)} />
      </div>
      <div className="atlassearch-field">
        <small>Voyageurs</small>
        <input
          type="number"
          min={1}
          value={travelers}
          onChange={(e) => setTravelers(Math.max(1, Number(e.target.value)))}
        />
      </div>
      <button type="submit" className="btn primary atlassearch-submit">
        Préparer le voyage
      </button>
    </form>
  );
}
