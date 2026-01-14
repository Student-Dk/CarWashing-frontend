import React, {  useContext, useState } from 'react'
import { FaCheck, FaTimes, FaCar, FaShieldAlt, FaClock, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import Header from '../components/Header'
import About from './About'
import Contact from './Contact'
import WashingP from './WashingP';
import WashingPlans from './WashingPlans';
import Footer from '../components/Footer';







export default function Home() {


const [hoveredButton, setHoveredButton] = useState(null);

  const handleButtonClick = () => {
    alert('Thank you for selecting a plan! Our booking system will open shortly.');
  };

   const features = [
    { icon: <FaCar />, title: "Multi-Vehicle Support", desc: "Cars, Bikes, SUVs & More" },
    { icon: <FaShieldAlt />, title: "Eco-Friendly", desc: "Biodegradable Cleaning Products" },
    { icon: <FaClock />, title: "Quick Service", desc: "30 Min Express Wash Available" }
  ];

  return (

      <div style={styles.container}>
      <Header />
      
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Premium Car Wash Service</h1>
            <p style={styles.heroSubtitle}>
              Professional cleaning with care. Book online and get 20% off on your first wash!
            </p>
            <div style={styles.heroButtons}>
              <button 
                style={styles.primaryButton}
                onMouseEnter={() => setHoveredButton('book')}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => document.getElementById('plans')?.scrollIntoView({behavior: 'smooth'})}
              >
                Book Now
              </button>
              <button 
                style={styles.secondaryButton}
                onMouseEnter={() => setHoveredButton('contact')}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Why Choose Us</h2>
          <p style={styles.sectionSubtitle}>Quality service you can trust</p>
        </div>
        
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <About />
      <WashingP />
      <div id="plans">
        <WashingPlans />
      </div>
      <div id="contact">
        <Contact />
      </div>
<Footer></Footer>
      
    </div>
  )
}
const styles = {
  container: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: "#f8fafc",
  },
  
  // Hero Section
  heroSection: {
    height: "500px",
    background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    position: "relative",
    overflow: "hidden",
    marginTop: "70px",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroContent: {
    textAlign: "center",
    color: "white",
    maxWidth: "800px",
    padding: "20px",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "800",
    marginBottom: "20px",
    lineHeight: "1.2",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    opacity: "0.9",
    maxWidth: "600px",
    margin: "0 auto",
  },
  heroButtons: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },
  primaryButton: {
    padding: "14px 32px",
    fontSize: "1rem",
    fontWeight: "600",
    backgroundColor: "#10b981",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)",
    "&:hover": {
      backgroundColor: "#059669",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 20px rgba(16, 185, 129, 0.4)",
    },
  },
  secondaryButton: {
    padding: "14px 32px",
    fontSize: "1rem",
    fontWeight: "600",
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transform: "translateY(-2px)",
    },
  },

  // Features Section
  featuresSection: {
    padding: "80px 20px",
    backgroundColor: "white",
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: "50px",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "10px",
  },
  sectionSubtitle: {
    fontSize: "1.1rem",
    color: "#64748b",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  featureCard: {
    backgroundColor: "#f8fafc",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    transition: "all 0.3s ease",
    border: "1px solid #e2e8f0",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    },
  },
  featureIcon: {
    fontSize: "2.5rem",
    color: "#3b82f6",
    marginBottom: "20px",
  },
  featureTitle: {
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "10px",
  },
  featureDesc: {
    fontSize: "0.95rem",
    color: "#64748b",
    lineHeight: "1.6",
  },

  
  
};