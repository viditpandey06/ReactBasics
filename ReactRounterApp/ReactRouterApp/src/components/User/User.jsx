import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {userid}=useParams()
    return (
    <div className='bg-gray-600 text-justify'>
    <h1 className=' text-center text-orange-600'> User:{userid}</h1>  
    </div>
  )
}

export default User