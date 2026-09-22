import Link from "next/link";
import { AtlasMark, MondoMark } from "@/components/Mark";

export default function EntryPage() {
  return (
    <main className="entry">
      <Link href="/mondo" className="entry-side">
        <img
          src="https://images.unsplash.com/photo-1763420164089-10b47cc3c7c2?auto=format&fit=crop&w=1800&q=85"
          alt="Mondo"
        />
        <div className="entry-info">
          <div className="entry-eyebrow">Mondo</div>
          <h2>La communauté</h2>
          <p className="entry-dek">Trouvez vos compagnons de voyage et organisez le départ ensemble.</p>
        </div>
      </Link>
      <Link href="/atlas" className="entry-side">
        <img
          src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=1800&q=85"
          alt="Atlas"
        />
        <div className="entry-info">
          <div className="entry-eyebrow">Atlas</div>
          <h2>L’exploration</h2>
          <p className="entry-dek">Comprenez chaque ville et préparez-la comme un local.</p>
        </div>
      </Link>
      <div className="entry-mark">
        <span className="entry-mark-ring" />
        <span className="entry-mark-icon entry-mark-mondo">
          <MondoMark size={16} />
        </span>
        <span className="entry-mark-icon entry-mark-atlas">
          <AtlasMark size={18} />
        </span>
      </div>
    </main>
  );
}
