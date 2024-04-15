import React, { useState, useEffect } from 'react';
import Post from './Post/Post';
import PostDisplaySettings from './PostDisplaySettings/PostDisplaySettings';
import './PostSection.css';

export default function PostSection(){
    const [posts, setPosts] = useState([]);
    const [postCount, setPostCount] = useState(10); // domyślna wartość

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
          .then((response) => response.json())
          .then((json) => setPosts(json.slice(0, postCount)));
      }, [postCount]);

    return (
        <div className="post-section">
          <PostDisplaySettings setPostCount={setPostCount} />
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
    )
}