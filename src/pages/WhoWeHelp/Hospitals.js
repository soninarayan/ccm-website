import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/Hospitals.css';

const Hospitals = () => {
  return (
    <main className="hospitals-main">
      <div className="animated-bg" />
      <section className="hospitals-hero">
        <div className="hero-particles">
          <div className="hero-particle particle-1" />
          <div className="hero-particle particle-2" />
          <div className="hero-particle particle-3" />
        </div>
        <motion.div 
          className="hospitals-hero-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="hospitals-hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform Your Hospital's Care<br />with Digital Innovation
          </motion.h3>
          <motion.hr 
            className="hospitals-hero-divider"
            initial={{ width: 0 }}
            animate={{ width: "160px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.h1 
            className="hospitals-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Hospitals
          </motion.h1>
          <motion.p 
            className="hospitals-hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            In today's rapidly evolving healthcare landscape, hospitals need innovative solutions to enhance patient care and streamline operations. We provide comprehensive remote care and monitoring solutions that integrate seamlessly with your existing systems.
          </motion.p>
        </motion.div>
        <motion.div 
          className="hospitals-hero-right"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://soninarayan.github.io/ccm-website/images/case.jpg"
            alt="Hospital care innovation"
            className="hospitals-hero-image"
          />
        </motion.div>
      </section>

      <section className="hospitals-benefits">
        <div className="hospitals-benefit-list">
          <motion.div 
            className="hospitals-benefit-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="hospitals-benefit-icon">
              <i className="fas fa-hospital-user"></i>
            </div>
            <div>
              <h2>Enhanced Patient Care</h2>
              <p>
                Improve patient outcomes through comprehensive remote monitoring and early intervention capabilities. Our platform enables continuous patient tracking and timely care adjustments.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="hospitals-benefit-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hospitals-benefit-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div>
              <h2>Operational Efficiency</h2>
              <p>
                Streamline hospital operations with our integrated solutions. From patient monitoring to care coordination, we help optimize every aspect of your healthcare delivery.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="hospitals-benefit-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="hospitals-benefit-icon">
              <i className="fas fa-network-wired"></i>
            </div>
            <div>
              <h2>Seamless Integration</h2>
              <p>
                Our solutions integrate smoothly with your existing hospital systems and workflows. Minimize disruption while maximizing the benefits of modern healthcare technology.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="hospitals-benefit-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="hospitals-benefit-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div>
              <h2>Compliance & Security</h2>
              <p>
                Stay compliant with healthcare regulations while ensuring the highest levels of data security. Our platform is built with HIPAA compliance and patient privacy in mind.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Hospitals;