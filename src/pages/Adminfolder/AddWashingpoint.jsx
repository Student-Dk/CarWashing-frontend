import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Aheader from '../AdminPages/Aheader'
import Afooter from '../AdminPages/Afooter'

export default function AddWashingpoint() {

const [form,setform]=useState({
  Car_Washing_Point_Name:"",
  Address:"",
  Contact:""
})


const handlechange=(e)=>{

//const {name,value}=e.target
setform({...form,[e.target.name]:e.target.value})


}

const handlesubmit=(e)=>{
  console.log(form)
  e.preventDefault();
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
