"use client";

const SECTIONS = [
  ["understand", "Comprendre"],
  ["hoods", "Quartiers"],
  ["stays", "Hôtels"],
  ["transport", "Transport"],
  ["esim", "eSIM"],
  ["guides", "Guides"],
  ["before", "Before You Go"],
  ["first24", "First 24h"],
] as const;

export default function CityNav() {
  return (
    <div className="citynav">
      {SECTIONS.map(([id, label]) => (
        <button
          key={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
