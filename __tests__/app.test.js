// __tests__/app.test.js

import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from '../src/App';

jest.mock('axios');

test('fetches posts from an API and displays them', async () => {
  const posts = [
    { id: 1, title: 'Post 1', body: 'This is the first post.' },
    { id: 2, title: 'Post 2', body: 'This is the second post.' },
  ];

  axios.get.mockResolvedValueOnce({ data: posts });

  render(<App />);

  // Wait for the posts to be displayed
  await waitFor(() => screen.getByText('Post 1'));

  // Check that the posts are displayed
  expect(screen.getByText('Post 1')).toBeInTheDocument();
  expect(screen.getByText('Post 2')).toBeInTheDocument();
});