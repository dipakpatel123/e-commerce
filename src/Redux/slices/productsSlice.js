

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "Laptop", price: 1000, description: "A powerful laptop", imageUrl: "../src/assets/img/leptop.jpg" },
    { id: 2, name: "Smartphone", price: 600, description: "Latest smartphone", imageUrl: "../src/assets/img/headphone.webp" },
    { id: 3, name: "Tablet", price: 400, description: "High-performance tablet", imageUrl: "../src/assets/img/camara.jpg" },
    { id: 4, name: "Smartwatch", price: 250, description: "Stylish smartwatch", imageUrl: "../src/assets/img/circlits.webp" },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;
