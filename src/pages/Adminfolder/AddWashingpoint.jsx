import React, {  useContext, useState } from 'react'// 
import axios from 'axios'//api call ke liye iska use kiya hai
import Sidebar from '../../components/Sidebar'//side bar ko import kiya
import Aheader from '../AdminPages/Aheader'//admin ka header hai

import './AWP.css'
import { useNavigate } from 'react-router-dom'
import { Authentication } from '../../contex/AuthContex'

export default function AddWashingpoint() {

  const {user}=useContext(Authentication)
  const navigate=useNavigate()
  
const [form,setform]=useState({
  Car_Washing_Point_Name:"",
  Address:"",
  Contact_No:""
})
const token = localStorage.getItem("token")

const handlechange=(e)=>{

const {name,value}=e.target
setform({...form,[name]:value})


}



const handlesubmit= async(e)=>{
  
  e.preventDefault();
try{
  
   
  const res= await axios.post("https://carwashing-backend-repo.onrender.com/washingPoint",form,{
    headers:{
       Authorization: `Bearer ${token}`
    }
  })

  if(res.status===201){
  
    alert('Added Sucessfully')
  }



}catch(error){
 console.log(error)
}


}

  return (
    <div style={{display:'flex'}}>
      {!user && navigate('/login')}
      <Sidebar></Sidebar>
      <div style={{marginLeft: 'calc(190px + 5%)',width: '70%',marginTop:'5px'}}>
<Aheader></Aheader>
<div style={style.formContainer}>
  <form onSubmit={handlesubmit} style={style.form}>
    <input 
      type="text" 
      
      name="Car_Washing_Point_Name" 
      placeholder='Washing ka Point Name' 
      onChange={handlechange}
      style={style.input}
    />
    <input 
      type='text' 
      name='Address' 
      placeholder='Address' 
      onChange={handlechange}
      style={style.input}
    />
    <input 
      type="text" 
      name="Contact_No" 
      placeholder='Contact' 
      onChange={handlechange}
      style={style.input}
    />
    <button type='submit' style={style.button}>Submit</button>
  </form>
</div>

 

      </div>
    </div>
  )
}
const style = {
  formContainer: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border 0.3s ease',
    '&:focus': {
      outline: 'none',
      borderColor: '#4a90e2',
      boxShadow: '0 0 0 2px rgba(74, 144, 226, 0.2)'
    }
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    backgroundColor: '#4a90e2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#357ae8'
    },
    '&:active': {
      transform: 'translateY(1px)'
    }
  }
}