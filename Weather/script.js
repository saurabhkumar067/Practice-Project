const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");
const locationNotFound = document.querySelector('.location-not-found')
const weatherBody = document.querySelector('.weather-body')

inputBox.addEventListener('keydown',(e)=>{
if(e.key.toUpperCase() === "ENTER"){
  checkWeather(inputBox.value)
}
})


async function checkWeather(city) {
  const apiKey = "456a05474bb051732fed5fc31554581b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
  const weatherData = await fetch(`${url}`).then((response) => response.json());
  // console.log(weatherData);
  
  
    if(weatherData.cod === `404`){
      locationNotFound.style.display = 'flex'
      weatherBody.style.display = 'none'
      // console.log('error')
      return;
    } 

    locationNotFound.style.display = 'none'
    weatherBody.style.display = 'flex'
    


  temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
  description.innerHTML = weatherData.weather[0].description;
  humidity.innerHTML = weatherData.main.humidity + "%";
  windSpeed.innerHTML = weatherData.wind.speed + "Km/H";


  switch (weatherData.weather[0].main) {
    case "Clouds":
      weatherImg.src = "/Weather/Weather Images/Weather-image.png";
      break;
    case "Clear":
      weatherImg.src = "/Weather/Weather Images/clear_weather.png";
      break;
    case "Rain":
      weatherImg.src = "/Weather/Weather Images/rain.png";
      break;
    case "Mist":
      weatherImg.src = "/Weather/Weather Images/mist.png";
      break;
    case "Snow":
      weatherImg.src = "/Weather/Weather Images/snow.png";
      break;
    default:
      break;
  }

}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
