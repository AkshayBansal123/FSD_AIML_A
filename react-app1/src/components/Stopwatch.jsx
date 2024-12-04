import React from 'react'
import {useState} from 'react'
const Stopwatch = () => {
    const [isRunning,setisRunning]=useState(false)
    function handleStartStop(){
        setisRunning((prev)=>!prev)
    }
  return (
    <div>
    <h1>Stopwatch app</h1>
    <h1>Timer</h1>
    <button onClick={handleStartStop}>{isRunning? 'stop':'start'}</button>
    <button>Reset</button>
    </div>
  )
}

export default Stopwatch