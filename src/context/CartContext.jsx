import React, { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

// Create the Cart Context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const isExist = cartItems.some(
      (item) => item.product_id === product.product_id
    );

    if (!isExist) {
      setCartItems((prevItems) => [...prevItems, product]);
    } else {
      toast.error("Product Already In Cart");
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCart = () => useContext(CartContext);
