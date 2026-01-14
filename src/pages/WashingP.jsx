import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import Footer from '../components/Footer'



export default function WashingP() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:1200/washingPoint")
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, [])
    return (
      <div style={styles.container}>
  <Header />
  <div style={styles.contentWrapper}>
    <div style={styles.headerSection}>
      <h1 style={styles.title}>Car Washing Points</h1>
      <p style={styles.subtitle}>Find the best car washing services in your area</p>
      
      <div style={styles.summaryBox}>
        <div style={styles.summaryItem}>
          <span style={styles.summaryIcon}>📍</span>
          <div>
            <div style={styles.summaryNumber}>{data.length}</div>
            <div style={styles.summaryText}>Locations</div>
          </div>
        </div>
      </div>
    </div>
    
    {data.length === 0 ? (
      <div style={styles.emptyState}>
        <div style={styles.emptyIcon}>🚗</div>
        <h3 style={styles.emptyTitle}>No washing points available</h3>
        <p style={styles.emptyText}>Check back later for new washing points</p>
      </div>
    ) : (
      <div style={styles.washingPointsContainer}>
        {data.map((item, index) => (
          <div key={item._id} style={styles.washingPointCard}>
            <div style={styles.cardTopSection}>
              <div style={styles.sequenceIndicator}>
                <span style={styles.sequenceNumber}>{index + 1}</span>
              </div>
              
              <div style={styles.availabilityBadge}>
                <div style={styles.availabilityDot}></div>
                <span>Available Now</span>
              </div>
            </div>
            
            <div style={styles.cardMainContent}>
              <div style={styles.nameSection}>
                <h3 style={styles.washingPointName}>
                  {item.Car_Washing_Point_Name}
                </h3>
                <div style={styles.verifiedBadge}>
                  <span style={styles.verifiedIcon}>✓</span>
                  <span>Verified</span>
                </div>
              </div>
              
              <div style={styles.detailsContainer}>
                <div style={styles.detailRow}>
                  <div style={styles.detailIconContainer}>
                    <span style={styles.detailIcon}>📍</span>
                  </div>
                  <div style={styles.detailContent}>
                    <div style={styles.detailLabel}>Address</div>
                    <div style={styles.detailValue}>
                      {item.Address}
                    </div>
                  </div>
                </div>
                
                <div style={styles.detailRow}>
                  <div style={styles.detailIconContainer}>
                    <span style={styles.detailIcon}>📞</span>
                  </div>
                  <div style={styles.detailContent}>
                    <div style={styles.detailLabel}>Contact Number</div>
                    <div style={styles.detailValue}>
                      {item.Contact_No}
                    </div>
                    <div style={styles.contactNote}>
                      Available for calls 8 AM - 8 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={styles.cardFooter}>
              <div style={styles.footerInfo}>
                <span style={styles.footerText}>Car Washing Service</span>
                <span style={styles.footerSeparator}>•</span>
                <span style={styles.footerText}>Professional Cleaning</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
 
</div>
    )
}
const styles = {
  container: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
    paddingTop: "40px"
  },
  contentWrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px 50px"
  },
  headerSection: {
    textAlign: "center",
    marginBottom: "50px",
    paddingTop: "20px"
  },
  title: {
    color: "#1a202c",
    fontSize: "2.8rem",
    fontWeight: "800",
    marginBottom: "12px",
    background: "linear-gradient(90deg, #3182ce, #805ad5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    letterSpacing: "-0.5px"
  },
  subtitle: {
    color: "#718096",
    fontSize: "1.2rem",
    fontWeight: "400",
    marginBottom: "30px",
    maxWidth: "500px",
    margin: "0 auto",
    lineHeight: "1.5"
  },
  summaryBox: {
    display: "inline-flex",
    backgroundColor: "white",
    padding: "16px 32px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    marginTop: "10px"
  },
  summaryItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },
  summaryIcon: {
    fontSize: "1.8rem"
  },
  summaryNumber: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#2d3748"
  },
  summaryText: {
    fontSize: "0.9rem",
    color: "#718096",
    fontWeight: "500"
  },
  washingPointsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "28px"
  },
  washingPointCard: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "28px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
    transition: "all 0.3s ease",
    border: "1px solid #e2e8f0",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
      borderColor: "#cbd5e0"
    }
  },
  cardTopSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  },
  sequenceIndicator: {
    width: "36px",
    height: "36px",
    backgroundColor: "#ebf8ff",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #bee3f8"
  },
  sequenceNumber: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#3182ce"
  },
  availabilityBadge: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "#f0fff4",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "#276749",
    border: "1px solid #c6f6d5"
  },
  availabilityDot: {
    width: "8px",
    height: "8px",
    backgroundColor: "#38a169",
    borderRadius: "50%",
    animation: "pulse 2s infinite"
  },
  cardMainContent: {
    marginBottom: "20px"
  },
  nameSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "24px"
  },
  washingPointName: {
    color: "#2d3748",
    fontSize: "1.5rem",
    fontWeight: "700",
    margin: "0",
    flex: "1",
    lineHeight: "1.4"
  },
  verifiedBadge: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    backgroundColor: "#ebf8ff",
    padding: "6px 10px",
    borderRadius: "8px",
    fontSize: "0.8rem",
    fontWeight: "600",
    color: "#3182ce"
  },
  verifiedIcon: {
    fontWeight: "bold",
    fontSize: "0.9rem"
  },
  detailsContainer: {
    backgroundColor: "#f7fafc",
    borderRadius: "12px",
    padding: "20px"
  },
  detailRow: {
    display: "flex",
    gap: "16px",
    marginBottom: "20px",
    "&:last-child": {
      marginBottom: "0"
    }
  },
  detailIconContainer: {
    flexShrink: "0"
  },
  detailIcon: {
    fontSize: "1.3rem",
    color: "#4a5568",
    display: "block",
    marginTop: "2px"
  },
  detailContent: {
    flex: "1"
  },
  detailLabel: {
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "#718096",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: "4px"
  },
  detailValue: {
    fontSize: "1.05rem",
    color: "#2d3748",
    fontWeight: "500",
    lineHeight: "1.5"
  },
  contactNote: {
    fontSize: "0.8rem",
    color: "#a0aec0",
    marginTop: "4px",
    fontStyle: "italic"
  },
  cardFooter: {
    paddingTop: "20px",
    borderTop: "1px solid #e2e8f0",
    textAlign: "center"
  },
  footerInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px"
  },
  footerText: {
    fontSize: "0.85rem",
    color: "#718096",
    fontWeight: "500"
  },
  footerSeparator: {
    color: "#cbd5e0",
    fontSize: "1.2rem"
  },
  emptyState: {
    textAlign: "center",
    padding: "80px 20px",
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
  },
  emptyIcon: {
    fontSize: "4rem",
    marginBottom: "20px",
    opacity: "0.6"
  },
  emptyTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#4a5568",
    marginBottom: "10px"
  },
  emptyText: {
    color: "#a0aec0",
    fontSize: "1rem"
  },
  "@keyframes pulse": {
    "0%, 100%": {
      opacity: "1"
    },
    "50%": {
      opacity: "0.5"
    }
  },
  "@media (max-width: 992px)": {
    washingPointsContainer: {
      gridTemplateColumns: "1fr",
      maxWidth: "600px",
      margin: "0 auto"
    },
    title: {
      fontSize: "2.4rem"
    }
  },
  "@media (max-width: 768px)": {
    contentWrapper: {
      padding: "0 15px 40px"
    },
    title: {
      fontSize: "2rem"
    },
    subtitle: {
      fontSize: "1.1rem",
      padding: "0 10px"
    },
    washingPointCard: {
      padding: "22px"
    }
  },
  "@media (max-width: 480px)": {
    title: {
      fontSize: "1.8rem"
    },
    summaryBox: {
      padding: "12px 24px"
    },
    sequenceIndicator: {
      width: "32px",
      height: "32px"
    }
  }
};