import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import Toast from "@/components/Toast";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mondo × Atlas — North Star",
  description:
    "Mondo × Atlas — trouvez vos compagnons, organisez le voyage, préparez chaque ville et réservez dans une seule expérience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>
        {children}
        <Toast />
      </body>
    </html>
  );
}
