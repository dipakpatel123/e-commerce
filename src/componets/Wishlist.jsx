import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../Redux/slices/wishlistSlice"; 
import { selectWishlist } from "../Redux/slices/wishlistSlice";
import { Button } from "@mui/material";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);

  const handleRemoveFromWishlist = (product) => {
    dispatch(removeFromWishlist(product));  
  };

  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty!</p>
      ) : (
        <div>
          {wishlist.map((product) => (
            <div key={product.id} style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{product.name} - ${product.price}</p>
              <Button onClick={() => handleRemoveFromWishlist(product)} variant="contained" color="secondary">
                Remove
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
