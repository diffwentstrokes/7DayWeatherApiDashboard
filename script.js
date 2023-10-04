// Wait for the document to be fully loaded before running JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // Function to fetch weather data from the API
    function fetchWeather(cityName) {
        // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
        const apiKey = 'YOUR_API_KEY';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Handle the weather data here and update the DOM
                updateWeather(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Function to update the DOM with weather data
    function updateWeather(data) {
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        // Update the current weather container
        const currentWeatherContainer = document.getElementById('current-weather');
        currentWeatherContainer.innerHTML = `
            <h2>${cityName}</h2>
            <p>${description}</p>
            <p>Temperature: ${temperature}°C</p>
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">
        `;
    }

    // Event listener for the city search button
    const citySearchBtn = document.getElementById('citySearchBtn');
    citySearchBtn.addEventListener('click', function () {
        const cityInput = document.getElementById('cityInput');
        const cityName = cityInput.value.trim();

        if (cityName !== '') {
            fetchWeather(cityName);
        }
    });

    // You can also add additional logic for handling search history here

});
