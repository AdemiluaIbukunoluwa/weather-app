import { useEffect, useState } from "react";
import SideBar from "./components/sidebar/sidebar.component";
import "./App.css"

function App() {
  const [locData, setLocData] = useState([])
  const [weatherData, setWeatherData] = useState([])

  useEffect(()=>{
    fetch("https://api.weatherapi.com/v1/current.json?key=a70d45887f63445ab57210911232407&q=Lagos&aqi=yes")
    .then(response => response.json())
    .then((data) => {
      setLocData(data.location)
      setWeatherData(data.current)
    })
    }, [])


  return (
    <div className="App">
      {
          console.log(locData)
      }
      <SideBar locationData={locData}/>
    </div>
  );
}


export default App
