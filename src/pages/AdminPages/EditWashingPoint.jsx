import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Aheader from './Aheader'
import { Authentication } from '../../contex/AuthContex'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function EditWashingPoint() {

    const {message,user}=useContext(Authentication)
    const token=localStorage.getItem("token")
    const { id }=useParams();//url se id fetch karne ke liye
    const navigate=useNavigate(); // form cancel button

    const [formData, setFormData]=useState({
        Car_Washing_Point_Name:"",
        Address:"",
        Contact_No:""
    });

    const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
  useEffect(()=>{
  const fetchData = async () => {
    try {
      const res = await axios.get( `http://localhost:1200/washingPoint/${id}`);
      setFormData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();

    },[id])

const handleCancel = () => {
  navigate(-1); // back
};


const handleUpdate=async (e)=>{
  e.preventDefault(); // page reload stop

  try {
    const res = await axios.put(
      `http://localhost:1200/washingPoint/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.status === 200) {
      alert("Updated successfully");
      navigate("/Washingpoints"); // list page par wapas
    }

  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

  return (
    <div style={{display:'flex',width:'100%'}}>
      {!user && navigate('/login')}
      <div><Sidebar></Sidebar></div>
     
      {message &&<p>{message}</p>}
      
     {user && (
        
     <div style={{  marginLeft: 'calc(190px + 5%)',width: '70%'  }}>
         <Aheader></Aheader>
<div style={styles.container}>
  <h2 style={styles.heading}>Edit Washing Point</h2>

  <form onSubmit={handleUpdate} >
    
    <div style={styles.formGroup}>
      <label style={styles.label}>Name</label>
      <input
        type="text"
        name="Car_Washing_Point_Name"
        value={formData.Car_Washing_Point_Name}
        onChange={handleChange}
        style={styles.input}
      />
    </div>

    <div style={styles.formGroup}>
      <label style={styles.label}>Address</label>
      <input
        type="text"
        name="Address"
        value={formData.Address}
        onChange={handleChange}
        style={styles.input}
      />
    </div>

    <div style={styles.formGroup}>
      <label style={styles.label}>Contact</label>
      <input
        type="text"
        name="Contact_No"
        value={formData.Contact_No}
        onChange={handleChange}
        style={styles.input}
      />
    </div>

    <div style={styles.buttonContainer}>
      <button type="submit" style={styles.updateBtn}>Update</button>
      <button type="button" style={styles.cancelBtn} onClick={handleCancel} >
        Cancel
      </button>
    </div>

  </form>
</div>





     </div>
     )}
      


    </div>
  )
}
const styles = {
  container: {
    width: "420px",
    margin: "50px auto",
    padding: "25px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif"
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333"
  },

  formGroup: {
    marginBottom: "15px"
  },

  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
    color: "#555"
  },

  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none"
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px"
  },

  updateBtn: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "10px 18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px"
  },

  cancelBtn: {
    backgroundColor: "#dc3545",
    color: "#fff",
    padding: "10px 18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px"
  }
};
