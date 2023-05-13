import { Alert, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { Form } from 'react-final-form';
import { CartContext } from '../../context/CartContext/cart.context';
import { UserContext } from '../../context/UserContext/user.context';
import styles from './Payment.module.scss';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotalAmount } = useContext(CartContext);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [alert, setAlert] = useState();
  const amount = cartTotalAmount * 100;
  const { currentUser } = useContext(UserContext);

  const paymentHandler = async (e) => {
    if (!stripe || !elements) {
      return;
    }
    setProcessingPayment(true);
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
    setProcessingPayment(false);

    if (paymentResult.error) {
      setAlert((prev) => ({ ...prev, message: paymentResult.error.message, error: true }));
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        setAlert((prev) => ({ ...prev, message: 'Payment succesful', error: false }));
      }
    }
  };
  return (
    <Form
      onSubmit={(e) => paymentHandler(e)}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Box p={4} ml={6} sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body" sx={{ fontWeight: 'bold', pb: 3 }}>
              Enter Credit Card Details:
            </Typography>
            <div className={styles.StripeElement}>
              <CardElement className={styles.creditCard} />
            </div>
            <Typography variant="body" sx={{ fontWeight: 'bold', pt: 3 }}>
              Pay: £{(amount / 100).toFixed(2)}
            </Typography>
            <div>
              <Button type="submit" variant="contained" sx={{ mt: 2 }} disable={processingPayment}>
                Pay
              </Button>
            </div>
            {alert && (
              <Alert sx={{ maxWidth: 300, mt: 2 }} severity={alert.error ? 'error' : 'success'}>
                {alert.message}
              </Alert>
            )}
          </Box>
        </form>
      )}
    />
  );
};

export default PaymentForm;
