import { useContext, useEffect } from "react";
import "./App.css";
import { LocationContext } from "./context/location.context";
import { WeatherContext } from "./context/weather.context";
import Location from "./components/location/location.component";
import SideBar from "./components/side-bar/sidebar.component";

function App() {

  return (
    <div>
      <div className="container">
        <SideBar/>
      </div>
      <div className="credit">
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          <img
            src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
            alt="Weather data by WeatherAPI.com"
            border="0"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
