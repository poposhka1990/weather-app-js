const key = 'c7367dc96d165909d4d4c637d7b33f79'
const input = document.querySelector('.form')
const button = document.querySelector('.search-button')
let cityLabel = document.querySelector('.weather-card-footer-city')
let tempLabel = document.querySelector('.weather-card-footer-temperature')
let conditionLabel = document.querySelector('.weather-card-footer-condition')

input.addEventListener('change', getCity)
let city = ''

function getCity(e) {
  city = e.target.value
  if (city) {
    console.log(city)
  }
}

form.addEventListener('submit', (e) => {
    input.value = ''
    e.preventDefault()
    if (city) {
        getWeather(city)
    } 
})

const getWeather = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${key}`) 
        const weather = await response.json()
        tempLabel.textContent = (Math.round(weather.main.temp)) + ' °C'
        cityLabel.textContent = weather.name
        conditionLabel.textContent = weather.weather['0'].description
    } catch (error) {
        console.log(error.message)
    }
}
