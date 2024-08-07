import React, { useEffect, useState } from 'react';
import { Paper, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import getWeather from '../../Service/WeatherService';
import { areaList } from '../../constants/areaList';
import '../../styles/weather.css'; 

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedArea, setSelectedArea] = useState(() => {
    return localStorage.getItem('selectedWeatherArea') || '130010';
  });

  useEffect(() => {
  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeather(selectedArea);
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchWeather();
  
  localStorage.setItem('selectedWeatherArea', selectedArea);
  }, [selectedArea]);
  
  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  if (loading) {
    return <div className="weather-container">Loading...</div>;
  }

  if (error) {
    return <div className="weather-container">Error: {error.message}</div>;
  }

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>Weather Information</Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="area-select-label">エリア選択</InputLabel>
        <Select
          labelId="area-select-label"
          id="area-select"
          value={selectedArea}
          label="エリア選択"
          onChange={handleAreaChange}
        >
          {areaList.map((area) => (
            <MenuItem key={area.id} value={area.id}>{area.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    <div className="weather-container-detail">
      <h2 className="weather-title">Weather Information</h2>
      <p className="weather-item"><strong>Publishing Office:</strong> {weatherData.publishingOffice}</p>
      <p className="weather-item"><strong>Report Date:</strong> {weatherData.description.publicTimeFormatted}</p>
      <p className="weather-item"><strong>Area Description:</strong> {weatherData.description.text}</p>
      <p className="weather-item"><strong>Weather:</strong> {weatherData.forecasts[0].detail.weather}</p>
      <img className="weather-image" src={weatherData.forecasts[0].image.url} alt={weatherData.forecasts[0].image.title} />
      </div>
      </Paper>
  );
};

export default Weather;
