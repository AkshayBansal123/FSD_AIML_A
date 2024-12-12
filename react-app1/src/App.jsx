import { Route } from "react-router-dom"
import {Routes} from 'react-router-dom'
import Home from './components/Home'
import Counter from "./components/Counter"
import Stopwatch  from "./components/Stopwatch"
import Refx from './components/Refx'
import Parent from './components/Parent'
import Parentn from './components/Parentn'
import Reducerex from './components/Reducerex'
const App=()=>{
  return(
    <div>
  <Routes>
    <Route path="/" element={<Home/>
    }> </Route>
    <Route path="/counter" element={<Counter/>
    }> </Route>
    <Route path="/stopwatch" element={<Stopwatch/>
    }> </Route>
    <Route path="/refx" element={<Refx/>}></Route>
    
    <Route path="/contextex" element={<Parentn/>}></Route>
    <Route path="/propsdrilling" element={<Parent/>}></Route>
    <Route path="/reducerex" element={<Reducerex/>}></Route>
    <Route path="/nopage" element={<h1>No page available</h1>
    }> </Route>
  </Routes>
    </div>
  )
}
export  default App