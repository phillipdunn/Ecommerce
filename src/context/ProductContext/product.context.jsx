import { createContext, useState } from 'react';

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const value = { products, setProducts };
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
