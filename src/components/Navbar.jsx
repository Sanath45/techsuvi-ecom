import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        height: 60,
        background: "#fff",
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        justifyContent: "space-between",
      }}
    >
      <Link to="/home" className="nav-logo" style={{ fontWeight: "bold", fontSize: 20 }}>
        Techsurvi Store
      </Link>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link className="nav-link" to="/home">
          Home
        </Link>

        <Link className="nav-link" to="/cart">
          Cart
        </Link>

        <Link className="nav-link" to="/account">
          Account
        </Link>
      </div>
    </nav>
  );
}
