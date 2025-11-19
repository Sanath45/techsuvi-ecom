export default function SkeletonProduct() {
  return (
    <div className="product-page" style={{ opacity: 0.6, animation: "pulse 1.5s infinite" }}>
      <div
        className="product-image"
        style={{ background: "#e3e3e3" }}
      ></div>

      <div className="product-info">
        <div style={{ height: 22, width: "70%", background: "#e3e3e3", borderRadius: 4 }}></div>
        <div style={{ height: 16, width: "40%", background: "#e3e3e3", marginTop: 12, borderRadius: 4 }}></div>
        <div style={{ height: 16, width: "100%", background: "#e3e3e3", marginTop: 12, borderRadius: 4 }}></div>
        <div style={{ height: 16, width: "90%", background: "#e3e3e3", marginTop: 12, borderRadius: 4 }}></div>
        <div style={{ height: 30, width: "30%", background: "#e3e3e3", marginTop: 20, borderRadius: 4 }}></div>
      </div>
    </div>
  );
}