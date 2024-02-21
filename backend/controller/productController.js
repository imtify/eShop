import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//Fetch Products by route GET/api/products in private

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//Fetch Products by ID through route GET/api/products/:id in private
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.statuu(404);
    throw new Error("Resource not Found");
  }
});

//Create Product by route POST/api/products in private
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

export { getProducts, getProductById, createProduct };
