const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const appid = "4d638021d72d43c93e60f985b4fbf1d6";


        async function checkWeather(city) {
            document.querySelector(".errormsg").style.display = "none";
            document.querySelector(".information").style.display = "block";
                try {
                    const response = await fetch(apiurl + city + `&appid=${appid}`);
                    if (!response.ok) {
                        throw new Error('City not found. Please try another city.');
                    }
                    var data = await response.json();
                    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "&deg;C";
                        document.querySelector(".city").innerHTML = data.name;
                        document.querySelector(".humidityPercent").innerHTML = data.main.humidity + "%";
                        document.querySelector(".weatherCondition").innerHTML = data.weather[0].main;
                        document.querySelector(".windSpeed").innerHTML = data.wind.speed + " km/h";

                if (data.weather[0].main == "Clear") {
                    document.getElementById("weatherImage").src = "./source.gif"
                }
                else if (data.weather[0].main == "Clouds") {
                    document.getElementById("weatherImage").src = "./cloud.gif"
                }
                else if (data.weather[0].main == "Rain" || data.weather[0].main == "Drizzle") {
                    document.getElementById("weatherImage").src = "./rain.gif"
                }
                else if (data.weather[0].main == "Snow") {
                    document.getElementById("weatherImage").src = "./snow.gif"
                }
                else if (data.weather[0].main == "Mist" || data.weather[0].main == "Haze" || data.weather[0].main == "Fog") {
                    document.getElementById("weatherImage").src = "./mist.png"
                }
                }
                catch(error){
                    document.querySelector(".errormsg").style.display = "block";
                    document.querySelector(".information").style.display = "none";
                    document.querySelector(".errormsg").innerHTML = "Please Enter Proper City Name";
                    document.querySelector(".errormsg").style.color = "Red";
                }
            }
document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const city = document.querySelector(".searchField input").value;

    if (city) {
        checkWeather(city);
    }
});
