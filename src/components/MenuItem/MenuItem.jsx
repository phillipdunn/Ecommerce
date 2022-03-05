import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './MenuItem.module.scss';

const MenuItem = ({ item, history, match }) => {
  return (
    <div
      className={styles.menuItem}
      onClick={() => history.push(`${match.url}${item.linkUrl}`)}
    >
      <div
        className={item.size ? styles.backgroundImage : styles.large}
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
      >
        <div className={styles.content}>
          <h1>{item.title.toUpperCase()}</h1>
          <span>SHOP NOW</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
