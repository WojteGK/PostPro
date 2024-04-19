import React from 'react'

export default function Photo({source}, {alt}) {
  return (
      <div>
         <img src={source} alt={alt}></img>
      </div>
  )
}
