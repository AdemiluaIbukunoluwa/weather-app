import { useContext } from "react";
import { LocationContext } from "../../context/location.context";
import { WeatherContext } from "../../context/weather.context";
import './location.styles.scss'

const Location = () => {
  const { weatherData } = useContext(WeatherContext);
  const {name, region, country} = weatherData.location
  // only display this if there is weather data
  return (
    <div className="location">
    {
        console.log(weatherData)
    }
      <h1>{name}</h1>
      <span>{region}, {country}</span>
    </div>
  );
};

export default Location;
