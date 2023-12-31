import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function NewsCard() {
  const [articles, setArticles] = useState();
  const apiKey = import.meta.env.VITE_NEWS_API_KEY
  const fetchData = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,{mode:"cors"}
    );
    setArticles(response.data.articles);
  };
  let randomIndex = Math.floor(Math.random()*20)
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="news-wrapper">
        {articles &&
          <>
            <div
              className="news-top"
              style={{
                backgroundImage: `url(${articles[randomIndex].urlToImage})`,
              }}
            >
              <div className="news-details">
                <p className="news-title">{articles[randomIndex].title}</p>
                <p className="news-date-time">
                  <span>{articles[randomIndex].publishedAt.slice(0,10)}</span>
                  <span>|</span>
                  <span>{articles[randomIndex].publishedAt.slice(11,19)}</span>
                </p>
              </div>
            </div>
            <div className="news-content">
              {articles[randomIndex].description}
            </div>
          </>
        }
      </div>
    </>
  );
}
