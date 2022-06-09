import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from './Cart';

test('renders shopping cart section with the right styles and amount', () => {
  const cartItems = [
    { image: 'item-image', title: 'item-title', amount: 3 },
  ];

  render(<Cart
    cartItems={cartItems}
  />);

  screen.getAllByAltText('item-title');
  screen.getByRole('heading', { name: 'item-title' });
  screen.getByText('3');
});
