import React, { useEffect, useState } from "react";

export default function Filters({
  categories = [],
  onFilterChange
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // When any filter changes, notify parent
  useEffect(() => {
    const min = minPrice === "" ? null : Number(minPrice);
    const max = maxPrice === "" ? null : Number(maxPrice);
    onFilterChange({ search, category, minPrice: min, maxPrice: max });
  }, [search, category, minPrice, maxPrice, onFilterChange]);

  const reset = () => {
    setSearch("");
    setCategory("all");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div style={{ marginBottom: 18, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        style={{ padding: 8, borderRadius: 6, border: "1px solid #ddd", minWidth: 200 }}
      />


      <input
        type="number"
        min="0"
        placeholder="Min price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        style={{ padding: 8, borderRadius: 6, border: "1px solid #ddd", width: 110 }}
      />

      <input
        type="number"
        min="0"
        placeholder="Max price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        style={{ padding: 8, borderRadius: 6, border: "1px solid #ddd", width: 110 }}
      />

      <button className="btn btn-outline" onClick={reset}>
        Reset
      </button>
    </div>
  );
}