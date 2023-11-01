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
      <Card username='Tapasya' userprofile='dyebeuvbevbyevbeivbaeivbaeyfbaeyj fwfe'/>
      <Card username='Tapasya' userprofile='dyebeuvbevbyevbeivbaeivbaeyfbaeyj fwfe' link='https://images.pexels.com/photos/9076961/pexels-photo-9076961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
    </>
  )
}

export default App
