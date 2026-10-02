import type { Metadata } from "next";
import TripRoom from "@/components/TripRoom";
import { getTrip } from "@/lib/data";
import { pageOG } from "@/lib/site";

export const metadata: Metadata = pageOG(
  "Trip Room",
  "Un aperçu de l’espace collaboratif Mondo : itinéraire, décisions de groupe, budget et réservations.",
  "/mondo/trip-room"
);

export default function TripRoomPage() {
  return <TripRoom trip={getTrip()} />;
}
