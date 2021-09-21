import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bulls & Cows', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bulls & Cows/i);
  expect(linkElement).toBeInTheDocument();
});
