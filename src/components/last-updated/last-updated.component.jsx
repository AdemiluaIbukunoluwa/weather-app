// shows when last the weather data was updated
const LastUpdated = ({last_updated, className}) => {
    return(
        <h1 className={className}>Last updated : {last_updated}</h1>
    )
}

export default LastUpdated