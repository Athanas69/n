import Link from "next/link";
import { MondoMark, AtlasMark } from "./Mark";

export default function Footer({ mode = "MONDO" }: { mode?: "MONDO" | "ATLAS" }) {
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
              Rencontrer.
              <br />
              Organiser. Partir.
            </h3>
          ) : (
            <h3>
              Explorer.
              <br />
              Comprendre. Réserver.
            </h3>
          )}
        </div>
        <div>
          <h4>Mondo</h4>
          <Link href="/mondo/trips">Voyages</Link>
          <Link href="/mondo/create">Créer</Link>
          <Link href="/mondo/community">Communauté</Link>
          <Link href="/mondo/trip-room">Trip Room</Link>
        </div>
        <div>
          <h4>Atlas</h4>
          <Link href="/atlas/destinations">Destinations</Link>
          <Link href="/atlas/hotels">Hôtels</Link>
          <Link href="/atlas/flights">Vols</Link>
          <Link href="/atlas/tokyo">Guides</Link>
        </div>
        <div>
          <h4>Compte</h4>
          <Link href="/profile">Profil</Link>
        </div>
      </div>
    </footer>
  );
}
