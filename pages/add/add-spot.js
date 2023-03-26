import DeletableYoutubeLinks from "@/components/youtube/DeletableYoutubeLinks";
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
  const [youtubeLink, setYoutubeLink] = useState("");
  const [youtubeLinks, setYoutubeLinks] = useState([]);

  const handleAddYoutubeLink = () => {
    // If text input is empty, nothing happens
    if (youtubeLink.length > 0) {
      setYoutubeLinks((prevLinks) => [...prevLinks, youtubeLink]);
      setYoutubeLink("");
    }
  };

  const handleDeleteYoutubeLink = (link) => {
    setYoutubeLinks((prevLinks) =>
      prevLinks.filter((prevLink) => prevLink !== link)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Add Spot</h1>
      <div className="p-3 mx-auto mb-10 w-1/2 bg-gray-200 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block">
            Name:
            <input
              type="text"
              className="block w-1/2 ml-2 p-1 focus:outline-none"
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
              className="block w-1/3 ml-2 p-1 focus:outline-none"
              placeholder="Enter latitude..."
            />
          </label>
          <label htmlFor="lng" className="block my-5">
            Longitude:
            <input
              type="text"
              className="block w-1/3 ml-2 p-1 focus:outline-none"
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
            <select
              value={type}
              className="ml-2 p-1 w-1/3 focus:outline-none block"
            >
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
              <input
                type="text"
                className="w-1/3 mx-2 p-1 focus:outline-none"
                placeholder="Enter a tag and click 'Add Tag'..."
              />
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
                value={youtubeLink}
                onChange={(e) => setYoutubeLink(e.target.value)}
                className="w-2/3 mx-2 p-1 focus:outline-none"
                placeholder="Enter a YouTube link and click 'Add YouTube Link'..."
              />
              <button
                className="py-1 px-2 bg-green-400 text-gray-900 rounded hover:bg-green-500 hover:text-black shadow-md"
                onClick={handleAddYoutubeLink}
              >
                Add YouTube Link
              </button>
            </div>
          </label>
          <div>
            {youtubeLinks.length > 0 ? (
              <DeletableYoutubeLinks
                links={youtubeLinks}
                handleDelete={handleDeleteYoutubeLink}
              />
            ) : (
              <p className="ml-5 italic">
                No YouTube links added. Add one or more, and they will appear
                here.
              </p>
            )}
          </div>
          <div className="w-1/12 mx-auto mt-8 mb-2">
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
