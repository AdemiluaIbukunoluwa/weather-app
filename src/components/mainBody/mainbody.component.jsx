import { useContext } from "react";
import "./mainbody.styles.scss";
import { WeatherContext } from "../../context/weather.context";

const MainBody = () => {
  const { weatherData } = useContext(WeatherContext);
  const { current } = weatherData;
  const { humidity, wind_degree, pressure_in, wind_dir } = current;
  return (
    weatherData.current && (
      <div className="col-xl-9 mainBody">
        <h2 className="weather-condition">{current.condition.text}</h2>
        <span className="temp">
          <p className="tempC">{current.temp_c} C</p>
          <p className="tempF">{current.temp_f} F</p>
        </span>

        <div  className="otherInfo">
          <table>
            <tbody>
            <tr>
              <td>Humidity </td>
              <td>{humidity}</td>
            </tr>
            <tr>
              <td>Wind degree</td>
              <td>{wind_degree}</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>{pressure_in}</td>
            </tr>
            <tr>
              <td>Wind direction</td>
              <td>{wind_dir}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  );
};

export default MainBody;
