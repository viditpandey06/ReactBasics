import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold underline bg-cyan-300 text-fuchsia-600'>
        This is the h1 tag.
      </h1>
    </>
  )
}

export default App
