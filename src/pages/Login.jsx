import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
export default function Login() {
    const [form,setform]=useState({
        userId:"",
        password:""
    })
    const [message, setmessage]=useState("")
    const naviagte=useNavigate();
    const [token,setToken]=useState("")

    const handleChange=(e)=>{
        const {name,value}=e.target
        setform({...form,[name]:value})
    }

    const handleSubmit=async(e)=>{
e.preventDefault();
try{
const res= await axios.post("http://localhost:1200/login",form)
setmessage(res.data.message)
setToken(res.data.token)
localStorage.setItem("token",res.data.token)
naviagte("/dashboard")
}catch(error){
    setmessage(error.response?.data?.message || "Something went wrong")
}



    }
  return (
    <div>
     <Header></Header>
    <div style={styles.container}>
     
      <form action=""  onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="userId" placeholder='Enter userId' onChange={handleChange} style={{padding:'20px'} }/>
        <br /><br />
        <input type="password" name="password" placeholder='Enter password' onChange={handleChange} style={{padding:'20px'}} />
        <br /><br />
        <button type='submit' style={{padding:'20px'}}>Sumbit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  )
}

const styles={
    container:{
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
  }
}