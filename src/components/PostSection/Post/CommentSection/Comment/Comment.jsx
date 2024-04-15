import React from 'react'

export default function  () {
   const profilePicture = "";
   const name = "";
   const commentContent = "";
   const time = "";
  return (
   <div className="comment">
      <img src={profilePicture} alt="Profile Picture" className="profile-picture" />
      <div className="comment-details">
         <h3 className="name">{name}</h3>
         <p className="content">{commentContent}</p>
         <span className="time">{time}</span>
      </div>
   </div>
  )
}
