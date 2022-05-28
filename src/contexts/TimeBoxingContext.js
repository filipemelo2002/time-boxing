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
  return (
    <TimeBoxingContext.Provider
      value={{
        ...timeBoxing,
        onAddTopPriority,
        onChangeBrainDump,
        onRemoveTopPriority,
      }}
    >
      {children}
    </TimeBoxingContext.Provider>
  );
};

const useTimeBoxing = () => useContext(TimeBoxingContext);

export { TimeBoxingContextProvider, useTimeBoxing };
