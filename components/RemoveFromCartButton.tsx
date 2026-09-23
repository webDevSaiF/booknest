"use client";

import { useCart } from "../hooks/useCart";
import { BookProps } from "../types/type";

const RemoveFromCartButton = ({ book }: { book: BookProps }) => {
  const { removeFromCart } = useCart();

  return (
    <button
      onClick={() => removeFromCart(book.id)}
      className="btn btn-info mt-8"
    >
      Remove from Cart
    </button>
  );
};

export default RemoveFromCartButton;
