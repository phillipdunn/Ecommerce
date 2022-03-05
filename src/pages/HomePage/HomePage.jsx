import React from 'react';
import styles from './HomePage.module.scss';
import MenuComponent from '../../components/MenuComponent';

const HomePage = ({ menuItems }) => {
  return (
    <div className={styles.homePage}>
      <MenuComponent menuItems={menuItems} />
    </div>
  );
};

export default HomePage;
