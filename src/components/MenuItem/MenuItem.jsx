import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './MenuItem.module.scss';
import { ProductContext } from '../../context/ProductContext/product.context';
import hats from '../../data/hat-data';
import jackets from '../../data/jacket-data';
import shoes from '../../data/shoe-data';
import mens from '../../data/men-data';
import womens from '../../data/women-data';

const MenuItem = ({ item, history, match }) => {
  const { setProducts } = useContext(ProductContext);

  const handleClick = () => {
    switch (item.title) {
      case 'hats':
        setProducts(hats);
        break;
      case 'jackets':
        setProducts(jackets);
        break;
      case 'mens':
        setProducts(mens);
        break;
      case 'womens':
        setProducts(womens);
        break;
      case 'shoes':
        setProducts(shoes);
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
