import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
 const [password,setPassword]=useState();
 const [number,setNumber]=useState(false);
 const [charactor,setCharactor]=useState(false)
 const [lengh,setLength]= useState(8)

 const generatePassword= useCallback(()=>{
var pass="";
var sting ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(number) sting+="0123456789"
if(charactor) sting+="~!@#$%^&*()_+";

for(let i=1;i<=lengh;i++){
  let randomIndex = Math.floor(Math.random() * sting.length);
  pass += sting.charAt(randomIndex);
}
setPassword(()=>pass);


 },[number,charactor,lengh,setPassword])

 useEffect(()=>{
generatePassword();
 },[number,charactor,generatePassword])

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

<div>
  <input type="text" className='' value={password} style={{border:'1px solid black'}}/>
  <button>copy</button>

</div>
<div>
  <input type="range" max={100} min={1} onChange={(e)=>setLength(()=>e.target.value)} value={lengh}   />
  <label >lengh:{lengh}</label>
  <input type="checkbox" value={number} onClick={()=>setNumber((prev)=>!prev)} />
  <label >Number</label>
  <input type="checkbox" onClick={()=>setCharactor((prev)=>!prev)}/>
  <label >charactor</label>
</div>

    </>
  )
}

export default App
