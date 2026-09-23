import { notFound } from "next/navigation";
import Link from "next/link";
import { EXPERIENCES, getExperience } from "@/lib/experiences";
import { articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles
    .filter((a) => EXPERIENCES.some((e) => e.name === a.city))
    .map((a) => ({
      experience: EXPERIENCES.find((e) => e.name === a.city)!.slug,
      slug: a.slug,
    }));
}

export default async function ExperienceGuidePage({ params }: { params: Promise<{ experience: string; slug: string }> }) {
  const { experience: expSlug, slug } = await params;
  const e = getExperience(expSlug);
  if (!e) notFound();

  const article = getArticle(e.name, slug);
  if (!article) notFound();

  return (
    <section className="section shell" style={{ paddingTop: 40, maxWidth: 760, margin: "0 auto" }}>
      <div className="eyebrow">{e.name}</div>
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
        <Link href={`/atlas/experiences/${e.slug}#guides`} className="btn">
          Retour aux guides {e.name}
        </Link>
      </div>
    </section>
  );
}
