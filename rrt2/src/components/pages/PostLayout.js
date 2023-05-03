import React from 'react'
import { Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
    <h1> This is PostLayout</h1>
    <Outlet/>
    </>
  )
}

export default PostLayout