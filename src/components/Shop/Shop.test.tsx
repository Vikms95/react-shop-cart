import React from 'react';
import { render } from '@testing-library/react';
import Shop from './Shop';

test.only('renders grid of Item components with the right styling', () => {
  const component = render(<Shop />);
  expect(component
    .findByRole('region'))
    .toBeDefined();
});
