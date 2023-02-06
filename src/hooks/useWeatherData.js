import { useState } from "react"

const apiKey = 'a7ed7b333dfdf4110c49c66c56121a07'

export const useWeatherData = () => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    const getData = async(city, country) => {
        setLoading(true)
        
        // peticion a 'geocoding'
        const respGeoCoding = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${apiKey}`)
        const dataGeo = await respGeoCoding.json()
        const [firstItem] = dataGeo
        const {lat, lon} = firstItem

        if(dataGeo) {
            // peticion a '5 days / 3 hours Forecast'
            const respForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lang=es&units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`)
            const dataForecast = await respForecast.json()
            setData(dataForecast)
            setLoading(false)
        }else {
            setData(null)
            console.error('query error forecast data')
        }
    }
  
  return {
    data,
    loading,
    getData
  }
}
