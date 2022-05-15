import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { signInWithPopupGoogle, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import SignUp from '../SignUp/SignUp';

const Signin = () => {
  const loginGoogleUser = async () => {
    const { user } = await signInWithPopupGoogle();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <Grid container sx={{ mt: 2 }}>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography sx={{ m: 1 }}>Sign up with Google </Typography>
          <Button variant="contained" onClick={loginGoogleUser} sx={{ mt: 2 }}>
            Google Sign Up
          </Button>
        </Box>
      </Grid>

      <Grid item xs={6}>
        <Typography sx={{ m: 2 }}>Sign up with email</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SignUp />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signin;
