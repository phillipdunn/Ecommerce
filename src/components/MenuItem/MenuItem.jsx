import React from 'react';
import styles from './MenuItem.module.scss';
import LinkButton from '../LinkButton';

const MenuItem = ({ item }) => {
  return (
    <div className={styles.menuItem}>
      <div
        className={item.size ? styles.backgroundImage : styles.large}
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
      >
        <div className={styles.content}>
          <h1>{item.title.toUpperCase()}</h1>
          <LinkButton link={item.linkUrl} />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
