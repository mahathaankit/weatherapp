const inputbox = document.querySelector('.InputBox');
const searchbtn = document.getElementById('search');
const weatherimage = document.querySelector('.weatherimages');
const temperature = document.querySelector('.temp');
const weatherdescription = document.querySelector('.weatherdescription');
const humidity = document.getElementById('humidity');
const Windspeed = document.getElementById('Windspeed');
const location_not_found=document.querySelector('.locationf');
const weather_body=document.querySelector('.weathercontent')
async function checkWeather(city) {
    const api_key = "9a2c8116053eb8cc5dcb76cd3dbfcbdb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    weatherdescription.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    Windspeed.innerHTML = `${weather_data.wind.speed}Kmh`;
    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weatherimage.src = "cloudy.png";
            break;
        case 'Clear':
            weatherimage.src = "sun.png";
            break;
        case 'Haze':
            weatherimage.src = "haze.png";
            break;
        case 'Rain':
            weatherimage.src = "rain.png";
            break;
        case 'Heavy ':
            weatherimage.src = "heavy-rain.png";
            break;
        case 'Mist':
            weatherimage.src = "mist.png";
            break;
        case 'Snow':
            weatherimage.src = "storm.png";
            break;

    }
    console.log(weather_data)
}



searchbtn.addEventListener('click', () => {
    checkWeather(inputbox.value);
});
