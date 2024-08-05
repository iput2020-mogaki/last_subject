const BASE_URL = 'https://weather.tsukumijima.net/api/forecast/city/';

const getWeather = async (cityCode) => {
  if (!cityCode) {
    throw new Error('City code is required');
  }

  const url = `${BASE_URL}${cityCode}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    throw error;
  }
};

export default getWeather;
