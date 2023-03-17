import React from 'react';
import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  describe('default', () => {
    test('render', () => {
      render(<Button className="test">Click me</Button>);
      const button = screen.getByText('Click me');
      expect(button).toBeTruthy();
    });
    test('apply props', () => {
      render(<Button className="test">Click me</Button>);
      const button = screen.getByText('Click me');
      expect(button.classList.contains('test')).toBeTruthy();
    });
  });
});
