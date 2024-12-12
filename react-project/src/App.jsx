import React from 'react'
import {Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>}></Route>
        <Route path="" element={<h1>Login page</h1>}></Route>
        <Route path="" element={<h1>Registration page</h1>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  )
}

export default App
