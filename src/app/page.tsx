import Link from "next/link";
import { AtlasMark, MondoMark } from "@/components/Mark";

export default function EntryPage() {
  return (
    <main className="entry">
      <Link href="/mondo" className="entry-side">
        <img
          src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=2400&q=90"
          alt="Mondo"
        />
        <div className="entry-info">
          <h2>MONDO</h2>
          <p className="entry-dek">La communauté — trouvez vos compagnons de voyage.</p>
        </div>
      </Link>
      <Link href="/atlas" className="entry-side">
        <img
          src="https://images.unsplash.com/photo-1786897162869-b0ccd067affd?auto=format&fit=crop&w=2400&q=90"
          alt="Atlas"
        />
        <div className="entry-info">
          <h2>ATLAS</h2>
          <p className="entry-dek">L’exploration — préparez chaque ville comme un local.</p>
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
