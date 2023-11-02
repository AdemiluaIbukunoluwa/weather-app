import { useContext } from 'react'
import './datetime.styles.scss'
import { LocationContext } from '../../context/location.context'


const DateTime = () => {
// get date from the location object and convert utc seconds to date object
    const {location} = useContext(LocationContext)
    const {localtime_epoch} = location

    const date = new Date()
    const time = date.getHours() + " : " + date.getMinutes()
    return(
        <div>
            <h1>{time}</h1>
        </div>
    )
}

export default DateTime