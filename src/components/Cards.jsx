"use client";

import { Signika } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link"


const signika = Signika({
  weight: '500',
  subsets: ['latin'],
});

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Fetch cards data and cart items from localStorage
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("/api/cards");
        if (!response.ok) {
          throw new Error("Failed to fetch cards");
        }
        const data = await response.json();
        setCards(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();

    // Retrieve cart items from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  const addToCart = (book) => {
    const updatedCart = [
      ...cartItems,
      { ...book, price: Number(book.price), quantity: 1 }
    ];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart); // Update the cart state
  };

  const isInCart = (bookId) => {
    return cartItems.some(item => item.id === bookId);
  };

  if (loading) {
    return <p>Loading books...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={`${signika.className} container mx-auto items-center justify-center w-full flex flex-col p-8`}>
      <h1 className="text-4xl self-start text-blue-900 my-6">More on sale</h1>
      <div className="container h-max w-full m-auto">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {cards.map((book, index) => (
            <li key={index} className="w-full h-72 bg-slate-300 relative border-[1px] border-slate-300">
              <div className="container relative w-[70%] m-auto h-full bg-black">
                <Image
                  src={book.src}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="image"
                />
              </div>
              <div className="w-full h-[30%] bg-white bottom-0 absolute flex flex-col justify-center items-center">
                <div className="m-1">
                  <p className="text-[1rem] leading-none -mb-1">{book.title}</p>
                  <p className="text-[1.5rem] font-serif text-slate-600">
                    <sup className="text-[0.8rem]">&#8377;</sup> {book.price}
                  </p>
                </div>
                <div className="flex w-full h-full">
                  <button className="bg-[#ffe54fde] text-blue-900 w-full"
                    onClick={() => addToCart(book)}
                  > <Link href="/cart">Buy Now</Link></button>

                  <button
                    className={`bg-[#ffb74fde] text-gray-700 w-full ${isInCart(book.id) ? "bg-[#ffb64f90]" : "bg-[#ffb74fde] text-gray-700"}`}
                    disabled={isInCart(book.id)}  // Disable if the item is already in cart
                    onClick={() => addToCart(book)}
                  >
                    {isInCart(book.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
