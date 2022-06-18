import { Button, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { signInWithPopupGoogle, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../context/UserContext/user.context';

const GoogleAuthButton = ({ text }) => {
  const { setCurrentUser } = useContext(UserContext);
  const history = useHistory();
  const loginGoogleUser = async () => {
    const { user } = await signInWithPopupGoogle();
    setCurrentUser(user);
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
