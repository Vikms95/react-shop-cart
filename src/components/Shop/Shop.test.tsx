import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import Shop from './Shop';

it('renders grid of Item components with the right styling', () => {
  const mockIsItemInCart = jest.fn();
  const mockFetchItems = jest.fn();
  const mockSetIsShopRendered = jest.fn();

  const items = [
    { test: 'test' },
    { test1: 'test1' },
  ];
  const component = render(
    <Shop
      items={items}
      fetchItems={mockFetchItems}
      isItemInCart={mockIsItemInCart}
      setIsShopRendered={mockSetIsShopRendered}
    />,
  );
  expect(component
    .findByRole('region'))
    .toBeDefined();
});

it('renders GameInfoModal when an Item image is clicked', () => {
  const mockIsItemInCart = jest.fn();
  const mockFetchItems = jest.fn();
  const mockSetIsShopRendered = jest.fn();

  const items = [
    { test: 'test' },
    { test1: 'test1' },
  ];

  render(<Shop
    items={items}
    fetchItems={mockFetchItems}
    isItemInCart={mockIsItemInCart}
    setIsShopRendered={mockSetIsShopRendered}
  />);

  act(async () => {
    const gameInfoButton = await screen.findByTestId('game-details-icon');
    userEvent.click(gameInfoButton);
  });
  waitFor(() => expect(screen.findByTestId('game-info-modal')).toBeInTheDocument());
});
