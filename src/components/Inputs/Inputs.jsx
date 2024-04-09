import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useState } from "react";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");
  console.log(city);

  const handleSearch = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationBtn = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((positions) => {
        let lat = positions.coords.latitude;
        let lon = positions.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div
      className="flex 
    mx-auto max-w-screen-md mt-7 py-2 px-2.5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400
    "
    >
      <div className="flex flex-row w-4/4 items-center justify-center space-x-4">
        <h1 className="text-white ml-4">What the Weather</h1>
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="search"
          placeholder="search for city..."
          className="text-l rounded-2xl font-medium p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          onClick={handleSearch}
          size={35}
          className="text-white  cursor-pointer transition ease-out hover:scale-125"
        />
        <span className="text-white  font-light text-3xl"> | </span>
        <UilLocationPoint
          size={35}
          onClick={handleLocationBtn}
          className="text-white  cursor-pointer transition ease-out hover:scale-125"
        />
        {/* <UisBookmark
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        /> */}
        <button className=" text-white">
          <i className="fa-regular fa-bookmark text-white "></i>
        </button>{" "}
      </div>

      <div className="flex flex-row w-1/4 items-center ml-16 justify-end">
        <button className="text-xl text-white font-light" name="metric">
          °C |
        </button>
        <p className="text-xl text-white mx-1"></p>
        <button className="text-xl text-white font-light" name="imperial">
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
