import React from 'react';
import styles from './HomePage.module.scss';
import MenuComponent from '../../components/MenuComponent';

const HomePage = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((item) => {
        return <MenuComponent item={item} />;
      })}
    </>
  );
};

export default HomePage;
