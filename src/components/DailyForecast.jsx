const DailyForecast = ({ tittle }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6 ">
        <p className="text-white font-medium uppercase">{tittle}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center text-white justify-between">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4: 30pm</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">22 c</p>
        </div>

        {/* {yaha aayega map} */}
      </div>
    </div>
  );
};

export default DailyForecast;
