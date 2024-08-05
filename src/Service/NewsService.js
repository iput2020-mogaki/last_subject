import axios from 'axios';

const API_KEY = '68b9928333494aa282e1ab0ffb0b9fb9';

export const fetchNews = async () => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'jp',
        pageSize: 1,
        apiKey: API_KEY
      }
    });
    return response.data.articles;
  } catch (error) {
    throw new Error('ニュースの取得に失敗しました');
  }
};
