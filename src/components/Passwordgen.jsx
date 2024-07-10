import React from 'react'
import { useState, useCallback , useEffect, useRef} from 'react'


function Passwordgen() {

const[length, setLength] = useState(8)
const[numberAllowed, setNumberAllowed] = useState(false)
const[characterAllowed, setCharacterAllowed] = useState(false)
const[password, setPassword] = useState("") 


const passwordRef=useRef(null)
const copypasswordtoclipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
},[password])

const passwordgenerator= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(characterAllowed) str+="@#$%^&*{}!~"

    for( let i=0; i<= length ; i++){
        let char= Math.floor(Math.random() * str.length+1) 
         pass += str.charAt(char)
    }
    
    setPassword(pass)
},[length,numberAllowed,characterAllowed,setPassword]);



useEffect(()=>{
    passwordgenerator();
},[length,numberAllowed,characterAllowed,passwordgenerator])

  return (
   <>
    <div className="password">
        <h1>password generator</h1>
        <input className='passin' type="text" value={password} placeholder='password' ref={passwordRef} readOnly />
        <button className='copy' onClick={copypasswordtoclipboard}>copy</button>
        <div className="range">
        <input type="range" min={8} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}}/> 
        <label className='label3' htmlFor="length">Length{length}</label>
        <input className='checkbox' type="checkbox" value={false}  defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev);}}/><label className='label1' htmlFor="number">Number</label>
        <input className='checkbox' type="checkbox" value={false}   defaultChecked={numberAllowed} onChange={()=>{setCharacterAllowed((prev)=>!prev);}} /><label className='label2' htmlFor="characters">Characters</label>
        </div>
    </div>
    
    </>
  )
}

export default Passwordgen
