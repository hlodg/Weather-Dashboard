var APIKey= "4a810a887073678340515af76b1c24a8";
var todaysWeather= $("#todaysWeather");
var searchBTN=$("#searchBTN");

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
            // console.log(weather);
             displayWeather(weather);
        })
};

function displayWeather(weather){
    todaysWeather.text(weather.main.temp);
}
