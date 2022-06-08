import React from 'react';
import {
  render, screen, act,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from './Item';

test('triggers add item function the right amount of times', () => {
  const mockAddItemToCart = jest.fn();
  const mockIsItemInCart = jest.fn();

  render(<Item
    addItemToCart={mockAddItemToCart}
    isItemInCart={mockIsItemInCart}
  />);

  act(() => {
    const button = screen.getAllByRole('button', { name: 'Add to cart' });
    userEvent.hover(button[0]);
    userEvent.click(button[0]);
    userEvent.click(button[0]);
  });

  expect(mockAddItemToCart).toHaveBeenCalledTimes(2);
});
