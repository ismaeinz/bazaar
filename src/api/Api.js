import axios from "axios";
import React from "react";

export const ProductsData = async () => {
  const products = await axios.get("https://fakestoreapi.com/products");
  return products;
};
