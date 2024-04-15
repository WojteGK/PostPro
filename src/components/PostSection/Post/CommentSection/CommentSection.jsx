import React, { useState, useEffect } from 'react';
import Comment from './Comment/Comment';

export default function CommentSection({ postId }) {
    const defaultCount = 1;
    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = useState(defaultCount); // domyślna wartość

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
          .then((response) => response.json())
          .then((json) => setComments(json.slice(0, commentCount)));
      }, [commentCount]);

    return (
        <div>
          <select defaultValue={defaultCount} onChange={(e) => setCommentCount(Number(e.target.value))}>
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="25">25</option>
          </select>
          {comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
    )
}