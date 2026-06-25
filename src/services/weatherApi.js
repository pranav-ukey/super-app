const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city = "Nagpur") => {
const response = await fetch(
`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
);

if (!response.ok) {
throw new Error("Failed to fetch weather");
}

return await response.json();
};
