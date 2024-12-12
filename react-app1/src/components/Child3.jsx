import React from 'react'
const Child3 = ({student}) => {
  return (
    <div>
        <h1>Child 3 component</h1>
      <h1>{student.name}</h1>
      <h1>{student.age}</h1>
    </div>
  )
}

export default Child3
