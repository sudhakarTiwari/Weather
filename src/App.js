import React, { useState } from "react";
import fetchWeather from "./fetchWeather";
import "./styles.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [Weather, setWeather] = useState({});
  const search = async e => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
    }
  };
  return (
    <div className="main-container">
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {Weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{Weather.name}</span>
            <sup>{Weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(Weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${
                Weather.weather[0].icon
              }@2x.png`}
              alt={Weather.weather[0].description}
            />
            <p>{Weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
