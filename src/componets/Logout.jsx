import React from "react";
import { useDispatch } from "react-redux";
import { handleLogout } from "../Redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserLogout = () => {
    dispatch(handleLogout());  
    navigate("/login"); 
  };

  return (
    <IconButton onClick={handleUserLogout} style={{ color: "#fff" }}>
      Logout
    </IconButton>
  );
};

export default LogoutButton;
