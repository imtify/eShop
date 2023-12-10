import expess from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import products from "./data/products.js";
const port = process.env.PORT || 5000;

connectDB();

const app = expess();

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
