import React from 'react'
import Sidebar from '../../components/Sidebar'


export default function WashingPoints() {

  const token=localStorage.getItem('token')
  return (
    <div style={{display:'flex'}}>
        <Sidebar></Sidebar>
        <div style={{width:'65%'}}>
            <h1>Washing points</h1>
            <h2>{token}</h2>
            
        </div>

        
      
    </div>
  )
}
