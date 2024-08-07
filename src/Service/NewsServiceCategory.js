// NewsService.js
import axios from 'axios';

const API_KEY = '68b9928333494aa282e1ab0ffb0b9fb9';

export const fetchNewsByCategory = async (category) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'jp',
        category: category,
        pageSize: 10,
        apiKey: API_KEY
      }
    });
    return response.data.articles;
  } catch (error) {
    throw new Error(`${getCategoryName(category)}カテゴリーのニュース取得に失敗しました`);
  }
};

function getCategoryName(category) {
  const categoryNames = {
    business: 'ビジネス',
    entertainment: 'エンターテイメント',
    general: '一般',
    health: '健康',
    science: '科学',
    sports: 'スポーツ',
    technology: '技術'
  };
  return categoryNames[category] || category;
}
