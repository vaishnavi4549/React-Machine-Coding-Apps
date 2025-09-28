import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const stars = Array(5).fill("☆");
  const [filled, setFilled] = useState(-1);

  const onStarClicked = (index) => {
    setFilled(index);
  };
  console.log("heyy", filled);
  return (
    <div className="App">
      <h1>Star Rating</h1>
      <div>
        {stars.map((star, index) => (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => onStarClicked(index)}
          >
            {index <= filled ? "★" : "☆"}
          </span>
        ))}
      </div>
    </div>
  );
}
