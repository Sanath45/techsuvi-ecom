import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="card">

        {/* AMAZON-STYLE CATEGORY TAG */}
        <div className="card-tag">{product.category}</div>

        {/* PRODUCT IMAGE */}
        <img src={product.image} alt={product.title} className="card-img" />

        {/* PRODUCT TITLE */}
        <div className="card-title">{product.title}</div>

        {/* PRICE */}
        <div className="card-price">₹{product.price}</div>

      </div>
    </Link>
  );
}
