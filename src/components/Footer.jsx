import React from 'react'
import {  FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          {/* Company Info */}
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Car Wash Pro</h3>
            <p style={styles.footerText}>
              Professional car washing services with premium quality products and experienced staff.
            </p>
            <div style={styles.socialIcons}>
              <a href="#" style={styles.socialIcon}><FaFacebook /></a>
              <a href="#" style={styles.socialIcon}><FaTwitter /></a>
              <a href="#" style={styles.socialIcon}><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Quick Links</h3>
            <ul style={styles.footerList}>
              <li><a href="#plans" style={styles.footerLink}>Washing Plans</a></li>
              <li><a href="#contact" style={styles.footerLink}>Contact Us</a></li>
              <li><a href="#" style={styles.footerLink}>About Us</a></li>
              <li><a href="#" style={styles.footerLink}>Services</a></li>
              <li><a href="#" style={styles.footerLink}>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Contact Info</h3>
            <div style={styles.contactInfo}>
              <p style={styles.contactItem}><FaMapMarkerAlt /> 123 Car Street, Mumbai</p>
              <p style={styles.contactItem}><FaPhoneAlt /> +91 98765 43210</p>
              <p style={styles.contactItem}><FaEnvelope /> info@carwashpro.com</p>
            </div>
          </div>

          {/* Working Hours */}
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Working Hours</h3>
            <div style={styles.timing}>
              <p style={styles.timingItem}>Mon - Fri: 8:00 AM - 8:00 PM</p>
              <p style={styles.timingItem}>Saturday: 9:00 AM - 7:00 PM</p>
              <p style={styles.timingItem}>Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={styles.copyright}>
          <p>© {new Date().getFullYear()} Car Wash Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
const styles={
  // Footer Styles
  footer: {
    backgroundColor: "#0f172a",
    color: "white",
    paddingTop: "60px",
  },
  footerContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
  },
  footerSection: {
    marginBottom: "30px",
  },
  footerTitle: {
    fontSize: "1.3rem",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#f1f5f9",
  },
  footerText: {
    fontSize: "0.95rem",
    color: "#94a3b8",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  footerList: {
    listStyle: "none",
    padding: 0,
  },
  footerLink: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "0.95rem",
    display: "block",
    padding: "8px 0",
    transition: "all 0.2s ease",
    "&:hover": {
      color: "#3b82f6",
      paddingLeft: "5px",
    },
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "0.95rem",
    color: "#cbd5e1",
  },
  timing: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  timingItem: {
    fontSize: "0.95rem",
    color: "#cbd5e1",
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
  },
  socialIcon: {
    color: "#94a3b8",
    fontSize: "1.2rem",
    transition: "all 0.2s ease",
    "&:hover": {
      color: "#3b82f6",
      transform: "translateY(-3px)",
    },
  },
  copyright: {
    marginTop: "50px",
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #334155",
    color: "#94a3b8",
    fontSize: "0.9rem",
  },

  // Responsive Styles
  "@media (max-width: 768px)": {
    heroSection: {
      height: "400px",
    },
    heroTitle: {
      fontSize: "2.2rem",
    },
    heroSubtitle: {
      fontSize: "1rem",
    },
    heroButtons: {
      flexDirection: "column",
      alignItems: "center",
    },
    primaryButton: {
      width: "200px",
    },
    secondaryButton: {
      width: "200px",
    },
    sectionTitle: {
      fontSize: "2rem",
    },
    featuresGrid: {
      gridTemplateColumns: "1fr",
    },
    footerContainer: {
      gridTemplateColumns: "1fr",
      gap: "30px",
    },
  }
}