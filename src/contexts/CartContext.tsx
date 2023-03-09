"use client";

import { type Product } from "@prisma/client";
import { createContext, useContext, useState } from "react";

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {
    // handle adding to cart
  },
  removeFromCart: () => {
    // handle this
  },
  clearCart: () => {
    // handle this
  },
  getCartTotal: () => 0,
});

export default CartContext;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product: Product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
