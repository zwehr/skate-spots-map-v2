import Link from "next/link";

export default function AddSelection() {
  return (
    <>
      <h1>Add to Database</h1>
      <div className="flex flex-col items-center">
        <p className="text-3xl m-2">What would you like to add?</p>
        <Link
          href="/add/add-spot"
          className="text-xl m-1 hover:text-gray-500 underline"
        >
          Add Spot
        </Link>
        <Link
          href="/add/add-park"
          className="text-xl m-1 hover:text-gray-500 underline"
        >
          Add Park
        </Link>
        <Link
          href="/add/add-misc"
          className="text-xl m-1 hover:text-gray-500 underline"
        >
          Add Misc
        </Link>
      </div>
    </>
  );
}
