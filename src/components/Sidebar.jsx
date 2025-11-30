import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { Authentication } from '../contex/AuthContex'

export default function Sidebar() {

  const {user}=useContext(Authentication)
 

    
  return (
  
      
<div>
{user && (<nav className='sidebar'>
<ul >
<li><Link to={'/dashboard'} >Dashboard</Link> </li>
<li className='profile'><Link to={'/Washingpoints'}>Washing Points <ul className='subprofile'>
  <li><Link to={'/AddWashingPoints'}>ADD</Link></li>
  <li><Link to={'/Washingpoints'}>Manages</Link></li>
  </ul></Link> </li>
<li><Link to={'/Addbooking'}>Add Car Wash_Booking</Link></li>
<li className='profile'><Link to={'/carbookings'}>Car Washing_Booking
<ul className='subprofile'>
  <li><Link to={'/'}>New Booking</Link></li>
  <li><Link to={'/'}>Completed Booking</Link></li>
  <li><Link to={'/'}>Total Booking</Link></li>
  </ul></Link></li>
<li><Link to={'/manages_Enquiries'}>Manages_Enquiries</Link></li>
<li className='profile'><Link to={'/pages'}>pages
<ul className='subprofile'>
  <li><Link to={'/'}>Contact page</Link></li>
  <li><Link to={'/'}>About page</Link></li></ul></Link></li>
</ul>
</nav>)}

  </div>
  )
}

