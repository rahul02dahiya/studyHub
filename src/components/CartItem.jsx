"use client";

import { AiOutlineSwitcher } from "react-icons/ai";

const CartItem = ({ item, onIncrement, onDecrement, OnRemove}) => {
  return (
    <div className="cart-item m-4">
      <div className="image">
        <img src={item.src} alt={item.name} />
      </div>
      <div className="details">
        <h3>{item.title}</h3>
        <p>Size: {item.size}</p>
        <div className="quantity-controls">
          <button onClick={() => onDecrement(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrement(item.id)}>+</button>
        </div>
        <p className="price">
          Rs. {item.price ? (item.price * item.quantity).toFixed(2) : "0.00"}
        </p>
      </div>
      <div className="actions">
        <button className="text-2xl text-red-400">
          <AiOutlineSwitcher onClick = {() => OnRemove(item.id)} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
