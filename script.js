const input = document.querySelector('#input');
const temp = document.getElementsByTagName('h1');
const button = document.querySelector('#button');
const img = document.querySelector('.img');
const city = document.querySelector('#city');
const apiKey = "0837213505e842f3a3b0490b885afd02";
const units = 'metric';

button.addEventListener('click', getWeather);

async function getWeather() {
    const city = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=${units}&appid=${apiKey}`;
    const response = await fetch(url)
    const data = await response.json();
    const weatherBlock = document.querySelector('.weatherForecast');

    const iconCode = data.weather[0].icon;
    const date = new Date();
    const today = date.toLocaleString('default', { month: 'long' }) + " " + date.getDate();

    weatherBlock.innerHTML = `
    <input id="input" type="text">
            <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${data.weather[0].description}">
            <div class="climateText">
                <h1>${Math.round(data.main.temp)} C</h1>
                <h2 id="city">${data.name}</h2>
                <p class="climateText p">Max: ${Math.round(data.main.temp_max)} Min: ${Math.round(data.main.temp_min)}</p>
                <h2>BY MARS IT</h2>
                <div class="dateText">
                    <p>Today</p>
                    <p>${today}</p>
                </div>
                <button id="button">Search</button>
            </div>
`;

    document.getElementById('button').addEventListener('click', getWeather);
}

