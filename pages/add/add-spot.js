import { useState } from "react";

export default function AddSpot() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLong] = useState("");
  const [isPremium, setIsPremium] = useState(false);
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [tags, setTags] = useState([]);
  const [youtubeLinks, setYoutubeLinks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Add Spot</h1>
      <div className="p-3 mx-auto w-1/2 bg-gray-200 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block">
            Name:
            <input
              type="text"
              className="block ml-2 p-1 focus:outline-none"
              placeholder="Enter spot name..."
            />
          </label>
          <label htmlFor="description" className="block my-5">
            Description:
            <textarea
              className="block ml-2 p-1 border w-11/12 focus:outline-none"
              placeholder="Enter spot description..."
            />
          </label>
          <label htmlFor="lat" className="block my-5">
            Latitude:
            <input
              type="text"
              className="block ml-2 p-1 focus:outline-none"
              placeholder="Enter latitude..."
            />
          </label>
          <label htmlFor="lng" className="block my-5">
            Longitude:
            <input
              type="text"
              className="block ml-2 p-1 focus:outline-none"
              placeholder="Enter longitude..."
            />
          </label>
          <label htmlFor="isPremium" className="block my-5">
            Free/Premium:
            <span className="block ml-2">
              <input type="checkbox" className="mr-1" />
              Check if Premium (Default is Free)
            </span>
          </label>
          <label htmlFor="type" className="block my-5">
            Type:
            <select value={type} className="ml-2 p-1 focus:outline-none block">
              <option value="handrail">Handrail</option>
              <option value="stairs">Stairs</option>
              <option value="gap">Gap</option>
              <option value="ledge">Ledge</option>
              <option value="pad">Manual Pad</option>
              <option value="hubba">Hubba</option>
              <option value="bank">Bank</option>
              <option value="curb">Curb</option>
              <option value="bump">Bump to bar, etc.</option>
              <option value="misc">Misc</option>
            </select>
          </label>
          <label htmlFor="status" className="block my-5">
            Status:
            <div className="ml-2">
              <input type="radio" name="status" className="mr-1" />
              Active
              <input type="radio" name="status" className="ml-4 mr-1" />
              Skate-Stopped
              <input type="radio" name="status" className="ml-4 mr-1" />
              RIP
            </div>
          </label>
          <label htmlFor="tags" className="block my-5">
            Tags:
            <div>
              <input type="text" className="mx-2 p-1 focus:outline-none" />
              <button className="py-1 px-2 bg-green-400 text-gray-900 rounded hover:bg-green-500 hover:text-black shadow-md">
                Add Tag
              </button>
            </div>
          </label>
          <label htmlFor="youtube-links" className="block my-5">
            YouTube Links:
            <div>
              <input
                type="text"
                className="w-2/3 mx-2 p-1 focus:outline-none"
              />
              <button className="py-1 px-2 bg-green-400 text-gray-900 rounded hover:bg-green-500 hover:text-black shadow-md">
                Add YouTube Link
              </button>
            </div>
          </label>
          <div className="w-1/12 mx-auto">
            <input
              type="submit"
              value="Add Spot"
              className="mx-auto py-2 px-3 bg-green-400 text-gray-900 rounded hover:bg-green-500 hover:text-black hover:cursor-pointer shadow-md text-lg"
            />
          </div>
        </form>
      </div>
    </>
  );
}
