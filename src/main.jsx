import React from 'react'
import ReactDOM from 'react-dom/client'
import { ForecastData } from './components/forecastData'
// import { OpenWeather } from './components/OpenWeather'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ForecastData />
  </React.StrictMode>,
)
