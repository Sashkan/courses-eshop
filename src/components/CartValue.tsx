"use client";

import { useCart } from "~/contexts/CartContext";

const CartValue = () => {
  const { getCartTotal } = useCart();

  return <p>Valeur du panier: {getCartTotal()} euros</p>;
};

export default CartValue;
