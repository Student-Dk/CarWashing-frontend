import React, {  useContext, useState } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa';
import Header from '../components/Header'
import About from './About'
import Contact from './Contact'
import WashingP from './WashingP';
import WashingPlans from './WashingPlans';







export default function Home() {


const [hoveredButton, setHoveredButton] = useState(null);

  const handleButtonClick = () => {
    alert('Thank you for selecting a plan! Our booking system will open shortly.');
  };
  return (

    <div>


    <Header></Header>
    
    <div style={{display:"flex", justifyContent:'center'}}>
    <img src="HomeIm.jpg" alt="h"  style={{width:'1400px'}}/>
   
  </div>

  <About></About>
  <WashingP></WashingP>
  <WashingPlans></WashingPlans>
  

<div>




</div>
 
 
    </div>
  )
}
