import React, { useEffect, useState } from 'react'
import {useForm} from '../hooks/useForm.js'

const apiKey = 'a7ed7b333dfdf4110c49c66c56121a07'

export const OpenWeather = () => {
  
    const [data, setData] = useState()
    const [dataGeo, setDataGeo] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const {city, country, onInputChange} = useForm({
        city: '',
        country: ''
    })
    

    useEffect(() => {
        if(data) console.log('data openweather: ',data)
        if(dataGeo) console.log('data geocoding: ',dataGeo)
    }, [dataGeo,data])

    const getData = async() => {
        if(city === '' || country === '') {
            setError('city and country inputs are requiered')
            return
        }
        
        setError(null)
        setLoading(true)

        // primera peticion a 'geoCoding'
        const respGeoCoding = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${apiKey}`)
        const dataGeo = await respGeoCoding.json()
        // desestructuracion de 'geoCoding
        const [firstItem] = dataGeo
        setDataGeo(firstItem)
        const {lat, lon} = firstItem

        if(dataGeo) {
            // segunda peticion a 'openWeather'
            const respOpenWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lang=es&lat=${lat}&lon=${lon}&appid=${apiKey}`)
            const dataOpen = await respOpenWeather.json()
            setData(dataOpen)
            setLoading(false)
        }else {
            setData(null)
            setError('city or country are invalid')
        }
    }

    return (
    <div>
        <h1>Weather app</h1>

        <input type="text" name="city" placeholder='city' value={city} onChange={onInputChange}/>
        <br />
        <input type="text" name='country' placeholder='country' value={country} onChange={onInputChange}/>
        <label htmlFor="country"> use <a href="https://www.iban.com/country-codes" target="_blank">ISO 3166</a> country codes</label>
        <br />
        <button onClick={getData}>get data</button>
        
        {error && <p style={{color: 'red'}}>{error}</p>}
        {loading && <h1>Cargando...</h1>}
        {data && 
            <>
                <h2>{data.name}, {data.sys.country}</h2>
                <p>Temp: {(data.main.temp - 273.15).toFixed(1)}°C</p>
                <p>Temp min: {(data.main.temp_min - 273.15).toFixed(1)}°C, Temp max: {(data.main.temp_max - 273.15).toFixed(1)}°C </p>
                <p>Viento a {(data.wind.speed * 3.6).toFixed(1)} Km/h</p>
                <p>Humedad: {data.main.humidity}</p>
                <p></p>
            </>
        }
        
    </div>
  )
}