import { render, screen } from '@testing-library/react';
import App from '../../pages/App';
import React from 'react';
import store from '../../store';
import { Provider } from 'react-redux';

test('renders learn react link', () => {
  render(
      <Provider store={store}>
        <App />
      </Provider>
      );
  const linkElement = screen.getByText(/TODO/i);
  expect(linkElement).toBeInTheDocument();
});
