import React from 'react';
import { render } from '@testing-library/react';
import SignIn from './SignIn';

describe('SignIn tests', () => {
  it('should render', () => {
    expect(render(<SignIn />)).toBeTruthy();
  });
});
