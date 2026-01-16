import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios';
import Footer from '../components/Footer';

export default function WashingPlans() {

    const [showForm,setShowForm]=useState(false);//form hidden hoga by default
    const [formData,setFormData]=useState({
        name:"",
        mobileNo:"",
        washDate:"",
        washTime:"",
        washingPoint:"",
        message:"",
        packageType:""
    });


const [washingPoints, setWashingPoints]=useState([]);

const [response, setResponse]= useState("");

//fetch washing points from backend

useEffect(()=>{
    const fetchWashingPoints = async ()=>{
        try{

            const res = await axios.get("http://localhost:1200/washingPoint");
            setWashingPoints(res.data);

        }catch(error){
            console.log("Error during fetching washing points data: ",error)
        }

    }

    fetchWashingPoints();
},[])


//------------------------

const handleChange  = (e)=>{
    const {name,value}=e.target;
    setFormData({ ...formData,[name]:value})
};



const handleSubmit = async (e)=>{
    e.preventDefault();
    try{

        const res= await axios.post("http://localhost:1200/booking", formData);
        const msg = `Booking Successful! Your Booking ID: ${res.data.bookingId}`;
      setResponse(msg);
      alert(msg);
        setFormData({
             name:"",
        mobileNo:"",
        washDate:"",
        washTime:"",
        washingPoint:"",
        message:"",
        packageType:""
        });

        setShowForm(false)//close form after submit

    }catch(error){
        setResponse("Error:"+ error.response?.data?.message || error.message);
    }
}

   
    return (
        <div style={styles.container}>
            <Header />

            <div style={styles.contentWrapper}>
                <div style={styles.headerSection}>
                    <div style={styles.titleSection}>
                        <span style={styles.subtitle}>OUR SERVICES</span>
                        <h1 style={styles.title}>Washing Plans</h1>
                        <p style={styles.description}>
                            Choose the perfect cleaning package for your vehicle.
                            Professional service with guaranteed quality.
                        </p>
                    </div>
                </div>

                <div style={styles.plansContainer}>
                    {/* Basic Plan */}
                    <div style={styles.planCard}>
                        <div style={styles.planHeader}>
                            <div style={styles.planBadge}>Standard</div>
                            <h3 style={styles.planName}>BASIC CLEANING</h3>
                            <div style={styles.priceSection}>
                                <span style={styles.price}>₹500</span>
                                <span style={styles.priceDuration}>/one time</span>
                            </div>
                            <p style={styles.planDescription}>
                                Essential cleaning for regular maintenance
                            </p>
                        </div>

                        <div style={styles.featuresList}>
                            <div style={styles.featureItem}>
                                <span style={styles.featureIcon}>✓</span>
                                <span style={styles.featureText}>Seats Washing</span>
                            </div>
                            <div style={styles.featureItem}>
                                <span style={styles.featureIcon}>✓</span>
                                <span style={styles.featureText}>Vacuum Cleaning</span>
                            </div>
                            <div style={styles.featureItem}>
                                <span style={styles.featureIcon}>✓</span>
                                <span style={styles.featureText}>Exterior Cleaning</span>
                            </div>
                            <div style={styles.featureItem}>
                                <span style={styles.featureIconDisabled}>✗</span>
                                <span style={styles.featureDisabled}>Interior Wet Cleaning</span>
                            </div>
                            <div style={styles.featureItem}>
                                <span style={styles.featureIconDisabled}>✗</span>
                                <span style={styles.featureDisabled}>Window Wiping</span>
                            </div>
                        </div>

                        <button
                            style={styles.bookButton}
                               onClick={()=>setShowForm(!showForm)}
                            onMouseDown={(e) => e.currentTarget.style.backgroundColor = styles.bookButtonActive.backgroundColor}
                            onMouseUp={(e) => e.currentTarget.style.backgroundColor = styles.bookButton.backgroundColor}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.bookButton.backgroundColor}
                        >
                            Book Now
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div style={styles.planCard}>
                        <div style={styles.planHeader}>
                            <div style={styles.planBadgePremium}>Most Popular</div>
                            <h3 style={styles.planName}>PREMIUM CLEANING</h3>
                            <div style={styles.priceSection}>
                                <span style={styles.price}>₹1000</span>
                                <span style={styles.priceDuration}>/one time</span>
                            </div>
                            <p style={styles.planDescription}>
                                Complete cleaning for thorough maintenance
                            </p>
                        </div>

                        <div style={styles.featuresList}>
                            <div style={styles.featureItem}>
                                <span style={styles.featureIcon}>✓</span>
                                <span style={styles.featureText}>Seats Washing</span>
                            </div>
                            <div style={styles.featureItem}>
                                <span style={styles.featureIcon}>✓</span>
                                <span style={styles.featureText}>Vacuum Cleaning</span>
                            </div>
                            <div style={styles.featureItem}>
                                <span style={styles.featureIcon}>✓</span>
                                <span style={styles.featureText}>Exterior Cleaning</span>
                            </div>
                            <div style={styles.featureItem}>
                                <span style={styles.featureIcon}>✓</span>
                                <span style={styles.featureText}>Interior Wet Cleaning</span>
                            </div>
                            <div style={styles.featureItem}>
                                <span style={styles.featureIconDisabled}>✗</span>
                                <span style={styles.featureDisabled}>Window Wiping</span>
                            </div>
                        </div>

                        <button
                            style={styles.bookButtonPremium}
                            onMouseDown={(e) => e.currentTarget.style.backgroundColor = styles.bookButtonPremiumActive.backgroundColor}
                            onMouseUp={(e) => e.currentTarget.style.backgroundColor = styles.bookButtonPremium.backgroundColor}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.bookButtonPremium.backgroundColor}
                            onClick={()=>setShowForm(!showForm)}
                        >
                            Book Now
                        </button>
                    </div>

                    {/* Complex Plan */}
                    <div style={styles.planCard}>
                        <div style={styles.planHeader}>
                            <div style={styles.planBadge}>Ultimate</div>
                            <h3 style={styles.planName}>COMPLEX CLEANING</h3>
                            <div style={styles.priceSection}>
                                <span style={styles.price}>₹2000</span>
                                <span style={styles.priceDuration}>/one time</span>
                            </div>
                            <p style={styles.planDescription}>
                                Ultimate cleaning with full detailing
                            </p>
                        </div>

                        <div style={styles.featuresList}>
                            <div style={styles.featureItem}>
                                <span style={styles.featureIcon}>✓</span>
                                <span style={styles.featureText}>Seats Washing</span>
                            </div>
                            <div style={styles.featureItem}>
                                <span style={styles.featureIcon}>✓</span>
                                <span style={styles.featureText}>Vacuum Cleaning</span>
                            </div>
                            <div style={styles.featureItem}>
                                <span style={styles.featureIcon}>✓</span>
                                <span style={styles.featureText}>Exterior Cleaning</span>
                            </div>
                            <div style={styles.featureItem}>
                                <span style={styles.featureIcon}>✓</span>
                                <span style={styles.featureText}>Interior Wet Cleaning</span>
                            </div>
                            <div style={styles.featureItem}>
                                <span style={styles.featureIcon}>✓</span>
                                <span style={styles.featureText}>Window Wiping</span>
                            </div>
                        </div>

                        <button
                            style={styles.bookButton}
                               onClick={()=>setShowForm(!showForm)}
                            onMouseDown={(e) => e.currentTarget.style.backgroundColor = styles.bookButtonActive.backgroundColor}
                            onMouseUp={(e) => e.currentTarget.style.backgroundColor = styles.bookButton.backgroundColor}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.bookButton.backgroundColor}
                          
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

{showForm && (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(4px)'
  }}>
    <div style={{
      background: 'white',
      borderRadius: '14px',
      padding: '24px',
      width: '85%',
      maxWidth: '420px',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
      animation: 'slideUp 0.3s ease-out',
      maxHeight: '85vh',
      overflowY: 'auto',
      position: 'relative'
    }}>
      <button 
        onClick={() => setShowForm(false)}
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'none',
          border: 'none',
          fontSize: '22px',
          color: '#64748b',
          cursor: 'pointer',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          transition: 'all 0.2s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#f1f5f9';
          e.currentTarget.style.color = '#0f172a';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#64748b';
        }}
      >
        ×
      </button>
      
      <div style={{
        textAlign: 'center',
        marginBottom: '20px',
        paddingBottom: '14px',
        borderBottom: '1px solid #f1f5f9'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          color: '#0f172a',
          marginBottom: '6px',
          fontWeight: '700',
          marginTop: 0
        }}>
          Book Car Wash
        </h2>
        <p style={{
          color: '#64748b',
          fontSize: '0.9rem',
          margin: 0
        }}>
          Fill your details to schedule
        </p>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Required Field Label with Red Asterisk */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
            <label style={{
              fontWeight: '600',
              color: '#334155',
              fontSize: '0.9rem'
            }}>
              Full Name
            </label>
            <span style={{ color: '#ef4444', marginLeft: '4px', fontSize: '1rem' }}>*</span>
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1.5px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
              backgroundColor: '#f8fafc',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3b82f6';
              e.target.style.backgroundColor = 'white';
              e.target.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e2e8f0';
              e.target.style.backgroundColor = '#f8fafc';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="Enter your full name"
            required
          />
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
            <label style={{
              fontWeight: '600',
              color: '#334155',
              fontSize: '0.9rem'
            }}>
              Mobile Number
            </label>
            <span style={{ color: '#ef4444', marginLeft: '4px', fontSize: '1rem' }}>*</span>
          </div>
          <input
            type="tel"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1.5px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
              backgroundColor: '#f8fafc',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3b82f6';
              e.target.style.backgroundColor = 'white';
              e.target.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e2e8f0';
              e.target.style.backgroundColor = '#f8fafc';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="10-digit mobile number"
            pattern="[0-9]{10}"
            required
          />
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
            <label style={{
              fontWeight: '600',
              color: '#334155',
              fontSize: '0.9rem'
            }}>
              Wash Date
            </label>
            <span style={{ color: '#ef4444', marginLeft: '4px', fontSize: '1rem' }}>*</span>
          </div>
          <input
            type="date"
            name="washDate"
            value={formData.washDate}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1.5px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
              backgroundColor: '#f8fafc',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3b82f6';
              e.target.style.backgroundColor = 'white';
              e.target.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e2e8f0';
              e.target.style.backgroundColor = '#f8fafc';
              e.target.style.boxShadow = 'none';
            }}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
            <label style={{
              fontWeight: '600',
              color: '#334155',
              fontSize: '0.9rem'
            }}>
              Wash Time
            </label>
            <span style={{ color: '#ef4444', marginLeft: '4px', fontSize: '1rem' }}>*</span>
          </div>
          <input
            type="time"
            name="washTime"
            value={formData.washTime}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1.5px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
              backgroundColor: '#f8fafc',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3b82f6';
              e.target.style.backgroundColor = 'white';
              e.target.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e2e8f0';
              e.target.style.backgroundColor = '#f8fafc';
              e.target.style.boxShadow = 'none';
            }}
            required
          />
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
            <label style={{
              fontWeight: '600',
              color: '#334155',
              fontSize: '0.9rem'
            }}>
              Washing Point
            </label>
            <span style={{ color: '#ef4444', marginLeft: '4px', fontSize: '1rem' }}>*</span>
          </div>
          <select
            name="washingPoint"
            value={formData.washingPoint}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1.5px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
              backgroundColor: '#f8fafc',
              boxSizing: 'border-box',
              appearance: 'none',
              backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 14px center',
              backgroundSize: '14px',
              paddingRight: '36px'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3b82f6';
              e.target.style.backgroundColor = 'white';
              e.target.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e2e8f0';
              e.target.style.backgroundColor = '#f8fafc';
              e.target.style.boxShadow = 'none';
            }}
            required
          >
            <option value="">Select washing point</option>
            {washingPoints.map((point) => (
              <option key={point._id} value={point.Car_Washing_Point_Name}>
                {point.Car_Washing_Point_Name}
              </option>
            ))}
          </select>
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
            <label style={{
              fontWeight: '600',
              color: '#334155',
              fontSize: '0.9rem'
            }}>
              Package Type
            </label>
            <span style={{ color: '#ef4444', marginLeft: '4px', fontSize: '1rem' }}>*</span>
          </div>
          <select
            name="packageType"
            value={formData.packageType}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1.5px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
              backgroundColor: '#f8fafc',
              boxSizing: 'border-box',
              appearance: 'none',
              backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 14px center',
              backgroundSize: '14px',
              paddingRight: '36px'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3b82f6';
              e.target.style.backgroundColor = 'white';
              e.target.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e2e8f0';
              e.target.style.backgroundColor = '#f8fafc';
              e.target.style.boxShadow = 'none';
            }}
            required
          >
            <option value="">Select package</option>
            <option value="Basic - ₹500">Basic - ₹500</option>
            <option value="Premium - ₹1000">Premium - ₹1000</option>
            <option value="Complex - ₹2000">Complex - ₹2000</option>
          </select>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '6px',
            fontWeight: '600',
            color: '#334155',
            fontSize: '0.9rem'
          }}>
            Additional Notes (Optional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1.5px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
              backgroundColor: '#f8fafc',
              boxSizing: 'border-box',
              minHeight: '80px',
              resize: 'vertical',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3b82f6';
              e.target.style.backgroundColor = 'white';
              e.target.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e2e8f0';
              e.target.style.backgroundColor = '#f8fafc';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="Enter message..."
          />
        </div>
        
        <div style={{
          display: 'flex',
          gap: '10px',
          marginTop: '24px'
        }}>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            style={{
              flex: 1,
              background: '#f1f5f9',
              color: '#64748b',
              border: '1.5px solid #e2e8f0',
              padding: '12px',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#e2e8f0';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#f1f5f9';
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{
              flex: 1,
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(59, 130, 246, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Book Now
          </button>
        </div>
       
      </form>
      
      {/* Animation style */}
      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  </div>
)}

        </div>
    )
}
const styles = {
    
    container: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: "#f8fafc",
        minHeight: "100vh"
    },
    contentWrapper: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        paddingTop: "100px" // Header से space के लिए
    },
    headerSection: {
        textAlign: "center",
        marginBottom: "40px",
        position: "relative",
        zIndex: "1"
    },
    titleSection: {
        maxWidth: "600px",
        margin: "0 auto"
    },
    subtitle: {
        display: "inline-block",
        backgroundColor: "#e0f2fe",
        color: "#0369a1",
        padding: "6px 16px",
        borderRadius: "16px",
        fontSize: "0.85rem",
        fontWeight: "600",
        letterSpacing: "0.5px",
        marginBottom: "15px"
    },
    title: {
        fontSize: "2.2rem",
        fontWeight: "700",
        color: "#0f172a",
        marginBottom: "12px",
        background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
    },
    description: {
        fontSize: "1rem",
        color: "#64748b",
        lineHeight: "1.5",
        maxWidth: "500px",
        margin: "0 auto"
    },
    plansContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
        alignItems: "start" // सभी cards एक level पर रहेंगे
    },
    planCard: {
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        border: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        minHeight: "450px", // Fixed minimum height
        maxHeight: "500px", // Fixed maximum height
        "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)"
        }
    },
    planHeader: {
        textAlign: "center",
        marginBottom: "20px",
        paddingBottom: "20px",
        borderBottom: "1px solid #f1f5f9"
    },
    planBadge: {
        position: "absolute",
        top: "12px",
        right: "12px",
        backgroundColor: "#fef3c7",
        color: "#92400e",
        padding: "4px 12px",
        borderRadius: "12px",
        fontSize: "0.75rem",
        fontWeight: "600",
        letterSpacing: "0.3px"
    },
    planBadgePremium: {
        position: "absolute",
        top: "12px",
        right: "12px",
        backgroundColor: "#3b82f6",
        color: "white",
        padding: "4px 12px",
        borderRadius: "12px",
        fontSize: "0.75rem",
        fontWeight: "600",
        letterSpacing: "0.3px"
    },
    planName: {
        fontSize: "1.3rem",
        fontWeight: "700",
        color: "#1e293b",
        marginBottom: "12px",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        marginTop: "5px"
    },
    priceSection: {
        marginBottom: "10px"
    },
    price: {
        fontSize: "2.2rem",
        fontWeight: "800",
        color: "#0f172a",
        display: "block"
    },
    priceDuration: {
        fontSize: "0.9rem",
        color: "#64748b",
        fontWeight: "500"
    },
    planDescription: {
        fontSize: "0.9rem",
        color: "#94a3b8",
        lineHeight: "1.4",
        marginTop: "8px"
    },
    featuresList: {
        flex: "1",
        marginBottom: "20px",
        overflowY: "auto" // Scroll if content exceeds
    },
    featureItem: {
        display: "flex",
        alignItems: "center",
        marginBottom: "12px",
        padding: "8px 0"
    },
    featureIcon: {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "#dcfce7",
        color: "#166534",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "12px",
        fontSize: "0.8rem",
        fontWeight: "bold",
        flexShrink: "0"
    },
    featureIconDisabled: {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "#f1f5f9",
        color: "#94a3b8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "12px",
        fontSize: "0.8rem",
        fontWeight: "bold",
        flexShrink: "0"
    },
    featureText: {
        fontSize: "0.95rem",
        color: "#334155",
        fontWeight: "500",
        flex: "1"
    },
    featureDisabled: {
        fontSize: "0.95rem",
        color: "#cbd5e1",
        fontWeight: "500",
        flex: "1"
    },
    bookButton: {
        width: "100%",
        padding: "14px",
        backgroundColor: "#f8fafc",
        color: "#3b82f6",
        border: "2px solid #3b82f6",
        borderRadius: "10px",
        fontSize: "0.95rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.2s ease",
        outline: "none",
        userSelect: "none",
        "&:hover": {
            backgroundColor: "#f1f5f9"
        }
    },
    bookButtonActive: {
        backgroundColor: "#3b82f6",
        color: "white"
    },
    bookButtonPremium: {
        width: "100%",
        padding: "14px",
        backgroundColor: "#f8fafc",
        color: "#3b82f6",
        border: "2px solid #3b82f6",
        borderRadius: "10px",
        fontSize: "0.95rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.2s ease",
        outline: "none",
        userSelect: "none",
        "&:hover": {
            backgroundColor: "#f1f5f9"
        }
    },
    bookButtonPremiumActive: {
        backgroundColor: "#3b82f6",
        color: "white"
    },
    // Responsive styles
    "@media (max-width: 1024px)": {
        plansContainer: {
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px"
        }
    },
    "@media (max-width: 768px)": {
        contentWrapper: {
            padding: "30px 15px",
            paddingTop: "90px"
        },
        title: {
            fontSize: "1.8rem"
        },
        plansContainer: {
            gridTemplateColumns: "1fr",
            maxWidth: "400px",
            margin: "0 auto"
        },
        price: {
            fontSize: "2rem"
        },
        planCard: {
            minHeight: "420px",
            maxHeight: "470px"
        }
    },
    "@media (max-width: 480px)": {
        contentWrapper: {
            padding: "20px 12px",
            paddingTop: "80px"
        },
        title: {
            fontSize: "1.6rem"
        },
        description: {
            fontSize: "0.9rem",
            padding: "0 10px"
        },
        planCard: {
            padding: "20px",
            minHeight: "400px",
            maxHeight: "450px"
        },
        planName: {
            fontSize: "1.2rem"
        },
        price: {
            fontSize: "1.8rem"
        }
    }
};

