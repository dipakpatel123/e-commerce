import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../src/componets/Navbar"
import Dashboard from "../src/componets/Dashboard"
import ProtectedRoute from "../src/utils/ProtectedRoute";
import Login from "./componets/Auth/Login"
import Register from "../src/componets/Auth/Register"
import Cart from "../src/componets/Cart";
import Wishlist from "../src/componets/Wishlist";
import PersonalProduct from "../src/componets/PersonalProduct"
import Footer from "./componets/Footer";
import Home from "./componets/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer />
      <Routes>
      {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<PersonalProduct />} />
        
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        } />
        
        <Route path="/wishlist" element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;