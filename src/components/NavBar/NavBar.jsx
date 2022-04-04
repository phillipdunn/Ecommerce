import React from 'react';
import { AppBar, Toolbar, CssBaseline, Typography, useMediaQuery, useTheme } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { NavLink } from 'react-router-dom';
import NavDrawer from '../NavDrawer';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar position="static" style={{ background: 'grey' }}>
      <Toolbar>
        <NavLink to="/" className={styles.logo}>
          Home
        </NavLink>
        {isMobile ? (
          <NavDrawer />
        ) : (
          <div className={styles.navLinks}>
            <NavLink to="/Shop" className={styles.link}>
              Shop
            </NavLink>
            <NavLink to="/contact" className={styles.link}>
              Contact
            </NavLink>
            <NavLink to="/signin" className={styles.link}>
              Sign In
            </NavLink>
            <NavLink to="/basket" className={styles.basket}>
              <ShoppingBasketIcon />
            </NavLink>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
