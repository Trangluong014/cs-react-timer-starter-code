import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  // const isStart = useRef();
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    refInterval.current = setInterval(() => {
      setTime((time) => time + 1);
      console.log(time);
    }, 1000);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);
    refInterval.current = 0;
    active.current.disabled = false;
  };
  const resetTimer = () => {
    clearInterval(refInterval.current);
    setTime(0);
    active.current.disabled = false;
  };

  // const splitTimer = () => {};

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
