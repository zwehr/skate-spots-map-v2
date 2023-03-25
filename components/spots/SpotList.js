import Spot from "./Spot";

export default function SpotList(props) {
  return (
    <div className="fixed top-20 p-2 w-auto h-4/5 rounded-r-lg bg-gray-100 shadow-xl overflow-y-scroll overflow-x-hidden">
      <h2 className="text-xl">Current Spots</h2>
      <p>{props.spots.length} spots found in current area:</p>
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
  );
}
