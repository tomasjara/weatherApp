import { useEffect, useState } from "react"

const apiKey = 'a7ed7b333dfdf4110c49c66c56121a07'

export const useWeatherData = () => {

    const [coords, setCoords] = useState()
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      if(coords) {
        setLoading(true)

        const {lat, lon} = coords[0]
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lang=es&units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`).then( res => res.json() ).then(data => setData({...data, coords})).catch(console.warn)
        
        setLoading(false)
      }
    }, [coords])
    
    const getCoords = async(city, country) => {
      setLoading(true)

      await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}}&appid=${apiKey}`)
      .then( res => res.json() )
      .then( data => {
        setCoords( data )
      })
      .catch( console.warn )
    }
    
  return {
    data,
    loading,
    getCoords
  }
}