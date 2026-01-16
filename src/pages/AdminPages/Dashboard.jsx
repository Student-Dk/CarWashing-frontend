import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {

  const [user, setUser] = useState(null);
  const [message, setmessage] = useState("");
  const token = localStorage.getItem("token")
  const navigate=useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token")
      if (!token) {
        setmessage("No token found. please login first")
        alert(setmessage)
       
        return;
      }

      try {
        const res = await axios.get("http://localhost:1200/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setUser(res.data.user)
        setmessage(res.data.msg)

      } catch (err) {
        setmessage(err.response?.data?.msg || "Error fetching dashboard.");
      }
    }

    fetchDashboard()
  }, [])



const [newCount, setNewCount] = useState(0);

useEffect(() => {
  if (!token) return;

  axios.get("http://localhost:1200/booking/new/count", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res => {
    setNewCount(res.data.count);
  })
  .catch(err => console.log(err));
}, [token]);



const [completeCount, setCompleteCount] = useState(0);

useEffect(() => {
  if (!token) return;

  axios.get("http://localhost:1200/booking/complete/count", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res => {
    setCompleteCount(res.data.count);
  })
  .catch(err => console.log(err));
}, [token]);




const [totalCount, setTotalCount] = useState(0);

useEffect(() => {
  if (!token) return;

  axios.get("http://localhost:1200/booking/totalCount", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res => {
    setTotalCount(res.data.count);
    
  })
  .catch(err => console.log(err));
}, [token]);




const [enquiryCount, setEnquiryCount] = useState(0);

useEffect(() => {
  if (!token) return;

  axios.get("http://localhost:1200/query/enquiryCount", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res => {
    setEnquiryCount(res.data.count);
  })
  .catch(err => console.log(err));
}, [token]);






const [wpCount, setWpCount] = useState(0);

useEffect(() => {
  if (!token) return;

  axios.get("http://localhost:1200/washingPoint/c", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res => {
    setWpCount(res.data.count);
  })
  .catch(err => console.log(err));
}, [token]);


  return (
    <div style={{width:'100%'}} >

      <div style={{ display: 'flex', width:'100%' }}>

          {!user && navigate("/login")}
       <div>
        {user && <Sidebar > </Sidebar>}
        </div>








        

          {!user && <p>{message}</p>}
        
          {user && (
            
          <div style={{marginLeft: 'calc(190px + 5%)',width: '70%',marginTop:'5px' }}>

          <header style={{backgroundColor:'white', width:'100%', height:'10vh', display:'flex'}}>
            <div style={{width:'80%',backgroundColor:'green',margin:'5px',alignContent:'center',justifyItems:'center'}}>
              <p style={{fontSize:'40px', color:'white'}}>Car Washing Management System</p>
            </div>
            <div style={{backgroundColor:'blue', width:'20%',margin:'5px',alignContent:'center',justifyItems:'center', color:'white', fontSize:'20px'}}>
              <p>Welcome</p>
              <p>Admin</p>
            </div>
          </header>

          <nav style={{width:'100%', backgroundColor:'white',alignContent:'center',marginTop:'20px',  border:'2px solid gray',padding:'10px'}}>
            <p style={{fontSize:'18px', marginLeft:'10px'}}>Home</p>
          </nav>
          <div style={{display:'flex' ,marginTop:'100px', width:'100%'}}>
            <div style={{width:'25%', height:'150px',backgroundColor:'red', margin:'5px',alignContent:'center',justifyItems:'center', color:'white', fontSize:'20px'}}>
              <p>Total Bookings</p>
              <p>{totalCount}</p>
            </div>
            <div style={{width:'25%', height:'150px',backgroundColor:'green', margin:'5px',alignContent:'center',justifyItems:'center', color:'white', fontSize:'20px'}}>
              <p>New Bookings</p>
              <p>{newCount}</p>
            </div>
            <div style={{width:'25%', height:'150px',backgroundColor:'blue', margin:'5px',alignContent:'center',justifyItems:'center', color:'white', fontSize:'20px'}}>
              <p>Completed Bookings</p>
              <p>{completeCount}</p>
            </div>
            <div style={{width:'25%', height:'150px',backgroundColor:'pink', margin:'5px',alignContent:'center',justifyItems:'center', color:'white', fontSize:'20px'}}>
              <p>Enquires</p>
              <p>{enquiryCount}</p>
            </div>
          </div>
          <div style={{display:'flex' , width:'100%'}}>
            <div style={{width:'24%', height:'150px',backgroundColor:'brown', margin:'5px',alignContent:'center',justifyItems:'center', color:'white', fontSize:'20px'}}>
              <p><Link to={'/Washingpoints'} style={{cursor:'pointer', textDecoration:'none',color:'White'}}> Washing points</Link></p>
              <p>{wpCount}</p>
            </div>
          </div>

          <div style={{marginTop:'120px',justifyItems:'center',alignContent:'center'}} >
            <p >2025@ Car Washing Rights reserved by Dhirajkumar</p>
          </div>

           </div>
         
)}
       




      </div>

     

    </div>
  )
}
