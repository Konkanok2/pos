const express = require('express');
const router = express.Router();
const { createSale, addSaleItems } = require('../models/Sale');

// Create a sale
router.post('/', (req, res) => {
  const { products, totalAmount } = req.body;

  createSale({ total_amount: totalAmount }, (result) => {
    const saleId = result.insertId;
    const items = products.map(product => [saleId, product.id, product.quantity, product.price]);

    addSaleItems(items, (result) => {
      res.status(201).json({ saleId });
    });
  });
});

module.exports = router;
