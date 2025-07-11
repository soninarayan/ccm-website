import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <footer className="footer">
      {!isMobile && (
        <>
          <div className="footer-content desktop-only">
            {/* Company Info */}
            <div className="footer-section">
              <img src="/images/Logo.png" alt="Chronic Care Bridge Logo" className="footer-logo" />
              <p className="company-description">
                Transforming healthcare management through innovative solutions. We help healthcare providers deliver better patient care while optimizing their practice operations.
              </p>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="footer-section">
              <h3>Navigation</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Our Services</a></li>
                <li><a href="/who-we-help">Who We Help</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
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
                  <span>13601 Woodforest Blvd,<br />Houston, TX 77015</span>
                </p>
              </div>
            </div>
          </div>

          <div className="footer-bottom desktop-only">
            <p>&copy; 2025 Chronic Care Bridge. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </>
      )}

      {/* Mobile Footer */}
      <div className="mobile-footer">
        <img src="/images/Logo.png" alt="Chronic Care Bridge Logo" className="footer-logo" />
        <div className="footer-bottom">
          <p>&copy; 2025 Chronic Care Bridge. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
