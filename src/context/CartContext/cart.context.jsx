import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartTotalAmount: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);

  useEffect(() => {
    setCartCount(cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0));
  }, [cartItems]);

  useEffect(() => {
    setCartTotalAmount(
      cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price, 0)
    );
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingProduct = prevCartItems?.find((cartItem) => cartItem.id === product.id);
      if (existingProduct) {
        return prevCartItems?.map((cartItem) =>
          cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCartItems, { ...product, quantity: 1 }];
    });
  };

  const removeItemFromCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingProduct = prevCartItems?.find((cartItem) => cartItem.id === product.id);
      if (existingProduct.quantity === 1) {
        return prevCartItems?.filter((cartItem) => cartItem.id !== product.id);
      }
      return prevCartItems?.map((cartItem) =>
        cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
    });
  };

  const clearItemFromCart = (product) => {
    setCartItems((prevCartItems) => prevCartItems?.filter((cartItem) => cartItem.id !== product.id));
  };

  const value = { cartCount, cartItems, clearItemFromCart, addItemToCart, removeItemFromCart, cartTotalAmount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
