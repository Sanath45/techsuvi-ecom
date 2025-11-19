import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password: pass,
    };

    localStorage.setItem("techsurvi_user", JSON.stringify(newUser));
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="auth-wrapper fade-in">
      <form className="auth-card" onSubmit={handleSignup}>
        <h2 className="auth-title">Signup</h2>

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
          placeholder="Create Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />

        <button type="submit" className="auth-btn">Signup</button>

        <p className="auth-link-text">
          Already have an account?{" "}
          <span
            className="auth-link"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
