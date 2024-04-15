import React from 'react'

export default function CommentSection() {
   const numberOfComments = 5;
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
