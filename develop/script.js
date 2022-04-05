var APIKey= "4a810a887073678340515af76b1c24a8";
var todaysWeather= $("#todaysWeather");
var searchBTN=$("#searchBTN");
var tempToday=$("#tempToday");
var windToday= $("#windToday");
var Humidity = $("#Humidity");
var uvIndex= $("#uvIndex");
var cityDate= $("#cityDate");
var currentDate= moment().format('L');

searchBTN.on("click", search);

// search function for user input
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

// displays the current weather in the white box and city
function displayWeather(weather){
    cityDate.text(weather.name + " ("+ currentDate+ ")");
    tempToday.text("Temp: " + weather.main.temp + " degrees kelvin");
    windToday.text("Wind Speed: " + weather.wind.speed+ " kilometers per hour");
    Humidity.text("Humidity: "+ weather.main.humidity + " %");
    uvIndex.text("UV Index: "+ weather.sys.type);
}

// create dates and text to input into headers of daily weather 
var tomorrow1=$("#tomorrow1");
var tomorrow2=$("#tomorrow2");
var tomorrow3=$("#tomorrow3");
var tomorrow4=$("#tomorrow4");
var tomorrow5=$("#tomorrow5");

var moment1= moment().add(1, 'days').calendar();
var moment2= moment().add(2, 'days').calendar();
var moment3= moment().add(3, 'days').calendar();
var moment4= moment().add(4, 'days').calendar();
var moment5= moment().add(5, 'days').calendar();

tomorrow1.text(moment1);
tomorrow2.text(moment2);
tomorrow3.text(moment3);
tomorrow4.text(moment4);
tomorrow5.text(moment5);

// create function for getting and displaying text in the 5day forecast


