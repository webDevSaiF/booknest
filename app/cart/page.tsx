"use client";

import CartItem from "../../components/CartItem";
import { useCart } from "../../hooks/useCart";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        {cart.length ? "Carts" : "Your cart is empty"}
      </h1>
      {cart.length ? (
        <div className="mt-15 grid grid-cols-1 gap-5">
          {cart.map((book) => (
            <CartItem key={book.id} book={book}></CartItem>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CartPage;
