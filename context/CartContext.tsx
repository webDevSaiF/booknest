"use client";

import { createContext, ReactNode, useState } from "react";
import { BookProps } from "../types/type";

type CartContextType = {
  cart: BookProps[];
  addToCart: (book: BookProps) => void;
  removeFromCart: (id: string) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<BookProps[]>([]);

  const addToCart = (book: BookProps) => {
    setCart((prev) => [...prev, book]);
  };
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((book) => book.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
