import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GrPrevious, GrNext } from 'react-icons/gr';
import LoadingModal from '@/components/ui/LoadingModal';
import StaticTags from '@/components/tags/StaticTags';

export default function SpotById() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoIndex, setVideoIndex] = useState(0);
  const [spot, setSpot] = useState({
    name: '',
    description: '',
    lat: '',
    lng: '',
    type: '',
    status: '',
    tags: [],
    youtubeLinks: [],
  });

  const router = useRouter();

  const handlePreviousVideoClick = () => {
    if (videoIndex === 0) {
      setVideoIndex(spot.youtubeLinks.length - 1);
    } else {
      setVideoIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextVideoClick = () => {
    if (videoIndex === spot.youtubeLinks.length - 1) {
      setVideoIndex(0);
    } else {
      setVideoIndex((prevIndex) => prevIndex + 1);
    }
  };

  const fetchSpotById = async () => {
    try {
      const response = await fetch(
        `https://skate-spots-map-v2.vercel.app/api/spots/${router.query.spotId}`
      );
      const matchingSpotObj = await response.json();
      setSpot(matchingSpotObj.spot);
      console.log(matchingSpot);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!router.isReady) return;
    (async () => await fetchSpotById())();
  }, [router.isReady, fetchSpotById]);

  return (
    <div>
      {isLoading && <LoadingModal msg='Loading spot info...' />}
      <div className='w-1/2 mx-auto'>
        <h1>{spot.name}</h1>
        <div className='flex my-5 mx-auto'>
          <div>
            <button
              className='mt-36 p-1 text-4xl bg-gray-300 rounded-full hover:bg-gray-400'
              onClick={handlePreviousVideoClick}
            >
              <GrPrevious />
            </button>
          </div>
          <div className='w-[550px] mx-auto text-center'>
            <iframe
              /* Default width and height are 560 and 315 respectively. */
              width='550'
              height='315'
              src={spot.youtubeLinks[videoIndex]}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
            <p>{`Video ${videoIndex + 1}/${spot.youtubeLinks.length}`}</p>
            <p></p>
          </div>
          <div>
            <button
              className='mt-36 p-1 text-4xl bg-gray-300 rounded-full hover:bg-gray-400'
              onClick={handleNextVideoClick}
            >
              <GrNext />
            </button>
          </div>
        </div>
        <p className='m-3'>
          <span className='font-bold'>Description:</span> {spot.description}
        </p>
        <p className='m-3'>
          <span className='font-bold'>Type:</span>{' '}
          {spot.type.charAt(0).toUpperCase() + spot.type.slice(1)}
        </p>
        <div className='flex'>
          <p className='m-3 mr-1'>
            <span className='font-bold'>Tags:</span>
          </p>
          <StaticTags tags={spot.tags} />
        </div>
        <p className='m-3'>
          <span className='font-bold'>Status:</span>{' '}
          {spot.status.charAt(0).toUpperCase() + spot.status.slice(1)}
          {spot.status === 'active' && (
            <span> (not skate-stopped, demolished, etc.)</span>
          )}
        </p>
        <p className='m-3'>
          <span className='font-bold'>Latitude:</span> {spot.lat}
        </p>
        <p className='m-3'>
          <span className='font-bold'>Longitude:</span> {spot.lng}
        </p>
      </div>
    </div>
  );
}
