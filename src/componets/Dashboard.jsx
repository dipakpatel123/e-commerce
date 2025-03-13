//dashborad.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/slices/cartSlice";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import { Card, CardMedia, CardContent, CardActions, Button, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const products = useSelector(state => state.products.products);

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
    <Grid container spacing={3} p={4}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="200"
              image={product.imageUrl}
              alt={product.name}
              onClick={() => navigate(`/product/${product.id}`)}
              style={{ cursor: 'pointer' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="h6" mt={2}>${product.price}</Typography>
            </CardContent>
            <CardActions sx={{ mt: 'auto' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAdd('cart', product)}
                sx={{
                  backgroundColor: "#1e3a8a",
                  "&:hover": { backgroundColor: "#1d4ed8" },
                }}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleAdd('wishlist', product)}
                sx={{
                  backgroundColor: "#db2777",
                  "&:hover": { backgroundColor: "#ec4899" },
                }}
              >
                Add to Wishlist
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
