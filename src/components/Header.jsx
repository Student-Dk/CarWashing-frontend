import React, { createContext } from 'react'
import {Link, Links}from 'react-router-dom'

export const  controlheader=createContext();

export default function Header() {

  const value=10;



  return (
   
    <div>
    
    <nav style={{ color:'white', height:'80px', backgroundColor:'black',display: value?'block':'none'}}>
        
      <ul style={{display:'flex', justifyContent:"space-around"}}>
        <li><Link to="/" style={{ textDecorationLine:'none',color:'white', listStyle:'none'}}><h2>Home</h2></Link></li>
        <li><Link to="/about"  style={{ textDecorationLine:'none',color:'white', listStyle:'none'}}><h2>About</h2></Link></li>
        <li><Link to={'/register'}style={{ textDecorationLine:'none',color:'white', listStyle:'none'}}><h2>Register</h2></Link></li>
         <li><Link to={'/login'}style={{ textDecorationLine:'none',color:'white', listStyle:'none'}}><h2>Login</h2></Link></li>
         
      </ul>

    </nav>

    
    </div>
  
    
  )
}
