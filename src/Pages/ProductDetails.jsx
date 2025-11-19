import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductByIdAPI } from "../api/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductByIdAPI(id)
      .then((res) => setProduct(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h2>Loading product...</h2>;
  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="container fade-in" style={{ padding: "20px" }}>
      <div className="product-page" style={{ display: "flex", gap: "30px" }}>
        
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", maxWidth: "350px", objectFit: "contain" }}
          />
        </div>

        <div style={{ flex: 2 }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>
            {product.title}
          </h2>

          <p style={{ color: "#777", marginTop: "8px" }}>
            Category: {product.category}
          </p>

          <p style={{ marginTop: "15px", fontSize: "16px", lineHeight: "1.5" }}>
            {product.description}
          </p>

          <h2 style={{ marginTop: "15px", fontSize: "26px" }}>
            ₹{product.price}
          </h2>

          <p style={{ marginTop: "5px", color: "#444" }}>
            Rating: {product.rating?.rate} ({product.rating?.count} reviews)
          </p>

          {/* ADD TO CART */}
          <button
            style={{
              width: "100%",
              padding: "16px",
              background: "black",
              color: "white",
              fontSize: "20px",
              borderRadius: "10px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              marginTop: "20px",
            }}
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>

          {/* ORDER NOW → Payment Page */}
          <button
            style={{
              width: "100%",
              padding: "16px",
              background: "green",
              color: "white",
              fontSize: "20px",
              borderRadius: "10px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              marginTop: "12px",
            }}
            onClick={() => navigate("/payment", { state: { product } })}
          >
            Order Now
          </button>

          {/* BACK */}
          <button
            style={{
              width: "100%",
              padding: "14px",
              background: "#555",
              color: "white",
              fontSize: "18px",
              borderRadius: "8px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              marginTop: "12px",
            }}
            onClick={() => window.history.back()}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
