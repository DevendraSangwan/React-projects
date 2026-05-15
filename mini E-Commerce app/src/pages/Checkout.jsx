import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully! Thank you for your purchase.');
    clearCart();
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-container">
        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Shipping Information</h3>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <textarea
            placeholder="Shipping Address"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            required
          />
          
          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Total Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
            <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
          </div>
          
          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
        <Link to="/cart" className="back-to-cart">← Back to Cart</Link>
      </div>
    </div>
  );
};

export default Checkout;