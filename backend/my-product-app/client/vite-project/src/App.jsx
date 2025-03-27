import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Viewusers from './components/Viewusers'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<h1>Home</h1>}>
          </Route>
          <Route  path="/viewusers" element={<Viewusers/>}>
          </Route>
          <Route  path="*" element={<h1>Error</h1>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

