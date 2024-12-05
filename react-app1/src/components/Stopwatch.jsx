import React from 'react'
import {useState,useEffect} from 'react'
const Stopwatch = () => {
    const [isRunning,setisRunning]=useState(false)
    const [time,setTime]=useState(0);
    const [isvalid,setisvalid]=useState(null)
    function handleStartStop(){
        setisRunning((prev)=>!prev)
        clearInterval(isvalid(id))
    }
    function handleRestart(){
     setTime(0);
     setisRunning(false);
    }
    function timeformat(time)
    {
      const hours=Math.floor(time/3600)
      const rem=(time%3600);
      const minutes=Math.floor(rem/60)
      const seconds=rem%60;
      return `${hours}:${minutes}:${seconds}`
    }
    useEffect(()=>{
      if(isRunning)
      {
        const id=setInterval(()=>{
        setTime((time)=>(time+1))
        },1000)
        setisvalid(id);
      }
      return ()=>clearInterval(isvalid)
    },[isRunning])
  return (
    <div>
    <h1>Stopwatch app</h1>
    <h1>{timeformat(time)}</h1>
    <button onClick={handleStartStop}>{isRunning? 'stop':'start'}</button>
    <button onClick={handleRestart}>Reset</button>
    </div>
  )
}

export default Stopwatch