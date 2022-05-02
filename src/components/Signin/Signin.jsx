import { Button } from '@mui/material';
import React from 'react';
import { signInWithPopupGoogle, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import SignUp from '../SignUp/SignUp';
import styles from './Signin.module.scss';

const Signin = () => {
  const loginGoogleUser = async () => {
    const { user } = await signInWithPopupGoogle();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <>
      <Button variant="contained" onClick={loginGoogleUser}>
        Google Sign in
      </Button>
      <SignUp />
    </>
  );
};

export default Signin;
