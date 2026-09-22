import { notFound } from "next/navigation";
import Link from "next/link";
import { cityNameFromSlug, citySlug } from "@/lib/data";
import { articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ city: citySlug(a.city), slug: a.slug }));
}

export default async function GuidePage({ params }: { params: Promise<{ city: string; slug: string }> }) {
  const { city: citySlugParam, slug } = await params;
  const cityName = cityNameFromSlug(citySlugParam);
  if (!cityName) notFound();

  const article = getArticle(cityName, slug);
  if (!article) notFound();

  return (
    <section className="section shell" style={{ paddingTop: 40, maxWidth: 760, margin: "0 auto" }}>
      <div className="eyebrow">{cityName}</div>
      <h1 style={{ fontSize: "clamp(32px,5vw,48px)", marginTop: 8 }}>{article.title}</h1>
      <p className="muted" style={{ fontSize: 15, marginTop: 10 }}>
        {article.dek}
      </p>
      <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 20 }}>
        {article.body.map((block, i) => (
          <div key={i}>
            {block.heading && <h2 style={{ fontSize: 22, marginBottom: 8 }}>{block.heading}</h2>}
            <p style={{ fontSize: 15, lineHeight: 1.7 }}>{block.text}</p>
          </div>
        ))}
      </div>
      <div className="actions" style={{ marginTop: 32 }}>
        <Link href={`/atlas/${citySlug(cityName)}#guides`} className="btn">
          Retour aux guides {cityName}
        </Link>
      </div>
    </section>
  );
}
