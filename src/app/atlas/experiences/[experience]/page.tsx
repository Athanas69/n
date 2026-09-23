import { notFound } from "next/navigation";
import Link from "next/link";
import NotifyButton from "@/components/NotifyButton";
import { EXPERIENCES, getExperience } from "@/lib/experiences";
import { getArticleSlugForTitle } from "@/lib/articles";

export function generateStaticParams() {
  return EXPERIENCES.map((e) => ({ experience: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ experience: string }> }) {
  const { experience: slug } = await params;
  const e = getExperience(slug);
  if (!e) return {};
  return {
    title: `${e.name} — Atlas Expériences`,
    description: e.intro,
    openGraph: { images: [e.hero] },
  };
}

const ARTICLE_TITLES: Record<string, string[]> = {
  safaris: ["Kenya, Tanzanie, Afrique du Sud ou Botswana ?", "Combien coûte vraiment un safari ?"],
  croisieres: ["Petit navire ou paquebot géant ?", "Combien coûte vraiment une croisière ?"],
};

export default async function ExperiencePage({ params }: { params: Promise<{ experience: string }> }) {
  const { experience: slug } = await params;
  const e = getExperience(slug);
  if (!e) notFound();

  const articleTitles = ARTICLE_TITLES[slug] ?? [];

  return (
    <>
      <section className="cityhero shell">
        <div className="cityphoto">
          <img src={e.hero} alt={e.name} />
          <div className="citytitle">
            <div className="eyebrow" style={{ color: "#fff" }}>
              {e.eyebrow}
            </div>
            <h1>{e.name}</h1>
            <p>{e.intro}</p>
          </div>
        </div>
      </section>

      <section className="section shell" id="regions">
        <div className="section-head">
          <div>
            <div className="eyebrow">{e.regionsLabel}</div>
            <h2>Chaque destination a sa saison.</h2>
          </div>
          <p>Choisissez d’abord la période, ensuite la destination — l’inverse mène souvent à une réservation hors-saison.</p>
        </div>
        <div className="hoodpicks-list explist">
          {e.regions.map((r) => (
            <div className="hoodpick explistcard" key={r.name}>
              <img src={r.image} alt={r.name} />
              <div className="explistcardtext">
                <b>
                  {r.name} <span>· {r.country}</span>
                </b>
                <p className="exptags">{r.tags}</p>
                <p>{r.description}</p>
                <div className="expbest">
                  <small>Meilleure période</small>
                  <span>{r.best}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell panel-tint tint-blue" id="practical">
        <div className="section-head">
          <div>
            <div className="eyebrow">Avant de réserver</div>
            <h2>Ce qui change vraiment le budget et la logistique.</h2>
          </div>
        </div>
        <div className="practicalgrid">
          {e.practical.map(([label, value]) => (
            <div className="fact" key={label}>
              <small>{label}</small>
              <b>{value}</b>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell" id="tiers">
        <div className="section-head">
          <div>
            <div className="eyebrow">Budget</div>
            <h2>Trois niveaux, trois expériences.</h2>
          </div>
        </div>
        <div className="cityresources-list">
          {e.tiers.map((t) => (
            <div className="cityresource exptier" key={t.tier}>
              <b>{t.tier}</b>
              <span className="expprice">{t.price}</span>
              <span>{t.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {articleTitles.length > 0 && (
        <section className="section shell" id="guides">
          <div className="section-head">
            <div>
              <div className="eyebrow">Guides</div>
              <h2>Pour décider avant de réserver.</h2>
            </div>
          </div>
          <div className="articlegrid">
            {articleTitles.map((a) => {
              const articleSlug = getArticleSlugForTitle(e.name, a);
              return (
                <article className="article" key={a}>
                  <div>
                    <div className="eyebrow">{e.name}</div>
                    <h3>{a}</h3>
                    <p>Guide Atlas pensé pour répondre à une décision concrète du voyage.</p>
                  </div>
                  {articleSlug ? (
                    <Link href={`/atlas/experiences/${e.slug}/guides/${articleSlug}`} className="btn">
                      Lire le guide
                    </Link>
                  ) : (
                    <NotifyButton className="btn" message="Article éditorial à produire dans le CMS Atlas.">
                      Lire le guide
                    </NotifyButton>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      )}

      <section className="section shell" id="back">
        <Link href="/atlas/experiences" className="btn">
          ← Toutes les expériences
        </Link>
      </section>
    </>
  );
}
