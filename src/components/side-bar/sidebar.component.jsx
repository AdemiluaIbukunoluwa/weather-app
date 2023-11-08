import './sidebar.styles.scss'
import {useContext} from 'react'
import {WeatherContext} from '../../context/weather.context'
import Location from '../location/location.component'
import DateTime from '../dateAndTime/datetime.component';

const SideBar = () => {
    const { weatherData } = useContext(WeatherContext);
    const { location } = weatherData;

  return (
    <div className="col-xl-3 sidebar">
        <h2 className='title'>SKYWATCH</h2>
       <DateTime className='col'/>
      <span className='col'>{location && <Location />}</span> {/* only display location component if there is location data in weatherData */}
    </div>
  );
};

export default SideBar;
