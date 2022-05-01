import { Button } from '@mui/material';
import React from 'react';
import { signInWithPopupGoogle } from '../../utils/firebase/firebase.utils';
import styles from './Signin.module.scss';

const Signin = () => {
  const loginGoogleUser = async () => {
    const res = await signInWithPopupGoogle();
    console.log(res);
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
