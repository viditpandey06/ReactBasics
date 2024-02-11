/**
 * The above function is a React component that generates a password based on certain criteria.
 * @returns a React component called "App".
 */
/**
 * The above function is a React component that generates a password based on certain criteria.
 */
import { useState ,useCallback,useEffect,useRef} from 'react'


function App() {
  let [length, setLength] = useState(8)
  let [number, isNumber] = useState(false)
  let [character, isCharacter] = useState(false)
  let [password, setPassword] = useState('')
  /* The code block you provided is defining two functions using React hooks. */
  const passwordRef=useRef(null)
  const passwordGenerator= useCallback(()=>{
    let passw=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="0123456789"
    console.log(str)
    if(character) str+='!@#$%^&*(){}[]:'
    for (let index = 1; index <=length; index++){
      let char=Math.floor(Math.random()*str.length+1)
      passw+=str.charAt(char)    
    }
    setPassword(passw)
  },[length,number,character,setPassword])
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[setPassword,password])
  /* The `useEffect` hook is used to perform side effects in a React component. In this case, the
  `useEffect` hook is used to call the `passwordGenerator` function whenever there is a change in
  the `length`, `number`, `character`, or `setPassword` variables. */
  useEffect(()=>{
    passwordGenerator()
  },[length,number,character,setPassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-600'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
           value={password}
           className='outline-none w-full py-1 px-3'
           placeholder='password'
           readOnly
           ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-500 text-whitepx-3 py-0.5 shrink-0' >
            
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-centre gap-x-1'>
            <input 
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> {setLength(e.target.value)}}
            />
            <label >Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                isNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                isCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
