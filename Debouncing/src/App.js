import React, { useState, useEffect } from "react";

// Debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const interval = setTimeout(() => {
      setDebouncedValue(value);
    }, [delay]);

    return () => clearInterval(interval);
  }, [value]);

  return debouncedValue;
}

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      fetch(`https://dummyjson.com/products/search?q=${debouncedSearchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.products || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          width: "300px",
          fontSize: "16px",
          marginBottom: "10px",
        }}
      />

      {loading && <p>Loading...</p>}

      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
