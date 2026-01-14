import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'





export default function About() {

  

  



  return (
   <div style={styles.page}>
  

  <Header></Header>
     <div style={styles.container}>
        <img src="Aboutimage.png" alt="About" style={styles.image} />
        <p style={styles.text}>
           Our team uses eco-friendly cleaning products and state-of-the-art equipment to provide a thorough clean without harming the environment. We believe every vehicle deserves premium treatment.
         we're passionate about keeping your vehicle looking its absolute best. With over 10 years of experience in automotive care, we've perfected the art of professional car washing.
        </p>
      </div>
    </div>
  )
}
const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif",
  },
  
  container: {
    maxWidth: '1200px',
    margin: '2rem auto',
    padding: '0 1.5rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'center',
    flex: '1',
  },
  
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    filter: 'brightness(0.95)',
    objectFit: 'cover',
    aspectRatio: '4/3',
  },
  
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#333',
    background: 'white',
    padding: '2.5rem',
    borderRadius: '20px',
    boxShadow: '0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)',
    position: 'relative',
    overflow: 'hidden',
  },
};