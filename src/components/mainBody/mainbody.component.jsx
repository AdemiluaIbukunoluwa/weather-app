import LastUpdated from "../last-updated/last-updated.component";
import WeatherInfo from "../weatherInfo/weatherInfo.component";
import "./mainBody.style.scss";

const MainBody = ({ weatherInfo, condition }) => {
  const { last_updated, temp_c, temp_f } = weatherInfo;
  const {conditionText, conditionIcon} = condition //destructor condition object created in app.js to access text and icon
  return (
    <div className="mainbody">

      <LastUpdated
        className="last-updated-main-body"
        last_updated={last_updated}
      />
      <div className="current-weather">
      <div className="temperature">
          <p className="deg_in_cel">{temp_c}°C</p>
          {/* <p className="deg_in_far">{temp_f}°F</p> */}
        </div>

        {/* shows weather text e.g partly cloudy */}
        <div className="weatherTextAndIcon">
        <img alt="weatherIcon" src={conditionIcon}/>
        <p className="weatherText">{conditionText}</p>
        </div>

        <WeatherInfo info={weatherInfo}/>
      </div>
    </div>
  );
};

export default MainBody;
