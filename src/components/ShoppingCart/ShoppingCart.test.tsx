import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';

test('renders learn react link', () => {
  render(<ShoppingCart cartItems={[]} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
