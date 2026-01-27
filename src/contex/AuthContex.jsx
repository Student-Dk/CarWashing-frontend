
import axios from 'axios';
import React, {  createContext, useEffect, useState } from 'react'


export const Authentication =createContext(10)
export default function AuthContex({children}) {

const [user,setUser]=useState(null);
const [token, setToken]=useState(null);
const [message, setmessage]=useState(null);

useEffect(()=>{

  const fetchData= async ()=>{

    const token = localStorage.getItem("token")
    if(!token){
      setmessage("No token found please login first")
      return
    }

    try{

const res= await axios.get("https://carwashing-backend-repo.onrender.com/dashboard",{
  headers:{
     Authorization: `Bearer ${token}`
  }
})

setUser(res.data.user)
setmessage(res.data.message)
setToken(token)

    }catch(err){
       setmessage(err.response?.data?.msg || "Error fetching dashboard.");

    }

  }
fetchData()

},[])


  return (
    <Authentication.Provider value={{user,setUser, message, setmessage,token}}>

{children}

    </Authentication.Provider>
      
    
  )
}
