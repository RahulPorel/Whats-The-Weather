import { useState } from "react";
import { shuffledCities } from "../../utils/randomCity";
import "./TopBtns.css";

const TopBtns = ({ setQuery, setErr }) => {
  const [selectedCity, setSelectedCity] = useState(null);


  // Slice the shuffledCities array to get the first 5 cities
  const topCities = shuffledCities.slice(0, 5);

  const handleCityClick = (cityId, cityName) => {
    setSelectedCity(cityId);
    setQuery({ q: cityName });
    setErr(false);
  };

  const reloadCityBtn = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center">
      {topCities.map((city) => (
        <button
          key={city.id}
          className={`text-black text-lg font-medium transition ease-out hover:scale-125${
            selectedCity === city.id
              ? "underline underline-offset-8 border-2 px-5"
              : ""
          }`}
          id="underline-btn-name"
          onClick={() => handleCityClick(city.id, city.cityNa)}
        >
          {city.cityNa}
        </button>
      ))}
 
    </div>
  );
};

export default TopBtns;
