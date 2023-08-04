import FullDate from "./datedata.component"
import Time from "./timedata.component"

const DateAndTime = ({req, param}) => {
    // shows fulldate component if req = fulldate and time component if otherwise
    // param is the Date value from api
    if(req === "Date"){
        return <FullDate value={param}/>
    }
    else if(req === "Time"){
        return <Time value= {param}/>
    }


}

export default DateAndTime