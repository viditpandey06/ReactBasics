/**
 * The Login component is a form that allows users to enter their username and password and submit the
 * form.
 * @returns The Login component is being returned.
 */
import React from 'react'
import { useState,useContext } from 'react'
import userContext from '../context/UserContext'
function Login() {
   const [username, setusername] = useState('Vidit')
   const [password, setpassword] = useState('0000')
   const { setUser } = userContext(useContext)
   const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
   }
    return (
    <div>
        Login
        <input type="text"
         value={username}
         onChange={()=>{
            setusername(e.target.value)
         }}
         placeholder='username' 
         />
        <input type="text"
                value={password}
                onChange={() => {
                    setpassword(e.target.value)
                }} 
                placeholder='password' 
                />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login