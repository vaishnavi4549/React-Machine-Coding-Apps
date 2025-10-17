import "./styles.css";
import { useState, useEffect } from "react";

// Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:
// Red light: 4000ms
// Yellow light: 500ms
// Greenlight: 3000ms

const lights = [
  { light: "red", timer: 4000 },
  { light: "yellow", timer: 800 },
  { light: "green", timer: 3000 },
];
export default function App() {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    const currentIndex = lights.findIndex((l) => l.light === currentLight);
    const nextIndex = (currentIndex + 1) % lights.length;
    const { timer } = lights[currentIndex];

    const timeout = setTimeout(() => {
      setCurrentLight(lights[nextIndex].light);
    }, timer);

    return () => clearTimeout(timeout);
  }, [currentLight]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "30%",
        background: "black",
        padding: "10px",
      }}
    >
      {lights.map((data) => {
        return (
          <div
            style={{
              border: "1px solid black",
              borderRadius: "90px",
              padding: "30px",
              background: data.light === currentLight ? currentLight : "white",
              width: "30%",
              margin: "5px",
            }}
          >
            {data.light}
          </div>
        );
      })}
    </div>
  );
}
