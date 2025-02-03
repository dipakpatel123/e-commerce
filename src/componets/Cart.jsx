import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/slices/cartSlice";  
import { selectCart } from "../Redux/slices/cartSlice";
import { Button } from "@mui/material";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));  
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{product.name} - ${product.price}</p>
              <Button onClick={() => handleRemoveFromCart(product)} variant="contained" color="secondary">
                Remove
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
