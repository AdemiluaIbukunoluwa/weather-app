import { createContext, useContext, useEffect, useState } from "react";
import { LocationContext } from "./location.context";

export const WeatherContext = createContext({
  weatherData: null,
  setWeatherData: () => {},
});

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const { location } = useContext(LocationContext);
  const { lat, long } = location;

  useEffect(() => {
    const fetchData = async () => {
        await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=a70d45887f63445ab57210911232407&q=${lat},${long}&aqi=yes`
        )
          .then((response) => response.json())
          .then((data) => setWeatherData(data));
      };
      fetchData()
  }, [location])


//   useEffect(() => {
//     setWeatherData(fetchData());
//   }, [location]);

  const value = { weatherData };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
