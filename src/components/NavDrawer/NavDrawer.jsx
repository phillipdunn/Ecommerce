import React, { useState, useContext } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/user.context';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';

const NavDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { currentUser } = useContext(UserContext);
  const intials = currentUser.displayName.match(/\b(\w)/g).join('');
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} anchor="right">
        <List>
          <ListItem>
            <Typography noWrap width={'200px'} sx={{p:{sm:0, md:2}}} color='orange'><b>{intials}</b></Typography>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/shop">Shop</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact">Contact</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              {currentUser === null ? (
                <Link to="/auth">Sign In</Link>
              ) : (
                <Link to="/" onClick={signOutAuthUser}>
                  Sign Out
                </Link>
              )}
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/basket">Basket</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default NavDrawer;
