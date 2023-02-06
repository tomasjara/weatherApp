import { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const WeatherForm = ({ getData }) => {

    const [error, setError] = useState('')
    const {city, country, onInputChange} = useForm({
        city: '',
        country: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(city === '' || country === '') {
            setError('city and country inputs are requiered')
            return
        }
        setError('')
        getData(city, country)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="city" placeholder='city' value={city} onChange={onInputChange}/>
        <br />
        <input type="text" name='country' placeholder='country' value={country} onChange={onInputChange}/>
        <label htmlFor="country"> use <a href="https://www.iban.com/country-codes" target="_blank">ISO 3166</a> country codes</label>
        <br />
        <button>get data</button>
        {error && <p style={{color: 'red'}}>{error}</p>}
    </form>
  )
}
