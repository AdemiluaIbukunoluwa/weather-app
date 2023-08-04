
const FullDate = ({value}) => {
    // const daysOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // const day = daysOfWeek[date.getDay()]
    // const month = Months[date.getMonth()]
    // const datenum = date.getDate()
    // const fullDatestr = `${day}, ${month} ${datenum}, ${date.getFullYear()}`
    // return fullDatestr

    const date = new Date(value)
    return date.toDateString()
}

export default FullDate
