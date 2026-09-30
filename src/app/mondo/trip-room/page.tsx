import type { Metadata } from "next";
import TripRoom from "@/components/TripRoom";
import { getTrip } from "@/lib/data";

export const metadata: Metadata = {
  title: "Trip Room",
  description: "Un aperçu de l’espace collaboratif Mondo : itinéraire, décisions de groupe, budget et réservations.",
};

export default function TripRoomPage() {
  return <TripRoom trip={getTrip()} />;
}
