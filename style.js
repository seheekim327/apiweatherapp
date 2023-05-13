const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const weatherDiv = document.getElementById('weather');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  if (searchTerm) {
    getWeather(searchTerm);
  }
});

async function getWeather(searchTerm) {
  const API_KEY = 'your_api_key';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(apiUrl);
    const weatherData = await response.json();
    displayWeather(weatherData);
  } catch (error) {
    console.error(error);
  }
}

function displayWeather(weatherData) {
  weatherDiv.style.display = 'block';
  weatherDiv.innerHTML = `
    <p>City: ${weatherData.name}</p>
    <p>Temperature: ${weatherData.main.temp}°C</p>
    <p>Description: ${weatherData.weather[0].description}</p>
  `;
}
