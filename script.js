// script.js

async function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = 'a6bb3f018444dd4cae9e73be100aaff0';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = '';

        const cityName = document.createElement('h2');
        cityName.textContent = `Weather in ${data.name}:`;
        weatherInfo.appendChild(cityName);

        const weatherDescription = document.createElement('p');
        weatherDescription.textContent = `Description: ${data.weather[0].description}`;
        weatherInfo.appendChild(weatherDescription);

        const temperature = document.createElement('p');
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        weatherInfo.appendChild(temperature);

        const humidity = document.createElement('p');
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        weatherInfo.appendChild(humidity);

        const windSpeed = document.createElement('p');
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
        weatherInfo.appendChild(windSpeed);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
