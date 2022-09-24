import { Button, List, Popover } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartDropdown.module.scss';

const CartDropdown = ({ anchorEl, id, items, onClose: handleClose, open }) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <List p={5}>
        {/* {items.map((item) => (
          <ListItem>{item}</ListItem>
        ))} */}
      </List>
      <Link to="/checkout">
        <Button variant="outlined"> Go to checkout</Button>
      </Link>
    </Popover>
  );
};

export default CartDropdown;
