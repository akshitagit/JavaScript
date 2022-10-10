import mongoose from "mongoose";

export const User = mongoose.model("users", {
  name: String,
  email: String,
  password: String,
});

export const Product = mongoose.model("products", {
  productId: Number,
  productName: String,
  productPrice: Number,
  productImage: String,
});
