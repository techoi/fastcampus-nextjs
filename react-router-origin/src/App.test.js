import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import App from './App';

test('renders learn react link', () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});
