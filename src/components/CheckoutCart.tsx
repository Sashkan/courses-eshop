"use client";

import React from "react";
import { useCart } from "~/contexts/CartContext";

const processCheckout = async (amount: number) => {
  await fetch("/api/transaction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount,
    }),
  });
};

const CheckoutCart = () => {
  const { getCartTotal, clearCart } = useCart();

  const cartTotal = getCartTotal();

  const payCheckout = async () => {
    await processCheckout(cartTotal);
    clearCart();
  };

  return (
    <div>
      <button
        onClick={payCheckout}
        className="w-full rounded-md bg-primary p-4 text-2xl text-white"
      >
        Pay
      </button>
    </div>
  );
};

export default CheckoutCart;
