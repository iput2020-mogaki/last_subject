import React, { useState, useEffect } from 'react';
import { fetchNews } from '../Service/NewsService';

function NewsList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const fetchedArticles = await fetchNews();
        setArticles(fetchedArticles);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getNews();
  }, []);

  if (loading) return <div className="news-loading">読み込み中...</div>;
  if (error) return <div className="news-error">{error}</div>;

  return (
    <div className="news-container">
      <h1 className="news-title">ニュース一覧 (最新5件)</h1>
      <ul className="news-list">
        {articles.map((article, index) => (
          <li key={index} className="news-item">
            <div className="news-item-content">
              <a className="news-item-link" href={article.url} target="_blank" rel="noopener noreferrer">
                <h1 className="news-item-title">{article.title}</h1>
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
    </div>
  );
}

export default NewsList;
