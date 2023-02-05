import React, { useEffect, useState } from 'react'
import {useForm} from '../hooks/useForm.js'

const apiKey = 'a7ed7b333dfdf4110c49c66c56121a07'

export const ForecastData = () => {
  
    const [dataForecast, setDataForecast] = useState()
    // state de dataGeo es solo para debugg
    const [dataGeo, setDataGeo] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const [firstResult, setFirstResult] = useState()
    const {city, country, onInputChange} = useForm({
        city: '',
        country: ''
    })
    
    // useEffect dev utils
    useEffect(() => {
        if(dataForecast) {
            console.log('data forecast: ', dataForecast)
            const [firstItem] = dataForecast.list
            console.log('first item: ', firstItem)
        }

        // if(dataGeo) console.log('data geocoding: ',dataGeo)
    }, [dataForecast])

    const getData = async() => {
        if(city === '' || country === '') {
            setError('city and country inputs are requiered')
            return
        }
        setFirstResult(null)
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
            // segunda peticion a '5 days / 3 hours forecastData'
            const respForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lang=es&units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`)
            const dataForecast = await respForecast.json()
            setDataForecast(dataForecast)
            const [firstItem] = dataForecast.list
            setFirstResult(firstItem)
            setLoading(false)
        }else {
            setDataForecast(null)
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
        
        
        {firstResult && 
            <>
                <h2>{dataForecast.city.name}, {dataForecast.city.country}</h2>
                <p>Temp: {firstResult.main.temp}°C</p>
                <p>Temp min: {firstResult.main.temp_min}°C, Temp max: {firstResult.main.temp_max}°C </p>
                <p>Viento a {(firstResult.wind.speed * 3.6).toFixed(1)} Km/h</p>
                <p>Humedad: {firstResult.main.humidity}%</p>
                <p></p>
            </>
        }
        
    </div>
  )
}