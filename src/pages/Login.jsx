import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [form,setform]=useState({
        userId:"",
        password:""
    })
    const [message, setmessage]=useState("")
    const naviagte=useNavigate();
    

    const handleChange=(e)=>{
        const {name,value}=e.target
        setform({...form,[name]:value})
    }

    const handleSubmit=async(e)=>{
e.preventDefault();
try{
const res= await axios.post("https://carwashing-backend-repo.onrender.com/login",form)
setmessage(res.data.message)

localStorage.setItem("token",res.data.token)
naviagte("/dashboard")
}catch(error){
    setmessage(error.response?.data?.message || "Something went wrong")
}



    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
 

  <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.01]"
    >
      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Admin Login
      </h2>

      {/* User ID */}
      <input
        type="text"
        name="userId"
        placeholder="Enter User ID"
        onChange={handleChange}
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
        className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Button */}
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Submit
      </button>

      {/* Message */}
      {message && (
        <p className="mt-4 text-center text-red-500 font-medium">
          {message}
        </p>
      )}
    </form>
  </div>
</div>
  )
}

