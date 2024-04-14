import React from 'react'
import CommentSection from './CommentSection';


export default function Post() {
   const img_source = "";
  return (
    <div>
         {/* User Profile */}
         <div className="user-profile">
            {/* User Profile Image */}
            <img src={img_source} alt="User Profile" />
            {/* User Name */}
            <h3>User Name</h3>
         </div>

         {/* Post Content */}
         <div className="post-content">
            {/* Post Text */}
            <p>Post Content</p>
            {/* Included Photos */}
            <img src="photo1.jpg" alt="Photo 1" />
            <img src="photo2.jpg" alt="Photo 2" />
         </div>

         {/* Comment Section */}
         <CommentSection />
    </div>
  )
}
