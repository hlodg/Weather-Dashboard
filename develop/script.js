var APIKey= "4a810a887073678340515af76b1c24a8";
var todaysWeather= $("#todaysWeather");
var searchBTN=$("#searchBTN");
var tempToday=$("#tempToday");
var windToday= $("#windToday");
var Humidity = $("#Humidity");
var uvIndex= $("#uvIndex");
var cityDate= $("#cityDate");
var currentDate= moment().format("dddd, MMMM Do");

searchBTN.on("click", search);

function search(e){
    e.preventDefault();
    var city=$("#inputCity").val();
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    fetch(queryURL)
        .then(function(response){
            // console.log(response);
            return response.json()
        })
        .then(function(weather){
            console.log(weather);
             displayWeather(weather);
        })
};

function displayWeather(weather){
    cityDate.text(weather.name + " "+ currentDate);
    tempToday.text("Temp: " + weather.main.temp + " degrees kelvin");
    windToday.text("Wind Speed: " + weather.wind.speed+ " kilometers per hour");
    Humidity.text("Humidity: "+ weather.main.humidity + " %");
    uvIndex.text("UV Index: "+ weather.sys.type);
}
