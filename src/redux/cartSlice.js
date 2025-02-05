import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        // If item exists, increase its quantity
        state[existingItemIndex].qty += 1;
      } else {
        // If item doesn't exist, add it to the cart with qty 1
        state.push({ ...action.payload, qty: 1 });
      }
    },
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { AddItem, RemoveItem } = cartSlice.actions;
export default cartSlice.reducer;
