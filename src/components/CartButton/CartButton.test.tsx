/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React from 'react';
import { render, screen } from '@testing-library/react';
import CartButton from './CartButton';

test('renders learn react link', () => {
  render(<CartButton />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
