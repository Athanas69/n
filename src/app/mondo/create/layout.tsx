import { pageOG } from "@/lib/site";

export const metadata = pageOG(
  "Créer un voyage",
  "Lancez un voyage de groupe en quelques minutes : destination, dates, budget et composition du groupe."
);

export default function CreateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
