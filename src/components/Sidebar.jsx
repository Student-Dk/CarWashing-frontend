import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar() {

 

    
  return (
  
      

<nav className='sidebar'>
<ul >
<li><Link to={'/dashboard'} className='link'>Dashboard</Link> </li>
<li><Link to={'/Washingpoints'}> Washing_Points</Link> </li>
<li><Link to={'/Addbooking'}>Add Car Wash_Booking</Link></li>
<li><Link to={'/carbookings'}>Car Washing_Booking</Link></li>
<li><Link to={'/manages_Enquiries'}>Manages_Enquiries</Link></li>
<li><Link to={'/pages'}>pages</Link></li>
</ul>
</nav>

  
  )
}

