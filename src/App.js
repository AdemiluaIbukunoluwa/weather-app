import { useEffect } from "react";

function App() {
   useEffect(()=>{
    fetch("https://api.weatherapi.com/v1/forecast.json?key=a70d45887f63445ab57210911232407&q=Lagos&aqi=yes")
    .then(response => response.json())
    .then((data) => console.log(data))
    }, [])
  return (
    <div className="App">
      <button>Show</button>
    </div>
  );
}


export default App
