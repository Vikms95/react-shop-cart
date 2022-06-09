import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import ItemTop from './ItemTop';

it('renders add button when item is not in cart', () => {
  const mockAddItemToCart = jest.fn();
  const mockIsItemInCart = jest.fn();
  mockIsItemInCart.mockReturnValue(false);

  render(<ItemTop
    isItemInCart={mockIsItemInCart}
    addItemToCart={mockAddItemToCart}
  />);

  expect(screen.getByText('Add to cart')).toBeInTheDocument();
});

it('renders remove button when item is in cart', () => {
  const mockAddItemToCart = jest.fn();
  const mockIsItemInCart = jest.fn();
  mockIsItemInCart.mockReturnValue(true);

  render(<ItemTop
    isItemInCart={mockIsItemInCart}
    addItemToCart={mockAddItemToCart}
  />);

  expect(screen.getByText('Remove')).toBeInTheDocument();
});
