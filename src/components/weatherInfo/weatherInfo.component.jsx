import "./weatherInfo.style.scss";

const WeatherInfo = ({ info }) => {
  const { humidity, wind_degree, wind_dir, pressure_in } = info;
  return (
    <div className="weatherinfo">
      <div>Humidity : {humidity}</div>
      <p>Wind Degree : {wind_degree}</p>
      <p>Wind Direction : {wind_dir}</p>
      <div>Pressure : {pressure_in}in</div>
    </div>
  );
};
export default WeatherInfo;
