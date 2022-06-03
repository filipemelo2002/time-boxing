import { createContext, useContext, useMemo, useState } from "react";

const INITIAL_STATE = {
  braindump: "",
  topPriorities: [],
  activities: [],
  timer: {
    id: "",
    type: "",
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
      timer: { id, type },
    });
  };

  const onUpdateActivityTime = (time) => {
    const newTimeBoxing = structuredClone(timeBoxing);
    const { type, id } = newTimeBoxing.timer;

    if (!type || !id) return;

    const activity = newTimeBoxing[type].find((item) => item.id === id);

    if (!activity) return;

    activity.time = time;
    setTimeBoxing(newTimeBoxing);
  };

  function getTimerActivity() {
    const { type, id } = timeBoxing.timer;
    if (!type || !id) return;
    return timeBoxing[type].find((item) => item.id === id);
  }

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
      }}
    >
      {children}
    </TimeBoxingContext.Provider>
  );
};

const useTimeBoxing = () => useContext(TimeBoxingContext);

export { TimeBoxingContextProvider, useTimeBoxing };
