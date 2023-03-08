import Map from "react-map-gl";

export default function MapFull() {
  return (
    <Map
      initialViewState={{
        longitude: -20,
        latitude: 25,
        zoom: 2,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_KEY}
    ></Map>
  );
}
