import React from 'react'
import Child2 from './Child2'
const Child1 = ({student}) => {
  return (
    <div>
      <h2>Child 1 component</h2>
      <Child2 student={student}></Child2>
    </div>
  )
}

export default Child1
