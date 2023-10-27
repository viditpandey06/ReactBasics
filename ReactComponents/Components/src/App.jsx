import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card username='Windows' userprofile='This is a eample for object destructuring but for windows'/>
      <Card username='Linux' userprofile='This is a eample for object destructuring but for Linux' />
    </>
  )
}

export default App
