import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { addToCart } from "../Redux/slices/cartSlice";
import { addToWishlist } from "../Redux/slices/wishlistSlice";
import { Card, Button } from "antd";
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const products = useSelector((state) => state.products.products);

  const handleAddToCart = (product) => {
    if (isLoggedIn) {
      dispatch(addToCart(product));
    } else {
      alert("Please log in to add to cart!");
    }
  };

  const handleAddToWishlist = (product) => {
    if (isLoggedIn) {
      dispatch(addToWishlist(product));
    } else {
      alert("Please log in to add to wishlist!");
    }
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);  
  };

  if (!products || products.length === 0) {
    return <div>Loading products...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Dashboard</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <Box key={product.id}>
            <Card className="product-card" onClick={() => handleProductClick(product)}>
              <div>
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="product-details">
                <h3 className="product_title">{product.name}</h3>
                <p className="product_price">Price: ${product.price}</p>
                <div className="product_actions">
                  <Button type="primary" onClick={() => handleAddToWishlist(product)}>
                    Add to Wishlist
                  </Button>
                  <Button type="default" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
