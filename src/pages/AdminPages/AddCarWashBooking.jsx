import React from 'react'
import Sidebar from '../../components/Sidebar'
import Dashboard from './Dashboard'
import Aheader from './Aheader'

export default function AddCarWashBooking() {
  return (
    <div style={{display:'flex'}}>
      
        <div><Sidebar></Sidebar></div>
              <div style={{ margin:'20px' , width:'80%' }}>
                <Aheader></Aheader>
             
              </div>
      </div>
   
  )
}
