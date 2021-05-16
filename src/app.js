
function displayTemperature(response) {
    console.log(response.data.main.temp);
}

let apiKey = "edb378f0be539a4b2c5c96da53e9f0c1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);