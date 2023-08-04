import { useEffect, useState } from "react";
import SideBar from "./components/sidebar/sidebar.component";
import "./App.css";
import MainBody from "./components/mainBody/mainbody.component";

function App() {
  const [locData, setLocData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [condition, setCondition] = useState("");
  const [DateAndTime, setDateAndTime] = useState(Date())

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://api.weatherapi.com/v1/forecast.json?key=a70d45887f63445ab57210911232407&q=Lagos&aqi=yes"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLocData(data.location);
          setWeatherData(data.current);
          setCondition(data.current.condition);
          setDateAndTime(data.location.localtime)
        });
    };
    fetchData();
}, [])

  return (
    <div className="background">
      {/* <button onClick={setRefresh(1)}>Refresh</button> */}
      <SideBar locationData={locData} dateandtime= {DateAndTime}/>
      <MainBody weatherInfo={weatherData} condition={
        // did this because mainbody component is unable to access data from the object i.e condition.text
        {conditionText : condition.text,
          conditionIcon : condition.icon
        }
      } />

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
