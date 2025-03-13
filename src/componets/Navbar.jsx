import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";
import { selectWishlist } from "../redux/slices/wishlistSlice";
import { AppBar, Toolbar, Button, IconButton, Typography, Badge } from "@mui/material";
import { ShoppingCart, Favorite } from "@mui/icons-material";
import Logout from "./Auth/Logout";

const Navbar = () => {
  const cart = useSelector(selectCart);
  const wishlist = useSelector(selectWishlist);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#101010" }}>
      <Toolbar>
        <Button color="inherit" component={Link} to="/">E-commerce</Button>
        <div style={{ flexGrow: 1 }} />
        {isLoggedIn && <Typography sx={{ mr: 2 }}>Welcome, {user?.name}</Typography>}
        <IconButton color="inherit" component={Link} to="/wishlist">
          <Badge badgeContent={isLoggedIn ? wishlist.length : 0} color="error"><Favorite /></Badge>
        </IconButton>
        <IconButton color="inherit" component={Link} to="/cart">
          <Badge badgeContent={isLoggedIn ? cart.length : 0} color="error"><ShoppingCart /></Badge>
        </IconButton>
        {isLoggedIn ? <Logout /> : (<><Button color="inherit" component={Link} to="/login">Login</Button><Button color="inherit" component={Link} to="/register">Register</Button></>)}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;