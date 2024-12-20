import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //     Value,  Function
  const [count, setCount] = useState(0) //Count = 0

  const increaseCount = () => {
    setCount(count+1)
  }

  return (
    <>
      <div className="card">
        {/* <button onClick={() => setCount(count + 1)}> */}
        <button onClick={increaseCount}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
