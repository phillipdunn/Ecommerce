import { Box, Button, List, ListItem, ListItemText, Popover, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/cart.context';

const CartDropdown = ({ anchorEl, id, onClose: handleClose, open }) => {
  const { cartItems } = useContext(CartContext);
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
      <Box p={2} textAlign="center">
        {cartItems?.length > 0 ? (
          <>
            <List py={2}>
              {cartItems?.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <>
                        <Typography variant="body">
                          x {item.quantity} £{item.price * item.quantity}
                        </Typography>
                      </>
                    }
                  ></ListItemText>
                </ListItem>
              ))}
            </List>
            <Link to="/checkout">
              <Button variant="outlined" onClick={handleClose}>
                Go to checkout
              </Button>
            </Link>
          </>
        ) : (
          <Box>Your cart is empty</Box>
        )}
      </Box>
    </Popover>
  );
};

export default CartDropdown;
