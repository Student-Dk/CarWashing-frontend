import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import About from './About'

export default function Home() {
  //   const [input,setInput]=useState("dhiraj")

  //  const count=useRef(0)

  //  useEffect(()=>{
  //    count.current=count.current+1
  //  })

  return (
    <div>
    
    <div style={{display:"flex", justifyContent:'center'}}>
    <img src="Bakgroundimgae.png" alt="h"  style={{width:'1400px'}}/>
   
  </div>

  <div> <About></About></div>
  



  {/* <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}  />
 

  <h3>{count.current}</h3> */}

    </div>
  )
}
