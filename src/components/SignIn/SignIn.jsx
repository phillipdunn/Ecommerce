import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Button, Grid, TextField } from '@mui/material';
import emailValidator from '../../utils/helpers/email-validator';
import { signInAuthUserEmailAndPassword } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const [formMessage, setFormMessage] = useState('');
  const required = (value) => (value ? undefined : 'Required');
  const isEmailValid = (value) => (emailValidator(value) ? undefined : 'Invalid email');
  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce((error, validator) => error || validator(value), undefined);

  const onSubmit = async (values) => {
    try {
      const { user } = await signInAuthUserEmailAndPassword(values.email, values.password);
      console.log(user);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setFormMessage('Invalid email or password');
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
                  <div>
                    <TextField {...input} label="Email" variant="outlined" type="email" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </Grid>
            <Grid item xs={12} sx={{ m: 2 }}>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <TextField {...input} label="Password" variant="outlined" type="password" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
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
