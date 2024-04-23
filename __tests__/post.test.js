// __tests__/post.test.js

import { render, screen } from '@testing-library/react';
import Post from '../src/components/PostSection/Post/Post';

test('displays post title and body', () => {
  const post = { id: 1, title: 'Post 1', body: 'This is the first post.' };

  render(<Post post={post} />);

  // Check that the post title and body are displayed
  expect(screen.getByText('Post 1')).toBeInTheDocument();
  expect(screen.getByText('This is the first post.')).toBeInTheDocument();
});