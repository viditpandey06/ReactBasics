import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  let [amount, setAmount]=useState(0)
  let [from, setFrom] = useState("inr")
  let [to, setTo] = useState("usd")
  let [convertedAmount, setConvertedAmountmount] = useState(0)
  
  return (
    <>
      
    </>
  )
}

export default App
