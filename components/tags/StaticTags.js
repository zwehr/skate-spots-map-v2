export default function StaticTags(props) {
  return (
    <>
      {props.tags.map((tag) => (
        <div className='m-1 p-1 py-2 bg-sky-200 rounded shadow-md' key={tag}>
          {tag}
        </div>
      ))}
    </>
  );
}
