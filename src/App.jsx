import { WeatherCurrent } from "./components/WeatherCurrent"
import { WeatherForm } from "./components/WeatherForm"
import { useWeatherData } from "./hooks/useWeatherData"

function App() {

  const {data, loading, getData} = useWeatherData()

  return (
    <div id="app">
      <h1>Weather app</h1>
      <WeatherForm getData={getData}/>
      <WeatherCurrent data={data} loading={loading}/>
    </div>
  )
}

export default App
