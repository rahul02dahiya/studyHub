"use client";

import Navbar from "@/components/Navbar";
import CartItem from "@/components/CartItem";
import Summary from "@/components/Summary";
import CheckoutForm from "@/components/CheckoutForm";
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
    localStorage.setItem("total", newTotal);
  };

  const handleIncrement = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
    updateTotal(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));

  };

  const handleDecrement = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedItems);
    updateTotal(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));

  };

  const handleRemove = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    updateTotal(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems)); // Update localStorage after removal
  };

    const [isFormOpen, setIsFormOpen] = useState(false);
  
    const handleCheckoutClick = () => {
      setIsFormOpen(true);
    };
  
    const handleCloseForm = () => {
      setIsFormOpen(false);
    };
  

  return (
    <div>
      <Navbar />
      <div className="cart-page flex sm:flex-row flex-col">
        <div className="cart-items">
          <h2>Cart - {cartItems.length} items</h2>
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              OnRemove={handleRemove}
            />
          ))}
        </div>
        <Summary total={total} itemCount={cartItems.length} onCheckoutClick={handleCheckoutClick}  />
        <CheckoutForm isOpen={isFormOpen} onClose={handleCloseForm} />
      </div>
    </div>
  );
};

export default Page;
