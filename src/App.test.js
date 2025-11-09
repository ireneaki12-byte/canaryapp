// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders school heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /chemelil sugar primary school/i })
  ).toBeInTheDocument();
});

test('renders Contact Us link', () => {
  render(<App />);
  expect(
    screen.getByRole('link', { name: /contact us/i })
  ).toBeInTheDocument();
});

