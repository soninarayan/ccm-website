import React, { useState } from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section">
      <div className="wave-top"></div>
      
      <div className="contact-container">
        <div className="contact-content">
          <h2>Schedule a Demo</h2>
          <p className="contact-subtitle">
            Experience the future of healthcare management. Let us show you how we can transform your practice.
          </p>
          
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <span>+1 (832) 617-6222</span>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span>info@chroniccarebridge.com</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name*"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name / Practice Name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your needs..."
              rows="4"
              className="form-input"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Schedule Demo
          </button>
        </form>
      </div>

      <div className="wave-bottom"></div>
      
      {/* Background Elements */}
      <div className="bg-gradient"></div>
      <div className="bg-pattern"></div>
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
    </section>
  );
};

export default ContactSection; 