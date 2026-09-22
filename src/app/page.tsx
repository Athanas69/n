import Link from "next/link";
import Mark from "@/components/Mark";

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
        </div>
      </Link>
      <div className="entry-mark">
        <Mark size={26} />
      </div>
    </main>
  );
}
