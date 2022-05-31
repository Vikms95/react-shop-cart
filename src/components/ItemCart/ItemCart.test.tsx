import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemCart from './ItemCart';

test('renders learn react link', () => {
  render(<ItemCart />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
