import React, { useContext } from 'react'
import Header from '../components/Header'
import { controlheader } from '../components/Header'

export default function About() {
  const data=useContext(controlheader)
  return (
    <div>
  
    <div>
      
      {/* <h2>This is about page</h2> */}
     

      <img src="Aboutimage.png" alt="" />
      <h1>{data}</h1>
      
    </div>
    </div>
  )
}
