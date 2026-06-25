import { useNavigate } from "react-router-dom";

import ProfileCard from "../components/ProfileCard";
import WeatherWidget from "../components/WeatherWidget";
import NewsWidget from "../components/NewsWidget";
import NotesWidget from "../components/NotesWidget";
import TimerWidget from "../components/TimerWidget";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black px-14 py-10">
      <div className="flex gap-8">
        {/* Left Section */}
        <div className="w-[68%]">
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <ProfileCard />

            {/* Right Column (takes height of Profile + Weather) */}
            <div className="row-span-2">
              <NotesWidget />
            </div>

            {/* Bottom Left */}
            <WeatherWidget />
          </div>

          {/* Timer */}
          <div className="mt-6">
            <TimerWidget />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[32%] flex flex-col">
          <div className="flex-1">
            <NewsWidget />
          </div>

          <button
            onClick={() => navigate("/movies")}
            className="
              self-end
              mt-5
              bg-[#148A08]
              text-white
              px-10
              py-2
              rounded-full
              font-semibold
            "
          >
            Browse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;