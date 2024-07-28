// USING REDUCER NOW
import { createContext, useReducer } from 'react';
import { createAction } from '../../utils/reducer';

const addCartItem = (cartItems, product) => {
  const existingProduct = cartItems.find((cartItem) => cartItem.id === product.id);
  if (existingProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }
  return [...cartItems, { ...product, quantity: 1 }];
};

const removeCartItem = (cartItems, product) => {
  const existingProduct = cartItems.find((cartItem) => cartItem.id === product.id);
  if (existingProduct.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  );
};

const clearCartItem = (cartItems, product) => cartItems.filter((cartItem) => cartItem.id !== product.id);

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartTotalAmount: 0,
});

export const CART_ACTION_TYPES = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_ITEM: 'CLEAR_ITEM',
};

const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotalAmount: 0,
  isCartOpen: true,
};

const cartReducer = (state, action) => {
  console.log('action', action);
  const { type, payload } = action;

  switch (type) {
    case 'SET_CART_ITEMS':
      return {
        ...state,
        ...payload,
      };

    default:
      return new Error(`Unsupported action type: ${type} in cart reducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, cartTotalAmount }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0);

    const newCartTotalAmount = newCartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction('SET_CART_ITEMS', {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotalAmount: newCartTotalAmount,
      })
    );
  };

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (product) => {
    const newCartItems = removeCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (product) => {
    const newCartItems = clearCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    cartCount,
    cartItems,
    clearItemFromCart,
    addItemToCart,
    removeItemFromCart,
    cartTotalAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// *** DEPRICATED, USING REDUCERs INSTEAD ***
// export const CartContext = createContext({
//   cartItems: [],
//   addItemToCart: () => {},
//   cartCount: 0,
//   cartTotalAmount: 0,
// });

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [cartTotalAmount, setCartTotalAmount] = useState(0);

//   useEffect(() => {
//     setCartCount(cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0));
//   }, [cartItems]);

//   useEffect(() => {
//     setCartTotalAmount(
//       cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price, 0)
//     );
//   }, [cartItems]);

//   const addItemToCart = (product) => {
//     setCartItems((prevCartItems) => {
//       const existingProduct = prevCartItems?.find((cartItem) => cartItem.id === product.id);
//       if (existingProduct) {
//         return prevCartItems?.map((cartItem) =>
//           cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//         );
//       }
//       return [...prevCartItems, { ...product, quantity: 1 }];
//     });
//   };

//   const removeItemFromCart = (product) => {
//     setCartItems((prevCartItems) => {
//       const existingProduct = prevCartItems?.find((cartItem) => cartItem.id === product.id);
//       if (existingProduct.quantity === 1) {
//         return prevCartItems?.filter((cartItem) => cartItem.id !== product.id);
//       }
//       return prevCartItems?.map((cartItem) =>
//         cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
//       );
//     });
//   };

//   const clearItemFromCart = (product) => {
//     setCartItems((prevCartItems) => prevCartItems?.filter((cartItem) => cartItem.id !== product.id));
//   };

//   const value = { cartCount, cartItems, clearItemFromCart, addItemToCart, removeItemFromCart, cartTotalAmount };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
