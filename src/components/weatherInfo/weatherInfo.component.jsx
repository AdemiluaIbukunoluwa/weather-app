import { useContext } from "react";
import { WeatherContext } from "../../context/weather.context";
import './weatherInfo.styles.scss'
const WeatherInfo = () => {
  const { weatherData } = useContext(WeatherContext);
  const { current } = weatherData;
  const { humidity, wind_degree, pressure_in, wind_dir } = current;

  return (
    <div className="otherInfo col-sm-4">
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
  );
};

export default WeatherInfo;
