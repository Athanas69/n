import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, Playfair_Display } from "next/font/google";
import Toast from "@/components/Toast";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600", "700"],
});

const SITE_DESCRIPTION =
  "Mondo × Atlas — trouvez vos compagnons, organisez le voyage, préparez chaque ville et réservez dans une seule expérience.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mondo × Atlas",
    template: "%s · Mondo × Atlas",
  },
  description: SITE_DESCRIPTION,
  manifest: "/manifest.webmanifest",
  applicationName: "Mondo × Atlas",
  robots: { index: true, follow: true },
  icons: {
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Mondo × Atlas",
    title: "Mondo × Atlas",
    description: SITE_DESCRIPTION,
    url: "/",
    images: [{ url: "/assets/mondo-hero.jpg", width: 1200, height: 800, alt: "Mondo × Atlas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mondo × Atlas",
    description: SITE_DESCRIPTION,
    images: ["/assets/mondo-hero.jpg"],
  },
};

export const viewport = {
  themeColor: "#18211d",
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mondo × Atlas",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  logo: `${SITE_URL}/icon-512.png`,
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mondo × Atlas",
  url: SITE_URL,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${spaceGrotesk.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />
        {children}
        <Toast />
        <ScrollReveal />
      </body>
    </html>
  );
}
