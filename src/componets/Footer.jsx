import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#101010",
        color: "white",
        py: 4,
        mt: 4,
      }}
    >
      <Container>
        <Typography variant="h6" align="center" gutterBottom>
          E-Commerce
        </Typography>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} E-Commerce. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Made with by korapana dipak
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;