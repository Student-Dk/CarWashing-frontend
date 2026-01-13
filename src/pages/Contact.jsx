import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'

export default function Contact() {

const [form,setform]=useState({
  name:"",
  email:"",
  subject:"",
  message:""
})


const handlechange=(e)=>{

const {name,value}=e.target
setform({...form,[name]:value})


}



const [message,setmessage]=useState("");

const handlesubmit= async(e)=>{
  
  e.preventDefault();
try{
  
   
  const res= await axios.post("http://localhost:1200/query",form)

  if(res.status===201){
  
    alert('Ticket Generated')
  }



}catch(error){
 setmessage(error.response?.data?.message || "Process failed")
}


}



  return (
    <div style={styles.container}>
  <Header />
  
  <div style={styles.contactContainer}>
    <h1 style={styles.mainHeading}>Get in Touch</h1>
    <p style={styles.subHeading}>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
    
    <h2 style={styles.heading}>Contact For Any Query</h2>

    <div style={styles.wrapper}>
      
      <div style={styles.leftBox}>
        <div style={styles.contactInfo}>
          <div style={styles.infoCard}>
            <div style={styles.iconBox}>
              📍
            </div>
            <div>
              <h3 style={styles.infoTitle}>Address</h3>
              <p style={styles.infoText}>New Delhi, India</p>
              <p style={styles.infoSubtext}>Near Connaught Place</p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.iconBox}>
              ⏰
            </div>
            <div>
              <h3 style={styles.infoTitle}>Opening Hours</h3>
              <p style={styles.infoText}>Mon–Fri, 8AM–9PM</p>
              <p style={styles.infoSubtext}>Saturday: 9AM–6PM</p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.iconBox}>
              📞
            </div>
            <div>
              <h3 style={styles.infoTitle}>Call Us</h3>
              <p style={styles.infoText}>+91 4434 3434</p>
              <p style={styles.infoSubtext}>+91 9876 543210</p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.iconBox}>
              ✉️
            </div>
            <div>
              <h3 style={styles.infoTitle}>Email Us</h3>
              <p style={styles.infoText}>test@gmail.com</p>
              <p style={styles.infoSubtext}>support@company.com</p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.rightBox}>
        <div style={styles.formCard}>
          <h3 style={styles.formTitle}>Send Us a Message</h3>
          <form style={styles.form} onSubmit={handlesubmit}>
            {/* Name Field */}
            <div style={styles.formGroup}>
              <input 
                type="text" 
                placeholder="Enter your name" 
                name='name'
                style={styles.input} 
                 onChange={handlechange}
                required 
              />
            </div>
            
            {/* Email Field on New Line */}
            <div style={styles.formGroup}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                name='email'
                style={styles.input} 
                 onChange={handlechange}
                required 
              />
            </div>
            
            {/* Subject Field */}
            <div style={styles.formGroup}>
              <input 
                type="text" 
                placeholder="Enter subject" 
                name='subject'
                style={styles.input} 
                 onChange={handlechange}
                required 
              />
            </div>
            
            {/* Message Field */}
            <div style={styles.formGroup}>
              <textarea 
                placeholder="Type your message here..." 
                style={styles.textarea} 
                name='message'
                rows="5"
                 onChange={handlechange}
                required
                
              ></textarea>
            </div>

            <button type="submit" style={styles.button}>
              <span style={styles.buttonText}>Send Message</span>
              <span style={styles.buttonIcon}>→</span>
            </button>
          </form>
        </div>
      </div>

    </div>
  </div>
</div>
  )
}
const styles = {
  container: {
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
  },
  
  contactContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 2rem 5rem',
  },
  
  mainHeading: {
    fontSize: '3rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  
  subHeading: {
    fontSize: '1.2rem',
    color: '#64748b',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto 3rem',
    lineHeight: '1.6',
  },
  
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '3rem',
    color: '#1e293b',
    fontWeight: '700',
    position: 'relative',
    paddingBottom: '15px',
  },
  
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    alignItems: 'flex-start',
  },
  
  leftBox: {
    flex: '1',
    minWidth: '300px',
    paddingRight: '1rem', // Added right padding for left box
  },
  
  rightBox: {
    flex: '1',
    minWidth: '300px',
    paddingLeft: '1rem', // Added left padding for right box
  },
  
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  
  infoCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    transition: 'all 0.3s ease',
  },
  
  infoCardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  
  iconBox: {
    fontSize: '1.8rem',
    backgroundColor: '#f1f5f9',
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  
  infoTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#334155',
    margin: '0 0 0.5rem 0',
  },
  
  infoText: {
    fontSize: '1rem',
    color: '#475569',
    margin: '0 0 0.25rem 0',
    fontWeight: '500',
  },
  
  infoSubtext: {
    fontSize: '0.9rem',
    color: '#94a3b8',
    margin: '0',
  },
  
  formCard: {
    backgroundColor: 'white',
    padding: '3.5rem', // Increased padding
    borderRadius: '16px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    margin: '0 auto', // Centered the form card
    maxWidth: '100%', // Ensures it doesn't overflow
  },
  
  formTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
    borderBottom: '2px solid #f1f5f9',
    textAlign: 'center', // Centered the title
  },
  
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  
  formGroup: {
    width: '100%',
  },
  
 
  
  input: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '1rem',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
    backgroundColor: '#f8fafc',
  },
  
  inputFocus: {
    borderColor: '#3b82f6',
    backgroundColor: 'white',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
  },
  
  textarea: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '1rem',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    outline: 'none',
    minHeight: '20px',
    resize: 'vertical',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    backgroundColor: '#f8fafc',
  },
  
  textareaFocus: {
    borderColor: '#3b82f6',
    backgroundColor: 'white',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
  },
  
  button: {
    padding: '16px 32px',
    fontSize: '1rem',
    fontWeight: '600',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    width: '100%', // Made button full width
    marginTop: '1rem',
  },
  
  buttonHover: {
    backgroundColor: '#2563eb',
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.4)',
  },
  
  buttonText: {
    fontSize: '1rem',
  },
  
  buttonIcon: {
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease',
  },
  
  buttonIconHover: {
    transform: 'translateX(5px)',
  },
  
  // Responsive adjustments
  '@media (max-width: 768px)': {
    wrapper: {
      gap: '2rem',
    },
    leftBox: {
      paddingRight: '0',
    },
    rightBox: {
      paddingLeft: '0',
    },
    formCard: {
      padding: '1.5rem',
    },
  },
};