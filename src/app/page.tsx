import Link from "next/link";
import { ArrowheadMark } from "@/components/Mark";

export default function EntryPage() {
  return (
    <main className="entry">
      <Link href="/mondo" className="entry-side">
        <img src="/assets/entry-mondo.jpg" alt="Mondo — La communauté" />
      </Link>
      <Link href="/atlas" className="entry-side">
        <img src="/assets/entry-atlas.jpg" alt="Atlas — L’aventure" />
      </Link>
      <div className="entry-mark">
        <span className="entry-mark-ring" />
        <ArrowheadMark size={22} />
      </div>
    </main>
  );
}
