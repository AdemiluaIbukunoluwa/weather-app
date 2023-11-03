import { createContext, useState } from "react";

export const DateContext = createContext({
  date: "",
  time: ''
});

export const DateProvider = ({ children }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const t_time  = d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
  let day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
//   set the surfux for each date eg 1= 1st
  switch(day){
    case 1 : case 21: case 31: day+= 'st'
    break
    case 2: case 22: day += 'nd'
    break
    case 3: case 23: day += 'rd'
    break
    default:
        day += 'th'
  }
  const [date, setDate] = useState(`${day}, ${month} ${year}`)
  const [time, setTime] = useState(t_time)

  const value = { date, time };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};
