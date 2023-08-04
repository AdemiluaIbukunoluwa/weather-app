import DateAndTime from "../date-and-time/datetime.component";
import "./sidebar.style.scss";

const SideBar = ({ locationData, dateandtime }) => {
  const { country, region } = locationData;
  return (
    <div className="sidebar">
      <h1 className="title">SKYWATCH</h1>
      <p className="date">
        <DateAndTime req="Date" param={dateandtime} />
      </p>
      <p className="time">
        <DateAndTime req="Time" param={dateandtime} />
      </p>
      <p className="location">
        {region},{country}
      </p>
    </div>
  );
};
export default SideBar;
