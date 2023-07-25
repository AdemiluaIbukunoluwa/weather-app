import FullDate from "../date/datedata.component"
import Time from "../date/timedata.component"
import "./sidebar.style.scss"



const SideBar = ({locationData}) => {
    const {country, region} = locationData
    return(
        <div className="sidebar" >
        <h1 className="title">SKYWATCH</h1>
        <p className="date"><FullDate/></p>   
        <p className="time"><Time/></p>
        <p className="location">{region},{country}</p>
      </div>
    )
}
export default SideBar