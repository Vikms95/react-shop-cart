import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from './Item';

test('renders learn react link', () => {
  render(<Item />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
