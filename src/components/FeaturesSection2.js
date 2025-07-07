import React from 'react';
import '../styles/FeaturesSection2.css';

function FeaturesSection2() {
  return (
    <section className="features2-section">
      <h2 className="features2-title">Getting Started Is Easy</h2>
      <div className="features2-container">
        <div className="feature2-card">
          <div className="feature2-image">
            <img src="/images/enroll.jpg" alt="Enrollment process" />
          </div>
          <div className="feature2-content">
            <h3>Enroll</h3>
            <p>We help you identify your eligible patients and our team quickly works to enroll them.</p>
          </div>
        </div>

        <div className="feature2-card">
          <div className="feature2-image">
            <img src="/images/support.jpg" alt="Patient support" />
          </div>
          <div className="feature2-content">
            <h3>Personalized Support</h3>
            <p>Our care team will help guide patients to timely preventive care, identify care gaps, and help manage adherence to their treatment plans.</p>
          </div>
        </div>

        <div className="feature2-card">
          <div className="feature2-image">
            <img src="/images/integration.jpg" alt="System integration" />
          </div>
          <div className="feature2-content">
            <h3>Seamless Integration</h3>
            <p>Our platform can integrate with your EHR system to ensure you can effectively track patient data and progress.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection2;
