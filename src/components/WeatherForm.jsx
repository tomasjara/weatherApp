import { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const WeatherForm = ({ getCoords, widthValue }) => {

    const [error, setError] = useState('')
    const { city, country, onInputChange } = useForm({
        city: '',
        country: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (city === '') {
            setError('City are requiered')
            return
        }
        setError('')
        getCoords(city, country)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={`row form-group bg-dark border rounded mx-auto w-${widthValue} p-2 mb-3 animate__animated animate__fadeInUp`}>
                <input
                    className='col p-0 text-white bg-dark border-0 rounded-0  w-100 '
                    style={{ outline: 'none' }}
                    type="text"
                    name="city"
                    placeholder='Enter city'
                    autoFocus
                    autoComplete='off'
                    value={city}
                    onChange={onInputChange} />

                <button className='col-auto btn btn-primary'>Search</button>
            </form>

            {error && <div class={`alert alert-warning alert-dismissible fade show mx-auto w-${widthValue}`} role="alert">
                City are requiered
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </>
    )
}
