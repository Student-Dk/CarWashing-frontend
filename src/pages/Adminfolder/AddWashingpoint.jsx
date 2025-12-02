import React, {  useState } from 'react'
import axios from 'axios'
import Sidebar from '../../components/Sidebar'
import Aheader from '../AdminPages/Aheader'
import Afooter from '../AdminPages/Afooter'

export default function AddWashingpoint() {

const [form,setform]=useState({
  Car_Washing_Point_Name:"",
  Address:"",
  Contact:""
})
const token = localStorage.getItem("token")

const handlechange=(e)=>{

const {name,value}=e.target
setform({...form,[name]:value})


}

const [message,setmessage]=useState("");

const handlesubmit= async(e)=>{
  
  e.preventDefault();
try{
  
   
  const res= await axios.post("http://localhost:1200/washingPoint",form,{
    headers:{
       Authorization: `Bearer ${token}`
    }
  })

  if(res.status==201){
  
    alert('Added Sucessfully')
  }



}catch(error){
 setmessage(error.response?.data?.message || "Process failed")
}


}

  return (
    <div style={{display:'flex'}}>
      <Sidebar></Sidebar>
      <div style={{margin:'20px', width:'80%'}}>
<Aheader></Aheader>

<div>
<form action="" onSubmit={handlesubmit} >

<input type="text" name="Car_Washing_Point_Name" placeholder='Washing ka Point Name' onChange={handlechange}/>
<input type='text' name='Address' placeholder='Address' onChange={handlechange} ></input>
<input type="text" name="Contact" placeholder='Contact' onChange={handlechange}/>
<button type='submit'>Submit</button>


</form>

</div>



      </div>
    </div>
  )
}
