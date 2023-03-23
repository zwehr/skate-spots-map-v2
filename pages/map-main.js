import { useLoadScript } from "@react-google-maps/api";
import MapFull from "@/components/maps/MapFull";
import SpotList from "@/components/spots/SpotList";
import FindSpotButton from "@/components/buttons/FindSpotsButton";

export default function MapMain() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_G_MAP_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <div className="overflow-hidden w-full h-200 top-15">
        <MapFull />
      </div>
      <FindSpotButton />
      <SpotList />
    </div>
  );
}
