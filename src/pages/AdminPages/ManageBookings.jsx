import React, { useContext, useEffect, useState } from 'react'
import { Authentication } from '../../contex/AuthContex'
import Sidebar from '../../components/Sidebar'
import Aheader from './Aheader'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function ManageBookings() {
    const {  user } = useContext(Authentication)
    
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        transactionType: "",
        transactionNumber: "",
        adminRemarks: "",
        status: "completed"
    });

    const token = localStorage.getItem("token")
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [adminDetails, setAdminDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://carwashing-backend-repo.onrender.com/booking/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(res.data);
                
                // Agar booking complete hoga toh admin details fetch hoga
                if (res.data.status === 'completed') {
                    fetchAdminDetails();
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id, token]);

    const fetchAdminDetails = async () => {
        try {
            // Yeh  API endpoint hoga jahan se admin details milti hain
            const response = await axios.get(`https://carwashing-backend-repo.onrender.com/booking/${id}/admin-details`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAdminDetails(response.data);
        } catch (error) {
            console.log("Admin details fetch error:", error);
            
            setAdminDetails({
                transactionType: data.transactionType || "UPI Payment",
                transactionNumber: data.transactionNumber || "TXN123456789",
                adminRemarks: data.adminRemarks || "Payment received successfully",
                updatedBy: user?.name || "Admin",
                updatedAt: new Date().toISOString()
            });
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // UPDATE booking
        const response = await axios.post(
            `https://carwashing-backend-repo.onrender.com/booking/${id}`,
            {
                transactionType: formData.transactionType,
                transactionNumber: formData.transactionNumber,
                adminRemarks: formData.adminRemarks
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if (response.status === 200) {
            alert('Car Washing Completed!');
            setShowForm(false);

            // reset form
            setFormData({
                transactionType: "",
                transactionNumber: "",
                adminRemarks: ""
            });

            // FETCH updated booking (GET)
            const res = await axios.get(
                `https://carwashing-backend-repo.onrender.com/booking/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setData(res.data);

            // booking completed  admin details fetch
            if (res.data.status === 'Completed') {
                fetchAdminDetails();
            }
        }

    } catch (error) {
        console.error('Error updating booking:', error);
        alert('Failed to update booking. Please try again.');
    }
};


    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const formatDateTime = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    const formatTime = (timeString) => {
        if (!timeString) return '';
        const [hours, minutes] = timeString.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}:${minutes} ${ampm}`;
    };

    if (loading) {
        return (
            <div style={{ display: 'flex', minHeight: '100vh' }}>
                <Sidebar />
                <div style={{ 
                    flex: 1, 
                    marginLeft: '250px',
                    padding: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            border: '5px solid #f3f3f3',
                            borderTop: '5px solid #6f1b1b',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                            margin: '0 auto 20px'
                        }}></div>
                        <p style={{ color: '#64748b' }}>Loading booking details...</p>
                    </div>
                </div>
            </div>
        );
    }

    const isCompleted = data.status === 'completed';

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
            {!user && navigate('/login')}
            <Sidebar />
            
            <div style={{ 
                flex: 1, 
                marginLeft: '250px',
                padding: '30px 40px'
            }}>
                <Aheader />
                
                {/* Main Content Container */}
                <div style={{
                    maxWidth: '1200px',
                    margin: '30px auto 0',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                    overflow: 'hidden'
                }}>
                    
                    {/* Page Header */}
                    <div style={{
                        padding: '25px 30px',
                        background: 'linear-gradient(90deg, #6f1b1b 0%, #8b2a2a 100%)',
                        color: 'white'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '15px'
                        }}>
                            <div>
                                <h1 style={{
                                    fontSize: '1.8rem',
                                    fontWeight: '700',
                                    marginBottom: '5px'
                                }}>
                                    Booking Details
                                </h1>
                                <p style={{
                                    opacity: '0.9',
                                    fontSize: '0.95rem'
                                }}>
                                    Booking ID: <strong>#{data.bookingId}</strong>
                                </p>
                            </div>
                            
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                padding: '8px 16px',
                                borderRadius: '8px',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <div style={{
                                    width: '10px',
                                    height: '10px',
                                    backgroundColor: data.status === 'completed' ? '#10b981' : 
                                                    data.status === 'pending' ? '#f59e0b' : '#ef4444',
                                    borderRadius: '50%',
                                    marginRight: '8px'
                                }}></div>
                                <span style={{
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    {data.status || 'Pending'}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Booking Details Card */}
                    <div style={{ padding: '30px' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '40px',
                            marginBottom: '40px'
                        }}>
                            
                            {/* Left Column */}
                            <div>
                                <div style={{
                                    marginBottom: '25px',
                                    paddingBottom: '25px',
                                    borderBottom: '1px solid #f1f5f9'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.1rem',
                                        color: '#334155',
                                        marginBottom: '15px',
                                        fontWeight: '600',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}>
                                        <span style={{
                                            background: '#f1f5f9',
                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#6f1b1b',
                                            fontWeight: '700'
                                        }}>1</span>
                                        Customer Information
                                    </h3>
                                    
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '20px'
                                    }}>
                                        <div>
                                            <p style={{
                                                color: '#64748b',
                                                fontSize: '0.85rem',
                                                fontWeight: '600',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}>Booking ID</p>
                                            <p style={{
                                                color: '#0f172a',
                                                fontSize: '1.1rem',
                                                fontWeight: '700'
                                            }}>#{data.bookingId}</p>
                                        </div>
                                        
                                        <div>
                                            <p style={{
                                                color: '#64748b',
                                                fontSize: '0.85rem',
                                                fontWeight: '600',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}>Posting Date</p>
                                            <p style={{
                                                color: '#0f172a',
                                                fontSize: '1rem',
                                                fontWeight: '500'
                                            }}>{formatDate(data.date)}</p>
                                        </div>
                                        
                                        <div>
                                            <p style={{
                                                color: '#64748b',
                                                fontSize: '0.85rem',
                                                fontWeight: '600',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}>Full Name</p>
                                            <p style={{
                                                color: '#0f172a',
                                                fontSize: '1rem',
                                                fontWeight: '500'
                                            }}>{data.name}</p>
                                        </div>
                                        
                                        <div>
                                            <p style={{
                                                color: '#64748b',
                                                fontSize: '0.85rem',
                                                fontWeight: '600',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}>Mobile Number</p>
                                            <p style={{
                                                color: '#0f172a',
                                                fontSize: '1rem',
                                                fontWeight: '500'
                                            }}>{data.mobileNo}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 style={{
                                        fontSize: '1.1rem',
                                        color: '#334155',
                                        marginBottom: '15px',
                                        fontWeight: '600',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}>
                                        <span style={{
                                            background: '#f1f5f9',
                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#6f1b1b',
                                            fontWeight: '700'
                                        }}>3</span>
                                        Service Details
                                    </h3>
                                    
                                    <div>
                                        <div style={{
                                            marginBottom: '20px'
                                        }}>
                                            <p style={{
                                                color: '#64748b',
                                                fontSize: '0.85rem',
                                                fontWeight: '600',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}>Package Type</p>
                                            <div style={{
                                                display: 'inline-block',
                                                padding: '8px 16px',
                                                background: '#f1f5f9',
                                                borderRadius: '20px',
                                                fontWeight: '600',
                                                color: '#0f172a'
                                            }}>
                                                {data.packageType}
                                            </div>
                                        </div>
                                        
                                        {data.message && (
                                            <div>
                                                <p style={{
                                                    color: '#64748b',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '600',
                                                    marginBottom: '8px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px'
                                                }}>Special Instructions</p>
                                                <div style={{
                                                    padding: '15px',
                                                    background: '#f8fafc',
                                                    borderRadius: '8px',
                                                    border: '1px solid #e2e8f0',
                                                    color: '#475569',
                                                    fontSize: '0.95rem',
                                                    lineHeight: '1.6'
                                                }}>
                                                    {data.message}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Column */}
                            <div>
                                <div style={{
                                    marginBottom: '25px',
                                    paddingBottom: '25px',
                                    borderBottom: '1px solid #f1f5f9'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.1rem',
                                        color: '#334155',
                                        marginBottom: '15px',
                                        fontWeight: '600',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}>
                                        <span style={{
                                            background: '#f1f5f9',
                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#6f1b1b',
                                            fontWeight: '700'
                                        }}>2</span>
                                        Service Schedule
                                    </h3>
                                    
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '20px'
                                    }}>
                                        <div>
                                            <p style={{
                                                color: '#64748b',
                                                fontSize: '0.85rem',
                                                fontWeight: '600',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}>Washing Point</p>
                                            <p style={{
                                                color: '#0f172a',
                                                fontSize: '1rem',
                                                fontWeight: '500'
                                            }}>{data.washingPoint}</p>
                                        </div>
                                        
                                        <div>
                                            <p style={{
                                                color: '#64748b',
                                                fontSize: '0.85rem',
                                                fontWeight: '600',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}>Washing Date</p>
                                            <p style={{
                                                color: '#0f172a',
                                                fontSize: '1rem',
                                                fontWeight: '500'
                                            }}>{formatDate(data.washDate)}</p>
                                        </div>
                                        
                                        <div>
                                            <p style={{
                                                color: '#64748b',
                                                fontSize: '0.85rem',
                                                fontWeight: '600',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}>Washing Time</p>
                                            <p style={{
                                                color: '#0f172a',
                                                fontSize: '1rem',
                                                fontWeight: '500'
                                            }}>{formatTime(data.washTime)}</p>
                                        </div>
                                        
                                        <div>
                                            <p style={{
                                                color: '#64748b',
                                                fontSize: '0.85rem',
                                                fontWeight: '600',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}>Duration</p>
                                            <p style={{
                                                color: '#0f172a',
                                                fontSize: '1rem',
                                                fontWeight: '500'
                                            }}>
                                                {data.packageType?.includes('Basic') ? '30 mins' : 
                                                 data.packageType?.includes('Premium') ? '45 mins' : 
                                                 data.packageType?.includes('Complex') ? '60 mins' : '45 mins'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Admin Details Section - Only show when completed */}
                                {isCompleted && adminDetails && (
                                    <div style={{
                                        marginBottom: '25px',
                                        padding: '20px',
                                        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                                        borderRadius: '10px',
                                        border: '1px solid #e2e8f0'
                                    }}>
                                        <h3 style={{
                                            fontSize: '1.1rem',
                                            color: '#334155',
                                            marginBottom: '20px',
                                            fontWeight: '700',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            paddingBottom: '10px',
                                            borderBottom: '2px solid #6f1b1b'
                                        }}>
                                            <span style={{
                                                background: '#6f1b1b',
                                                width: '30px',
                                                height: '30px',
                                                borderRadius: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontWeight: '700'
                                            }}>✓</span>
                                            Admin Details (Completed)
                                        </h3>
                                        
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '20px'
                                        }}>
                                            <div>
                                                <p style={{
                                                    color: '#64748b',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '600',
                                                    marginBottom: '8px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px'
                                                }}>Transaction Type</p>
                                                <div style={{
                                                    padding: '10px 15px',
                                                    background: 'white',
                                                    borderRadius: '8px',
                                                    border: '1px solid #e2e8f0',
                                                    fontWeight: '500',
                                                    color: '#0f172a',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                }}>
                                                    <span style={{
                                                        color: '#6f1b1b',
                                                        fontWeight: '700'
                                                    }}>💰</span>
                                                    {data.transactionType}
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <p style={{
                                                    color: '#64748b',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '600',
                                                    marginBottom: '8px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px'
                                                }}>Transaction ID</p>
                                                <div style={{
                                                    padding: '10px 15px',
                                                    background: 'white',
                                                    borderRadius: '8px',
                                                    border: '1px solid #e2e8f0',
                                                    fontWeight: '500',
                                                    color: '#0f172a',
                                                    fontFamily: 'monospace',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                }}>
                                                    <span style={{
                                                        color: '#6f1b1b',
                                                        fontWeight: '700'
                                                    }}>🔢</span>
                                                    {data.transactionNumber}
                                                </div>
                                            </div>
                                            
                                            <div style={{
                                                gridColumn: 'span 2'
                                            }}>
                                                <p style={{
                                                    color: '#64748b',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '600',
                                                    marginBottom: '8px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px'
                                                }}>Admin Remarks</p>
                                                <div style={{
                                                    padding: '15px',
                                                    background: 'white',
                                                    borderRadius: '8px',
                                                    border: '1px solid #e2e8f0',
                                                    color: '#475569',
                                                    fontSize: '0.95rem',
                                                    lineHeight: '1.6',
                                                    minHeight: '80px'
                                                }}>
                                                    {data.adminRemarks || "No remarks provided"}
                                                </div>
                                            </div>
                                            
                                           
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '15px',
                            paddingTop: '30px',
                            borderTop: '1px solid #f1f5f9'
                        }}>
                            <button
                                onClick={() => navigate(-1)}
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
                                Go Back
                            </button>
                            
                            {/* Show Take Action button only if NOT completed */}
                            {!isCompleted && (
                                <button
                                    onClick={() => setShowForm(true)}
                                    style={{
                                        padding: '12px 28px',
                                        background: 'linear-gradient(135deg, #6f1b1b 0%, #8b2a2a 100%)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontWeight: '600',
                                        fontSize: '0.95rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(111, 27, 27, 0.2)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <span>📝</span> Take Action
                                </button>
                            )}

                            {/* Show Completed Status message */}
                            {isCompleted && (
                                <div style={{
                                    padding: '12px 28px',
                                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                    color: 'white',
                                    borderRadius: '8px',
                                    fontWeight: '600',
                                    fontSize: '0.95rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    <span>✅</span> Car Washing Completed
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Modal Form for Taking Action - Only show if NOT completed */}
                {!isCompleted && showForm && (
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
                            padding: '30px',
                            width: '90%',
                            maxWidth: '500px',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                            animation: 'slideUp 0.3s ease-out',
                            position: 'relative'
                        }}>
                            <button 
                                onClick={() => setShowForm(false)}
                                style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '24px',
                                    color: '#64748b',
                                    cursor: 'pointer',
                                    width: '32px',
                                    height: '32px',
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
                                marginBottom: '25px',
                                paddingBottom: '20px',
                                borderBottom: '1px solid #f1f5f9'
                            }}>
                                <h2 style={{
                                    fontSize: '1.5rem',
                                    color: '#0f172a',
                                    marginBottom: '8px',
                                    fontWeight: '700',
                                    marginTop: 0
                                }}>
                                    Update Booking Status
                                </h2>
                                <p style={{
                                    color: '#64748b',
                                    fontSize: '0.95rem',
                                    margin: 0
                                }}>
                                    Complete the transaction details for booking #{data.bookingId}
                                </p>
                            </div>
                            
                            <form onSubmit={handleSubmit}>
                                {/* ... (same form fields as before) */}
                                <div style={{ marginBottom: '20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                        <label style={{
                                            fontWeight: '600',
                                            color: '#334155',
                                            fontSize: '0.9rem'
                                        }}>
                                            Transaction Type
                                        </label>
                                        <span style={{ color: '#ef4444', marginLeft: '4px', fontSize: '1rem' }}>*</span>
                                    </div>
                                    <select
                                        name="transactionType"
                                        value={formData.transactionType}
                                        onChange={handleFormChange}
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
                                            paddingRight: '40px'
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
                                        <option value="">Select transaction type</option>
                                        <option value="cash">Cash</option>
                                        <option value="credit_card">Credit Card</option>
                                        <option value="debit_card">Debit Card</option>
                                        <option value="upi">UPI Payment</option>
                                        <option value="net_banking">Net Banking</option>
                                        <option value="wallet">Wallet</option>
                                    </select>
                                </div>
                                
                                <div style={{ marginBottom: '20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                        <label style={{
                                            fontWeight: '600',
                                            color: '#334155',
                                            fontSize: '0.9rem'
                                        }}>
                                            Transaction Number / Reference
                                        </label>
                                        <span style={{ color: '#ef4444', marginLeft: '4px', fontSize: '1rem' }}>*</span>
                                    </div>
                                    <input
                                        type="text"
                                        name="transactionNumber"
                                        value={formData.transactionNumber}
                                        onChange={handleFormChange}
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
                                        placeholder="Enter transaction ID or reference number"
                                        required
                                    />
                                </div>
                                
                                <div style={{ marginBottom: '25px' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        fontWeight: '600',
                                        color: '#334155',
                                        fontSize: '0.9rem'
                                    }}>
                                        Admin Remarks (Optional)
                                    </label>
                                    <textarea
                                        name="adminRemarks"
                                        value={formData.adminRemarks}
                                        onChange={handleFormChange}
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
                                        placeholder="Enter any remarks or notes about this transaction..."
                                    />
                                </div>
                                
                                <div style={{ marginBottom: '20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                        <label style={{
                                            fontWeight: '600',
                                            color: '#334155',
                                            fontSize: '0.9rem'
                                        }}>
                                            Update Status
                                        </label>
                                        <span style={{ color: '#ef4444', marginLeft: '4px', fontSize: '1rem' }}>*</span>
                                    </div>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleFormChange}
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
                                            paddingRight: '40px'
                                        }}
                                        required
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="confirmed">Confirmed</option>
                                        <option value="in_progress">In Progress</option>
                                        <option value="completed">Completed</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </div>
                                
                                <div style={{
                                    display: 'flex',
                                    gap: '12px',
                                    marginTop: '30px'
                                }}>
                                    <button
                                        type="button"
                                        onClick={() => setShowForm(false)}
                                        style={{
                                            flex: 1,
                                            background: '#f1f5f9',
                                            color: '#64748b',
                                            border: '1.5px solid #e2e8f0',
                                            padding: '14px',
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
                                            background: 'linear-gradient(135deg, #6f1b1b 0%, #8b2a2a 100%)',
                                            color: 'white',
                                            border: 'none',
                                            padding: '14px',
                                            borderRadius: '8px',
                                            fontWeight: '600',
                                            fontSize: '0.95rem',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(111, 27, 27, 0.2)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        Car Washing Completed
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
                                    @keyframes spin {
                                        0% { transform: rotate(0deg); }
                                        100% { transform: rotate(360deg); }
                                    }
                                `}
                            </style>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}