import React from 'react';
import { render } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';

test('renders shopping cart section with the right styles', () => {
  const cartItems = [
    { image: 'hello', title: 'bye' },
  ];
  const container = render(<ShoppingCart cartItems={cartItems} />);
  expect(container.findByRole('regin')).toBeDefined();
});
