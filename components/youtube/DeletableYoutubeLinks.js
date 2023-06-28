import { AiOutlineLink } from 'react-icons/ai';

export default function DeletableYoutubeLinks(props) {
  return (
    <ul>
      {props.links.map((link) => (
        <div className='flex ml-5 mb-1' key={link}>
          <AiOutlineLink className='mt-2' />
          <li className='p-1'>{link}</li>
          <button
            className='ml-2 px-2 py-1 rounded shadow-md bg-red-400 text-gray-900 hover:bg-red-500 hover:text-black'
            onClick={() => props.handleDelete(link)}
          >
            Delete Link
          </button>
        </div>
      ))}
    </ul>
  );
}
