import React from 'react'
import { useParams } from 'react-router-dom'
const PostDetail = () => {
    let {category}=useParams();
  return (
    <>
        <h1> {category} -- post detail</h1>
    </>
  )
}

export default PostDetail