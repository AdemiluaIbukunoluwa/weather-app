const Time = () => {
    const date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    if(minute<10) minute = `0${minute}`
    let meridiem = "am"
    if(hour>12) meridiem= "pm"
    return `${hour}:${minute}${meridiem}`
}

export default Time