import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './MenuItem.module.scss';
import { ProductContext } from '../../context/ProductContext/product.context';

const MenuItem = ({ item, history, match }) => {
  const { categories, setProducts } = useContext(ProductContext);
  const handleClick = () => {
    switch (item.title) {
      case 'hats':
        setProducts(categories['hats']);
        break;
      case 'jackets':
        setProducts(categories['jackets']);
        break;
      case 'mens':
        setProducts(categories['mens']);
        break;
      case 'womens':
        setProducts(categories['womens']);
        break;
      case 'shoes':
        setProducts(categories['shoes']);
        break;

      default:
        break;
    }
    history.push(`${match.url}${item.linkUrl}`);
  };  

  return (
    <div className={item.size ? styles.largeMenuItem : styles.menuItem} onClick={() => handleClick()}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
      <div className={styles.content}>
        <h1>{item.title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
