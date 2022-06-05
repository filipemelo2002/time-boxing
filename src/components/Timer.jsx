import { useEffect, useMemo } from "react";
import switchSound from "../assets/switch.wav";
import alarmSound from "../assets/alarm.wav";
import { useTimeBoxing } from "../contexts/TimeBoxingContext";
import { convertTimeToMMSS } from "../utils";

const Timer = () => {
  const {
    timer: { counting },
    setTimerCounting,
    resetTimer,
    timedActivity,
    onUpdateActivityTime,
  } = useTimeBoxing();
  const switchAudio = useMemo(() => new Audio(switchSound), [switchSound]);
  const alarmAudio = useMemo(() => new Audio(alarmSound), [alarmSound]);
  const time = useMemo(() => timedActivity?.time ?? 0, [timedActivity]);

  const calculateTimeLeft = () => {
    const newTime = time - 1;
    return newTime > 0 ? newTime : 0;
  };

  const toggleTimer = () => {
    switchAudio.play();
    setTimerCounting(!counting);
  };

  useEffect(() => {
    if (counting) {
      const timedFunction = setTimeout(() => {
        const newTime = calculateTimeLeft();
        onUpdateActivityTime(newTime);
        if (newTime === 0) {
          alarmAudio.play();
        }
      }, 1000);
      return () => clearTimeout(timedFunction);
    }
  });

  useEffect(() => {
    if (time === 0) {
      resetTimer();
    }
  }, [time]);
  return (
    <div className="timer-component rounded-2 d-flex flex-column">
      <h1 className="fw-bold text-light mx-auto">{convertTimeToMMSS(time)}</h1>
      {time > 0 && (
        <button
          className="btn btn-lg btn-primary mx-auto"
          onClick={toggleTimer}
        >
          {counting ? "Pause" : "Resume"}
        </button>
      )}
    </div>
  );
};

export default Timer;
