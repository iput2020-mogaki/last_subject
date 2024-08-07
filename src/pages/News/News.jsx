// NewsList.jsx
import React, { useState, useEffect } from 'react';
import { fetchNewsByCategory } from '../../Service/NewsServiceCategory';

const categories = [
  'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'
];

function NewsList() {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedArticles = await fetchNewsByCategory(selectedCategory);
        console.log('Fetched articles:', fetchedArticles);
        setArticles(fetchedArticles);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getNews();
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  if (loading) return <div className="news-loading">読み込み中...</div>;
  if (error) return <div className="news-error">{error}</div>;

  return (
    <div className="news-container">
      <h1 className="news-title">{getCategoryName(selectedCategory)}の最新ニュースまとめ</h1>
      
      <ul className="news-list">
        {articles.map((article, index) => (
          <li key={index} className="news-item">
            <div className="news-item-content">
              <div>{getCategoryName(selectedCategory)}</div>
              <a className="news-item-link" href={article.url} target="_blank" rel="noopener noreferrer">
                <h2 className="news-item-title">{article.title}</h2>
              </a>
              {article.urlToImage && (
                <img 
                  className="news-item-image" 
                  src={article.urlToImage} 
                  alt={article.title} 
                />
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="category-selector">
        <label htmlFor="category-select">カテゴリを選択：</label>
        <select id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map(category => (
            <option key={category} value={category}>
              {getCategoryName(category)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

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

export default NewsList;
