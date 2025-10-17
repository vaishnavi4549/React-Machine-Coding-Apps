import { useEffect, useState } from "react";

const lights = {
  red: { light: "red", timer: 4000, next: "yellow" },
  yellow: { light: "yellow", timer: 500, next: "green" },
  green: { light: "green", timer: 3000, next: "red" },
};

export default function App() {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    const { timer, next } = lights[currentLight];

    const timeout = setTimeout(() => {
      setCurrentLight(next);
    }, timer);

    return () => clearTimeout(timeout);
  }, [currentLight]);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          alignItems: "center",
          background: "black",
          padding: "10px",
        }}
      >
        {Object.keys(lights).map((data) => (
          <button
            style={{
              background: data === currentLight ? currentLight : "white",
              padding: "30px",
              borderRadius: "40px",
              margin: "5px",
              border: "0px",
            }}
          >
            {data.light}
          </button>
        ))}
      </div>
    </div>
  );
}
