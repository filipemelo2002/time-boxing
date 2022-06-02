import { useEffect, useMemo, useState } from "react";
import switchSound from "../assets/switch.wav";
import alarmSound from "../assets/alarm.wav";
const Timer = () => {
  const switchAudio = useMemo(() => new Audio(switchSound), [switchSound]);
  const alarmAudio = useMemo(() => new Audio(alarmSound), [alarmSound]);

  const [isCountingDown, setIsCountingDown] = useState(false);
  const [time, setTime] = useState(3);

  const calculateTimeLeft = () => {
    const newTime = time - 1;
    if (newTime <= 0) {
      alarmAudio.play();
      setIsCountingDown(false);
      return 0;
    }
    return newTime;
  };

  const toggleTimer = () => {
    switchAudio.play();
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
      {time > 0 && (
        <button
          className="btn btn-lg btn-primary mx-auto"
          onClick={toggleTimer}
        >
          {isCountingDown ? "Pause" : "Resume"}
        </button>
      )}
    </div>
  );
};

export default Timer;
