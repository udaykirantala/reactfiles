import React from 'react'
import './App.css'
import Logo from "./assets/logo.png"
import Conditions from './Conditions'

function App() {
   const login=true;
  return (
    <header>
        <img src={Logo} alt="logo"/>
        <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>My Account</li>
            <li>Compare</li>
            <Conditions/>
            <li style={{display:login?'block':'none'}}>Login</li>
        </ul>
    </header>
  )
}

export default App
