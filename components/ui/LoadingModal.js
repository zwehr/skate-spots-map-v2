export default function LoadingModal(props) {
  return (
    <div className="absolute flex inset-0 w-screen h-screen mb-24 bg-gray-500/80">
      <div className="m-auto bg-gray-200 p-4 rounded-lg">
        <p className="text-3xl text-center">{props.msg}</p>
        <p className="text-xl text-center">Thanks for waiting :)</p>
      </div>
    </div>
  );
}
