import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './MenuItem.module.scss';
import { ProductContext } from '../../context/ProductContext/product.context';
import SHOP_DATA from '../../data/shop-data';

const MenuItem = ({ item, history, match }) => {
  const { setProducts } = useContext(ProductContext);
  const handleClick = () => {
    switch (item.title) {
      case 'hats':
        setProducts(SHOP_DATA[0].items);
        break;
      case 'jackets':
        setProducts(SHOP_DATA[2].items);
        break;
      case 'mens':
        setProducts(SHOP_DATA[4].items);
        break;
      case 'womens':
        setProducts(SHOP_DATA[3].items);
        break;
      case 'shoes':
        setProducts(SHOP_DATA[1].items);
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
