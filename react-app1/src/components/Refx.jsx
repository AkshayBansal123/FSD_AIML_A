import React from 'react'
import {useRef,useState} from 'react'
const Refx=()=>{
    const count=useRef(0);
 
    console.log("object rendered")
    function increment(){
        count.current++;
        console.log(count.current)
    }
    return(
        <div>
            <h1>Ref Counter: {count.current}</h1>
          
            <button onClick={increment}>Incrementbutton</button>
        </div>
    )
}
export default Refx