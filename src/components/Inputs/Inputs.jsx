import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { toast } from "react-toastify";
import { cities } from "../../utils/randomCity";
// import { GEO_API_URL, geoApiOptions } from "../../services/WeatherServices";

import "./Inputs.css";
const Inputs = ({
  query,
  setQuery,
  units,
  setUnits,
  setGeoLocApiErr,
  handleAddBookmarkLocation,
  handleIsDetailToggle,
  isDetailOn,
}) => {
  const [city, setCity] = useState("");
  const handleSearch = () => {
    if (city !== "") setQuery({ q: city });
    setCity("");
    console.log(city);
  };

  // const loadOptions = (inputVal) => {
  //   return fetch(
  //     `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=Mumbai`,
  //     geoApiOptions
  //   )
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  // loadOptions();

  const handleLocationBtn = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setGeoLocApiErr(false);
          setQuery({
            lat,
            lon,
          });
        },
        (error) => {
          setGeoLocApiErr(true);
          toast.error("User denied location permission");
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.log("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.log("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              console.log("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              console.log("An unknown error occurred.");
              break;
            default:
              console.log("An error occurred.");
          }
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const handleUnitsCh = (e) => {
    const selectedUnits = e.currentTarget.name;
    if (units !== selectedUnits) setUnits(selectedUnits);
    toast.info(`Changed to ${selectedUnits}`);
  };
  const onSearch = (searchTerm) => {
    setCity(searchTerm);
    // console.log(searchTerm);
  };

  return (
    <>
      <div
        className="flex 
    mx-auto max-w-screen-md mt-7 py-2 px-2.5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400
    "
      >
        <div className="flex flex-row w-4/4 items-center justify-center space-x-4">
          <h1 className="text-white ml-4">What's the Weather </h1>
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="search"
            placeholder="search for city..."
            className="text-l rounded-3xl font-medium p-4 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          />

          <UilSearch
            onClick={handleSearch}
            size={65}
            className="text-white  cursor-pointer transition ease-out hover:scale-125"
          />
          <span className="text-white  font-light text-4xl"> | </span>
          <UilLocationPoint
            size={65}
            onClick={handleLocationBtn}
            className="text-white  cursor-pointer transition ease-out hover:scale-125"
          />
          <button onClick={handleAddBookmarkLocation}>
            <i className="text-2xl mt-0.5 ml-3 fa-regular fa-bookmark text-white "></i>
          </button>

          <FormControlLabel
            label={isDetailOn ? "Detail mode" : "Basic mode"}
            // detail
            className="text-white "
            control={
              <Switch
                color="warning"
                checked={isDetailOn}
                onChange={handleIsDetailToggle}
              />
            }
          />
        </div>

        <div className="flex flex-row w-1/12 items-center ml-10 mr-5 justify-end">
          <button
            className="text-xl text-white font-semibold transition ease-out hover:scale-75"
            name="metric"
            onClick={handleUnitsCh}
          >
            °C
          </button>
          <p className="text-xl text-white mx-1"> | </p>
          <button
            className={`
          text-xl text-white font-semibold transition ease-out hover:scale-75 
          }`}
            name="imperial"
            onClick={handleUnitsCh}
          >
            °F
          </button>
        </div>
      </div>

      <div className="dropdown">
        {cities
          .filter((item) => {
            const searchTerm = city.toLowerCase();
            const cityName = item.cityNa.toLowerCase();
            return (
              searchTerm &&
              cityName.startsWith(searchTerm) &&
              cityName !== searchTerm
            );
          })
          .map((item) => (
            <div
              key={item.id}
              onClick={() => onSearch(item.cityNa)}
              className="dropdown-roll"
            >
              {item.cityNa}
            </div>
          ))}
      </div>
    </>
  );
};

export default Inputs;
