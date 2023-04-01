import Link from "next/link";

export default function Spot(props) {
  return (
    <li id={props.spot._id}>
      <div className="mx-1 my-4 px-3 py-2 w-auto border bg-sky-100 rounded border-gray-400 border-1 shadow-lg">
        <h3>{props.spot.name}</h3>
        <div>
          <iframe
            /* Default width and height are 560 and 315 respectively. */
            width="550"
            height="315"
            src={props.spot.youtubeLinks[0]}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-[550px] py-2">
          <p>{props.spot.description}</p>
        </div>
        <Link
          href={`/spots/${props.spot._id}`}
          className="underline text-sky-700 hover:text-sky-900 hover:font-medium"
        >
          View more clips, detailed info...
        </Link>
      </div>
    </li>
  );
}
