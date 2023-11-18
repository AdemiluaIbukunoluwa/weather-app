import { useContext } from "react";
import "./mainbody.styles.scss";
import { WeatherContext } from "../../context/weather.context";
import WeatherInfo from "../weatherInfo/weatherInfo.component";

const MainBody = () => {
  const { weatherData } = useContext(WeatherContext);
  const { current } = weatherData;

  return (
    weatherData.current && (
      <div className="col-xl-9 mainBody">
        <h2 className="weather-condition">{current.condition.text}</h2>
        <span className="temp">
          <p className="tempC">{current.temp_c} C</p>
          <p className="tempF">{current.temp_f} F</p>
        </span>
        <WeatherInfo/>
      </div>
       
    )
  );
};

export default MainBody;
