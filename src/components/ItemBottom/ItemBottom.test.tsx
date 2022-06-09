import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ItemBottom from './ItemBottom';

it('triggers increment function increment button is clicked', () => {
  const mockCartItems = [{
    title: 'test',
  }];
  const mockIncrementItem = jest.fn();
  const mockIsItemInCart = jest.fn();
  mockIsItemInCart.mockReturnValue(true);

  render(<ItemBottom
    title="test"
    cartItems={mockCartItems}
    incrementItem={mockIncrementItem}
    isItemInCart={mockIsItemInCart}
  />);

  const incButton = screen.getByTestId('increment');

  act(() => {
    userEvent.click(incButton);
    userEvent.click(incButton);
  });

  expect(mockIncrementItem).toHaveBeenCalledTimes(2);
});

it('triggers decrement function decrement button is clicked', () => {
  const mockCartItems = [{
    title: 'test',
  }];
  const mockDecrementItem = jest.fn();
  const mockIsItemInCart = jest.fn();
  mockIsItemInCart.mockReturnValue(true);

  render(<ItemBottom
    title="test"
    cartItems={mockCartItems}
    decrementItem={mockDecrementItem}
    isItemInCart={mockIsItemInCart}
  />);

  const decButton = screen.getByTestId('decrement');

  act(() => {
    userEvent.click(decButton);
    userEvent.click(decButton);
  });

  expect(mockDecrementItem).toHaveBeenCalledTimes(2);
});
