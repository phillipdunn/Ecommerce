import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext } from 'react';
import { Form } from 'react-final-form';
import { CartContext } from '../../context/CartContext/cart.context';
import { UserContext } from '../../context/UserContext/user.context';
import styles from './Payment.module.scss';
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotalAmount } = useContext(CartContext);

  const amount = cartTotalAmount * 100;
  const { currentUser } = useContext(UserContext);
  const paymentHandler = async (e) => {
    if (!stripe || !elements) {
      return;
    }
    const response = await fetch('/.netlify/functions/createPaymentIntent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser?.displayName,
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment succesful');
      }
    }
  };
  return (
    <Form
      onSubmit={(e) => paymentHandler(e)}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Box p={4} sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body" sx={{ fontWeight: 'bold', pt: 5 }}>
              Enter Credit Card Details:
            </Typography>
            <CardElement className={styles.creditCard} />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Pay
            </Button>
          </Box>
        </form>
      )}
    />
  );
};

export default PaymentForm;
