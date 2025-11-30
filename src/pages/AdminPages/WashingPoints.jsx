import React, { useContext } from 'react'
import Sidebar from '../../components/Sidebar'
import Aheader from './Aheader'
import Afooter from './Afooter'
import { Link } from 'react-router-dom'
import { Authentication } from '../../contex/AuthContex'


export default function WashingPoints() {

  const {message,user}=useContext(Authentication)
 
  return (
    <div style={{display:'flex', width:'100%'}}>
        <div>{user&&<Sidebar></Sidebar>}</div>


      {message && <p>{message}</p>}
      {user && (

       <div style={{ margin:'20px' , width:'80%' }}>
        <Aheader></Aheader>
        
        <nav style={{width:'100%', backgroundColor:'white',alignContent:'center',marginTop:'20px',  border:'2px solid gray',padding:'10px'}}>
            <p style={{fontSize:'18px', marginLeft:'10px'}}><Link to={'/dashboard'} style={{cursor:'pointer', textDecoration:'none',color:'black'}}>Home</Link>/
           <Link to={'/Washingpoints'} style={{cursor:'pointer', textDecoration:'none',color:'black'}}>Manages Washing points</Link>
            </p>
          </nav>

<h3 style={{marginTop:'50px'}}>Manage Washing Points</h3>




      
       </div>
       )}

        
      
    </div>
  )
}
