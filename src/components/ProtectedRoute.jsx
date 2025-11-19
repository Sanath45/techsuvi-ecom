import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLogged = localStorage.getItem("techsurvi_logged_in");

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
