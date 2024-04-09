import { formatToLocalTime } from "../services/WeatherServices";

const Time_Date = ({
  weather: { dt, timezone, name, country },
  err,
  geoLocApiErr,
}) => {
  return (
    <div>
      <div className="flex justify-end">
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
            {!err
              ? `${name}, ${country}`
              : "Location not found or wrong city name"}
          </p>
        ) : (
          <p className="text-3xl font-bold text-red-400">
            User denied location access
          </p>
        )}
      </div>
    </div>
  );
};

export default Time_Date;
