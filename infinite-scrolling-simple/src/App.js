import "./styles.css";
import React, { useEffect, useState } from "react";

const InitialNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

export default function App() {
  const [numbers, setNumbers] = useState(InitialNumbers);
  const [page, setPage] = useState(1);

  const loadmore = () => {
    setNumbers((prev) => [
      ...prev,
      ...Array.from({ length: 20 }, (_, i) => prev.length + i + 1),
    ]);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    // window.innerHeight → height of the visible browser window.
    // document.documentElement.scrollTop → how far the user has scrolled down.
    // document.documentElement.scrollHeight → total height of the entire page (content).
    const handleLoadMore = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        loadmore();
      }
    };

    window.addEventListener("scroll", handleLoadMore);
    return () => window.removeEventListener("scroll", handleLoadMore);
  }, []);

  return (
    <div className="App">
      <h1>Infinite Scrolling</h1>

      <div>
        {numbers.map((number) => (
          <div
            key={number}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              marginLeft: "30%",
              marginRight: "30%",
              background: "lightblue",
            }}
          >
            {number}
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        PAGE NUMBER: {page}
      </div>
    </div>
  );
}
