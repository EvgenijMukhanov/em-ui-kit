import React from "react"
import { render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
  describe('render', () => {
    test('defauil', () => {
      render(<Button className="test">Click me</Button>)
      const button = screen.getByText('Click me')
      expect(button.classList.contains('test')).toBeTruthy()
    })
  })
})