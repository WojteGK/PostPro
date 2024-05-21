// src/App.jsx

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import PostSection from './components/PostSection/PostSection';
import PostDisplaySettings from './components/PostSection/PostDisplaySettings/PostDisplaySettings';

function App() {
  const [postCount, setPostCount] = useState(10);
  const [range, setRange] = useState({ start: '1', end: '10000' });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handleRangeChange = (start, end) => {
    setRange({ start: start ? parseInt(start) : '', end: end ? parseInt(end) : '' });
  };

  return (
    <div className='App'>
      <Navbar onRangeChange={handleRangeChange} />
      <PostDisplaySettings setPostCount={setPostCount} />
      <PostSection posts={posts} postCount={postCount} range={range} />
    </div>
  );
}

export default App;