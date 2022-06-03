import { useEffect, useMemo, useState } from "react";
import switchSound from "../assets/switch.wav";
import alarmSound from "../assets/alarm.wav";
import { useTimeBoxing } from "../contexts/TimeBoxingContext";
import { convertTimeToMMSS } from "../utils";

const Timer = () => {
  const { timedActivity, onUpdateActivityTime } = useTimeBoxing();
  const switchAudio = useMemo(() => new Audio(switchSound), [switchSound]);
  const alarmAudio = useMemo(() => new Audio(alarmSound), [alarmSound]);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const time = useMemo(() => timedActivity?.time || 0, [timedActivity]);

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

  useEffect(() => {
    if (isCountingDown) {
      const timer = setTimeout(() => {
        const newTime = calculateTimeLeft();
        onUpdateActivityTime(newTime);
      }, 1000);

      return () => clearTimeout(timer);
    }
  });

  useEffect(() => {
    if (timedActivity) {
      setIsCountingDown(true);
    }
  }, [timedActivity]);

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
