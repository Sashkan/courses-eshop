"use client";

import { useCart } from "~/contexts/CartContext";

const CartValue = () => {
  const { getCartTotal } = useCart();

  return (
    <div className="flex justify-between p-4">
      <p className="text-lg font-semibold">Total</p>
      <p className="text-lg font-semibold">${getCartTotal()}</p>
    </div>
  );
};

export default CartValue;
