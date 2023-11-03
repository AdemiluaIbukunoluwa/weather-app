import { useContext } from "react";
import "./datetime.styles.scss";
import { DateContext } from "../../context/date.context";


const DateTime = () => {
    const {date, time} = useContext(DateContext)
  // get date from the location object and convert utc seconds to date object
 
  return (
    <div className="datetime">
      <span>{date}</span>
      <h1>{time}</h1>
    </div>
  );
};

export default DateTime;
