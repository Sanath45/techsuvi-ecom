import React, { useState, useEffect } from "react";

export default function CategoryChips({ categories = [], onSelect }) {
  const [selected, setSelected] = useState("all");

  const handleClick = (cat) => {
    const newValue = selected === cat ? "all" : cat; // toggle
    setSelected(newValue);
    onSelect(newValue);
  };

  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 15 }}>
      {/* ALL category */}
      <button
        onClick={() => handleClick("all")}
        style={{
          padding: "6px 12px",
          borderRadius: 20,
          border: selected === "all" ? "2px solid black" : "1px solid #ccc",
          background: selected === "all" ? "black" : "white",
          color: selected === "all" ? "white" : "black",
          cursor: "pointer",
        }}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          style={{
            padding: "6px 12px",
            borderRadius: 20,
            border: selected === cat ? "2px solid black" : "1px solid #ccc",
            background: selected === cat ? "black" : "white",
            color: selected === cat ? "white" : "black",
            cursor: "pointer",
            textTransform: "capitalize",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}