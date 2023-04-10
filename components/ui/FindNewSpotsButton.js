export default function FindNewSpotsButton(props) {
  return (
    <button
      className="absolute left-0 right-0 mx-auto top-6 w-52 h-12 rounded-lg bg-gray-100 shadow-xl hover:bg-gray-50"
      onClick={props.handleClick}
    >
      Find spots in this area.
    </button>
  );
}
