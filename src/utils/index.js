export const uuidv4 = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

export const convertTimeToMMSS = (value) => {
  if (!value) return "--:--";
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;
  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};

export const saveLocalStorage = (state) => {
  localStorage.setItem(
    `${new Date().toLocaleDateString()}-TIMEBOXING`,
    JSON.stringify(state)
  );
};

export const restoreLocalStorage = () => {
  const state = localStorage.getItem(
    `${new Date().toLocaleDateString()}-TIMEBOXING`
  );
  return state && JSON.parse(state);
};

export const debounce = (func, wait, immediate) => {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const requestNotificationPermission = () => {
  try {
    if (
      "Notification" in window &&
      Notification.permission !== "granted" &&
      Notification.permission !== "denied"
    ) {
      Notification.requestPermission();
    }
  } catch (exception) {
    console.error(exception);
  }
};

export const notify = (title, body) => {
  try {
    if ("Notification" in window && Notification.permission === "granted") {
      return new Notification(title, { body });
    }
  } catch (exception) {
    console.error(exception);
  }
};
