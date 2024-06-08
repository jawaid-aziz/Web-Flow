const URL = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "51912d5ec3msh73f3140194ae2fcp1b6d19jsnc756b686ef93",
    "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const fetchWeather = (city) => {
  fetch(URL + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = `${response.temp} C`;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = `${response.min_temp} C`;
      max_temp.innerHTML = `${response.max_temp} C`;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.log(err));
};

const sumbit = document.getElementById('submit');
const cityName = document.getElementById('city');
const forcastCity = document.querySelector('#forcastCity');

fetchWeather('Abbottabad');

sumbit.addEventListener("click", (e) => {
  e.preventDefault();
  forcastCity.innerText = `Forcast for ${cityName.value}`;
  fetchWeather(cityName.value);
});
