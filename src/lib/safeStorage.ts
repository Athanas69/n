// Web Storage throws when site data is blocked (private modes, strict
// privacy settings) or the quota is exceeded. Persistence is a convenience
// here, so every access degrades to a no-op instead of crashing the page.
type Kind = "local" | "session";

function store(kind: Kind): Storage | null {
  try {
    return kind === "local" ? window.localStorage : window.sessionStorage;
  } catch {
    return null;
  }
}

export function safeGet(key: string, kind: Kind = "local"): string | null {
  try {
    return store(kind)?.getItem(key) ?? null;
  } catch {
    return null;
  }
}

export function safeSet(key: string, value: string, kind: Kind = "local"): boolean {
  try {
    const s = store(kind);
    if (!s) return false;
    s.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}
