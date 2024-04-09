import { formatToLocalTime } from "../services/WeatherServices";

const Time_Date = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-3xl font-medium text-white">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default Time_Date;
