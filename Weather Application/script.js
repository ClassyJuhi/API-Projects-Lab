'use strict';
const form = document.querySelector('form');
const input = document.getElementById('input');
const temperature = document.getElementById('temperature');
const city = document.getElementById('city');
const humidityData = document.getElementById('humidityData');
const windData = document.getElementById('windData');
const image = document.getElementById('image');

function getWeather(e) {
    e.preventDefault();
    let inputValue = input.value;

    if (inputValue === '') {
        console.log('Please enter a valid input');
    } else {
        const apiKey = '959quBk6ZIbeqvm0za9YOCiVNXcQUhvJmX30Z3cF';
        let requestUrl = `https://api.api-ninjas.com/v1/weather?city=${inputValue}`;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', requestUrl);
        xhr.setRequestHeader('X-Api-Key', apiKey);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let data = JSON.parse(this.responseText);
                    console.log(data);
                    temperature.innerHTML = data.temp + '°c';
                    city.innerHTML = inputValue;
                    humidityData.innerHTML = data.humidity + ' %';
                    windData.innerHTML = data.wind_speed + ' km/h'

                    if(data.temp <= 10){
                        image.src = 'assets/cloud.png';
                    }
                    else{
                        image.src = 'assets/sun.png';
                    }
                } else {
                    console.error('Error: Unable to fetch weather data');
                }
            }
        };
        xhr.send();
    }
}

form.addEventListener('submit', getWeather);

// If you want to keep the search button event listener:
search.addEventListener('click', getWeather);
