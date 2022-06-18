import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import styles from './MenuComponent.module.scss';

const MenuComponent = ({ menuItems }) => {
  return (
    <div className={styles.menuComponent}>
      {menuItems.map((item) => {
        return <MenuItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default MenuComponent;
