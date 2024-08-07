import { useState } from 'react'
import './App.css'

function App() {
var [count,setCount]= useState(15)
const decress=()=>{
  if(count>0){
    setCount(()=>count--)
  }
}
const incress=()=>{

  setCount(()=>count++) 
  console.log(count,'count')
}
  return (
    <>
    <h1>Chai</h1>

<p>Count:{count}</p>
<button onClick={decress}>decress</button>
<button onClick={incress}>increase</button>

    </>
  )
}

export default App
