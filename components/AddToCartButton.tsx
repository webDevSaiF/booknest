"use client";

import { useCart } from "../hooks/useCart";
import { BookProps } from "../types/type";

const AddToCartButton = ({ book }: { book: BookProps }) => {
  const { addToCart } = useCart();

  return (
    <button onClick={() => addToCart(book)} className="btn btn-primary mt-8">
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
