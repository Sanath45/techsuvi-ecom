import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsAPI } from "../api/api";

// Thunk to fetch products from API
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetchProductsAPI();
  return res.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch products";
      });
  }
});

export default productSlice.reducer;