import "./styles.css";

export default function App() {
  const items = Array.from({ length: 12 }, (_, i) => i + 1);
  console.log("heyy", items);
  return (
    <div className="App">
      <h1>Responsive Grid Layout</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
          padding: "30px",
          gap: "16px",
        }}
      >
        {items.map((item) => (
          <div
            style={{
              padding: "40px",
              background: "lightblue",
              border: "1px solid black",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
