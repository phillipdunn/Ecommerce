import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  signInWithPopupGoogle,
  signInWithRedirectGoogle,
  createUserDocFromAuth,
  auth,
} from '../../utils/firebase/firebase.utils';
import styles from './Signin.module.scss';

const Signin = () => {
  useEffect(async () => {
    const res = await getRedirectResult(auth);
    if (res) {
      const userDocRef = await createUserDocFromAuth(res.user);
    }
  }, []);

  const loginGoogleUser = async () => {
    const { user } = await signInWithPopupGoogle();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <>
      <Button variant="contained" onClick={loginGoogleUser}>
        Google Sign in
      </Button>
      <Button variant="contained" onClick={signInWithRedirectGoogle}>
        Google Sign in redirect
      </Button>
    </>
  );
};

export default Signin;
