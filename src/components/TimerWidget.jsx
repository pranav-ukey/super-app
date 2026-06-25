import { useEffect, useState } from "react";

const TimerWidget = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        setIsRunning(false);
        clearInterval(interval);
        return;
    }


      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else if (minutes > 0) {
        setMinutes((prev) => prev - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours((prev) => prev - 1);
        setMinutes(59);
        setSeconds(59);
      }

    }, 1000);

    return () => clearInterval(interval);
    }, [isRunning, hours, minutes, seconds]);


  return (
    <div className="bg-[#1E2343] rounded-[24px] px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Circle */}
        <div className="w-[160px] h-[160px] rounded-full bg-[#191E39] flex items-center justify-center shadow-inner">
          <div className="w-[140px] h-[140px] rounded-full border-[5px] border-[#FF6A6A] flex items-center justify-center">
            <span className="text-white text-[30px] font-semibold">
              {String(hours).padStart(2, "0")}:
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-10  items-center">
          {/* Hours */}
          <div className="flex flex-col items-center">
            <p className="text-[#949494] text-sm tracking-wide mb-3">Hours</p>

            <button className="text-white text-2xl" onClick={() => setHours((prev) => prev + 1)}>▲</button>

            <p className="text-white text-[42px] font-light my-2">
              {String(hours).padStart(2, "0")}
            </p>

            <button
              className="text-white text-2xl"
              onClick={() =>
                setHours((prev) =>
                  prev > 0 ? prev - 1 : 0
                )
              }
            >
              ▼
            </button>
          </div>

          <span className="text-white text-4xl mt-6">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <p className="text-[#949494] text-sm tracking-wide mb-3">Minutes</p>

            <button className="text-white text-2xl" onClick={() =>setMinutes((prev) => (prev < 59 ? prev + 1 : 59))}>
              ▲
            </button>

            <p className="text-white text-[42px] font-light my-2">
              {String(minutes).padStart(2, "0")}
            </p>

            <button
              className="text-white text-2xl"
              onClick={() =>
                setMinutes((prev) =>
                  prev > 0 ? prev - 1 : 0
                )
              }
            >
              ▼
            </button>
          </div>

          <span className="text-white text-4xl mt-6">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <p className="text-[#949494] text-sm tracking-wide mb-3">Seconds</p>

            <button className="text-white text-2xl" onClick={() =>setSeconds((prev) => (prev < 59 ? prev + 1 : 59))}>
              ▲
            </button>

            <p className="text-white text-[42px] font-light my-2">
              {String(seconds).padStart(2, "0")}
            </p>

            <button
              className="text-white text-2xl"
              onClick={() =>
                setSeconds((prev) =>
                  prev > 0 ? prev - 1 : 0
                )
              }
            >
              ▼
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsRunning((prev) => !prev)}
        className="w-[200px] mx-auto mt-8 h-12 rounded-full bg-[#FF6A6A] text-white text-xl font-light"
      >
        {isRunning ? "Pause" : "Start"} 
      </button>

    </div>
  );
};

export default TimerWidget;