import "./weatherInfo.style.scss";

const WeatherInfo = ({ info }) => {
  const { humidity, wind_degree, wind_dir, pressure_in } = info;
  return (
    <div className="weatherinfo">
      <p>Humidity <span>{humidity}</span></p>
      <p>Wind Degree  <span>{wind_degree}°</span></p>
      <p>Wind Direction  <span>{wind_dir}</span></p>
      <p>Pressure  <span>{pressure_in}in</span></p>
    </div>
  );
};
export default WeatherInfo;
