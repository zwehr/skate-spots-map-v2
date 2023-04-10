import Spot from "./Spot";

export default function SpotList(props) {
  return (
    <div className="p-2 rounded-r-lg bg-gray-100 shadow-x">
      <h2 className="pt-16 text-xl">Current Spots</h2>
      <p>{props.spots.length} spots found in current area:</p>
      <div>
        {props.spots.length > 0 ? (
          <ul>
            {props.spots.map((spot) => (
              <Spot spot={spot} />
            ))}
          </ul>
        ) : (
          <p>Sorry, no current spots, trying searching somewhere else...</p>
        )}
      </div>
    </div>
  );
}
