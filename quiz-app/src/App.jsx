import {Routes,Route} from 'react-router-dom'
import Counter from './components/Counter'
import Stopwatch from './components/Stopwatch'
import Parent from './componets/Parent'
const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/counter"element={<Counter/>}>
        </Route>
        <Route path="/" element={<h1>Home page</h1>}>
        </Route>
        <Route path="/login"element={<h1>Login page</h1>
        }>
        </Route>
        <Route path="/logout"element={<h1>Logout page
        </h1>}>
       
        </Routes>
        </div>
  )
}
export {App};