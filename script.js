const weather_element = document.getElementById('weather');
const temperature_main_element = document.getElementById('temperature-main');
const weather_description_element = document.getElementById('weather-description');
const weather_icon_element = document.getElementById('icon');
const temperature_element = document.getElementById('temperature');
const humidity_element = document.getElementById('humidity');
const wind_speed_element = document.getElementById('wind-speed');
const country_element = document.getElementById('country');
const town_element = document.getElementById('town');


const apiKey = "fa799a87d813b55dd354265a648ffd54";

var city = "Washington";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&city=${city}&units=metric`;

fetch(apiURL)
.then((response) =>{
    if (!response.ok){
        alert('An error occured');
        return;
    }
    return response.json();
})

.then((data) =>{
    console.log(data);
}
)
