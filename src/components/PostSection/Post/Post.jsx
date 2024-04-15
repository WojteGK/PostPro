import React from 'react';
import CommentSection from './CommentSection/CommentSection';

export default function Post({ post }) {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <CommentSection postId={post.id} />
        </div>
    );
}