import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className='err-style'>
      <h1>OOPS!</h1>
      <h2>Error 404 : Page Not Found</h2>
      <button onClick={()=> navigate("/")} className='go-back'>Go Back</button>
    </div>
  )
}

export default Error
