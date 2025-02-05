import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qty += 1; // Increase quantity if item already exists
      } else {
        state.push({ ...action.payload, qty: 1 }); // Add new item with qty = 1
      }
    },
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    IncreaseQty: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.qty += 1;
      }
    },
    DecreaseQty: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },
  },
});

export const { AddItem, RemoveItem, IncreaseQty, DecreaseQty } =
  cartSlice.actions;
export default cartSlice.reducer;
