import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
<Card username="manish" btnText="click me"/>
    </>
  )
}

export default App
