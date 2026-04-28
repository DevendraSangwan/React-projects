import { useState } from "react";
import "./App.css"
export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  async function getWeather() {
     if(!city)return;
     setLoading(true);
     setWeather(null);
     try{
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    const geoData = await geoRes.json();

    if (!geoData.results) {
      alert("City not found ❌");
      return;
    }

    const { latitude, longitude, name } = geoData.results[0];

    // Step 2: Weather data
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();
   setTimeout(()=>{
    setWeather({
      city: name,
      temp: weatherData.current_weather.temperature,
    });
    setLoading(false);
  },300);
}catch(error){
  alert("error fetching data ")
  setLoading(false);
}
}
  return (
  <div className="app-container">
    <div className="weather-card">
      <h2>🌦️ Weather App</h2>
      
      <div className="input-group">
        <input
          placeholder="Enter city..."
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {weather && (
        <div className="result-container">
          <div className="divider"></div>
          <h3 className="city-name">{weather.city}</h3>
          <div className="temp-display">
            <span className="degree">{weather.temp}</span>
            <span className="unit">°C</span>
          </div>
          <p className="status">Current Forecast</p>
        </div>
      )}
    </div>
  </div>
);
}

