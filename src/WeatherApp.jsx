import { WeatherResult } from "./components/WeatherResult"
import { WeatherForm } from "./components/WeatherForm"
import { useWeatherData } from "./hooks/useWeatherData"

function WeatherApp() {

  const { data, loading, getCoords } = useWeatherData()

  return (
    <div className="bg-dark vh-100">
      <div className="container ">
        <div class="row d-flex justify-content-center align-items-center">

          <div class="col-md-6 col-11 ">
            <h1 className="mt-3 text-white">Weather app</h1>
            <WeatherForm getCoords={getCoords} />
          </div>

          <div class="col-md-6 col-11">
            <WeatherResult data={data} loading={loading} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default WeatherApp

{/* <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-12">
          <p>Contenido columna 1</p>
        </div>
        <div class="col-md-6 col-12">
          <p>Contenido columna 2</p>
        </div>
      </div>
    </div> */}

    // <div className="d-flex flex-column align-items-center bg-dark vh-100">
    //   <h1 className="mt-3 text-white">Weather app</h1>
    //   <WeatherForm getCoords={getCoords}/>
    //   <WeatherResult data={data} loading={loading}/>
    // </div>