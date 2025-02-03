import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../Redux/slices/cartSlice";
import { selectWishlist } from "../Redux/slices/wishlistSlice";
import { Badge } from "@mui/material";
import { ShoppingCart, Favorite } from "@mui/icons-material";
import LogoutButton from "./Logout";
import { Button } from "@mui/material";

const Navbar = () => {
  const cart = useSelector(selectCart);
  const wishlist = useSelector(selectWishlist);
  const navigate = useNavigate();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLoginRedirect = () => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#1890ff" }}>
      <div>
        <Link to="/dashboard" style={{ color: "#fff", marginRight: "15px" }}>Dashboard</Link>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>

        <Badge badgeContent={wishlist.length} color="secondary">
          <Link to="/wishlist" style={{ color: "#fff" }} >
            <Favorite />
          </Link>
        </Badge>


        <Badge badgeContent={cart.length} color="secondary">
          <Link to="/cart" style={{ color: "#fff" }} >
            <ShoppingCart />
          </Link>
        </Badge>


        {isLoggedIn ? (
          <LogoutButton />
        ) : (

          <Button onClick={handleLoginRedirect} style={{ color: "white" }}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
