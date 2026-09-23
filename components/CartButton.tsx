"use client";
import Link from "next/link";
import { use } from "react";
import { CartContext } from "../context/CartContext";

const CartButton = () => {
  const { cart } = use(CartContext)!;

  return (
    <Link href={"/cart"} className="btn">
      Cart Items: {cart.length}
    </Link>
  );
};

export default CartButton;
