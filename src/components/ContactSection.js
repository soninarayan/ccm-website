import React, { useState } from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="content-box">
          <h2 className="contact-heading">Schedule a Demo</h2>
          <p className="contact-subheading">
            Experience how our solutions can transform your healthcare practice. 
            Let's discuss how we can help you achieve better patient outcomes.
          </p>
          <ul className="feature-list">
            <li className="feature-item">
              <span className="check-icon">✓</span>
              Personalized Platform Demo
            </li>
            <li className="feature-item">
              <span className="check-icon">✓</span>
              Expert Q&A Session
            </li>
            <li className="feature-item">
              <span className="check-icon">✓</span>
              Custom Solution Discussion
            </li>
            <li className="feature-item">
              <span className="check-icon">✓</span>
              ROI Analysis
            </li>
          </ul>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              info@yourcompany.com
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              +1 (555) 123-4567
            </div>
          </div>
        </div>

        <div className="form-box">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="form-label">
                Full Name <span className="required">*</span>
              </label>
              <input
                className="form-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="input-group">
              <label className="form-label">
                Email Address <span className="required">*</span>
              </label>
              <input
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="input-group">
              <label className="form-label">
                Phone Number
              </label>
              <input
                className="form-input"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="input-group">
              <label className="form-label">
                Organization
              </label>
              <input
                className="form-input"
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Healthcare Practice Name"
              />
            </div>

            <div className="input-group">
              <label className="form-label">
                Message
              </label>
              <textarea
                className="form-textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your needs and requirements..."
              />
            </div>

            <button type="submit" className="submit-button">
              Schedule Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 