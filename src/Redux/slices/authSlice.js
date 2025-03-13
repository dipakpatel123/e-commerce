import { createSlice } from "@reduxjs/toolkit";
import { clearCart } from "./cartSlice";
import { clearWishlist } from "./wishlistSlice";

const getRegisteredUsers = () => {
  const users = localStorage.getItem("registeredUsers");
  return users ? JSON.parse(users) : [];
};

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  registeredUsers: getRegisteredUsers(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      const { name, email, password } = action.payload;
      const userExists = state.registeredUsers.some(
        (user) => user.email === email
      );

      if (userExists) {
        throw new Error("User already exists!");
      }

      const newUser = { name, email, password };
      state.registeredUsers.push(newUser);
      localStorage.setItem("registeredUsers", JSON.stringify(state.registeredUsers));
      state.isLoggedIn = true;
      state.user = { name, email };
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify({ name, email }));
      localStorage.removeItem("cart");
      localStorage.removeItem("wishlist");
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.registeredUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (!user) {
        throw new Error("Invalid email or password!");
      }

      state.isLoggedIn = true;
      state.user = { name: user.name, email: user.email };
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify({ name: user.name, email: user.email }));
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
