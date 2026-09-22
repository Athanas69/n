export async function fetchRate(base: string, target: string): Promise<number | null> {
  if (base === target) return 1;
  try {
    const cacheKey = `fx:${base}:${target}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) return Number(cached);
    const res = await fetch(`https://api.frankfurter.dev/v1/latest?base=${base}&symbols=${target}`);
    if (!res.ok) return null;
    const data = await res.json();
    const rate = data.rates?.[target];
    if (typeof rate !== "number") return null;
    sessionStorage.setItem(cacheKey, String(rate));
    return rate;
  } catch {
    return null;
  }
}
