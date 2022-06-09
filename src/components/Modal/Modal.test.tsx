import React from 'react';
import { render, screen } from '@testing-library/react';
import { platform } from 'os';
import Modal from './Modal';

it('renders background image', () => {
  const mockGameInfoModal = {
    title: 'test',
    rating: 'test',
    image: 'test',
    images: 'test',
    platforms: [{ platform: { name: 'test' } }],
    genres: [{ name: 'test' }],
    esrbRating: 'test',
  };
  const mockIsItemInCart = jest.fn();

  render(<Modal
    images={[0, 1, 2]}
    isItemInCart={mockIsItemInCart}
    gameInfoModal={mockGameInfoModal}
  />);

  expect(screen.getByTestId('game-info-modal')).toHaveStyle('background-image:url(undefined)');
});
