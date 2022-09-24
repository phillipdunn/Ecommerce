import React, { useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ProductContext } from '../../context/ProductContext/product.context';
import { Grid } from '@mui/material';

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <Grid container>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default Shop;
