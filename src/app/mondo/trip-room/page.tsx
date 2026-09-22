import TripRoom from "@/components/TripRoom";
import { getTrip } from "@/lib/data";

export default function TripRoomPage() {
  return <TripRoom trip={getTrip()} />;
}
