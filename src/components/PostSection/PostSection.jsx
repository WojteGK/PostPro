// src/components/PostSection/PostSection.jsx

import React from 'react';
import Post from './Post/Post';
import './PostSection.css';

function PostSection({ posts, postCount, range }) {
  // Filtruj posty na podstawie ilości znaków i wyświetlaj tylko określoną ilość postów
  const filteredPosts = posts
    .filter(post => post.body.length >= range.start && post.body.length <= range.end)
    .slice(0, postCount);

  return (
    <div className='post-section'>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post, index) => <Post key={index} post={post} />)
      ) : (
        <p>Nie znaleziono postów spełniających wymagania.</p>
      )}
    </div>
  );
}

export default PostSection;