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
  return (
    <TimeBoxingContext.Provider value={{ ...timeBoxing, onChangeBrainDump }}>
      {children}
    </TimeBoxingContext.Provider>
  );
};

const useTimeBoxing = () => useContext(TimeBoxingContext);

export { TimeBoxingContextProvider, useTimeBoxing };
