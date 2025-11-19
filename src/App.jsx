import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Account";
import Payment from "./pages/Payment";

function App() {
  const location = useLocation();

  const hideNavbarRoutes = ["/", "/login", "/signup"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
