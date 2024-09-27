'use client'


import Navbar from "@/components/Navbar"
import CartItem from '@/components/CartItem';
import Summary from '@/components/Summary';
import { useState } from 'react';

const page = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Blue denim shirt',
      color: 'blue',
      size: 'M',
      price: 17.99,
      image: '/images/book.jpg', // placeholder image path
    },
    {
      id: 2,
      name: 'Red hoodie',
      color: 'red',
      size: 'M',
      price: 17.99,
      image: '/images/book.jpg', // placeholder image path
    },
    {
      id: 3,
      name: 'Red hoodie',
      color: 'red',
      size: 'M',
      price: 17.99,
      image: '/images/book.jpg', // placeholder image path
    },
  ];

  const [total, setTotal] = useState(
    cartItems.reduce((sum, item) => sum + item.price, 0)
  );

  const updateTotal = () => {
    const newTotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotal(newTotal);
  };

  return (
    <div>
      <Navbar />
    <div className="cart-page">
      <div className="cart-items">
        <h2>Cart - {cartItems.length} items</h2>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Summary total={total} itemCount={cartItems.length} />
    </div>
    </div>
  );
};

export default page;
