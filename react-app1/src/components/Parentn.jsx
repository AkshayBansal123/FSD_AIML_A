import React,{createContext} from 'react'
import Child1n from './Child1n'
const StudentContext=createContext();
const Parentn = () => {
    const stu={
        name:"XYZ",
        age:25
    }
  return (
    <StudentContext.Provider value={stu}>
    <div>
      <h1>Parent Component</h1>
      <Child1n/>
    </div>
    </StudentContext.Provider>
  )
}
export {StudentContext}
export default Parentn
