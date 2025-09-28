import React, { useState } from "react";

export default function App() {
  const items = Array.from({ length: 50 }, (_, i) => i + 1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate start and end indexes
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the items for current page
  const currentItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div>
      <h1>Simple Pagination</h1>

      {/* Show current items */}
      {currentItems.map((item) => (
        <div
          key={item}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            margin: "5px",
          }}
        >
          Item {item}
        </div>
      ))}

      {/* Pagination controls */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
