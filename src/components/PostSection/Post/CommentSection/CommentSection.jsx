import React from 'react'
import Comment from './Comment/Comment'

export default function CommentSection() {
   const numberOfComments = "";
  return (
         <>
            {Array.from({ length: numberOfComments }, (_, index) => (
               <div key={index} className="comment">
                  {Comment()}
                  <p>Comment {index + 1}</p>
               </div>
            ))}
         </>
  )
}
