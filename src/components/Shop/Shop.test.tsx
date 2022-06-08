import React from 'react';
import { render } from '@testing-library/react';
import Shop from './Shop';

test.only('renders grid of Item components with the right styling', () => {
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
