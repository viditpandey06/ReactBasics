import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  function incrValue() {
    if (count < 20) {
      count = count + 1;
    } else {
      count = 0;
    }
    setCount(count);
  }
  function decrValue() {
    if (count > 0) {
      count = count - 1;

      setCount(count);
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold bg-cyan-300 text-black">
        Value of Counter {count}.
      </h1>
      <br />
      <button onClick={incrValue}
        type="button"
        className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Increment: {count}
      </button>
      <br />
      <br />
      <button onClick={decrValue}
        type="button"
        className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Decrement: {count}
      </button>
    </>
  );
}

export default App;
