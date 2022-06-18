import { Button, Grid } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { signInWithPopupGoogle, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';

const GoogleAuthButton = ({ text }) => {
  const history = useHistory();
  const loginGoogleUser = async () => {
    const { user } = await signInWithPopupGoogle();
    history.push('/');
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
