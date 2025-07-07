import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/PrivatePractices.css';

const PrivatePractices = () => {
  return (
    <main className="practices-main">
      <div className="animated-bg" />
      <section className="practices-hero">
        <div className="hero-particles">
          <div className="hero-particle particle-1" />
          <div className="hero-particle particle-2" />
          <div className="hero-particle particle-3" />
        </div>
        <motion.div 
          className="practices-hero-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="practices-hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elevate Your Private Practice with<br />Modern Care Solutions
          </motion.h3>
          <motion.hr 
            className="practices-hero-divider"
            initial={{ width: 0 }}
            animate={{ width: "160px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.h1 
            className="practices-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Private Practices
          </motion.h1>
          <motion.p 
            className="practices-hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            In an evolving healthcare landscape, private practices need innovative solutions to stay competitive and provide exceptional patient care. Chronic Care Bridge empowers your practice with state-of-the-art remote care tools and support services.
          </motion.p>
        </motion.div>
        <motion.div 
          className="practices-hero-right"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/case.jpg"
            alt="Private practice consultation"
            className="practices-hero-image"
          />
        </motion.div>
      </section>

      <section className="practices-benefits">
        <div className="practices-benefit-list">
          <motion.div 
            className="practices-benefit-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="practices-benefit-icon">
              <i className="fas fa-laptop-medical"></i>
            </div>
            <div>
              <h2>Remote Patient Monitoring</h2>
              <p>
                Expand your practice's reach and improve patient outcomes with our comprehensive remote monitoring solutions. Track vital signs, manage chronic conditions, and intervene early when needed.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="practices-benefit-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="practices-benefit-icon">
              <i className="fas fa-comments-dollar"></i>
            </div>
            <div>
              <h2>Revenue Optimization</h2>
              <p>
                Maximize your practice's revenue potential through efficient billing processes, Medicare reimbursement optimization, and new revenue stream opportunities from remote care services.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="practices-benefit-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="practices-benefit-icon">
              <i className="fas fa-user-clock"></i>
            </div>
            <div>
              <h2>Practice Efficiency</h2>
              <p>
                Streamline your practice operations with our integrated solutions. From appointment scheduling to patient follow-ups, we help you optimize every aspect of your practice management.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="practices-benefit-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="practices-benefit-icon">
              <i className="fas fa-star"></i>
            </div>
            <div>
              <h2>Enhanced Patient Experience</h2>
              <p>
                Deliver an exceptional patient experience through personalized care plans, convenient remote consultations, and proactive health monitoring that keeps your patients engaged and satisfied.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PrivatePractices;
