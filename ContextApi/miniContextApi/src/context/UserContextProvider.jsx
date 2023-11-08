/**
 * The above code is a React component that provides a user context to its children components.
 * @returns The UserContextProvider component is being returned.
 */
import React from 'react'
import userContext from './UserContext'
import { useState } from 'react'
const UserContextProvider=({children})=>{
  const [user,setUser]=useState(null)
    return(
        <userContext.Provider value={{user,setUser}}>
        {children}
        </userContext.Provider>
    )
}
export default UserContextProvider;