import Map from "react-map-gl";
import Navbar from "@/components/Navbar";

export default function MapMain() {
  console.log(process.env.NEXT_PUBLIC_MAP_KEY);
  return (
    <>
      <Navbar />
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_KEY}
      />
    </>
  );
}
