import { createContext, useContext } from "react";

const TimeBoxingContext = createContext();

const TimeBoxingContextProvider = ({ children }) => {
  return <TimeBoxingContext.Provider>{children}</TimeBoxingContext.Provider>;
};

const useTimeBoxing = () => useContext(TimeBoxingContext);

export { TimeBoxingContextProvider, useTimeBoxing };
