import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const interval = useRef(null);

  onStartClick = () => {
    if (!isRunning) {
      interval.current = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
      setIsRunning(true);
      clearInterval(interval.current);
    }
  };

  const onResetClick = () => {
    setCounter(0);
    setIsRunning(false);
    clearInterval(interval.current);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(interval.current);
  };

  return (
    <div className="App">
      <h1>Auto Increment Counter</h1>
      <span>{counter}</span>
      <div>
        <button onClick={isRunning ? stopTimer : onStartClick}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={onResetClick}>Reset</button>
      </div>
    </div>
  );
}
