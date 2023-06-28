import { useState } from 'react';
import { TiDelete } from 'react-icons/ti';

export default function DeletableTags(props) {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');

  const handleMouseEnter = (tag) => {
    setIsHovering((isHovering) => !isHovering);
    setHoverText(tag);
  };

  const handleMouseLeave = () => {
    setIsHovering((isHovering) => !isHovering);
    setHoverText('');
  };

  return (
    <div className='flex ml-5'>
      {props.tags.map((tag) => (
        <div
          className='flex bg-sky-200 p-1 mx-1 mb-1 rounded shadow-md hover:cursor-pointer'
          onMouseEnter={() => handleMouseEnter(tag)}
          onMouseLeave={handleMouseLeave}
          onClick={() => props.handleDelete(tag)}
          key={tag}
        >
          {isHovering && tag === hoverText ? (
            <div className='relative'>
              <div className='absolute bottom-[15px] pt-1 mr-1'>
                <TiDelete className='text-red-500 text-2xl' />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {tag}
        </div>
      ))}
    </div>
  );
}
