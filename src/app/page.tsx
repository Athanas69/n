import Link from "next/link";

export default function EntryPage() {
  return (
    <main className="entry">
      <Link href="/mondo" className="entry-side">
        <img src="/assets/entry-mondo.jpg" alt="Mondo — La communauté" />
      </Link>
      <Link href="/atlas" className="entry-side">
        <img src="/assets/entry-atlas.jpg" alt="Atlas — L’aventure" />
      </Link>
    </main>
  );
}
