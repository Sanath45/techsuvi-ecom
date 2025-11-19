import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const [method, setMethod] = useState("");

  useEffect(() => {
    if (!product) {
      navigate("/home");
    }
  }, [product, navigate]);

  const handlePayment = () => {
    if (!method) {
      alert("Please select a payment method!");
      return;
    }

    const order = {
      items: [product],
      total: product.price,
      paymentMethod: method,
      date: new Date().toLocaleString(),
    };

    const prevOrders = JSON.parse(localStorage.getItem("order_history")) || [];
    prevOrders.push(order);
    localStorage.setItem("order_history", JSON.stringify(prevOrders));

    alert("Order Successful!");
    navigate("/home");
  };

  return (
    <div className="container fade-in" style={{ padding: 20 }}>
      <h2>Payment Details</h2>
      <p style={{ marginTop: 10, fontWeight: "bold" }}>
        Amount to Pay: ₹{product?.price}
      </p>

      <h3 style={{ marginTop: 20 }}>Select Payment Method:</h3>

      <div style={{ marginTop: 15 }}>
        <label>
          <input
            type="radio"
            name="payment"
            value="Paytm"
            onChange={(e) => setMethod(e.target.value)}
          />{" "}
          Paytm
        </label>
      </div>

      <div style={{ marginTop: 10 }}>
        <label>
          <input
            type="radio"
            name="payment"
            value="UPI"
            onChange={(e) => setMethod(e.target.value)}
          />{" "}
          UPI
        </label>
      </div>

      <div style={{ marginTop: 10 }}>
        <label>
          <input
            type="radio"
            name="payment"
            value="PhonePe"
            onChange={(e) => setMethod(e.target.value)}
          />{" "}
          PhonePe
        </label>
      </div>

      <div style={{ marginTop: 10 }}>
        <label>
          <input
            type="radio"
            name="payment"
            value="Cash on Delivery"
            onChange={(e) => setMethod(e.target.value)}
          />{" "}
          Cash on Delivery
        </label>
      </div>

      <button
        style={{
          marginTop: 20,
          width: "100%",
          padding: "14px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={handlePayment}
      >
        Confirm Payment
      </button>
    </div>
  );
}
