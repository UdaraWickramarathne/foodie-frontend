import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "@/App.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Egg Vegi Salad',
      price: 649.99,
      quantity: 1,
      image: 'src/assets/dish/Egg Vegi Salad.jpg',
    },
    {
      id: 2,
      name: 'Fattoush Salad',
      price: 569.99,
      quantity: 1,
      image: 'src/assets/dish/Fattoush Salad.jpg',
    },
    {
      id: 3,
      name: 'Vegetable Salad',
      price: 800.0,
      quantity: 0,
      image: 'src/assets/dish/Vegetable Salad.jpg',
    },
    {
      id: 4,
      name: 'Charcoal Grill Pack',
      price: 500.0,
      quantity: 0,
      image: 'src/assets/dish/Chicken Salad.jpg',
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax
  const grandTotal = subtotal + tax;

  return (
    <div className="cart-container">
      <div className="cart-left">
        <h1>Your Cart ({cartItems.length} items)</h1>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="item-image">
                    <img src={item.image} alt={item.name} width="50" height="50" />
                  </div>
                  <div className="item-details">
                    <span>{item.name}</span>
                    {item.estimatedShipDate && (
                      <div className="ship-date">
                        Estimated Ship Date: {item.estimatedShipDate}
                      </div>
                    )}
                    {item.fuelSource && (
                      <div className="fuel-source">Fuel Source: {item.fuelSource}</div>
                    )}
                  </div>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    disabled={item.quantity === 0}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cart-right">
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Sales Tax: ${tax.toFixed(2)}</p>
          <p className="grand-total">Grand Total: ${grandTotal.toFixed(2)}</p>
          <Link to="/checkout">
          <button className="checkout-button">Check out</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
