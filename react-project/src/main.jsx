import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App /></BrowserRouter>
    
  </StrictMode>
)
import React from 'react'
import {useState} from 'react'

export const Login = () => {
  const [email,setEmail]=useState();
  const[password,setPassword]=useState();
  function validate(e){
    e.preventDefault();
    if(regData.email == email && regData.password ==password)
  }
  return (
    <div>
        <h1>Login Page</h1>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" >
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPasswo…
import React from 'react'
import useState

export const Login = () => {
  const [email,setEmail]=useState();
  const[password,setPassword]=useState();
  function validate(e){
    e.preventDefault();
    if(regData.email == email && regData.password ==password)
  }
  return (
    <div>
        <h1>Login Page</h1>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" >
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
LOGIN.JSX
import React from 'react'
import Header from'./Header'
import Footer from './Footer'
import {Link,Outlet} from 'react-router-dom'
import '../App.css'

const Home = () => {
    return (
        <div>
            <Header/>
            <nav>
                <ul>
                    <li>
                        <link to ="/login">Login</link>
                    </li>
                    <li>
                    <link to ="/register">Regisrer Here</link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
            <Footer/>
        </div>
    )
}
HOME.JSX
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Browser App/>
    <App />
  </StrictMode>,
)

