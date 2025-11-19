export default function Sort({ onSortChange }) {
  return (
    <select
      onChange={(e) => onSortChange(e.target.value)}
      style={{
        padding: 8,
        borderRadius: 6,
        border: "1px solid #ddd",
        marginBottom: 15,
        minWidth: 180,
      }}
    >
      <option value="none">Sort By</option>
      <option value="priceLowHigh">Price: Low to High</option>
      <option value="priceHighLow">Price: High to Low</option>
      <option value="titleAZ">Title: A → Z</option>
      <option value="titleZA">Title: Z → A</option>
      <option value="ratingHigh">Rating: High to Low</option>
    </select>
  );
}