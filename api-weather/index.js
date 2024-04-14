const inputBox = document.querySelector(".input-box");
const btn = document.getElementById("search-Btn");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temp");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

async function checkWeather(city) {
  const api_key = "2c9cd860f592337a2d4fd67d87c3091d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then(response => response.json());
  console.log(weather_data)

  temperature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind.innerHTML = `${Math.round(weather_data.wind.speed)}km/h`;

  if (weather_data.weather[0].main=="clouds") {
    weatherIcon.src="image/clouds.png";
  } else if (weather_data.weather[0].main=="clear") {
    weatherIcon.src="image/clear.png";
  } else if (weather_data.weather[0].main=="rain") {
    weatherIcon.src="image/rain.png";
  } else if (weather_data.weather[0].main=="mist") {
    weatherIcon.src="image/mist.png";
  } else if (weather_data.weather[0].main=="snow") {
    weatherIcon.src="image/snow.png";
  }
}

btn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});


