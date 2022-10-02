// NOTE: Run this script in browser snippets as running on Node.js environment will throw `window is not defined` error.


(function () {
    // Object to store registered timers
    const timerCallbackMap = {};
  
  
    // Function to generate unique ids for a particular callback
    function generateId() {
      const chars = "12356ABCDEF";
      let key = "";
      for (let i = 0; i < 6; i++) {
        const idx = Math.floor(Math.random() * chars.length);
        key += chars[idx];
      }
      return key;
    }
  
  
    // Function to be called when browser is idle to check if any callback execution time is pass the current time
    function check() {
      if (timerCallbackMap.size === 0) return;
  
      for (let timerId in timerCallbackMap) {
        const now = Date.now();
        if (now > timerCallbackMap[timerId].execTime) {
          timerCallbackMap[timerId].callback();
          window.myClearTimeout(timerId);
        }
      }
  
      requestIdleCallback(check);
    }
  
  
    // Polyfill for setTimeout
    window.mySetTimeout = function (callback, delay = 0) {
      // check if arguments are of correct type
      if (typeof callback !== "function") throw new Error("cb should be a function");
      if (typeof delay !== "number" || delay < 0)
        throw new Error("delay should be a positive number");
  
      
      // generate unique id for callback
      const timerId = generateId();
  
  
      // store the callback and set its execution time as current epoch value + delay in milliseconds
      timerCallbackMap[timerId] = {
        callback,
        execTime: Date.now() + delay
      };
  
      // queue the check function to be called when browser is idle
      if (Object.keys(timerCallbackMap).length === 1) requestIdleCallback(check);
  
      return timerId;
    };
  
  
    // Polyfill for clearTimeout
    window.myClearTimeout = function (timerId) {
      if (timerCallbackMap[timerId]) {
        delete timerCallbackMap[id];
      }
    };
  })();
  
  const id = mySetTimeout(() => {
    console.log("Hello");
  }, 2000);
  