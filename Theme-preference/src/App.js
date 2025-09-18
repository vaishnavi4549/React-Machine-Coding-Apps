import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function App() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: "0px",
        color: theme === "dark" ? "white" : "black",
        backgroundColor: theme === "dark" ? "black" : "white",
      }}
    >
      <h1>Theme Preference</h1>
      <h2>{theme.toUpperCase()}</h2>
      <button onClick={toggleTheme}>Change</button>
    </div>
  );
}
