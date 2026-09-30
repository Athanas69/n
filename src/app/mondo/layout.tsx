import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AlfredPanel, { AlfredFab } from "@/components/AlfredPanel";

export default function MondoLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="theme-mondo">
      <a href="#main-content" className="skip-link">
        Aller au contenu
      </a>
      <Nav mode="MONDO" />
      <div id="main-content">{children}</div>
      <Footer />
      <AlfredFab />
      <AlfredPanel />
    </main>
  );
}
