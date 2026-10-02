// Single source of truth for the deployed origin, used for sitemap URLs,
// canonical links, and Open Graph absolute image URLs. Override with
// NEXT_PUBLIC_SITE_URL once a custom domain is attached; falls back to the
// current Vercel deployment so this works correctly out of the box.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://n-green-six-54.vercel.app").replace(/\/$/, "");

// Next.js does not copy a page's plain title/description into its
// openGraph block automatically — without this, a page with its own title
// still shows the root layout's generic title/image when shared on
// social/chat apps. Spreading this keeps both in sync from one source.
export function pageOG(title: string, description: string, path?: string) {
  return {
    title,
    description,
    ...(path ? { alternates: { canonical: path } } : {}),
    openGraph: { title, description },
    twitter: { title, description },
  };
}
