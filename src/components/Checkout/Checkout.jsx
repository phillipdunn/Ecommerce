import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext/cart.context';
import PaymentForm from '../PaymentForm';

const Checkout = () => {
  const { addItemToCart, cartItems, cartTotalAmount, clearItemFromCart, removeItemFromCart } = useContext(CartContext);

  return (
    <>
      <Box p={3}>
        <TableContainer component={Paper}>
          <Table aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Qunatity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="item">
                    <img width="200px" src={item.imageUrl} alt={`${item.name}`} />
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">
                    <FontAwesomeIcon icon={faChevronLeft} onClick={() => removeItemFromCart(item)} />
                    {item.quantity}
                    <FontAwesomeIcon icon={faChevronRight} onClick={() => addItemToCart(item)} />
                  </TableCell>
                  <TableCell align="right">£{item.price * item.quantity}</TableCell>
                  <TableCell align="right">
                    <Box onClick={() => clearItemFromCart(item)} sx={{ cursor: 'pointer' }}>
                      X
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={3}></TableCell>
                <TableCell align="right">Total: </TableCell>
                <TableCell align="right">£{cartTotalAmount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <PaymentForm />
    </>
  );
};

export default Checkout;
