"use client";

import { useCart } from "~/contexts/CartContext";

const CartCount = () => {
  const { cart } = useCart();

  return <p>{cart.length}</p>;
};

export default CartCount;
