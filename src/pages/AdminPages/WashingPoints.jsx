import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Aheader from './Aheader'
import Afooter from './Afooter'
import { Link, useNavigate } from 'react-router-dom'
import { Authentication } from '../../contex/AuthContex'
import axios from 'axios'


export default function WashingPoints() {

  const {message,user}=useContext(Authentication)
  const navigate=useNavigate()

const token = localStorage.getItem("token")
const [data, setData] = useState([]);

  const handleDelete=async(id)=>{
    const confirmDelete = window.confirm(
    "Are you sure you want to delete this record?"
  );

  if (!confirmDelete) return;
 try {
    const res = await axios.delete(
      `http://localhost:1200/washingPoint/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.status === 200) {
      alert("Deleted successfully");
      setData(data.filter(item => item._id !== id));
    }
  } catch (error) {
    console.log(error);
  }
 }

useEffect(()=>{
   
  // axios
  //     .get("http://localhost:1200/washingPoint")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:1200/washingPoint");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
  
  }, []);




 


 
  return (
    <div style={{display:'flex', width:'100%'}}>
      {!user && navigate('/login')}
        <div>{user&&<Sidebar></Sidebar>}</div>


      {message && <p>{message}</p>}
      {user && (

       <div style={{marginLeft: 'calc(190px + 5%)',width: '70%',marginTop:'5px' }}>
        <Aheader></Aheader>
        
        <nav style={{width:'100%', backgroundColor:'white',alignContent:'center',marginTop:'20px',  border:'2px solid gray',padding:'10px'}}>
            <p style={{fontSize:'18px', marginLeft:'10px'}}><Link to={'/dashboard'} style={{cursor:'pointer', textDecoration:'none',color:'black'}}>Home</Link>/
           <Link to={'/Washingpoints'} style={{cursor:'pointer', textDecoration:'none',color:'black'}}>Manages Washing points</Link>
            </p>
          </nav>

<h3 style={{marginTop:'50px'}}>Manage Washing Points</h3>

<table style={styles.table}>
  <thead>
    <tr>
      <th style={styles.th}>Name</th>
      <th style={styles.th}>Address</th>
      <th style={styles.th}>Contact</th>
       <th style={styles.th}>Update</th>
        <th style={styles.th}>Delete</th>

    </tr>
  </thead>

  <tbody>
    {data.map((item) => (
      <tr key={item._id}>
        <td style={styles.td}>{item.Car_Washing_Point_Name}</td>
        <td style={styles.td}>{item.Address}</td>
        <td style={styles.td}>{item.Contact_No}</td>
         <td style={styles.td}><Link to={`/EditWashingPoint/${item._id}`}>Edit</Link></td>
          <td style={styles.td}><button onClick={() => handleDelete(item._id)}>Delete</button></td>
      </tr>
    ))}
  </tbody>
</table>





      
       </div>

       
       )}

     
      
    </div>
  )
}


const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    border: "1px solid #ccc",
    padding: "10px",
    backgroundColor: "#f2f2f2",
    textAlign: "left",
  },
  td: {
    border: "1px solid #ccc",
    padding: "10px",
  },
};
