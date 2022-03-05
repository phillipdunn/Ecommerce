import React from 'react';
import styles from './MenuComponent.module.scss';
import LinkButton from '../LinkButton';

const MenuComponent = ({ item }) => {
  return (
    <div className={styles.menuItem}>
      <h1>{item.title}</h1>
      <img src={item.imageUrl} alt="" />
      <LinkButton />
    </div>
  );
};

export default MenuComponent;
