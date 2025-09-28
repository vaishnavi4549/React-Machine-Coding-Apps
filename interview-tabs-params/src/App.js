import "./styles.css";
import { formByTab } from "./Constants";
import React, { useState } from "react";

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const tabId = params.get("tabId") || "mains";
  const [activeTab, setActiveTab] = useState(tabId);
  const [selectedItems, setSelectedItems] = useState({});

  const handleItems = (id) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div style={{ padding: "30px" }}>
      <div>
        {Object.keys(formByTab).map((tab) => {
          return (
            <span
              style={{
                padding: "20px",
                background: activeTab === tab ? "lightgreen" : "lightgray",
                margin: "20px",
                width: "20px",
                borderRadius: "20px",
                cursor: "pointer",
              }}
              onClick={() => {
                setActiveTab(tab);
              }}
            >
              {tab}
            </span>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        {formByTab[activeTab].map((data) => {
          return (
            <div key={data.id}>
              <input
                type="checkbox"
                onClick={() => {
                  handleItems(data.id);
                }}
                checked={!!selectedItems[data.id]}
              />
              {data.id}
            </div>
          );
        })}
      </div>
    </div>
  );
}
