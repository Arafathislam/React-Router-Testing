import { useNavigate } from "react-router-dom"
import React  from 'react'

const Dashbord = () => {
  let navigate=useNavigate()
  let data={
    'data':'Arafath'
  }
  return (
    <>
        <h1>DashBord Page</h1>
        <button onClick={()=>{
          navigate("/logout" ,{state:data})
        }}>Logout</button>
    </>
  )
}

export default Dashbord