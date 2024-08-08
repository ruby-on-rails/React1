import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Red")

  return (
    <>
   <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
   <h1 className="text-3xl font-bold underline bg-color-green">
      Hello world!
    </h1>
    <div>
      <button onClick={()=> setColor("green")}>green</button>
      <button onClick={()=> setColor("orange")}>orange</button>
      <button onClick={()=> setColor("yellow")}>yellow</button>
    </div>
   </div>
    </>
  )
}

export default App
