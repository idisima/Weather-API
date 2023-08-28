

const btn = document.getElementById("btn")
let toggle =document.getElementById("toggle")
const wrapDiv = document.getElementById("wrap-div")
const clickToView = document.getElementById("click-to-view")
function getWeatherData() {
const url = fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8a216ecda4msh31d8dbb9faccd91p11b72djsnd066efb4e158',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
})
.then(res => res.json())
.then(data => {
    console.log(data)
	const weatherData = {
		location: data.location.country,
		name: data.location.name,
		region: data.location.region,
		temperature: data.current.temp_c,
		localTime: data.location.localtime,
		condition: data.current.condition.text,
		cloud: data.current.cloud,
		humidity: data.current.humidity,
		feelsLike: data.current.feelslike_c
		,
		lastUpdated: data.current.last_updated
	}
	console.log(weatherData.lastUpdated)
    
document.getElementById("container").textContent = `${weatherData.location}`

function WeatherFun(){
document.getElementById("name").textContent = `${weatherData.name}`

document.getElementById("region").textContent = `${weatherData.region}`

document.getElementById("temperature").textContent = `${weatherData.temperature}°C`

document.getElementById("humidity").textContent = `H ${weatherData.humidity}%`

document.getElementById("local-time").textContent = `${weatherData.localTime}`

document.getElementById("condition").textContent = `${weatherData.condition}`

document.getElementById("cloud").textContent = `Cloud ${weatherData.cloud}°`

document.getElementById("feels-like").textContent = `Feels Like ${weatherData.feelsLike}°`

document.getElementById("last-updated").textContent = `Last updated: ${weatherData.lastUpdated}`
}
let input = ''


btn.addEventListener("click", ()=>{
	if(toggle.classList.contains('hidden')){
		toggle.classList.remove('hidden')
		btn.textContent = "Hide"
		clickToView.textContent = "Hide Weather condition"
	} else{
		toggle.classList.add('hidden')
		btn.textContent = "Show"
		clickToView.textContent = "Show Weather condition"
	}
	WeatherFun()
})

})
.catch (err => {
    console.log(err)
})
}
getWeatherData()
