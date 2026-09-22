import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AlfredPanel, { AlfredFab } from "@/components/AlfredPanel";

export default function MondoLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="theme-mondo">
      <Nav mode="MONDO" />
      {children}
      <Footer />
      <AlfredFab />
      <AlfredPanel />
    </main>
  );
}
