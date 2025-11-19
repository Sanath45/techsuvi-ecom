import axios from "axios";

const API_BASE = "https://fakestoreapi.com";

// Fetch all products
export const fetchProductsAPI = () => axios.get(`${API_BASE}/products`);

// Fetch single product by ID
export const fetchProductByIdAPI = (id) =>
  axios.get(`${API_BASE}/products/${id}`);