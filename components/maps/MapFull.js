import { useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

export default function MapFull() {
  const options = {
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM,
    },
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
    },
    fullscreenControl: false,
    streetViewControl: false,
  };

  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <div>
      <GoogleMap
        options={options}
        zoom={10}
        center={center}
        mapContainerClassName="w-full h-screen"
      >
        <MarkerF position={{ lat: 44, lng: -80 }}></MarkerF>
      </GoogleMap>
    </div>
  );
}
