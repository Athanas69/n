import Link from "next/link";
import { ArrowheadMark } from "@/components/Mark";

export default function EntryPage() {
  return (
    <main className="entry">
      <Link href="/mondo" className="entry-side">
        <img src="/assets/entry-mondo.jpg" alt="Mondo — La communauté" />
        <div className="entry-label">
          <span className="entry-label-title">MONDO</span>
          <span className="entry-label-sub">La communauté</span>
        </div>
      </Link>
      <Link href="/atlas" className="entry-side">
        <img src="/assets/entry-atlas.jpg" alt="Atlas — L’aventure" />
        <div className="entry-label">
          <span className="entry-label-title">ATLAS</span>
          <span className="entry-label-sub">L’aventure</span>
        </div>
      </Link>
      <div className="entry-mark">
        <ArrowheadMark size={30} />
      </div>
    </main>
  );
}
