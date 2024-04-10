import Time_Date from "./components/Time_Date";
import TopBtns from "./components/TopBtns/TopBtns";
import "./App.css";
import TempDetails from "./components/TempDetails";

import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import getFormattedWeatherData from "./services/WeatherServices";
import { useEffect, useState } from "react";
import Inputs from "./components/Inputs/Inputs";
import BookmarkLocation from "./components/BookmarkLocations/BookmarkLocation";

function App() {
  const [query, setQuery] = useState({ q: "Kolkata" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [err, setErr] = useState(null);
  const [geoLocApiErr, setGeoLocApiErr] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units })
        .then((data) => {
          setWeather(data); // temporialy studown api
          setErr(false);
        })
        .catch((error) => {
          console.log(`Error fetching data ${error}`);
          setErr(true);
        });
    };
    fetchWeather();
  }, [query, units]);

  const handleAddBookmarkLocation = () => {
    if (query.q !== "") {
      setBookmarks([...bookmarks, query.q]);
    }
  };

  const handleDelBookmark = (index) => {
    const newBookmark = [...bookmarks];
    newBookmark.splice(index, 1);
    setBookmarks(newBookmark);
  };

  const formatBg = () => {
    if (!weather) return " from-cyan-700 to-blue-700 ";
    const threshold = units == "metric" ? 20 : 60;
    if (weather.temp <= threshold) return " from-cyan-700 to-blue-700 ";
    return "from-yellow-700 to-orange-700";
  };

  return (
    <>
      <Inputs
        setQuery={setQuery}
        query={query}
        setUnits={setUnits}
        setGeoLocApiErr={setGeoLocApiErr}
        geoLocApiErr={geoLocApiErr}
        handleAddBookmarkLocation={handleAddBookmarkLocation}
      />

      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br to-blue-700 h-fit shadow-xl shadow-gray-400">
        <div className="container flex justify-between">
          <h2 className=" flex justify-center">Your Bookmarks</h2>
          <span className="flex text-start">
            Double Click to delete location
          </span>
          <span className="flex text-start">Single Click to view location</span>{" "}
        </div>

        <hr className="my-2 text-black" />
        <BookmarkLocation
          handleDelBookmark={handleDelBookmark}
          bookmarks={bookmarks}
          setBookmarks={setBookmarks}
          setQuery={setQuery}
        />
      </div>

      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopBtns
          setQuery={setQuery}
          units={units}
          setUnits={setUnits}
          setErr={setErr}
        />
      </div>

      {weather && (
        <>
          <div
            className={`mx-auto max-w-screen-md mt-7 py-2 px-2.5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBg()}`}

            // className="mx-auto max-w-screen-md mt-7 py-2 px-2.5 bg-gradient-to-br from-cyan-700
            //  to-blue-700 h-fit shadow-xl shadow-gray-400"
          >
            <Time_Date
              weather={weather}
              err={err}
              geoLocApiErr={geoLocApiErr}
            />
            <TempDetails weather={weather} units={units} err={err} />
          </div>
          <div className="mx-auto max-w-screen-md mt-4 py-5 px-20 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
            <HourlyForecast
              tittle="HOURLY FORECAST"
              items={weather.hourly}
              units={units}
              err={err}
            />
          </div>
          <div className="mx-auto max-w-screen-md mt-4 py-5 px-20 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
            <DailyForecast
              tittle="7 daily FORECAST"
              items={weather.daily}
              units={units}
            />
          </div>
        </>
      )}
    </>
  );
}

export default App;
