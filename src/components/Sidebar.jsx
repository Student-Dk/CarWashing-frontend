import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { Authentication } from '../contex/AuthContex'

export default function Sidebar() {
  const {user} = useContext(Authentication)
  
  return (
    <div>
      {user && (
        <nav className='sidebar'>
          <ul>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
            
            {/* Washing Points - CORRECTED STRUCTURE */}
            <li className='profile'>
              <Link to={'/Washingpoints'}>Washing Points</Link>
              {/* Submenu should be outside Link but inside li */}
              <ul className='subprofile'>
                <li><Link to={'/AddWashingPoints'}>ADD</Link></li>
                <li><Link to={'/Washingpoints'}>Manages</Link></li>
              </ul>
            </li>
            
            <li><Link to={'/Addbooking'}>Add Car Wash Booking</Link></li>
            
            {/* Car Washing Booking - CORRECTED STRUCTURE */}
            <li className='profile'>
              <Link to={'/carbookings'}>Car Washing Booking</Link>
              {/* Submenu should be outside Link but inside li */}
              <ul className='subprofile'>
                <li><Link to={'/Newbooking'}>New Booking</Link></li>
                <li><Link to={'/completebookings'}>Completed Booking</Link></li>
                <li><Link to={'/carbookings'}>Total Booking</Link></li>
              </ul>
            </li>
            
            <li><Link to={'/manages_Enquiries'}>Manages Enquiries</Link></li>
            
            <li className='profile'>
              <Link to={'/pages'}>Pages</Link>
              {/* Submenu should be outside Link but inside li */}
              <ul className='subprofile'>
                <li><Link to={'/contact'}>Contact page</Link></li>
                <li><Link to={'/about'}>About page</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}