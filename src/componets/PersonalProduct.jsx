import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { addToCart } from "../Redux/slices/cartSlice";
import { addToWishlist } from "../Redux/slices/wishlistSlice";
import { toast } from "react-toastify";

const PersonalProduct = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  
 
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

 const handleAdd = (type, product) => {
     if (!isLoggedIn) {
       toast.error("Please login to continue!");
       return;
     }
     const action = type === 'cart' ? addToCart : addToWishlist;
     dispatch(action(product));
     toast.success(`${product.name} added to ${type}!`);
   };



  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} style={{ width: "300px", marginBottom: "20px" }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      
      <div>
        <Button 
          onClick={handleAdd} 
          variant="contained" 
          color="primary" 
          style={{ marginRight: "10px" }}
        >
          Add to Cart
        </Button>
        
        <Button 
          onClick={handleAdd} 
          variant="contained" 
          color="secondary"
        >
          Add to Wishlist
        </Button>
      </div>

   
      <div style={{ marginTop: "20px" }}>
        <Button 
          onClick={() => navigate("/")} 
          variant="outlined" 
          color="default"
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default PersonalProduct;
