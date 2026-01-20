import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
export default function Register() {


    const [form, setform]=useState({
        name:"",
        email:"",
        userId:"",
        password:""
    })
    const [message, setmessage]=useState("")
    const naviagte = useNavigate()
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setform({...form,[name]:value})
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try{
        
       const res= await axios.post("http://localhost:1200/register",form)
        if(res.status===201){
          alert("Registered Successfuly")
        naviagte("/about")
        }
        setmessage(res.data.message)

      }catch(error){
           setmessage(error.response?.data?.message || "Registration failed")

      }
      // naviagte("/about")
     
    }
  return (
    <div>
      <Header></Header>
    <div style={styles.container}>
        <form action="" onSubmit={handleSubmit} style={styles.form}>
            <input type="text" name="name" onChange={handleChange} style={{padding:'20px'}} placeholder='Enter your Name' required/>
            <br /><br />
            <input type="email" name="email" onChange={handleChange} style={{padding:'20px'}} placeholder='Enter your email'/>
            <br /><br />
            <input type="text" name="userId" onChange={handleChange} style={{padding:'20px'}} placeholder='Enter UserId'/>
            <br /><br />
            <input type="password" name="password" onChange={handleChange} style={{padding:'20px'}}  placeholder='Enter password'/>
            <br /><br />
            <button type='submit' style={{padding:'20px'}}>Submit</button>
        </form>
        {message && <p>{message}</p>}
      
    </div>
    </div>
  )
}
// Some simple inline styling
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  

  
};