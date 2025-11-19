import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to cart
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.total = Number((state.total + product.price).toFixed(2));
    },

    // Remove an item
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);

      if (item) {
        state.total -= item.price * item.quantity;
        state.items = state.items.filter((i) => i.id !== id);
      }
    },

    // Change item quantity
    changeQuantity: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find((i) => i.id === id);

      if (item) {
        const difference = qty - item.quantity;
        item.quantity = qty;

        state.total += item.price * difference;

        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id);
        }
      }
    },

    // Clear the entire cart
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    }
  }
});

export const { addToCart, removeFromCart, changeQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;