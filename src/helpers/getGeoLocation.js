import { getCoords } from "./getCoords"

export const getGeoLocation = async(city, country) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    let location = null
    if (city || country) location = getCoords(city, country)

    if(location) {
        // peticion a '5 days / 3 hours Forecast'
        const respForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lang=es&units=metric&lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`)
        const dataForecast = await respForecast.json()
        
        console.log(dataForecast)
        setData(dataForecast)
        setLoading(false)
        
    }else {
        setData(null)
        console.error('query error forecast data')
    }
}       