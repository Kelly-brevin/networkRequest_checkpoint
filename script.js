document.getElementById("get-weather").addEventListener("click", async () => {
  const city = document.getElementById("city").value;
  const apiKey =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    document.getElementById(
      "weather-info"
    ).innerHTML = `Temperature: ${data.main.temp}°C <br> Description: ${data.weather[0].description} <br> Location: ${data.name}, ${data.sys.country}`;
  } catch (error) {
    document.getElementById("weather-info").innerHTML =
      "Error: " + error.message;
  }
});
