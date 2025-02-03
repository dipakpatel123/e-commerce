 
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";  
import productsReducer from "./slices/productsSlice";
import productReducer from "./slices/productSlice"; 
import cartReducer from "./slices/cartSlice";
import { cardActionAreaClasses } from "@mui/material";
import Wishlist from "../componets/Wishlist";
import wishlistReducer from "./slices/wishlistSlice";

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
