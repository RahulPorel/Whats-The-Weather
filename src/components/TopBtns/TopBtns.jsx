import { useState } from "react";
import { shuffledCities } from "../../utils/randomCity";
import "./TopBtns.css";

const TopBtns = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  // Slice the shuffledCities array to get the first 5 cities
  const topCities = shuffledCities.slice(0, 5);

  const handleCityClick = (cityId) => {
    setSelectedCity(cityId);
  };

  const handleRefreshTopCities = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center">
      {topCities.map((city) => (
        <button
          key={city.id}
          className={`text-black text-lg font-medium  transition ease-out hover:scale-125${
            selectedCity === city.id
              ? "underline underline-offset-8 border-2 px-5"
              : "" // Apply underline if city is selected
          }`}
          id="underline-btn-name"
          onClick={() => handleCityClick(city.id)} // Set selected city on click
        >
          {city.cityNa}
        </button>
      ))}

      {/* <i
        onClick={handleRefreshTopCities}
        className="fa-solid fa-arrows-rotate"
      ></i> */}
    </div>
  );
};

export default TopBtns;
