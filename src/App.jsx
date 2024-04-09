import Time_Date from "./components/Time_Date";
import TopBtns from "./components/TopBtns/TopBtns";
import "./App.css";
import TempDetails from "./components/TempDetails";

import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import getFormattedWeatherData from "./services/WeatherServices";
import { useEffect, useState } from "react";
import Inputs from "./components/Inputs/Inputs";

function App() {
  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units })
        .then((data) => {
          setWeather(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(`Error fetching data ${error}`);
        });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <>
      <Inputs setQuery={setQuery} setUnits={setUnits} />
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br form-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopBtns setQuery={setQuery} units={units} setUnits={setUnits} />
      </div>

      {weather && (
        <>
          <div className="mx-auto max-w-screen-md mt-7 py-2 px-2.5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
            <Time_Date weather={weather} loading={loading} />
            <TempDetails weather={weather} />
          </div>
          <div className="mx-auto max-w-screen-md mt-4 py-5 px-20 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
            <HourlyForecast tittle="HOURLY FORECAST" items={weather.hourly} />
          </div>
          <div className="mx-auto max-w-screen-md mt-4 py-5 px-20 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
            <DailyForecast tittle="7 daily FORECAST" items={weather.daily} />
          </div>
        </>
      )}
    </>
  );
}

export default App;
