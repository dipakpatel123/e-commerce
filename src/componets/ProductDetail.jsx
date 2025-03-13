import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/slices/cartSlice";
import { addToWishlist } from "../Redux/slices/wishlistSlice";
import { Button } from "@mui/material";

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();

    const handleAddToCart = () => {
      dispatch(addToCart(product));  
    };
  
    const handleAddToWishlist = () => {
      dispatch(addToWishlist(product));  
    };
                                    
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Button onClick={handleAddToCart} variant="contained" color="primary">
        Add to Cart
      </Button>
      <Button onClick={handleAddToWishlist} variant="contained" color="secondary">
        Add to Wishlist
      </Button>
    </div>
  );
};

export default ProductDetail;
