export default function SkeletonCard() {
  return (
    <div
      className="card"
      style={{ opacity: 0.6, animation: "pulse 1.5s infinite" }}
    >
      <div
        style={{
          width: "100%",
          height: 140,
          background: "#e3e3e3",
          borderRadius: 6
        }}
      ></div>

      <div
        style={{
          width: "80%",
          height: 14,
          background: "#e3e3e3",
          marginTop: 12,
          borderRadius: 4
        }}
      ></div>

      <div
        style={{
          width: "60%",
          height: 14,
          background: "#e3e3e3",
          marginTop: 8,
          borderRadius: 4
        }}
      ></div>

      <div
        style={{
          width: "40%",
          height: 20,
          background: "#e3e3e3",
          marginTop: 12,
          borderRadius: 4
        }}
      ></div>
    </div>
  );
}