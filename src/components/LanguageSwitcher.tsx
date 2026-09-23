"use client";

import { useState } from "react";
import { LOCALES, useLocale, setLocale } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  return (
    <div className="langswitch">
      <button
        type="button"
        className="langswitch-btn"
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        aria-label="Langue"
      >
        {current.flag}
      </button>
      {open && (
        <div className="langswitch-menu">
          {LOCALES.map((l) => (
            <button
              type="button"
              key={l.code}
              className={l.code === locale ? "on" : ""}
              onMouseDown={() => {
                setLocale(l.code);
                setOpen(false);
              }}
            >
              <span>{l.flag}</span>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
