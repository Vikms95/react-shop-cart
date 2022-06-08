import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

it('sets homepage as rendered', () => {
  const mockSetIsHomePageRendered = jest.fn();
  render(
    <BrowserRouter>
      <HomePage
        setIsHomePageRendered={mockSetIsHomePageRendered}
      />
    </BrowserRouter>,
  );
  expect(mockSetIsHomePageRendered).toBeCalledTimes(1);
});

it('renders the logo', () => {
  const mockSetIsHomePageRendered = jest.fn();
  render(
    <BrowserRouter>
      <HomePage
        setIsHomePageRendered={mockSetIsHomePageRendered}
      />
    </BrowserRouter>,
  );
  expect(screen.getByText('VGKeys')).toBeInTheDocument();
});

it('renders and plays the video', () => {
  const mockSetIsHomePageRendered = jest.fn();
  render(
    <BrowserRouter>
      <HomePage
        setIsHomePageRendered={mockSetIsHomePageRendered}
      />
    </BrowserRouter>,
  );
  expect(screen.getByTestId('hero-video')).toBeInTheDocument();
  expect(screen.getByTestId('hero-video')).toHaveAttribute('autoPlay');
});
