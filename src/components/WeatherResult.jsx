import { useEffect, useState } from "react"
import clouds from '/public/clouds.png'
import snow from '/public/snow.png'
import rain from '/public/rain.png'
import clear from '/public/clear.png'

export const WeatherResult = ({ data, loading, widthValue }) => {

    const [city, setCity] = useState()
    const [weatherData, setWeatherData] = useState()
    const [climaUrl, setClimaUrl] = useState()

    

    useEffect(() => {

        if (loading) {
            setCity(null)
            setWeatherData(null)
        } else {
            if (data) {
                const weatherDefault = 'error'
                const weatherOptions = {
                    clouds: clouds ,
                    snow: snow,
                    rain: rain,
                    clear: clear
                }
                const { city: { name, country }, list: [firstWeatherResult], coords: [coordsResult] } = data
                const clima = data.list[0].weather[0].main.toLowerCase()
                const climaOption = weatherOptions[clima] || weatherDefault
                
                setClimaUrl(climaOption)
                setCity({ name, country, coordsResult, clima })
                setWeatherData(firstWeatherResult)
                
            
            }
        }
    }, [data, loading])

    return (
        <>
            {loading
                ? <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border text-white" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

                :
                <>
                    {city &&
                        <div className={`card bg-dark text-white border-white mx-auto w-${widthValue}`}
                        >
                            <div className="row card-header border-white row m-0">
                                <h2 className="card-title text-center" >{city.name}</h2>
                                <small className="card-subtitle text-center" style={{ color: '#999999' }}>{city.country}{city.coordsResult.state && `, ${city.coordsResult.state}`}</small>
                            </div>

                            <div className="row justify-content-center">
                                <img className="my-3" style={{ width: '120px' }} src={climaUrl} alt="" />
                                <h2 className="col-12 text-center">{weatherData.main.temp}°C</h2>
                            </div>

                            <p className="text-center" style={{ color: '#999999' }}>{weatherData.main.temp_min}°C / {weatherData.main.temp_max}°C </p>

                            <div className="row ">
                                <div className="col-6">
                                    <p className="text-center m-0" style={{ color: '#999999' }}>Viento</p>
                                    <p className="text-center">{(weatherData.wind.speed * 3.6).toFixed(1)} Km/h</p>
                                </div>

                                <div className="col-6">
                                    <p className="text-center m-0" style={{ color: '#999999' }}>Humedad</p>
                                    <p className="text-center" >{weatherData.main.humidity}%</p>
                                </div>

                            </div>
                        </div>
                    }
                </>
            }
        </>
    )
}