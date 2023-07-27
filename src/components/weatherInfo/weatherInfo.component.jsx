const WeatherInfo = ({info}) => {
    const {humidity, wind_degree, wind_dir, pressure_in} = info
    return(
        <div className="weatherinfo">
            <p>Humidity : {humidity}</p>
            <p>Wind Degree : {wind_degree}</p>
            <p>wind_dir : {wind_dir}</p>
            <p>Pressure : {pressure_in}in</p>
        </div>
    )
}
export default WeatherInfo