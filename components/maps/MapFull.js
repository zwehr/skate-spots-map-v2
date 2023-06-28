import { useState, useCallback, useEffect, useMemo } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import FindNewSpotsButton from '../ui/FindNewSpotsButton';
import SpotList from '../spots/SpotList';

export default function MapFull() {
  const [map, setMap] = useState(null);
  const [spots, setSpots] = useState([]);

  const fetchAllSpots = async () => {
    try {
      const response = await fetch('/api/spots');
      const responseObj = await response.json();
      setSpots(responseObj.spots);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSpotsInBounds = async (
    northBoundary,
    southBoundary,
    eastBoundary,
    westBoundary
  ) => {
    try {
      const response = await fetch(
        `api/spots/${northBoundary}/${southBoundary}/${eastBoundary}/${westBoundary}`
      );
      const responseObj = await response.json();
      setSpots(responseObj.spots);
      console.log(spots);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds();
    }
  }, [map]);

  useEffect(() => {
    (async () => await fetchAllSpots())();
  }, []);

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const handleFindNewSpots = () => {
    const boundaries = map.getBounds().toJSON();
    console.log('fetching based on bounds: ', boundaries);
    (async () =>
      await fetchSpotsInBounds(
        boundaries.north,
        boundaries.south,
        boundaries.east,
        boundaries.west
      ))();
  };

  const handleMarkerClick = (spotId) => {
    const matchingElement = document.getElementById(spotId);
    if (matchingElement) {
      matchingElement.scrollIntoView({ behavior: 'smooth' });
    }
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
    <div className='flex'>
      <div>
        <SpotList spots={spots} />
      </div>
      <div className='w-full'>
        <GoogleMap
          options={UiOptions}
          zoom={10}
          center={center}
          mapContainerClassName='w-full h-full'
          onLoad={onLoad}
          onBoundsChanged={(event) => {
            if (map) {
              console.log(map.getBounds().toJSON());
            }
          }}
        >
          <FindNewSpotsButton handleClick={handleFindNewSpots} />
          {spots.length > 0 &&
            spots.map((spot) => (
              <MarkerF
                key={spot._id}
                position={{ lat: spot.lat, lng: spot.lng }}
                onClick={() => handleMarkerClick(spot._id)}
              ></MarkerF>
            ))}
        </GoogleMap>
      </div>
    </div>
  );
}
