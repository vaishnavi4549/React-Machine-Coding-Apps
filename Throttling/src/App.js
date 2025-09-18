import "./styles.css";
import React, { useEffect, useState, useCallback, useRef } from "react";

const useThrottle = (callback, delay) => {
  const lastcall = useRef(0);
  return useCallback(
    (...args) => {
      if (Date.now() - lastcall.current < delay) {
        return;
      }
      lastcall.current = Date.now();
      callback(...args);
    },
    [callback, delay]
  );
};
export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (query) => {
    if (!query) {
      setResults([]);
      return;
    }
    setLoading(true);
    await fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.products || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const throttledFetch = useThrottle(fetchProducts, 3000);

  useEffect(() => {
    if (searchTerm) {
      throttledFetch(searchTerm);
    } else {
      setResults([]);
    }
  }, [searchTerm, throttledFetch]);

  return (
    <div className="App">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "20px" }}
        placeholder="Search products...."
      />

      {loading && <span>Loading....</span>}

      {results && results.map((data) => <li key={data.id}>{data.title}</li>)}
    </div>
  );
}
