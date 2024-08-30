const db = require('../config/db');

const createSale = (sale, callback) => {
  db.query('INSERT INTO sales SET ?', sale, (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

const addSaleItems = (items, callback) => {
  db.query('INSERT INTO sale_items (sale_id, product_id, quantity, price) VALUES ?', [items], (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

module.exports = { createSale, addSaleItems };
