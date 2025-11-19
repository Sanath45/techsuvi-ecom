export default function RatingFilter({ onRatingSelect }) {
  return (
    <select
      onChange={(e) => onRatingSelect(Number(e.target.value))}
      style={{
        padding: 8,
        borderRadius: 6,
        border: "1px solid #ddd",
        marginBottom: 15,
        minWidth: 150,
      }}
    >
      <option value="0">All Ratings</option>
      <option value="4">⭐ 4 & up</option>
      <option value="3">⭐ 3 & up</option>
      <option value="2">⭐ 2 & up</option>
      <option value="1">⭐ 1 & up</option>
    </select>
  );
}