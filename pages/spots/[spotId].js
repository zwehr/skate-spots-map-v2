import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function SpotById() {
  const [spot, setSpot] = useState({
    name: "",
    description: "",
    lat: "",
    lng: "",
    type: "",
    status: "",
    tags: [],
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
      <div className="w-[550px] my-5 mx-auto">
        <iframe
          /* Default width and height are 560 and 315 respectively. */
          width="550"
          height="315"
          src={spot.youtubeLinks[0]}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <p className="m-3">
        <span className="font-bold">Description:</span> {spot.description}
      </p>
      <p className="m-3">
        <span className="font-bold">Type:</span>{" "}
        {spot.type.charAt(0).toUpperCase() + spot.type.slice(1)}
      </p>
      <p className="m-3">
        <span className="font-bold">Tags:</span>{" "}
        {spot.tags.map((tag) => tag + " ")}
      </p>
      <p className="m-3">
        <span className="font-bold">Status:</span>{" "}
        {spot.status.charAt(0).toUpperCase() + spot.status.slice(1)}
        {spot.status === "active" && (
          <span> (not skate-stopped, demolished, etc.)</span>
        )}
      </p>
      <p className="m-3">
        <span className="font-bold">Latitude:</span> {spot.lat}
      </p>
      <p className="m-3">
        <span className="font-bold">Longitude:</span> {spot.lng}
      </p>
    </div>
  );
}
