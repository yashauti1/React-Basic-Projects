import React from 'react'
import { useState } from 'react'
function Card() {
    const [color,setColor]=useState("black")
  return (
    <>
    <div>
        <h1>change your color</h1>
        
    </div>
    <div className="card" style={{"backgroundColor":color}}>
       
    </div>
    <div className="buttons">
        <button id='red' onClick={()=>setColor("red")}>Red</button>
        <button id='orange'onClick={()=>setColor("orange")}>orange</button>
        <button id='yellow'onClick={()=>setColor("yellow")}>yellow</button>
        <button id='green'onClick={()=>setColor("green")}>green</button>
        <button id='blue'onClick={()=>setColor("blue")}>blue</button>
        <button id='indigo'onClick={()=>setColor("indigo")}>Indigo</button>
        <button id='violet'onClick={()=>setColor("violet")}>violet</button>

    </div>
    
    </>
  )
}

export default Card
