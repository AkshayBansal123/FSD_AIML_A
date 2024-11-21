import React from 'react'
import {useState} from 'react'
const Counter=()=>{
    const Array=useState(0);
    //const count=Array[0];
    //const setCount=Array[1];
    const [count,setCount]=useState(0);
    function handleIncrease()
    {
        setCount(count+1);
    }
    function handleDecrease()
    {
        setCount(count-1);
    }
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}
export default Counter