const API_KEY = import.meta.env.VITE_NEWS_API_KEY;;

const BASE_URL = "https://newsapi.org/v2/everything";

export const getNews = async () => {
  const response = await fetch(
    `${BASE_URL}?q=technology&pageSize=1&sortBy=publishedAt&language=en&apiKey=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await response.json();

  console.log(data);

  return data.articles[0];
};