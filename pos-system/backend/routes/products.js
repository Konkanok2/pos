const express = require('express');
const router = express.Router();
const { getAllProducts, addProduct } = require('../models/Product');

// Get all products
router.get('/', (req, res) => {
  getAllProducts((products) => {
    res.json(products);
  });
});

// Add a new product
router.post('/', (req, res) => {
  const { name, price, stock } = req.body;
  addProduct({ name, price, stock }, (result) => {
    res.status(201).json(result);
  });
});

module.exports = router;
