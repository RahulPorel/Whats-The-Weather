import { DateTime } from "luxon";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const getWeatherData = (infoType, searchParams, retryCount = 3) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .catch(async (error) => {
      console.log(`Error fetching data: ${error}`);
      if (retryCount > 0) {
        console.log(`Retrying... (${retryCount} attempts left)`);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds before retrying
        return getWeatherData(infoType, searchParams, retryCount - 1);
      } else {
        console.log("Retry limit reached. Aborting.");
        return null;
      }
    });
};

const formatCurrWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    name,
    dt,
    visibility,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
    visibility,
    pressure,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  // Ensure that there are elements in daily and hourly arrays before slicing
  if (daily && daily.length >= 6) {
    daily = daily.slice(1, 8).map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "ccc"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });
  }

  if (hourly && hourly.length >= 6) {
    hourly = hourly.slice(1, 8).map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
        temp: d.temp,
        icon: d.weather[0].icon,
      };
    });
  }

  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrWeather = await getWeatherData(
    "2.5/weather",
    searchParams
  ).then(formatCurrWeather);

  const { lat, lon } = formattedCurrWeather;

  const formmattedForecastWeather = await getWeatherData("3.0/onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrWeather, ...formmattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  // format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  format = "'Last refresh: ' h : mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrlFromCode };

// export const GEO_API_URL =
//   "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions";

// export const geoApiOptions = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "62efe7785amsh05501f8ff4b31f5p1d52d4jsn9b1f4fa91e2e",
//     "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
//   },
// };

// const fetch = require("node-fetch"); // Assuming you're using Node.js environment

// Function to fetch cities from GeoNames API
// async function fetchCities() {
//   const username = "rahulporel51"; // Replace with your GeoNames username
//   const url = `http://api.geonames.org/citiesJSON?north=90&south=-90&east=180&west=-180&lang=en&username=${username}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.geonames.map((city) => ({ id: uuid(), cityNa: city.name }));
//   } catch (error) {
//     console.error("Error fetching cities:", error);
//     return [];
//   }
// }

// // Example usage
// fetchCities().then((cities) => {
//   console.log(cities);
// });
