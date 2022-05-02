import React from 'react';
import { Form, Field } from 'react-final-form';
import { Button, TextField } from '@mui/material';
import emailValidator from '../../utils/helpers/email-validator';
import styles from './SignUp.module.scss';
import { createAuthUserEmailAndPassword } from '../../utils/firebase/firebase.utils';

const SignUp = () => {
  const required = (value) => (value ? undefined : 'Required');
  const isNameValid = (value) => (value && value.length > 2 ? undefined : 'Name must be at least 3 characters');
  const isEmailValid = (value) => (emailValidator(value) ? undefined : 'Invalid email');
  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce((error, validator) => error || validator(value), undefined);

  const onSubmit = async (values) => {
    try {
      await createAuthUserEmailAndPassword(values.email.trim(), values.password.trim());
    } catch (error) {
      console.log('user creation error', error);
      throw new Error(error);
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
          <Field name="displayName" validate={composeValidators(required, isNameValid)}>
            {({ input, meta }) => (
              <div>
                <TextField {...input} label="Display name" variant="outlined" type="text" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="email" validate={composeValidators(required, isEmailValid)}>
            {({ input, meta }) => (
              <div>
                <TextField {...input} label="Email" variant="outlined" type="email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div>
                <TextField {...input} label="Password" variant="outlined" type="password" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="confirmPassword">
            {({ input, meta }) => (
              <div>
                <TextField {...input} label="Confirm password" variant="outlined" type="password" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
          <Button type="button" disabled={submitting || pristine} onClick={form.reset}>
            Reset
          </Button>
          {/* JSON preview */}
          {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
        </form>
      )}
    />
  );
};

export default SignUp;
