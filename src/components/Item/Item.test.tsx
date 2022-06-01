import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from './Item';

test.only('renders learn react link', () => {
  render(<Item />);
  const button = screen.getByRole('button', { name: '+' });
  userEvent.click(button);
  screen.getByText('0');
});
