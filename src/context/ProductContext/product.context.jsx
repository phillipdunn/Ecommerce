import { createContext, useState } from 'react';

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();

  // to perfom a batch upload to the firestore of the shop data, kept comments in for reference.
  // useEffect(() => {
  //   addCollectionsAndDocs('categories', SHOP_DATA);
  // }, []);

  const value = { products, setProducts };
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
