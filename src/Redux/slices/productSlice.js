
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  wishlist: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, addToWishlist, removeFromCart, removeFromWishlist } = productSlice.actions;

export const selectCart = (state) => state.cartAndWishlist.cart;
export const selectWishlist = (state) => state.cartAndWishlist.wishlist;

export default productSlice.reducer;
