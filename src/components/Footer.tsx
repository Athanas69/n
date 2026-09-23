"use client";

import Link from "next/link";
import { MondoMark, AtlasMark } from "./Mark";
import { useT } from "@/lib/i18n";

export default function Footer({ mode = "MONDO" }: { mode?: "MONDO" | "ATLAS" }) {
  const t = useT();
  return (
    <footer className="footer shell">
      <div className="footergrid">
        <div>
          <div className="brand">
            <span className="brandmark">
              {mode === "MONDO" ? <MondoMark /> : <AtlasMark />}
            </span>
            {mode}
          </div>
          {mode === "MONDO" ? (
            <h3>
              {t("footer.mondo.line1")}
              <br />
              {t("footer.mondo.line2")}
            </h3>
          ) : (
            <h3>
              {t("footer.atlas.line1")}
              <br />
              {t("footer.atlas.line2")}
            </h3>
          )}
        </div>
        <div>
          <h4>{t("footer.mondo.title")}</h4>
          <Link href="/mondo/trips">{t("nav.voyages")}</Link>
          <Link href="/mondo/create">{t("nav.creer")}</Link>
          <Link href="/mondo/community">{t("nav.communaute")}</Link>
          <Link href="/mondo/trip-room">{t("nav.triproom")}</Link>
        </div>
        <div>
          <h4>{t("footer.atlas.title")}</h4>
          <Link href="/atlas/destinations">{t("nav.destinations")}</Link>
          <Link href="/atlas/hotels">{t("nav.hotels")}</Link>
          <Link href="/atlas/flights">{t("nav.vols")}</Link>
          <Link href="/atlas/tokyo">{t("nav.guides")}</Link>
        </div>
        <div>
          <h4>{t("footer.compte")}</h4>
          <Link href="/profile">{t("nav.profil")}</Link>
        </div>
      </div>
    </footer>
  );
}
