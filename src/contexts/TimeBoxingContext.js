import { createContext, useContext, useState } from "react";

const INITIAL_STATE = {
  braindump: "",
  topPriorities: [],
  activities: [],
};
const TimeBoxingContext = createContext({});

const TimeBoxingContextProvider = ({ children }) => {
  const [timeBoxing, setTimeBoxing] = useState(INITIAL_STATE);

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
  return (
    <TimeBoxingContext.Provider
      value={{
        ...timeBoxing,
        onAddTopPriority,
        onChangeBrainDump,
        onRemoveTopPriority,
        onAddActivity,
        onRemoveActivity,
      }}
    >
      {children}
    </TimeBoxingContext.Provider>
  );
};

const useTimeBoxing = () => useContext(TimeBoxingContext);

export { TimeBoxingContextProvider, useTimeBoxing };
