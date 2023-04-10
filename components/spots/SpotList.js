import Spot from "./Spot";

export default function SpotList(props) {
  const heightMinusNavStyle = {
    height: "calc(100vh - 60px)",
  };

  return (
    <div
      className="spot-list-container overflow-y-scroll rounded-r-lg bg-gray-100 shadow-x"
      style={heightMinusNavStyle}
    >
      <div>
        <h2 className="text-xl">Current Spots</h2>
        <p>{props.spots.length} spots found in current area:</p>
      </div>
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
