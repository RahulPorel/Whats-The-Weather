import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilWind,
  UilSun,
  UilSunset,
  UilTear,
} from "@iconscout/react-unicons";
import { iconUrlFromCode } from "../services/WeatherServices";

const TempDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-center text-white py-3 ">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>

        <div className="flex flex-col space-y-2 ml-80">
          <div className="flex font-light text-sm justify-between">
            <div className="flex items-center">
              <UilTear size={18} className="mr-1" />
              <span>Humidity</span>
            </div>
            <span className="font-medium">32°</span>
          </div>
          <div className="flex font-light text-sm justify-between">
            {" "}
            {/* Changed alignment to justify-between */}
            <div className="flex items-center">
              {" "}
              {/* Wrapper div for label and icon */}
              <UilTemperature size={18} className="mr-1" />
              <span>Real Feel</span>
            </div>
            <span className="font-medium">32°</span>
          </div>
          <div className="flex font-light text-sm justify-between">
            {" "}
            {/* Changed alignment to justify-between */}
            <div className="flex items-center">
              {" "}
              {/* Wrapper div for label and icon */}
              <UilWind size={18} className="mr-1" />
              <span>Wind Speed</span>
            </div>
            <span className="font-medium">32°</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          {" "}
          SunRise:
          <span className="font-medium ml-1">06:45am</span>
        </p>
        <p className="font-light"></p>
        <UilSunset />
        <p className="font-light">
          SunSet:
          <span className="font-medium ml-1">06:45am</span>
        </p>
        <p className="font-light"></p>
        <UilSun />
        <p className="font-light">
          High <span className="font-medium ml-1">45*c</span>
        </p>
        <p className="font-light"></p>
        <UilSun />
        <p className="font-light">
          Low <span className="font-medium ml-1">40*c</span>
        </p>
      </div>
    </div>
  );
};

export default TempDetails;
