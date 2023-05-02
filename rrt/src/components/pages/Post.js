import React from 'react'
import { useParams,useSearchParams } from 'react-router-dom'
const Post = () => {
    let {category}=useParams()
    let [searchParams,setSearchParams]=useSearchParams()
    console.log(searchParams.get('price'))
  return (
    <>
    <h1>Post Page {category}</h1> 
    </>
  )
}

export default Post