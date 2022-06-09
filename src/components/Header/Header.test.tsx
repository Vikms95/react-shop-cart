import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('check header being rendered correctly', () => {
  beforeEach(() => {
    const items = [
      { test: 'test' },
      { test1: 'test1' },
    ];
    render(
      <BrowserRouter>
        <Header
          cartItems={items}
        />
      </BrowserRouter>,
    );
  });

  it('renders 5 buttons', () => {
    expect(screen.getAllByRole('button')).toHaveLength(5);
  });

  it('renders home button', () => {
    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument();
  });

  it('renders shop button', () => {
    expect(screen.getByRole('button', { name: 'Shop' })).toBeInTheDocument();
  });
});

describe('check header functionality', () => {
  it('triggers Dropdown when dropdown button is clicked', () => {
    const mockIsClickOutside = jest.fn();
    const items = [
      { test: 'test' },
      { test1: 'test1' },
    ];
    render(
      <BrowserRouter>
        <Header
          cartItems={items}
          isClickOutside={mockIsClickOutside}
        />
      </BrowserRouter>,
    );

    const dropdownButton = screen.getByTestId('dropdown-button');
    act(() => {
      userEvent.click(dropdownButton);
    });
    expect(screen.getAllByTestId('dropdown-item')).toHaveLength(4);
  });

  it('calls isClickOutside when clicked outside of Dropdown', () => {
    const mockIsClickOutside = jest.fn();
    mockIsClickOutside
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false);

    const items = [
      { test: 'test' },
      { test1: 'test1' },
    ];
    render(
      <BrowserRouter>
        <Header
          cartItems={items}
          isClickOutside={mockIsClickOutside}
        />
      </BrowserRouter>,
    );

    const dropdownButton = screen.getByTestId('dropdown-button');

    act(() => {
      userEvent.click(dropdownButton);
    });

    expect(mockIsClickOutside).toHaveBeenCalled();
  });
});
