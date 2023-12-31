import "./App.css";
import SideBar from "./components/side-bar/sidebar.component";
import MainBody from "./components/mainBody/mainbody.component";
import { useContext } from "react";
import { WeatherContext } from "./context/weather.context";

function App() {
  const { weatherData } = useContext(WeatherContext);

  return (
    weatherData.current && (
      <div className="app row container-fluid px-0">
        <div className="row">
          <span className="lastUpd">
            Last updated: {weatherData.current.last_updated}
          </span>
          <SideBar />
          <MainBody />
        </div>
        {/* 
      <div className="credit fixed-bottom float-right">
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          <img
            src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
            alt="Weather data by WeatherAPI.com"
            border="0"
          />
        </a>
      </div> */}
      </div>
    )
  );
}

export default App;
