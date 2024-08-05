// src/components/Weather.jsx
import React, { useEffect, useState } from 'react';
import getWeather from '../Service/WeatherServise';
import '../styles/weather.css';  // CSSファイルをインポート

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather();
        setWeatherData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div className="weather-container">Loading...</div>;
  }

  if (error) {
    return <div className="weather-container">Error: {error.message}</div>;
  }

  return (
    <div className="weather-container">
      <h2 className="weather-title">{weatherData.title}の天気予報</h2>
      <p className="weather-item"><strong>Report Date:</strong> {weatherData.forecasts[0].date}</p>
      <span className="weather-item"><strong>天気:</strong>{weatherData.forecasts[0].telop}</span>
      <span className="weather-item"><strong> 温度:</strong>{weatherData.forecasts[0].temperature.max.celsius}</span>
      <img className="weather-image" src={weatherData.forecasts[0].image.url} alt={weatherData.forecasts[0].image.title} />
    </div>
  );
};

export default Weather;
