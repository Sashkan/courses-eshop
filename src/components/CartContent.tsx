"use client";

import { useCart } from "~/contexts/CartContext";
import CartItemCard from "./CartItemCard";

const CartContent = () => {
  const { cart } = useCart();

  return (
    <div className="rounded-md  border p-2">
      {cart.map((product) => (
        <CartItemCard key={product.id} cartItem={product} />
      ))}
    </div>
  );
};

export default CartContent;
