import React from 'react'
import './Comment.css';

export default function Comment({ comment }) {
   const { name, email, body } = comment;

  return (
   <div className="comment">
      <div className="comment-details">
         <p className="email" >User mail: {email}</p>
         <h3 className="name">User name: {name}</h3>
         <p className="content">{body}</p>
      </div>
   </div>
  )
}