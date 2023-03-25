import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('Renderer', () => {
    render(<Button className="test">Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
    expect(screen.getByRole('button')).toHaveClass('test');
  });
});
