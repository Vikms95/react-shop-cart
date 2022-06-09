import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from './App';

/**
 * Mostly test what the App renders when several buttons are clicked
 */

describe('render contents when general buttons are clicked', () => {
  it('renders content from home when home button is clicked', () => {
    render(<App />);
    const goToShopButton = screen.getByText('GO TO SHOP');
    act(() => {
      userEvent.click(goToShopButton);
    });

    const button = screen.getByRole('button', { name: 'Home' });
    act(() => {
      userEvent.click(button);
    });

    expect(screen.getByText('GO TO SHOP')).toBeInTheDocument();
  });

  it('renders content from shop when shop button is clicked', () => {
    render(<App />);
    const goToShopButton = screen.getByText('GO TO SHOP');
    act(() => {
      userEvent.click(goToShopButton);
    });

    const button = screen.getByRole('button', { name: 'Shop' });
    act(() => {
      userEvent.click(button);
    });

    expect(screen.getByText('Shop')).toBeInTheDocument();
  });

  it('renders content from shopping cart when shopping cart button is clicked', () => {
    render(<App />);

    const button = screen.getByTestId('cart-button');
    act(() => {
      userEvent.click(button);
    });

    expect(screen.getByRole('button', { name: 'Proceed to pay' })).toBeInTheDocument();
  });
});
