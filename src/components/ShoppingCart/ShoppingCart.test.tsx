import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';

test('renders shopping cart section with the right styles', () => {
  const cartItems = [
    { image: 'item-image', title: 'item-title', amount: 3 },
  ];

  render(<ShoppingCart
    cartItems={cartItems}
  />);

  screen.getAllByAltText('item-title');
  screen.getByRole('heading', { name: 'item-title' });
  // screen.getByText('3');
});
