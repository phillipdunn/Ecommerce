import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import GoogleAuthButton from '../../components/GoogleAuthButton/GoogleAuthButton';
import Signin from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const Authentication = () => {
  return (
    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={6} sx={{ textAlign: 'center' }}>
        <Typography variat="h2" sx={{ m: 2, fontWeight: 'bold' }}>
          Already have an account?
        </Typography>
        <Typography variat="h4" sx={{ m: 2, fontWeight: 'bold' }}>
          Sign In
        </Typography>
        <Signin />
        <GoogleAuthButton text="sign in" />
      </Grid>
      <Grid item xs={6} sx={{ textAlign: 'center' }}>
        <Typography variat="h2" sx={{ m: 2, fontWeight: 'bold' }}>
          Don't have an account?
        </Typography>
        <Typography variat="h4" sx={{ m: 2, fontWeight: 'bold' }}>
          Sign Up
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SignUp />
          <GoogleAuthButton text="sign up" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Authentication;
