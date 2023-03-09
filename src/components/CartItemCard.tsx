"use client";

import { type Product } from "@prisma/client";
import { useCart } from "~/contexts/CartContext";

interface CartItemCardProps {
  cartItem: Product;
}

const CartItemCard = ({ cartItem }: CartItemCardProps) => {
  const { removeFromCart, addToCart } = useCart();

  return (
    <div className="flex items-center justify-between border-b p-4">
      <div className="flex items-center">
        <div className="ml-4">
          <p className="text-lg font-semibold">{cartItem.name}</p>
          <p className="text-gray-500">${cartItem.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="rounded-md border p-2"
          onClick={() => removeFromCart(cartItem)}
        >
          -
        </button>
        <p className="mx-2">1</p>
        <button
          className="rounded-md border p-2"
          onClick={() => addToCart(cartItem)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
