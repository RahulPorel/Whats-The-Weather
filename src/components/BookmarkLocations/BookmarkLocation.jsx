import "./BookmarkLocation.css";

const BookmarkLocation = ({ handleDelBookmark, setQuery, bookmarks }) => {
  const handleCityClick = (city) => {
    setQuery({ q: city });
  };

  return (
    <div className="flex flex-wrap">
      <ul className="bookmark-list flex flex-wrap p-0 m-0 list-none">
        {bookmarks.map((bookmark, index) => (
          <li
            className="cursor-pointer text-black text-lg font-medium transition ease-in-out hover:scale-125"
            key={index}
            onClick={() => handleCityClick(bookmark)}
            onDoubleClick={() => handleDelBookmark(index)}
          >
            {bookmark}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookmarkLocation;
