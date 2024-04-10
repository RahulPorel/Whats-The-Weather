import { formatToLocalTime } from "../services/WeatherServices";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Time_Date = ({
  weather: { dt, timezone, name, country },
  err,
  geoLocApiErr,
  isBookmarkOn,
  handleBookmarkToggle,
}) => {
  return (
    <>
      <FormControlLabel
        label={isBookmarkOn ? "Turn off bookmark " : "Turn on bookmark"}
        // "Turn off bookmark"
        control={
          <Switch checked={isBookmarkOn} onChange={handleBookmarkToggle} />
        }
        className="text-white"
      />

      <div className="flex justify-end -mb-11">
        <p className="text-white text-sm">
          {formatToLocalTime(dt, timezone)}
          <br />
          <span className="flex justify-center">
            {!err ? `TimeZone: ${timezone}` : "Try again"}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        {!geoLocApiErr ? (
          <p className="text-3xl font-medium text-white">
            {!err ? `${name}, ${country}` : "Location not found"}
          </p>
        ) : (
          <p className="text-2xl font-bold text-red-400">
            User denied location access
          </p>
        )}
      </div>
    </>
  );
};

export default Time_Date;
