import { Grid, Button, Box } from '@mui/material';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <Grid item xs={4} sx={{ p: 2, position: 'relative' }} className={styles.container}>
      <img className={styles.image} src={imageUrl} alt={`${name}`} />
      <Grid container spacing={20}>
        <Grid item>
          <Box>{name}</Box>
        </Grid>
        <Grid item>
          <Box>£{price}</Box>
        </Grid>
      </Grid>
      <Button
        className={styles.button}
        sx={{ position: 'absolute', top: '12rem', left: '6rem', fontWeight: 'bold' }}
        variant="outlined"
      >
        Add to cart
      </Button>
    </Grid>
  );
};

export default ProductCard;
