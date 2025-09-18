import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [currentFormat, setCurrentFormat] = useState("24hr");
  const [currentTime, setCurrentTime] = useState(new Date());

  const onChangeFormat = () => {
    setCurrentFormat((prev) => (prev === "24hr" ? "12hr" : "24hr"));
  };

  useEffect(() => {
    const time = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(time);
  }, []);

  const formatTime = () => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: currentFormat === "12hr",
    };
    return currentTime.toLocaleTimeString([], options);
  };

  return (
    <div className="App">
      <h2>Ticking Digital Watch</h2>
      <div>
        <span style={{ marginRight: "20px" }}>
          Current Format: {currentFormat}
        </span>
        <button onClick={onChangeFormat}>Change format</button>
      </div>
      <div style={{ marginTop: "30px" }}>
        <h2>{formatTime()}</h2>
      </div>
    </div>
  );
}
