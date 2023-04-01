import { useEffect, useState } from "react"

export const WeatherResult = ({ data, loading }) => {

    const [city, setCity] = useState() 
    const [weatherData, setWeatherData] = useState()

    useEffect(()=> {

        if(loading) {
            setCity(null)
            setWeatherData(null)

            console.log(weatherData)
            console.log(city)
        } else {
            if(data) {
                const {city: {name, country}, list: [firstWeatherResult], coords: [coordsResult]} = data
                
                setCity({name, country, coordsResult})
                setWeatherData(firstWeatherResult)
            } 
        }
    },[data, loading])

    return (
    <div className="mt-4">
        {loading && <h1 className="text-white">cargando...</h1>}
        {city && 
            <div className='card bg-dark text-white border-white animate__animated animate__fadeIn '>
                <div className="card-header border-white">
                    <h2 className="card-title">{city.name} {weatherData.main.temp}°C</h2>
                    <small className="card-subtitle">{city.country}, {city.coordsResult.state}</small>
                </div>
                <div className="card-body">
                    <p>Temp min: {weatherData.main.temp_min}°C, Temp max: {weatherData.main.temp_max}°C </p>
                    <p>Viento a {(weatherData.wind.speed * 3.6).toFixed(1)} Km/h</p>
                    <p>Humedad: {weatherData.main.humidity}%</p>
                </div>
            </div> 
        }   
    </div>
  )
}