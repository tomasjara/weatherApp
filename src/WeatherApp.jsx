import { WeatherResult } from "./components/WeatherResult"
import { WeatherForm } from "./components/WeatherForm"
import { useWeatherData } from "./hooks/useWeatherData"

function WeatherApp() {

  const { data, loading, getCoords } = useWeatherData()

  // responsive
  const screenWidth = window.screen.width
  let widthValue = 50
  if (screenWidth <= 768) { widthValue = 75 }
  if (screenWidth <= 576) { widthValue = 100 }

  return (
    <div className="vh-100 bg-black" >
      <div className="container" >
        <div className="vh-100 d-flex flex-column justify-content-center">
          <h1 className="text-white text-center mb-3">Weather app</h1>
          <WeatherForm getCoords={getCoords} widthValue={widthValue}/>
          <WeatherResult data={data} loading={loading} widthValue={widthValue}/>
          <h1></h1>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp