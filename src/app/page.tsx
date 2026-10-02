import Image from "next/image";
import Link from "next/link";

export default function EntryPage() {
  return (
    <main className="entry">
      <Link href="/mondo" className="entry-side">
        <Image src="/assets/entry-mondo.jpg" alt="Mondo — La communauté" fill sizes="(max-width: 680px) 100vw, 50vw" priority />
      </Link>
      <Link href="/atlas" className="entry-side">
        <Image src="/assets/entry-atlas.jpg" alt="Atlas — L’aventure" fill sizes="(max-width: 680px) 100vw, 50vw" priority />
      </Link>
    </main>
  );
}
