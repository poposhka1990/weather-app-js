const key = 'c7367dc96d165909d4d4c637d7b33f79'
const coordinateRequestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${key}`

const input = document.getElementById('weather-card-search')
console.log(input)

// input.addEventListener('input', (event) => {
//     console.log(input.value)
// })

const getCoordinates = async (coordinateRequestUrl) => {
    try {
        const response = await fetch(coordinateRequestUrl) 
        const coordinates = await response.json()
        const lat = coordinates['0'].lat
        const lon = coordinates['0'].lon
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${key}`
        const responseSecond = await fetch(url)
        const weather = await responseSecond.json()
        console.log(weather)
        console.log(Math.round(weather.main.temp))
        console.log(weather.name)
        console.log(weather.weather['0'].description)
    } catch (error) {
        console.log(error.message)
    }
}

getCoordinates(coordinateRequestUrl)

// const getData = async (url) => {
//     try {
//         const response = await fetch(url) 
//         const weather = await response.json()
//         console.log(weather)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// getData(url)