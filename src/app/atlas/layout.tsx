import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AlfredPanel, { AlfredFab } from "@/components/AlfredPanel";

export default function AtlasLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <a href="#main-content" className="skip-link">
        Aller au contenu
      </a>
      <Nav mode="ATLAS" />
      <div id="main-content">{children}</div>
      <Footer mode="ATLAS" />
      <AlfredFab />
      <AlfredPanel />
    </main>
  );
}
