import React, { createContext } from 'react'
import {Link, Links}from 'react-router-dom'
import './Header.css'
export const  controlheader=createContext();

export default function Header() {

  const value=10;



  return (
   
    <div>
    
    <nav className="navbar" style={{ display: value ? 'block' : 'none' }}>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Wplans">Washing Plans</Link></li>
        <li><Link to="/Wpoints">Washing Points</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
        <li><Link to="/login">admin</Link></li>
        <li><Link to="/contact">Get Appointment</Link></li>
      </ul>
    </nav>

    
    </div>
  
    
  )
}
