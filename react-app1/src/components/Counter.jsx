import {useEffect, useState} from 'react'
const Counter=()=>{
    const [count,setCount]=useState(5);
    const [count1,setCount1]=useState(0);
    function handleIncrement(){
        setCount(count+1)
    }
    function handleDecrement(){
        setCount(count-1)
    }
    useEffect(()=>{
        setCount1(count*5)
    })
    return(
        <div>
       <h1>Counter: {count}</h1>
       <h2>Counter1:{count1}
       </h2>
       <button onClick={handleIncrement}>Increment</button>
       <button onClick={handleDecrement}>Decrement</button>
       <br/>
        </div>
    )
}
export default Counter;