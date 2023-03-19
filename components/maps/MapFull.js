import { useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

export default function MapFull() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="full-map-container"
    >
      <MarkerF position={{ lat: 44, lng: -80 }}></MarkerF>
    </GoogleMap>
  );
}
