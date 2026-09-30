// Single source of truth for the deployed origin, used for sitemap URLs,
// canonical links, and Open Graph absolute image URLs. Override with
// NEXT_PUBLIC_SITE_URL once a custom domain is attached; falls back to the
// current Vercel deployment so this works correctly out of the box.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://n-green-six-54.vercel.app").replace(/\/$/, "");
