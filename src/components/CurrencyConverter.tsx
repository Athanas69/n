"use client";

import { useEffect, useState } from "react";
import { fetchRate } from "@/lib/currency";

export default function CurrencyConverter({ currency }: { currency: string }) {
  const [rate, setRate] = useState<number | null>(() => (currency === "EUR" ? 1 : null));
  const [error, setError] = useState(false);
  const [amount, setAmount] = useState(100);

  useEffect(() => {
    if (currency === "EUR") return;
    let cancelled = false;
    fetchRate("EUR", currency).then((r) => {
      if (cancelled) return;
      if (r === null) setError(true);
      else setRate(r);
    });
    return () => {
      cancelled = true;
    };
  }, [currency]);

  if (error) return null;

  return (
    <div className="fxconverter">
      <div className="fxconverter-row">
        <label className="field" style={{ flex: 1 }}>
          <small>Euros</small>
          <input
            type="number"
            value={amount}
            min={0}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>
        <span className="fxconverter-eq">=</span>
        <div className="field" style={{ flex: 1 }}>
          <small>{currency}</small>
          <b className="fxconverter-result">
            {rate === null ? "…" : (amount * rate).toLocaleString("fr-FR", { maximumFractionDigits: 1 })}
          </b>
        </div>
      </div>
      {rate !== null && currency !== "EUR" && (
        <p className="muted" style={{ fontSize: 10, marginTop: 8 }}>
          1 € ≈ {rate.toLocaleString("fr-FR", { maximumFractionDigits: 3 })} {currency} · taux en direct
        </p>
      )}
    </div>
  );
}
