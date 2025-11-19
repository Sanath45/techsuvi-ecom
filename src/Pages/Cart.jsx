import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const order = {
      items: cart,
      total: totalAmount,
      date: new Date().toLocaleString(),
    };

    const prevOrders = JSON.parse(localStorage.getItem("order_history")) || [];
    prevOrders.push(order);
    localStorage.setItem("order_history", JSON.stringify(prevOrders));

    dispatch(clearCart());
    alert("Order placed successfully!");
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                borderBottom: "1px solid #ddd",
                padding: "10px 0",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "contain",
                }}
              />

              <div style={{ flex: 1 }}>
                <h4>{item.title}</h4>
                <p style={{ fontWeight: "bold" }}>₹{item.price}</p>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                style={{
                  padding: "6px 12px",
                  background: "#ff4d4d",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <div style={{ marginTop: "20px" }}>
            <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
            <button
              className="btn-primary"
              style={{ marginTop: "15px" }}
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
