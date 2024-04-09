// import "./BookmarkLocation.css";

// const BookmarkLocation = ({ bookmarks, handleDelBookmark, setQuery }) => {
//   const handleCityClick = (e) => {
//     console.log(bookmarks);
//     // setSelectedCity(cityId);
//     // setQuery({ q: cityName });
//   };

//   return (
//     <div className="container">
//       <ul className="todo-list">
//         {bookmarks.map((bookmark, index) => (
//           <li
//             className="cursor-pointer"
//             key={index}
//             onClick={handleCityClick}
//             onDoubleClick={() => handleDelBookmark(index)}
//           >
//             {bookmark}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BookmarkLocation;
import "./BookmarkLocation.css";

const BookmarkLocation = ({ bookmarks, handleDelBookmark, setQuery }) => {
  const handleCityClick = (city) => {
    console.log(city);
    setQuery({ q: city });
    // setSelectedCity(cityId);
    // setQuery({ q: cityName });
  };

  return (
    <div className="container">
      <ul className="todo-list">
        {bookmarks.map((bookmark, index) => (
          <li
            className="cursor-pointer"
            key={index}
            onClick={() => handleCityClick(bookmark)}
            onDoubleClick={() => handleDelBookmark(index)}
          >
            {bookmark}
            {/* Assuming bookmark is an object with 'name' property */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookmarkLocation;
