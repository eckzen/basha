const express = require("express");
const router = express.Router();

const Product = require("../Models/Product.model");
const ProductController = require("../Controllers/Product.controllers");

// Gett all product list
router.get("/", ProductController.getAllProducts);

// Create a product
router.post("/", ProductController.createNewProduct);

// Get a product by id
router.get("/:id", ProductController.findProductById);

// Updating a product by id
router.patch("/:id", ProductController.updateProductById);

// Delete a product by id
router.delete("/:id", ProductController.deleteProductById);

module.exports = router;
