 
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux/slices/authSlice";
import productsReducer from "../Redux/slices/productsSlice";
import productReducer from "../Redux/slices/productSlice"; 
import cartReducer from "../Redux/slices/cartSlice";
import { cardActionAreaClasses } from "@mui/material";
import Wishlist from "../componets/Wishlist";
import wishlistReducer from "../Redux/slices/wishlistSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer, 
    cartAndWishlist: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
