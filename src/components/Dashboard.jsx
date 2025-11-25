import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Dashboard() {

    const [user,setUser]=useState(null);
    const [message,setmessage]=useState("");
    // const token=localStorage.getItem("token")

    useEffect(()=>{
        const fetchDashboard= async ()=>{
            const token=localStorage.getItem("token")
            if(!token){
                setmessage("No token found. please login first")
                return;
            }

            try{
                const res= await axios.get("http://localhost:1200/dashboard",{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
               
                setUser(res.data.user)
                setmessage(res.data.message)

            }catch(err){
                setmessage(err.response?.data?.msg || "Error fetching dashboard.");
            }
        }

        fetchDashboard()
    },[])

  return (
    <div>
       

       <div style={{ width: "500px", margin: "50px auto" }}>
      <h2>Dashboard</h2>
      {message && <p>{message}</p>}
      {user && (
        <div>
        
          <p><b>Email:</b> {user.email}</p>
          <p><b>Name:</b>{user.name}</p>
         
        </div>
      )}
    </div>
    </div>
  )
}
