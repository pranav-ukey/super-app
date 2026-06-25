import { useEffect, useState } from "react";
import { getWeather } from "../services/weatherApi";

import weatherCloud from "../assets/weather-cloud.png";
import pressure from "../assets/pressure.png";
import wind from "../assets/wind.png";
import humidity from "../assets/humidity.png";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather();
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
      };

      fetchWeather();
    }, []);

    if (!weather) {
      return ( <div className="rounded-[24px] bg-[#101744] h-[160px] flex items-center justify-center text-white">
      Loading... </div>
    );
  }

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "numeric",
    day: "2-digit", 
    year: "numeric",
  }).replace(/\//g, "-");

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });


  return (
    <div className="rounded-[20px] overflow-hidden">
      {/* Header */}
      <div className="bg-[#FF4ADE] text-white flex justify-between px-8 py-3">
        <p className="text-[24px] font-bold">{currentDate}</p>
        <p className="text-[24px] font-bold">{currentTime}</p>
      </div>

      {/* Body */}
      <div className="bg-[#101744] flex items-center justify-evenly h-[120px] px-6">
        
        {/* Temperature */}
        <div className="flex flex-col items-center gap-3">
          <img src={weatherCloud} alt="weather" className="w-14" />
          <div>
            <p className="text-white text-sm">
              {weather.weather[0].main}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-col w-[1px] h-12 bg-white opacity-20" />
        
        {/* Pressure */}
        <div className="flex flex-col items-center gap-2">
          <div>
            <h2 className="text-white text-4xl">
              {Math.round(weather.main.temp)}°C
            </h2>
          </div>
          <div className="flex">
            <img src={pressure} alt="pressure" className="w-4 h-7" />
            <div className="px-2">
              <p className="text-white text-sm">{weather.main.pressure} mbar</p>
              <p className="text-white text-xs">Pressure</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-12 bg-white opacity-20" />

        {/* Wind & Humidity */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src={wind} alt="wind" className="w-5" />
            <div>
              <p className="text-white text-sm">{weather.wind.speed} km/h</p>
              <p className="text-white text-xs">Wind</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img src={humidity} alt="humidity" className="w-5" />
            <div>
              <p className="text-white text-sm">{weather.main.humidity}%</p>
              <p className="text-white text-xs">Humidity</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WeatherWidget;