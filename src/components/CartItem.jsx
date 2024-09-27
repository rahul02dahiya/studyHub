// components/CartItem.js
"use client"

import { useState } from 'react';
import { AiOutlineSwitcher } from "react-icons/ai";


const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="cart-item m-4">
      <div className="image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="details">
        <h3>{item.name}</h3>
        <p>Color: {item.color}</p>
        <p>Size: {item.size}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <p className="price">${(item.price * quantity).toFixed(2)}</p>
      </div>
      <div className="actions">
        <button className=" text-2xl text-red-400"><AiOutlineSwitcher /></button>
      </div>
    </div>
  );
};

export default CartItem;
