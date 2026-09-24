// Frankfurter/ECB only covers ~30 major currencies (no VND, KHR, XPF, MVR, etc.),
// which silently dropped the converter on ~49 of the site's destinations.
// This CDN-hosted dataset covers 300+ currencies with no API key required.
const SOURCES = [
  (base: string) => `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.json`,
  (base: string) => `https://latest.currency-api.pages.dev/v1/currencies/${base}.json`,
];

export async function fetchRate(base: string, target: string): Promise<number | null> {
  if (base === target) return 1;
  const baseLower = base.toLowerCase();
  const targetLower = target.toLowerCase();
  const cacheKey = `fx:${base}:${target}`;
  const cached = sessionStorage.getItem(cacheKey);
  if (cached) return Number(cached);

  for (const source of SOURCES) {
    try {
      const res = await fetch(source(baseLower));
      if (!res.ok) continue;
      const data = await res.json();
      const rate = data[baseLower]?.[targetLower];
      if (typeof rate !== "number") continue;
      sessionStorage.setItem(cacheKey, String(rate));
      return rate;
    } catch {
      continue;
    }
  }
  return null;
}
