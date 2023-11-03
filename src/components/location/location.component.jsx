import { useContext } from "react";
import { WeatherContext } from "../../context/weather.context";
import './location.styles.scss'

const Location = () => {
  const { weatherData } = useContext(WeatherContext);
  const {name, region, country} = weatherData.location
  // only display this if there is weather data
  return (
    <div className="location fixed-bottom py-3">
      <h4 className="city">{name}</h4>
      <span>{region}, {country}</span>
    </div>
  );
};

export default Location;
