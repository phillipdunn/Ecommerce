import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import NavDrawer from '../NavDrawer';
import styles from './NavBar.module.scss';
import { UserContext } from '../../context/UserContext/user.context';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';
import CartDropdown from '../CartDropdown/CartDropdown';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { currentUser } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
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

              <Badge badgeContent={2} color="primary" onClick={handleClick} sx={{ cursor: 'pointer' }}>
                <ShoppingBasketIcon />
              </Badge>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <CartDropdown anchorEl={anchorEl} id={id} open={open} onClose={handleClose} />
    </>
  );
};

export default NavBar;
