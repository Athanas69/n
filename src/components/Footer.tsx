import Link from "next/link";
import Mark from "./Mark";

export default function Footer() {
  return (
    <footer className="footer shell">
      <div className="footergrid">
        <div>
          <div className="brand">
            <span className="brandmark">
              <Mark />
            </span>
            MONDO
          </div>
          <h3>
            Rencontrer.
            <br />
            Organiser. Partir.
          </h3>
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
