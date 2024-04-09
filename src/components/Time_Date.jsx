import { formatToLocalTime } from "../services/WeatherServices";

const Time_Date = ({ weather: { dt, timezone, name, country }, loading }) => {
  return (
    <div>
      <div className="flex justify-end">
        <p className="text-white text-sm">
          {formatToLocalTime(dt, timezone)}
          <br />
          <span className="flex justify-center">TimeZone: {timezone}</span>
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-3xl font-medium text-white">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default Time_Date;
