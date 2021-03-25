const apiKey = "daa8b8541b6bcf70f746cd7637c98c4f";
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateUI(data))
}

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById("cityName").value;
    getWeatherData(inputCity);
})

const updateUI = data => {
    document.getElementById("showCity").innerText = data.name;
    document.getElementById("showTemperature").innerText = data.main.temp;
    document.getElementById("weatherStatus").innerText = data.weather[0].main;
    document.getElementById("icon").setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById("cityName").value = "";
}
getWeatherData("Dhaka");

// https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=daa8b8541b6bcf70f746cd7637c98c4f