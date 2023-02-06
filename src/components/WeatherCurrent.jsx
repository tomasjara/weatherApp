import { useEffect, useState } from "react"

export const WeatherCurrent = ({ data, loading }) => {

    const [city, setCity] = useState() 
    const [weatherData, setWeatherData] = useState()

    useEffect(()=> {
        
        if(loading) {
            setCity(null)
            setWeatherData(null)
        }

        if(data) {
            const {name, country} = data.city
            const [firtsItem] = data.list
            setCity({name, country})
            setWeatherData(firtsItem)
            console.log(city)
            console.log(weatherData)
        } 
        
    },[data, loading])

    return (
    <div id="result">
        {loading && <h1>cargando...</h1>}
        {city && 
            <div>
                <h2>{city.name}, {city.country}</h2>
                <p>Temp: {weatherData.main.temp}°C</p>
                <p>Temp min: {weatherData.main.temp_min}°C, Temp max: {weatherData.main.temp_max}°C </p>
                <p>Viento a {(weatherData.wind.speed * 3.6).toFixed(1)} Km/h</p>
                <p>Humedad: {weatherData.main.humidity}%</p>
                <p></p>
            </div> 
        }    
    </div>
  )
}
