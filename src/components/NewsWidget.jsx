import { useEffect, useState } from "react";
import { getNews } from "../services/newsApi";

import news from "../assets/news.png";

const NewsWidget = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
      const article = await getNews();
      console.log(article);
      setNews(article);
      } catch (error) {
      console.error(error);
      }
    };

    fetchNews();
    }, []);

    if (!news) {
      return ( <div className="bg-white rounded-[20px] h-full flex items-center justify-center">
      Loading... </div>
      );
  }


  return (
    <div className="bg-white rounded-[24px] overflow-hidden h-[760px] flex flex-col">
      {/* News Image */}
      <div className="relative">
        <img
          src={news.urlToImage}
          alt="News"
          className="w-full h-64 object-cover"
        />

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4">
          <h2 className="text-white text-2xl font-semibold leading-8">
            {news.title}
          </h2>

          <p className="text-white text-sm mt-2">
            {new Date(news.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* News Description */}
      <div className="p-6 flex-1 overflow-hidden">
        <p className="text-[#272727] text-sm leading-7 line-clamp-[14]">
          {news.description}
        </p>
      </div>
    </div>
  );
};

export default NewsWidget;