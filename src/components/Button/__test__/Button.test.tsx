import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('Button', () => {
  test('Render the Button', () => {
    render(<Button text='Hello World' />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Hello World');
  });
});
