import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componets/Login";
import Dashboard from "./componets/Dashboard";
import Wishlist from "./componets/Wishlist";
import Cart from "./componets/Cart";
import ProductDetail from "./componets/ProductDetail";
import ProtectedRoute from "./utils/ProtectedRoute";
import Navbar from "./componets/Navbar";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../src/Redux/slices/authSlice";
import PersonalProduct from "./componets/PersonalProduct";
import { addToCart } from "./Redux/slices/cartSlice";
import { addToWishlist } from "./Redux/slices/wishlistSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      dispatch(setLoginStatus(true));
    }
    const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
    const wishlistFromStorage = JSON.parse(localStorage.getItem("wishlist"));
    if (cartFromStorage) {
      cartFromStorage.forEach(item => dispatch(addToCart(item)));
    }
    if (wishlistFromStorage) {
      wishlistFromStorage.forEach(item => dispatch(addToWishlist(item)));
    }
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/product/:id" element={<PersonalProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
