import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//Fetch Products by route GET/api/products in public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.statuu(404);
    throw new Error("Resource not Found");
  }
});

export { getProducts, getProductById };
