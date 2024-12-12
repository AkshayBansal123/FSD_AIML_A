import React from 'react'
import Child3 from './Child3'
const Child2 = ({student}) => {
  return (
    <div>
      <h1>Child2 component</h1>
      <Child3 student={student}></Child3>
    </div>
  )
}

export default Child2
