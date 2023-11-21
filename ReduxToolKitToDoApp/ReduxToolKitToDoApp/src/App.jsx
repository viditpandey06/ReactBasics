import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo/>
      <Todo/>

    </>
  )
}

export default App
