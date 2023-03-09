"use client";

import { type Product } from "@prisma/client";
import { useCart } from "~/contexts/CartContext";

interface AddToCartProps {
  product: Product;
}

const AddToCart = ({ product }: AddToCartProps) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="rounded-md bg-primary px-4 py-2 text-white"
    >
      Ajouter au panier
    </button>
  );
};

export default AddToCart;
