import React from 'react';
import CommentSection from './CommentSection/CommentSection';
import './Post.css';

export default function Post({ post }) {
    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <CommentSection postId={post.id} />
        </div>
    );
}