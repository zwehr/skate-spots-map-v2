import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function SpotById() {
  const [spot, setSpot] = useState({
    name: "",
    description: "",
    youtubeLinks: [],
  });

  const router = useRouter();
  const API_URL = "http://localhost:3000/spots";

  console.log(router.query.spotId);

  const fetchSpotById = async () => {
    try {
      const response = await fetch(`${API_URL}/${router.query.spotId}`);
      const matchingSpot = await response.json();
      setSpot(matchingSpot);
      console.log(matchingSpot);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    (async () => await fetchSpotById())();
  }, [router.isReady]);

  return (
    <div className="w-1/2 mx-auto">
      <h1>{spot.name}</h1>
      <p className="text-center">Description, YouTube, etc. will go here</p>
    </div>
  );
}
