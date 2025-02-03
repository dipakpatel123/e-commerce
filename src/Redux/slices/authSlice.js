import { createSlice } from "@reduxjs/toolkit";
import { clearCart } from "./cartSlice";  
import { clearWishlist } from "./wishlistSlice";  

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    setLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { login, logout, setLoginStatus } = authSlice.actions;

 
export const handleLogout = () => (dispatch) => {
  dispatch(logout());
  dispatch(clearCart()); 
  dispatch(clearWishlist());  
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("cart");
  localStorage.removeItem("wishlist");
};

export default authSlice.reducer;
