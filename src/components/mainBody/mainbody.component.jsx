import LastUpdated from "../last-updated/last-updated.component";
import WeatherInfo from "../weatherInfo/weatherInfo.component";
import "./mainBody.style.scss";

const MainBody = ({ weatherInfo, conditionText }) => {
  const { last_updated, temp_c, temp_f } = weatherInfo;
  return (
    <div className="mainbody">
      <LastUpdated
        className="last-updated-main-body"
        last_updated={last_updated}
      />
      <div className="current-weather">
        <p className="weatherText">{conditionText.toUpperCase()}</p>
        <div className="temperature">
          <p className="deg_in_cel">{temp_c}°C</p>
          <p className="deg_in_far">{temp_f}°F</p>
        </div>
        <WeatherInfo info={weatherInfo}/>
      </div>
    </div>
  );
};

export default MainBody;
