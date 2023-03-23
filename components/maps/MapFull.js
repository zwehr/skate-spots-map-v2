import { useState, useCallback, useEffect, useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import FindNewSpotsButton from "../buttons/FindNewSpotsButton";

export default function MapFull() {
  const API_URL = "http://localhost:3000/spots";
  const [map, setMap] = useState(null);
  const [spots, setSpots] = useState([]);

  const fetchAllSpots = async () => {
    try {
      const response = await fetch(API_URL);
      const spots = await response.json();
      setSpots(spots);
      console.log(spots);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSpotsInBounds = async (
    southBound,
    northBound,
    westBound,
    eastBound
  ) => {
    try {
      const response = await fetch(
        `${API_URL}/${southBound}/${northBound}/${westBound}/${eastBound}`
      );
      const spots = await response.json();
      setSpots(spots);
      console.log(spots);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds();
    }
  }, []);

  useEffect(() => {
    (async () => await fetchAllSpots())();
  }, []);

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const handleFindNewSpots = () => {
    const boundaries = map.getBounds().toJSON();
    console.log("fetching based on bounds: ", boundaries);
    (async () =>
      await fetchSpotsInBounds(
        boundaries.south,
        boundaries.north,
        boundaries.west,
        boundaries.east
      ))();
  };

  const UiOptions = {
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
        options={UiOptions}
        zoom={10}
        center={center}
        mapContainerClassName="w-full h-screen"
        onLoad={onLoad}
        onBoundsChanged={(event) => {
          if (map) {
            console.log(map.getBounds().toJSON());
          }
        }}
      >
        <FindNewSpotsButton handleClick={handleFindNewSpots} />
        {spots.map((spot) => (
          <MarkerF
            position={{ lat: spot.lat, lng: spot.lng }}
            onClick={() => alert(spot.name)}
          ></MarkerF>
        ))}
      </GoogleMap>
    </div>
  );
}
