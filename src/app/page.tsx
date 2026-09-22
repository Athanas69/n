import Link from "next/link";

export default function EntryPage() {
  return (
    <main className="entry">
      <Link href="/mondo" className="entry-side">
        <img src="/assets/entry-mondo.jpg" alt="Mondo" />
        <div className="entry-info">
          <small>Mondo</small>
          <h2>Partir à plusieurs.</h2>
          <p>Trouvez les bonnes personnes et construisez l’aventure ensemble.</p>
          <span className="entry-link">Entrer dans Mondo →</span>
        </div>
      </Link>
      <Link href="/atlas" className="entry-side">
        <img src="/assets/entry-atlas.jpg" alt="Atlas" />
        <div className="entry-info">
          <small>Atlas</small>
          <h2>Explorer mieux.</h2>
          <p>Comprenez la destination, préparez le séjour et rendez-le réservable.</p>
          <span className="entry-link">Entrer dans Atlas →</span>
        </div>
      </Link>
    </main>
  );
}
