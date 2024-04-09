import { DateTime } from "luxon";

const API_KEY = "5e5236275b8d7f537ba2364c14bf2324";
// new api key
// const API_KEY = "2b11a1d3a291f35ccb2db30a0471e979";
// old base url
// const BASE_URL = "https://api.openweathermap.org/data/2.5";
const BASE_URL = "https://api.openweathermap.org/data/";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
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

// const formatForecastWeather = (data) => {
//   let { timezone, daily, hourly } = data;

//   daily = daily.slice(1, 6).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "ccc"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });

//   hourly = hourly.slice(1, 6).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "hh:mm a`"),
//       temp: d.temp,
//       icon: d.weather[0].icon,
//     };
//   });

//   return { timezone, daily, hourly };
// };
const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  // Ensure that there are elements in daily and hourly arrays before slicing
  if (daily && daily.length >= 6) {
    daily = daily.slice(1, 6).map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "ccc"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });
  }

  if (hourly && hourly.length >= 6) {
    hourly = hourly.slice(1, 6).map((d) => {
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
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrlFromCode };
