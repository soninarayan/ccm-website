import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <div className="footer-logo-container">
            <img 
              src="https://soninarayan.github.io/ccm-website/images/Logo.png" 
              alt="Chronic Care Bridge Logo" 
              className="footer-logo" 
            />
          </div>
          <p className="company-description">
            Transforming healthcare management through innovative solutions. We help healthcare providers deliver better patient care while optimizing their practice operations.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services/chronic-care-management">Our Services</a></li>
            <li><a href="/who-we-help/hospitals">Who We Help</a></li>
          </ul>
        </div>

        <div className="footer-section contact-info" style={{ marginTop: "0px" }}>
          <h3>Contact Us</h3>
          <div className="contact-details">
            <p>
              <i className="fas fa-phone"></i>
              <a href="tel:+18326176222">+1 (832) 617-6222</a>
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@chroniccarebridge.com">info@chroniccarebridge.com</a>
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              13601 Woodforest Blvd, Houston, TX 77015
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Chronic Care Bridge. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
