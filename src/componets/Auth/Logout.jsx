import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { clearCart } from "../../redux/slices/cartSlice";
import { clearWishlist } from "../../redux/slices/wishlistSlice";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserLogout = () => {
    dispatch(clearCart());
    dispatch(clearWishlist());
    dispatch(logout());
    navigate("/login");
  };

  return (
    <IconButton onClick={handleUserLogout} style={{ color: "#fff", fontSize: "large" }}>
      Logout
    </IconButton>
  );
};
export default Logout;