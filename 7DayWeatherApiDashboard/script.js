// Wait for the document to be fully load before running code
document.addEventListener('DOMContentLoaded', function () {

    // Function to fetch data 
    function fetchWeather(cityName) {
        
var apiKey = 'd0db042bf642ae432b681ccf5c691289';
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
//fetch api url here
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                
                updateWeather(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    //function to update weather data
    function updateWeather(data) {
        var cityName = data.name;
        var temperature = data.main.temp;
        var description = data.weather[0].description;
        var icon = data.weather[0].icon;

      
        var currentWeatherContainer = document.getElementById('current-weather');
        currentWeatherContainer.innerHTML = `
            <h2>${cityName}</h2>
            <p>${description}</p>
            <p>Temperature: ${temperature}°C</p>
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">
        `;
    }

   
    var citySearchBtn = document.getElementById('citySearchBtn');
    citySearchBtn.addEventListener('click', function () {
        var cityInput = document.getElementById('cityInput');
        var cityName = cityInput.value.trim();

        if (cityName !== '') {
            fetchWeather(cityName);
        }
    });

    

});
