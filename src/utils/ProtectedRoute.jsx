import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// ProtectedRoute is a component that checks i  f the user is logged in
// If the user is not logged in, it redirects to the login page
// If the user is logged in, it renders the children components
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
