import { useEffect } from "react"

// get time to count 
const Time = () => {
    useEffect(()=>{
        setInterval(()=>{
            const date = new Date()
            let hour = date.getHours()
            let minute = date.getMinutes()
            if(minute<10) minute = `0${minute}`
            if(hour<10) hour = `0${hour}`
            // let meridiem = "am"
            // if(hour>12) meridiem= "pm"
            return `${hour}:${minute}`
        }, 1000)
    }, [])
    
}

export default Time