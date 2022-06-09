import React from 'react';
import {
  render, screen, act,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from './Item';

it('triggers add item function the right amount of times', () => {
  const mockAddItemToCart = jest.fn();
  const mockIsItemInCart = jest.fn();

  render(<Item
    addItemToCart={mockAddItemToCart}
    isItemInCart={mockIsItemInCart}
  />);

  const button = screen.getAllByRole('button', { name: 'Add to cart' });

  act(() => {
    userEvent.click(button[0]);
    userEvent.click(button[0]);
  });

  expect(mockAddItemToCart).toHaveBeenCalledTimes(2);
});

it('renders cart icon when item is in cart', () => {
  const mockCartItems = [
    { test: 'test' },
  ];
  const mockAddItemToCart = jest.fn();
  const mockIsItemInCart = jest.fn();
  mockIsItemInCart.mockReturnValue(true);

  render(<Item
    cartItems={mockCartItems}
    addItemToCart={mockAddItemToCart}
    isItemInCart={mockIsItemInCart}
  />);

  expect(screen.getByTestId('display-item-in-cart'))
    .toHaveClass('display-item-in-cart show');
});

it('renders increment and decrement buttons when add button is clicked', () => {
  const mockAddItemToCart = jest.fn();
  const mockIsItemInCart = jest.fn();

  render(<Item
    addItemToCart={mockAddItemToCart}
    isItemInCart={mockIsItemInCart}
  />);

  const button = screen.getAllByRole('button', { name: 'Add to cart' });

  act(() => {
    userEvent.click(button[0]);
  });

  expect(screen.getByTestId('decrement')).toBeInTheDocument();
  expect(screen.getByTestId('increment')).toBeInTheDocument();
});
