import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from './Item';

test('triggers add item function once', () => {
  const mockAddItemToCart = jest.fn();
  render(<Item addItemToCart={mockAddItemToCart} />);

  const button = screen.getByRole('button', { name: '+' });
  userEvent.click(button);
  expect(mockAddItemToCart).toHaveBeenCalledTimes(1);
});
