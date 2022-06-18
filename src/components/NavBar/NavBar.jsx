import React, { useContext } from 'react';
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { NavLink } from 'react-router-dom';
import NavDrawer from '../NavDrawer';
import styles from './NavBar.module.scss';
import { UserContext } from '../../context/UserContext/user.context';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { currentUser } = useContext(UserContext);

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
            <NavLink to="/shop" className={styles.link}>
              Shop
            </NavLink>
            <NavLink to="/contact" className={styles.link}>
              Contact
            </NavLink>
            {currentUser === null ? (
              <NavLink to="/auth" className={styles.link}>
                Sign In
              </NavLink>
            ) : (
              <NavLink to="/" onClick={signOutAuthUser} className={styles.link}>
                Sign Out
              </NavLink>
            )}
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
