import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, Fraunces } from "next/font/google";
import Toast from "@/components/Toast";
import ScrollReveal from "@/components/ScrollReveal";
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

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: {
    default: "Mondo × Atlas",
    template: "%s · Mondo × Atlas",
  },
  description:
    "Mondo × Atlas — trouvez vos compagnons, organisez le voyage, préparez chaque ville et réservez dans une seule expérience.",
  manifest: "/manifest.webmanifest",
  applicationName: "Mondo × Atlas",
};

export const viewport = {
  themeColor: "#18211d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${spaceGrotesk.variable} ${fraunces.variable}`}>
      <body>
        {children}
        <Toast />
        <ScrollReveal />
      </body>
    </html>
  );
}
