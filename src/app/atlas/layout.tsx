import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AlfredPanel, { AlfredFab } from "@/components/AlfredPanel";

export default function AtlasLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Nav mode="ATLAS" />
      {children}
      <Footer mode="ATLAS" />
      <AlfredFab />
      <AlfredPanel />
    </main>
  );
}
