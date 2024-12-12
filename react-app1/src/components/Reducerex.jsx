import React from 'react'
import { useReducer } from 'react';

const Reducerex = () => {
    const initialValue=0;
    const [state,dispatch]=useReducer(reducer,initialValue);
    function reducer(state,action){
    switch(action)
    {
        case "add":
            return state+1;
        case "sub":
            return state-1;
        case "reset":
          return 0;
        default:
            throw new Error("unexpected action")  

    }
    }
  return (
    <div>
      <h1>Counter:{state}</h1>
      <button onClick={()=>dispatch("add")}>Increment</button>
      <button onClick={()=>dispatch("sub")}>Decrement</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default Reducerex
