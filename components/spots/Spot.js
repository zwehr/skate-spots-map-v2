export default function Spot(props) {
  return (
    <li>
      <div className="m-1 p-1 border border-gray-400 rounded-md">
        {props.spot.name}
        <p>Description for {props.spot.name}...</p>
      </div>
    </li>
  );
}
