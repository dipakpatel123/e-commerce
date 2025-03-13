import React from "react";
import Slider from "react-slick";
import { Button, Typography, Box, Container, Card, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const navigate = useNavigate();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      title: "Welcome to E-Commerce",
      description: "Discover amazing products at great prices!",
      image: "../assets/img/ccamara.jpg",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      title: "New Arrivals",
      description: "Check out our latest collection!",
      image: "../assets/img/ccamara.jpg",
      buttonText: "Explore",
    },
    {
      id: 3,
      title: "Exclusive Deals",
      description: "Don't miss out on our special offers!",
      image: "../assets/img/ccamara.jpg",
      buttonText: "View Deals",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Product 1",
      price: "$100",
      image: "../assets/img/ccamara.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$200",
      image: "../assets/img/ccamara.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$300",
      image: "../assets/img/ccamara.jpg",
    },
  ];

  return (
    <Box sx={{ mt: 4 }}>
      {/* Slider Section */}
      <Slider {...sliderSettings}>
        {slides.map((slide) => (
          <Box
            key={slide.id}
            sx={{
              position: "relative",
              textAlign: "center",
              color: "white",
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Typography variant="h3" gutterBottom>
                {slide.title}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {slide.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/dashboard")}
                sx={{ mt: 2 }}
              >
                {slide.buttonText}
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>

      {/* Featured Products Section */}
      <Container sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Featured Products
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 4 }}>
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              sx={{
                width: 250,
                textAlign: "center",
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => navigate("/dashboard")}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1" color="text.secondary">
                  {product.price}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;