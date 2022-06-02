import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TimeBoxingContextProvider } from "./contexts/TimeBoxingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TimeBoxingContextProvider>
      <App />
    </TimeBoxingContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
