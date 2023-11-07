
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
      <img  src={data.avatar_url} alt="img" width={300}/>
      
      <h1 className='text-center text-2xl text-orange-500'>
        <ul>
        {data.name}<br/>
        {data.id}
        </ul>
        </h1>
    </div>
  )
}

export default Github