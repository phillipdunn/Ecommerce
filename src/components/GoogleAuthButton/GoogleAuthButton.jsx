import { Button, Grid } from '@mui/material';
import React from 'react';
import { signInWithPopupGoogle, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';

const GoogleAuthButton = ({ text }) => {
  const loginGoogleUser = async () => {
    const { user } = await signInWithPopupGoogle();
    await createUserDocFromAuth(user);
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={{ m: 2 }}>
        <Button variant="contained" onClick={loginGoogleUser}>
          Google {text}
        </Button>
      </Grid>
    </Grid>
  );
};

export default GoogleAuthButton;
