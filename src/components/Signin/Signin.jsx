import { Button } from '@mui/material';
import React from 'react';
import { signInWithPopupGoogle, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import styles from './Signin.module.scss';

const Signin = () => {
  const loginGoogleUser = async () => {
    const { user } = await signInWithPopupGoogle();
    createUserDocFromAuth(user);
  };

  return (
    <>
      <Button variant="contained" onClick={loginGoogleUser}>
        Google Sign in
      </Button>
    </>
  );
};

export default Signin;
