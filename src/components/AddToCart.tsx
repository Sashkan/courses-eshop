"use client";

import { type Product } from "@prisma/client";
import { useCart } from "~/contexts/CartContext";

interface AddToCartProps {
  product: Product;
}

const AddToCart = ({ product }: AddToCartProps) => {
  const { addToCart } = useCart();

  return <button onClick={() => addToCart(product)}>Add to cart</button>;
};

export default AddToCart;
