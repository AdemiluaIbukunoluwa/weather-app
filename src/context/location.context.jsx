import { createContext, useState, useEffect } from "react";

export const LocationContext = createContext({
  location: {},
  setLocation: () => {},
  getLocation: () => {},
});

export const LocationProvider = ({ children }) => {
  // location state will store latitude and longitude of the user's location
  const [location, setLocation] = useState({ lat: null, long: null });

  useEffect(() => {
    const getLocation = () => {
      const successCallback = (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ long: longitude, lat: latitude });
      };
      const errorCallback = (error) => {
        console.log(error);
      };

       navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    };
    getLocation()
  }, []);

  const values = { location };
  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};
