export default function Account() {
  const orders = JSON.parse(localStorage.getItem("order_history")) || [];

  return (
    <div className="container fade-in" style={{ padding: 20 }}>
      <h2>My Account</h2>

      <h3 style={{ marginTop: 20 }}>My Orders</h3>

      {orders.length === 0 ? (
        <p style={{ marginTop: 10 }}>No orders yet.</p>
      ) : (
        orders.map((order, i) => (
          <div
            key={i}
            style={{
              marginTop: "15px",
              padding: "15px",
              background: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h4>Order #{i + 1}</h4>

            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Total:</strong> ₹{order.total}</p>
            <p><strong>Payment:</strong> {order.paymentMethod}</p>

            <h4 style={{ marginTop: 10 }}>Items:</h4>

            {order.items.map((item) => (
              <p key={item.id}>• {item.title}</p>
            ))}
          </div>
        ))
      )}
    </div>
  );
}
