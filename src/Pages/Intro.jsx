import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div className="intro-container fade-in">
      <h1 className="intro-title">Welcome to Techsurvi Store</h1>

      <p className="intro-subtitle">
        Your one-stop e-commerce platform for clothing, electronics,
        jewellery and more.
      </p>

      <Link to="/login" className="intro-btn">
        CONTINUE →
      </Link>
    </div>
  );
}
