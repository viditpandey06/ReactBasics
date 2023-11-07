
import { useState,useEffect } from 'react'
function Github() {
  let [data,setData]=useState([])
  useEffect(() => {
  fetch('https://api.github.com/users/viditpandey06')
  .then(response => response.json())
  .then(data=>{
    setData(data)
  })
  }, [])
  
  
  
  
  return (
    <div className='text-center m-4 bg-slate-600 p-4 text-3xl text-white'>Github Followers:{data.followers}
      <img className='' src={data.avatar_url} alt="img" width={300}/>
    </div>
  )
}

export default Github