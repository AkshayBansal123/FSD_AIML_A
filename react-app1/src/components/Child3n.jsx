import React,{useContext} from 'react'
import {StudentContext} from './Parentn'
const Child3n = () => {
    const student=useContext(StudentContext)
  return (
    <div>
      <h1>Child3n component</h1>
      <h2>{student.name}</h2>
      <h3>{student.age}</h3>
    </div>
  )
}

export default Child3n
