import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios';

export default function WashingPlans() {

   
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
                            onMouseDown={(e) => e.currentTarget.style.backgroundColor = styles.bookButtonActive.backgroundColor}
                            onMouseUp={(e) => e.currentTarget.style.backgroundColor = styles.bookButton.backgroundColor}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.bookButton.backgroundColor}
                          
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>


            
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