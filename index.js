const API_KEY = '69cf34dbaa087c8984bcdd999dbd772d'

function handleFormSubmit(event) {
    console.log("== handleFormSubmit ==")
    event.preventDefault();
    let city = document.getElementById("city").value;
    console.log("city:", city);
    fetchCurrentWeather(city);
}

function fetchCurrentWeather(city) {
    console.log("== fetchCurrentWeather ==")

    // ======= get weather data by city name =======
    let weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
    weatherUrl += city;
    weatherUrl += "&APPID=";
    weatherUrl += API_KEY;
    console.log("weatherUrl:", weatherUrl);

    fetch(weatherUrl)
      .then( (weatherData) => {
        console.log("== then1 ==");
        return weatherData.json()
      })
      .catch( error => {
        console.log("== catch1 ==");
        console.error(`Oh no! ${error}`);
      })
      .then( weatherJson => {
        console.log("== then2 ==");
        return weatherJson
      } )
      .catch( error => {
        console.log("== catch2 ==");
        console.error(`Ruh-roh! Couldn't convert the json: ${error}`)
      })
      .then( weatherJson => {
        console.log("== then3 ==");
        displayCurrentWeather(weatherJson);
      })
}

function displayCurrentWeather(weatherJson) {
    console.log("== displayCurrentWeather ==")
    //render current weather data to the DOM using provided IDs and json from API
    console.log("weatherJson:", weatherJson);
    console.log("weatherJson:", weatherJson);
    console.log("weatherJson:", weatherJson);
    console.log("weatherJson:", weatherJson);
}
