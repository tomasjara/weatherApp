import { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const WeatherForm = ({ getCoords }) => {

    const [error, setError] = useState('')
    const { city, country, onInputChange } = useForm({
        city: '',
        country: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (city === '' || country === '') {
            setError('city and country inputs are requiered')
            return
        }

        setError()
        getCoords(city, country)
    }

    return (
        <div id='Formulario' className="col-md-9 col-sm-8 border rounded p-3 bg-dark " >

            {/* <form onSubmit={handleSubmit} className="form-group flex-column align-items-center mb-3" >
                <input className='form-control mb-3' type="text" name="city" placeholder='city' value={city} onChange={onInputChange} />
                <br />
                <input className='form-control' type="text" name='country' placeholder='country' value={country} onChange={onInputChange} />
                <label className='text-white mb-3' htmlFor="country"> use <a href="https://www.iban.com/country-codes" target="_blank">ISO 3166</a> country codes</label>
                <br />
                <button className='btn btn-primary'>get data</button>
            </form> */}

            {/* Formulario horizontal */}
            <div className="row g-3 align-items-center" style={{ color: '#fff' }}>
                <form onSubmit={handleSubmit} className="form-group" >
                    
                    <div className="col-auto">
                        <label className="col-form-label">Ciudad: </label>
                    </div>

                    <div className="col-auto">
                        <input className='form-control' type="text" name="city" placeholder='city' value={city} onChange={onInputChange} />
                    </div>

                    <div className="col-auto">
                        <label className="col-form-label">Pais: </label>
                    </div>

                    <div className="col-auto">
                        <input className='form-control' type="text" name='country' placeholder='country' value={country} onChange={onInputChange} />
                        <label className='text-white mb-3' htmlFor="country"> use <a href="https://www.iban.com/country-codes" target="_blank">ISO 3166</a> country codes</label>
                    </div>
                    <div className="col-auto">
                        <button className='btn btn-primary'>get data</button>
                    </div>
                </form>

            </div>
            {error && <p className='text-break text-center' style={{ color: 'red' }}>{error}</p>}
        </div>

    )
}
