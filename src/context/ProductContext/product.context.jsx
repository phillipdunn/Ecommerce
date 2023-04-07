import { createContext, useEffect, useState } from 'react';
import { getCategoriesAndDocs } from '../../utils/firebase/firebase.utils';

export const ProductContext = createContext({
  products: [],
  categories: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocs();
      setCategories(categoryMap);
    };
    getCategoriesMap();
  }, []);

  // to perfom a batch upload to the firestore of the shop data, kept comments in for reference.
  // useEffect(() => {
  //   addCollectionsAndDocs('categories', SHOP_DATA);
  // }, []);

  const value = { categories, products, setProducts };
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
