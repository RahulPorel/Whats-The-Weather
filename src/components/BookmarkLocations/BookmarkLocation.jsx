import "./BookmarkLocation.css";

const BookmarkLocation = ({ bookmarks, handleDelBookmark }) => {
  console.log(bookmarks);
  return (
    <div className="container">
      <ul className="todo-list">
        {bookmarks.map((bookmark, index) => (
          <li
            className="cursor-pointer"
            key={index}
            onDoubleClick={() => handleDelBookmark(index)}
          >
            {bookmark} &nbsp;
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookmarkLocation;
