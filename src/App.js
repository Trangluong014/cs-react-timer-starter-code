// import "Your code here";
import { useState } from "react";
import useTimer from "./useTimer";
import { formatTime } from "./formatTime";
import Timer from "./Component/Timer";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);
  const [timers] = useState([0]);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <button className="start-button" ref={active} onClick={startTimer}>
          Start
        </button>
        {/* to split timer but has not done yet */}
        <div className="timer__display">
          {timers.map((timer) => (
            <div className="timer">
              <Timer time={formatTime(time)} />
            </div>
          ))}
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          {/* <button className="button" onClick={() => setTimers([...timers, 0])}>
            Split
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
