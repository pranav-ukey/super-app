const API_KEY = "09e4c53cfb7343b18f8ea95860a34a50";

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