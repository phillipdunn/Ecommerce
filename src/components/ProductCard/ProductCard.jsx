import { Grid, Button, Box } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/cart.context';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <Grid item xs={4} sx={{ p: 2, position: 'relative' }} className={styles.container}>
      <img className={styles.image} src={imageUrl} alt={`${name}`} />
      <Grid container spacing={5}>
        <Grid item>
          <Box>{name}</Box>
        </Grid>
        <Grid item>
          <Box>£{price}</Box>
        </Grid>
      </Grid>
      <Button
        className={styles.button}
        sx={{ position: 'absolute', top: '50%', left: '40%', fontWeight: 'bold' }}
        variant="outlined"
        onClick={() => addProductToCart(product)}
      >
        Add to cart
      </Button>
    </Grid>
  );
};

export default ProductCard;
