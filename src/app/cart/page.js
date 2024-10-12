"use client";

import Navbar from "@/components/Navbar";
import CartItem from "@/components/CartItem";
import Summary from "@/components/Summary";
import { useState, useEffect } from "react";

const Page = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const parsedCartItems = storedCartItems.map((item) => ({
      ...item,
      price: Number(item.price)
    }));
    setCartItems(parsedCartItems);
    updateTotal(parsedCartItems);
  }, []);

  const [total, setTotal] = useState(0);

  const updateTotal = (updatedItems) => {
    const newTotal = updatedItems.reduce(
      (sum, item) => sum + (item.price || 0) * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  const handleIncrement = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
    updateTotal(updatedItems);
  };

  const handleDecrement = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedItems);
    updateTotal(updatedItems);
  };

  const handleRemove = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    updateTotal(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems)); // Update localStorage after removal
  };


  return (
    <div>
      <Navbar />
      <div className="cart-page flex sm:flex-row flex-col">
        <div className="cart-items">
          <h2>Cart - {cartItems.length} items</h2>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              OnRemove={handleRemove}
            />
          ))}
        </div>
        <Summary total={total} itemCount={cartItems.length} />
      </div>
    </div>
  );
};

export default Page;
