import React from 'react'
import { useLocation } from 'react-router-dom'
const Logout = () => {
    let location=useLocation()
  return (
    <>
        <h1>Logout Page</h1>
        <h2>{location.state.data}</h2>
    </>
  )
}

export default Logout