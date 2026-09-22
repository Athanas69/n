import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AlfredPanel, { AlfredFab } from "@/components/AlfredPanel";

const interests: [string, number][] = [
  ["Aventure", 90],
  ["Nature", 85],
  ["Culture", 75],
  ["Nightlife", 65],
  ["Gastronomie", 80],
  ["Détente", 70],
];

const preferences: [string, number][] = [
  ["Prix", 88],
  ["Silence", 82],
  ["Douche", 78],
  ["Petit-déjeuner", 74],
];

export default function ProfilePage() {
  return (
    <main>
      <Nav mode="MONDO" />
      <section className="hero shell" style={{ paddingBottom: 20 }}>
        <div className="eyebrow">Profil voyageur</div>
        <h1>Nassim</h1>
        <p>Les centres d’intérêt et préférences vivent ici, pas sur les homepages.</p>
      </section>
      <section className="section shell" style={{ paddingTop: 10 }}>
        <div className="profilegrid">
          <article className="profilecard">
            <h2>Centres d’intérêt</h2>
            {interests.map(([label, value]) => (
              <div className="interest" key={label}>
                <b>{label}</b>
                <span>{value}/100</span>
              </div>
            ))}
          </article>
          <article className="profilecard">
            <h2>Préférences Atlas</h2>
            {preferences.map(([label, value]) => (
              <div className="interest" key={label}>
                <b>{label}</b>
                <span>{value}/100</span>
              </div>
            ))}
          </article>
        </div>
      </section>
      <Footer />
      <AlfredFab />
      <AlfredPanel />
    </main>
  );
}
