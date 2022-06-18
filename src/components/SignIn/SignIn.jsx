import React, { useState, useContext } from 'react';
import { Form, Field } from 'react-final-form';
import { Button, Grid, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';
import emailValidator from '../../utils/helpers/email-validator';
import { signInAuthUserEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../context/UserContext/user.context';

const SignIn = () => {
  const [formMessage, setFormMessage] = useState('');
  const { setCurrentUser } = useContext(UserContext);
  const history = useHistory();

  const required = (value) => (value ? undefined : 'Required');
  const isEmailValid = (value) => (emailValidator(value) ? undefined : 'Invalid email');
  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce((error, validator) => error || validator(value), undefined);

  const onSubmit = async (values) => {
    try {
      const { user } = await signInAuthUserEmailAndPassword(values.email, values.password);
      setCurrentUser(user);
      history.push('/');
    } catch (error) {
      switch (error) {
        case 'auth/user-not-found':
          setFormMessage('User not found');
          break;
        case 'auth/wrong-password':
          setFormMessage('Incorrect password');
          break;
        default:
          setFormMessage('Unkonwn error');
          break;
      }
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.password) {
          errors.password = 'Password required';
        }
        return errors;
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ m: 2 }}>
              <Field name="email" validate={composeValidators(required, isEmailValid)}>
                {({ input, meta }) => (
                  <Grid container direction="column">
                    <Grid item>
                      <TextField {...input} label="Email" variant="outlined" type="email" />
                    </Grid>
                    <Grid item sx={{ color: 'red', pt: 1, pb: 0 }}>
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Grid>
                  </Grid>
                )}
              </Field>
            </Grid>
            <Grid item xs={12} sx={{ m: 2 }}>
              <Field name="password">
                {({ input, meta }) => (
                  <Grid container direction="column">
                    <Grid item>
                      <TextField {...input} label="Password" variant="outlined" type="password" />
                    </Grid>
                    <Grid item sx={{ color: 'red', pt: 1, pb: 0 }}>
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Grid>
                  </Grid>
                )}
              </Field>
            </Grid>
            <Grid item xs={12} sx={{ m: 2 }}>
              <Button type="submit" disabled={submitting} sx={{ background: 'black', color: 'white' }}>
                Email Sign In
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ mx: 2 }}>
              {formMessage && <span>{formMessage}</span>}
            </Grid>
          </Grid>
          {/* JSON preview */}
          {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
        </form>
      )}
    />
  );
};

export default SignIn;
