import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Box, Button, Grid, TextField } from '@mui/material';
import emailValidator from '../../utils/helpers/email-validator';
import { createAuthUserEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';

const SignUp = () => {
  const [formMessage, setFormMessage] = useState('');

  const required = (value) => (value ? undefined : 'Required');
  const isNameValid = (value) => (value && value.length > 2 ? undefined : 'Name must be at least 3 characters');
  const isEmailValid = (value) => (emailValidator(value) ? undefined : 'Invalid email');
  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce((error, validator) => error || validator(value), undefined);

  const onSubmit = async (values) => {
    try {
      const { user } = await createAuthUserEmailAndPassword(values.email.trim(), values.password.trim());
      await createUserDocFromAuth(user, { displayName: values.displayName.trim() });
      setFormMessage(`New user ${values.displayName} created`);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setFormMessage('Email already in use');
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
        if (values.password && values.password.length < 6) {
          errors.password = 'Password must be at least 6 characters';
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = 'Please confirm Password';
        } else if (values.confirmPassword !== values.password) {
          errors.confirmPassword = 'Passwords must match';
        }
        return errors;
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ m: 3 }}>
              <Field name="displayName" validate={composeValidators(required, isNameValid)}>
                {({ input, meta }) => (
                  <Grid container direction="column">
                    <Grid item>
                      <TextField {...input} label="Display name" variant="outlined" type="text" />
                    </Grid>
                    <Grid item sx={{ pt: 1, pb: 0, color: 'red' }}>
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Grid>
                  </Grid>
                )}
              </Field>
            </Grid>
            <Grid item xs={12} sx={{ m: 2 }}>
              <Field name="email" validate={composeValidators(required, isEmailValid)}>
                {({ input, meta }) => (
                  <Grid container direction="column">
                    <Grid item>
                      <TextField {...input} label="Email" variant="outlined" type="email" />
                    </Grid>
                    <Grid item sx={{ pt: 1, pb: 0, color: 'red' }}>
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
                    <Grid item sx={{ pt: 1, pb: 0, color: 'red' }}>
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Grid>
                  </Grid>
                )}
              </Field>
            </Grid>
            <Grid item xs={12} sx={{ m: 2 }}>
              <Field name="confirmPassword">
                {({ input, meta }) => (
                  <Grid container direction="column">
                    <Grid item>
                      <TextField {...input} label="Confirm password" variant="outlined" type="password" />
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
                Submit
              </Button>
              <Button
                type="button"
                disabled={submitting || pristine}
                onClick={form.reset}
                sx={{ border: 'solid 2px grey', p: 0.5, m: 1 }}
              >
                Reset
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ mx: 2 }}>
              {formMessage && (
                <Box sx={{ color: formMessage === 'Email already in use' ? 'red' : 'green' }}>{formMessage}</Box>
              )}
            </Grid>
          </Grid>
          {/* JSON preview */}
          {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
        </form>
      )}
    />
  );
};

export default SignUp;
