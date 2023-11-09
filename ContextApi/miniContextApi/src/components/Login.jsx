/**
 * The Login component is a form that allows users to enter their username and password and submit the
 * form.
 * @returns The Login component is being returned.
 */
import React from 'react'
import { useState,useContext } from 'react'
import userContext from '../context/UserContext'
function Login() {
   const [username, setusername] = useState('')
   const [password, setpassword] = useState('')
   const { setUser } = useContext(userContext)
   const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
   }
    return (
    <div>
        Login  
        <input className='m-4' type="text"
         value={username}
         onChange={(e)=>{
            setusername(e.target.value)
         }}
         placeholder='username' 
         />
        <input type="text"
                value={password}
                onChange={(e) => {
                    setpassword(e.target.value)
                }} 
                placeholder='password' 
                />
        <button onClick={handleSubmit}> Submit</button>
    </div>
  )
}

export default Login