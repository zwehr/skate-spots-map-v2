import { useLoadScript } from "@react-google-maps/api";
import MapFull from "@/components/maps/MapFull";

export default function MapMain() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_G_MAP_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="map-main">
      <MapFull />
    </div>
  );
}
