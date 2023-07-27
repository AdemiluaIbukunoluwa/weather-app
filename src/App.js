import { useEffect, useState } from "react";
import SideBar from "./components/sidebar/sidebar.component";
import "./App.css"
import MainBody from "./components/mainBody/mainbody.component";

function App() {
  const [locData, setLocData] = useState([])
  const [weatherData, setWeatherData] = useState([])
  const [conditionText, setConditionText] = useState('')


  useEffect( ()=>{
    const fetchData = async() => {
      await fetch("https://api.weatherapi.com/v1/forecast.json?key=a70d45887f63445ab57210911232407&q=Lagos&aqi=yes")
      .then(response => response.json())
      .then((data) => {
        console.log(data)
         setLocData(data.location)
        setWeatherData(data.current)
        setConditionText(data.current.condition.text)
      })
      }
      fetchData()
    }
      , [])
    

  return (
    <div className="background">
      <SideBar locationData={locData}/>
      <MainBody weatherInfo= {weatherData} conditionText={conditionText}/>
    </div>
  );
}


export default App
