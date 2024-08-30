import React, { useState } from 'react';
import axios from 'axios';

const Checkout = ({ cart }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  const handleCheckout = () => {
    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    setTotalAmount(total);

    const saleData = {
      products: cart.map(product => ({
        id: product.id,
        quantity: product.quantity,
        price: product.price
      })),
      totalAmount: total
    };

    axios.post('http://localhost:5000/api/sales', saleData)
      .then(response => {
        alert(`Sale recorded with ID: ${response.data.saleId}`);
      })
      .catch(error => {
        console.error('Error recording sale:', error);
      });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} x {product.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${totalAmount}</h3>
      <button onClick={handleCheckout}>Complete Sale</button>
    </div>
  );
};

export default Checkout;
