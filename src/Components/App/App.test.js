import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Elden Ring NPCs text', () => {
  render(<App />);
  const linkElement = screen.getByText("Elden Ring NPCs");
  expect(linkElement).toBeInTheDocument();
});
