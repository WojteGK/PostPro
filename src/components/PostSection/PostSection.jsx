import React from 'react'
import Post from './Post/Post';
import PostDisplaySettings from './PostDisplaySettings/PostDisplaySettings';

export default function PostSection(){
    return(
        <>
            <PostDisplaySettings />
            <Post />
        </>
    )
}