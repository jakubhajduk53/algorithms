const throttle = (fn, delay) => {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
};
const log = (msg) => console.log("Throttled:", msg);

const throttledLog = throttle(log, 1000);
setInterval(() => throttledLog("tick"), 100);
