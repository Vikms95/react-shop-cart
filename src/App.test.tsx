/* eslint-disable import/extensions */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

/**
 * Mostly test what the App renders when several buttons are clicked
 */

it('renders content from home when home button is clicked', () => {
  const component = render(<App />);
  const button = component.getByRole('heading', { name: 'Home' });
  userEvent.click(button);
  expect(component.getByRole('heading', { name: 'Buy your favourite games with the best price' })).toBeInTheDocument();
  expect(component.getByText('GO TO SHOP')).toBeInTheDocument();
});

it('renders content from shop when shop button is clicked', () => {
  const component = render(<App />);
  const button = component.getByRole('heading', { name: 'Shop' });
  userEvent.click(button);
  expect(component.getByRole('heading', { name: 'Game List' })).toBeInTheDocument();
});

it('renders content from shopping cart when shopping cart button is clicked', () => {
  const component = render(<App />);
  // This will break when adding more buttons
  const button = component.getAllByRole('button')[2];
  userEvent.click(button);
  expect(component.getByText('Check-out')).toBeInTheDocument();
});
