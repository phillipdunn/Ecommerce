import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Elements } from '@stripe/react-stripe-js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext/user.context';
import { ProductProvider } from './context/ProductContext/product.context';
import { CartProvider } from './context/CartContext/cart.context';
import { stripePromise } from './utils/stripe/stripe';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
