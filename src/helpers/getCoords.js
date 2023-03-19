const apiKey = 'a7ed7b333dfdf4110c49c66c56121a07'

export const getCoords = async(city, country) => {

    const coords = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${apiKey}`).then(res => res.json()).then(res => res[0])
    // const {lat, lon} = resultGeoCoding[0]   
    
    return {
        coords
    }
}