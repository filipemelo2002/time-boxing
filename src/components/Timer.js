import { useEffect, useState } from "react";

const Timer = () => {
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [time, setTime] = useState(15 * 60);

  const calculateTimeLeft = () => {
    const newTime = time - 1;
    return newTime;
  };

  const toggleTimer = () => {
    setIsCountingDown(!isCountingDown);
  };

  const convertTimeToMMSS = (value) => {
    if (!value) return "--:--";
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  useEffect(() => {
    if (isCountingDown) {
      const timer = setTimeout(() => {
        setTime(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);
    }
  });

  return (
    <div className="timer-component rounded-2 d-flex flex-column">
      <h1 className="fw-bold text-light mx-auto">{convertTimeToMMSS(time)}</h1>
      <button className="btn btn-lg btn-primary mx-auto" onClick={toggleTimer}>
        {isCountingDown ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Timer;
