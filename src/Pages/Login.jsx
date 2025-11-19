import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("techsurvi_user"));

    if (!user) {
      alert("User not found! Please signup first.");
      return;
    }

    if (email !== user.email || pass !== user.password) {
      alert("Invalid credentials!");
      return;
    }

    localStorage.setItem("techsurvi_logged_in", "true");
    navigate("/home");
  };

  return (
    <div className="auth-wrapper fade-in">
      <form className="auth-card" onSubmit={handleLogin}>
        <h2 className="auth-title">Login</h2>

        <input
          className="auth-input"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />

        <button type="submit" className="auth-btn">Login</button>

        <p className="auth-link-text">
          Don’t have an account?{" "}
          <span
            className="auth-link"
            onClick={() => navigate("/signup")}
          >
            Signup
          </span>
        </p>
      </form>
    </div>
  );
}
