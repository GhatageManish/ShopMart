import { createContext, useContext, useState, useMemo } from "react";
import { initialProducts } from "../components/data/product";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // REMOVE FROM CART
  const removeFromCart = (productId, removeAll = false) => {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.id === productId);

      if (!item) return prevCart;

      if (removeAll || item.quantity === 1) {
        return prevCart.filter((i) => i.id !== productId);
      }

      return prevCart.map((i) =>
        i.id === productId
          ? { ...i, quantity: i.quantity - 1 }
          : i
      );
    });
  };

  // DERIVED VALUES
  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const cartPrice = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        products: initialProducts,
        cart,
        addToCart,
        removeFromCart,
        cartCount,
        cartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};