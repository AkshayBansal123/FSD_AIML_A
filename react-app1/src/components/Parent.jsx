import React from 'react'
import Child1 from './Child1'
const Parent=()=>{
    const stu={
        name:"ABC",
        age:23,
    }
    return(
        <div>
            <h1>Parent component</h1>
            <Child1 student={stu}/>
        </div>
    )
}
export default Parent