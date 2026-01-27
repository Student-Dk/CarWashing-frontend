import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'

import Aheader from './Aheader'
import axios from 'axios';
import { Authentication } from '../../contex/AuthContex';
import { useNavigate } from 'react-router-dom';

export default function AddCarWashBooking() {


  const {user}=useContext(Authentication)
  const navigate=useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        mobileNo: "",
        washDate: "",
        washTime: "",
        washingPoint: "",
        message: "",
        packageType: ""
    });

    const [washingPoints, setWashingPoints] = useState([]);
    const [response, setResponse] = useState("");

    //fetch washing points from backend
    useEffect(() => {
        const fetchWashingPoints = async () => {
            try {
                const res = await axios.get("https://carwashing-backend-repo.onrender.com/washingPoint");
                setWashingPoints(res.data);
            } catch (error) {
                console.log("Error during fetching washing points data: ", error)
            }
        }
        fetchWashingPoints();
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://carwashing-backend-repo.onrender.com/booking", formData);
            const msg = `Booking Successful! Your Booking ID: ${res.data.bookingId}`;
            setResponse(msg);
            alert(msg);
            setFormData({
                name: "",
                mobileNo: "",
                washDate: "",
                washTime: "",
                washingPoint: "",
                message: "",
                packageType: ""
            });
        } catch (error) {
            setResponse("Error:" + error.response?.data?.message || error.message);
        }
    }

    return (
        <div style={{display:'flex', width:'100%'}}>
            {!user && navigate('/login')}
                <div>{user&&<Sidebar></Sidebar>}</div>
            <div  style={{marginLeft: 'calc(190px + 5%)',width: '70%',marginTop:'5px' }}>
                <Aheader />
                
                {/* Main Content Container */}
                <div style={{
                    maxWidth: '1200px',
                    margin: '30px auto 0'
                }}>
                    {/* Page Header */}
                    <div style={{
                        marginBottom: '30px',
                        paddingBottom: '20px',
                        borderBottom: '1px solid #e2e8f0'
                    }}>
                        <h1 style={{
                            fontSize: '1.8rem',
                            color: '#0f172a',
                            marginBottom: '8px',
                            fontWeight: '700'
                        }}>
                            Add Car Wash Booking
                        </h1>
                        <p style={{
                            color: '#64748b',
                            fontSize: '0.95rem',
                            margin: 0
                        }}>
                            Fill in the details below to schedule a new car wash appointment
                        </p>
                    </div>
                    
                    {/* Form Card */}
                    <div style={{
                        background: 'white',
                        borderRadius: '12px',
                        padding: '32px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        <div style={{
                            textAlign: 'center',
                            marginBottom: '30px',
                            paddingBottom: '20px',
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
                            {/* Two Column Layout for Form Fields */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '24px',
                                marginBottom: '24px'
                            }}>
                                {/* Left Column */}
                                <div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
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
                                                padding: '12px 14px',
                                                border: '1.5px solid #e2e8f0',
                                                borderRadius: '8px',
                                                fontSize: '0.95rem',
                                                transition: 'all 0.2s ease',
                                                backgroundColor: '#f8fafc',
                                                boxSizing: 'border-box'
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.borderColor = '#3b82f6';
                                                e.target.style.backgroundColor = 'white';
                                                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
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
                                    
                                    <div style={{ marginBottom: '20px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
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
                                                padding: '12px 14px',
                                                border: '1.5px solid #e2e8f0',
                                                borderRadius: '8px',
                                                fontSize: '0.95rem',
                                                transition: 'all 0.2s ease',
                                                backgroundColor: '#f8fafc',
                                                boxSizing: 'border-box'
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.borderColor = '#3b82f6';
                                                e.target.style.backgroundColor = 'white';
                                                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
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
                                    
                                    <div style={{ marginBottom: '20px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
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
                                                padding: '12px 14px',
                                                border: '1.5px solid #e2e8f0',
                                                borderRadius: '8px',
                                                fontSize: '0.95rem',
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
                                                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
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
                                </div>
                                
                                {/* Right Column */}
                                <div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
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
                                                padding: '12px 14px',
                                                border: '1.5px solid #e2e8f0',
                                                borderRadius: '8px',
                                                fontSize: '0.95rem',
                                                transition: 'all 0.2s ease',
                                                backgroundColor: '#f8fafc',
                                                boxSizing: 'border-box'
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.borderColor = '#3b82f6';
                                                e.target.style.backgroundColor = 'white';
                                                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
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
                                    
                                    <div style={{ marginBottom: '20px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
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
                                                padding: '12px 14px',
                                                border: '1.5px solid #e2e8f0',
                                                borderRadius: '8px',
                                                fontSize: '0.95rem',
                                                transition: 'all 0.2s ease',
                                                backgroundColor: '#f8fafc',
                                                boxSizing: 'border-box'
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.borderColor = '#3b82f6';
                                                e.target.style.backgroundColor = 'white';
                                                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                                            }}
                                            onBlur={(e) => {
                                                e.target.style.borderColor = '#e2e8f0';
                                                e.target.style.backgroundColor = '#f8fafc';
                                                e.target.style.boxShadow = 'none';
                                            }}
                                            required
                                        />
                                    </div>
                                    
                                    <div style={{ marginBottom: '20px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
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
                                                padding: '12px 14px',
                                                border: '1.5px solid #e2e8f0',
                                                borderRadius: '8px',
                                                fontSize: '0.95rem',
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
                                                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
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
                                </div>
                            </div>
                            
                            {/* Full Width Textarea */}
                            <div style={{ marginBottom: '30px' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '8px',
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
                                        padding: '12px 14px',
                                        border: '1.5px solid #e2e8f0',
                                        borderRadius: '8px',
                                        fontSize: '0.95rem',
                                        transition: 'all 0.2s ease',
                                        backgroundColor: '#f8fafc',
                                        boxSizing: 'border-box',
                                        minHeight: '100px',
                                        resize: 'vertical',
                                        fontFamily: 'inherit'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#3b82f6';
                                        e.target.style.backgroundColor = 'white';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#e2e8f0';
                                        e.target.style.backgroundColor = '#f8fafc';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                    placeholder="Enter any special instructions or notes..."
                                />
                            </div>
                            
                            {/* Response Message */}
                            {response && (
                                <div style={{
                                    marginBottom: '20px',
                                    padding: '12px 16px',
                                    borderRadius: '8px',
                                    backgroundColor: response.includes('Successful') ? '#dcfce7' : '#fee2e2',
                                    color: response.includes('Successful') ? '#166534' : '#991b1b',
                                    fontSize: '0.9rem'
                                }}>
                                    {response}
                                </div>
                            )}
                            
                            {/* Action Buttons */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                gap: '16px',
                                marginTop: '30px',
                                paddingTop: '24px',
                                borderTop: '1px solid #f1f5f9'
                            }}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setFormData({
                                            name: "",
                                            mobileNo: "",
                                            washDate: "",
                                            washTime: "",
                                            washingPoint: "",
                                            message: "",
                                            packageType: ""
                                        });
                                        setResponse("");
                                    }}
                                    style={{
                                        padding: '12px 28px',
                                        background: '#f1f5f9',
                                        color: '#64748b',
                                        border: '1.5px solid #e2e8f0',
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
                                    Clear Form
                                </button>
                                <button
                                    type="submit"
                                    style={{
                                        padding: '12px 28px',
                                        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                                        color: 'white',
                                        border: 'none',
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
                                >
                                    Book Car Wash
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}