export default function FindNewSpotsButton(props) {
  return (
    <button
      className="absolute top-20 left-1/2 w-52 h-12 rounded-lg bg-gray-100 shadow-xl hover:bg-gray-50"
      onClick={props.handleClick}
    >
      Find spots in this area.
    </button>
  );
}
