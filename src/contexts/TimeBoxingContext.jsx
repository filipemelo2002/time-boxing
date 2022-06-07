import { createContext, useContext, useMemo, useState } from "react";

const INITIAL_STATE = {
  braindump: "",
  topPriorities: [],
  activities: [],
  timer: {
    id: "",
    type: "",
    counting: false,
  },
};
const TimeBoxingContext = createContext({});

const TimeBoxingContextProvider = ({ children }) => {
  const [timeBoxing, setTimeBoxing] = useState(INITIAL_STATE);
  const timedActivity = useMemo(() => getTimerActivity(), [timeBoxing]);

  const onChangeBrainDump = (braindump) => {
    setTimeBoxing({ ...timeBoxing, braindump });
  };

  const onAddTopPriority = (topPriority) => {
    setTimeBoxing({
      ...timeBoxing,
      topPriorities: [...timeBoxing.topPriorities, topPriority],
    });
  };

  const onRemoveTopPriority = (id) => {
    setTimeBoxing({
      ...timeBoxing,
      topPriorities: timeBoxing.topPriorities.filter((item) => item.id !== id),
    });
  };

  const onAddActivity = (activity) => {
    const newTimeBoxing = structuredClone(timeBoxing);
    newTimeBoxing.activities.push(activity);
    setTimeBoxing(newTimeBoxing);
  };

  const onRemoveActivity = (id) => {
    const newTimeBoxing = structuredClone(timeBoxing);

    newTimeBoxing.activities = newTimeBoxing.activities.filter(
      (item) => item.id !== id
    );
    setTimeBoxing(newTimeBoxing);
  };

  const onStartActivity = ({ id, type }) => {
    setTimeBoxing({
      ...timeBoxing,
      timer: { id, type, counting: true },
    });
  };

  const onUpdateActivityTime = (time) => {
    const newTimeBoxing = structuredClone(timeBoxing);
    const { type, id } = newTimeBoxing.timer;

    if (!type || !id) return;

    const activity = newTimeBoxing[type].find((item) => item.id === id);

    if (!activity) return;

    activity.time = time;
    activity.done = time === 0;
    setTimeBoxing(newTimeBoxing);
  };

  function getTimerActivity() {
    const { type, id } = timeBoxing.timer;
    if (!type || !id) return;
    return timeBoxing[type].find((item) => item.id === id);
  }

  const setTimerCounting = (value) => {
    setTimeBoxing({
      ...timeBoxing,
      timer: { ...timeBoxing.timer, counting: value },
    });
  };

  const setActivityAsDone = ({ id, type }) => {
    const newTimeBoxing = structuredClone(timeBoxing);
    const activity = newTimeBoxing[type].find((item) => item.id === id);
    if (!activity) return;
    activity.done = true;
    activity.time = 0;
    setTimeBoxing(newTimeBoxing);
  };

  const resetTimer = () => {
    setTimeBoxing({
      ...timeBoxing,
      timer: {
        ...INITIAL_STATE.timer,
      },
    });
  };
  return (
    <TimeBoxingContext.Provider
      value={{
        ...timeBoxing,
        onAddTopPriority,
        onChangeBrainDump,
        onRemoveTopPriority,
        onAddActivity,
        onRemoveActivity,
        onStartActivity,
        onUpdateActivityTime,
        timedActivity,
        setTimerCounting,
        resetTimer,
        setActivityAsDone,
      }}
    >
      {children}
    </TimeBoxingContext.Provider>
  );
};

const useTimeBoxing = () => useContext(TimeBoxingContext);

export { TimeBoxingContextProvider, useTimeBoxing };
