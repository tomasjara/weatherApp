import { WeatherResult } from "./components/WeatherResult"
import { WeatherForm } from "./components/WeatherForm"
import { useWeatherData } from "./hooks/useWeatherData"

function WeatherApp() {

  const { data, loading, getCoords } = useWeatherData()

  return (
    <div className="vh-100" style={{background: 'linear-gradient(220.55deg, #565656 0%, #181818 100%)'}}>

      <div className="container">
        <div class="row d-flex justify-content-center ">
            <h1 className="mt-3 text-white text-center">Weather app</h1>
            <WeatherForm getCoords={getCoords} />
            <WeatherResult data={data} loading={loading} />
        </div>
      </div>

    </div>
  )
}

export default WeatherApp