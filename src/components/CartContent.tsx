"use client";

import { useCart } from "~/contexts/CartContext";

const CartContent = () => {
  const { cart } = useCart();

  return (
    <ul>
      {cart.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default CartContent;
