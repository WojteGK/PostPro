import React, { useState, useEffect } from 'react';
import CommentSection from './CommentSection/CommentSection';

export default function Post() {
  // Stałe przechowujące pobrane dane z API
  const [postContent, setPostContent] = useState('');
  const [photoUrls, setPhotoUrls] = useState([]);
  const [comments, setComments] = useState([]);

  return (
    <div>
      {/* Post Content */}
      <div className="post-content">
        {/* Post Text */}
        <p>{postContent}</p>
        {/* Included Photos */}
        {photoUrls.map((photoUrl, index) => (
          <img key={index} src={photoUrl} alt={`Photo ${index + 1}`} />
        ))}
      </div>

      {/* Comment Section */}
      <CommentSection comments={comments} />
    </div>
  );
}

